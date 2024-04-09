import { google } from 'googleapis';
import db from '../../../../../../lib/db'; // Import the connection pool from db.js

let anomalies = [];
export async function getServerSideProps(context) {
    try {
        const credentials = {
            type: process.env.TYPE,
            project_id: process.env.PROJECT_ID,
            private_key_id: process.env.PRIVATE_KEY_ID,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace escaped newline characters
            client_email: process.env.CLIENT_EMAIL,
            client_id: process.env.CLIENT_ID,
            auth_uri: process.env.AUTH_URI,
            token_uri: process.env.TOKEN_URI,
            auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_URL,
            client_x509_cert_url: process.env.CLIENT_URL,
        };
        
        // Authenticate using the credentials
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
        });
        const sheets = google.sheets({ version: 'v4', auth });

        // Retrieve data from the spreadsheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: '1OHBjuZqYIaWTjDRsZJLHyOQ5338W8DBy1ED1VK_UfWU',
            range: `A1:H`, // Use id1 and id2 to construct the range
        });

        const rows = response.data.values || []; // If no rows, initialize as empty array

        const attributes = rows[0]; // Assuming the first row contains the attribute names
        attributes.shift(); // Remove the first element from the array
        rows.shift(); // Remove the first row from the array
        const client = await db.connect(); // Assuming a connection pool is established in db.js
        try {
          await client.query('BEGIN');

          const { batch, sem, course } = context.query;
          let course_digit = course.toLowerCase();
          course_digit = 'btech'? '1' : '2';
          
          for (const row of rows) {
            const rollNumber = row[0];
            if ((rollNumber.slice(0, 2) !== batch) || (rollNumber.slice(3, 4) !== course_digit)) {
                anomalies.push(row);
                console.log('Anomaly detected:', row);
            }   
            else {
                const TableName = `sem${sem}_batch${batch}_cse_${course}`;

                const createTableQuery = `
                CREATE TABLE IF NOT EXISTS ${TableName} (
                roll INT,    
                ${attributes.map((attribute, index) => `${attribute} VARCHAR(255)`).join(',\n')}
                )`;

                await client.query(createTableQuery);

                const insertQuery = 
                `INSERT INTO ${TableName} (roll, ${attributes.map((attribute, index) => `${attribute}`).join(', ')})
                 VALUES ($1,${attributes.map((attribute, index) => `$${index+2}`)})`; // Use placeholders to prevent SQL injection

                //  console.log(insertQuery);
                await client.query(insertQuery, row);
            }
          }
          await client.query('COMMIT');
        } catch (error) {
          await client.query('ROLLBACK');
          console.error('Error inserting data into database:', error);
          // Consider returning an error object or redirecting to an error page with a user-friendly message
        } finally {
          client.release();
        }

        return {
            props: {
                anomalies,
            },
        };
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return {
            props: {
                error: 'Error fetching data from Google Sheets. Please try again later.',
            },
        };
    }
}

function SheetPage({ anomalies, error }) {
    if (error) {
        return <div>Error: {error}</div>;
    }
  
    if (!anomalies) {
        return <div>Loading data...</div>;
    }
  
    return (
        <div>
            <h1>Sheet Data</h1>
            {anomalies.map((row, index) => (
                <div key={index}>
                    <p>Anomalous row: {row}</p> {/* Provide a default value if name is undefined */}
                </div>
            ))}
        </div>
    );
  }

export default SheetPage;

// export default anomalies;