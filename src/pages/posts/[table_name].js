import { google } from 'googleapis';
import db from '../../../lib/db'; // Import the connection pool from db.js

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
            spreadsheetId: '1QNLS0voBQe8-Z232hubryArKePOdh-7ill_NY6DX4as',
            range: `A2:H`, // Use id1 and id2 to construct the range
        });

        const rows = response.data.values || []; // If no rows, initialize as empty array

        const data = rows.map((row) => ({
          name: row[0],
          rollNumber: row[1],
          dateOfBirth: row[2],
          address: row[3],
          branch: row[4],
          email: row[5],
          fatherName: row[6],
          motherName: row[7],
        }));
        const client = await db.connect(); // Assuming a connection pool is established in db.js
        try {
          await client.query('BEGIN');
          const {table_name } = context.query;
          for (const row of data) {
            const { name, rollNumber, dateOfBirth, address, branch, email, fatherName, motherName } = row;
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS ${table_name} (
                name VARCHAR(255),
                roll VARCHAR(255),
                dob DATE,
                address TEXT,
                branch VARCHAR(255),
                email VARCHAR(255),
                father VARCHAR(255),
                mother VARCHAR(255)
                )`;
            
            await client.query(createTableQuery);
            const insertQuery = 
            `INSERT INTO ${table_name} (name, roll, dob, address, branch, email, father, mother)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`; // Use placeholders to prevent SQL injection
            const values = [ name, rollNumber, dateOfBirth, address, branch, email, fatherName, motherName ];
            await client.query(insertQuery, values);

            const branchIndex = table_name.indexOf('batch');
            let year = table_name.slice(branchIndex + 6, branchIndex + 8);

            // console.log(year);
            // console.log(branch);
            if(branch === 'CSE')
            {
                const inheritedTableName = `sem1_batch${year}_${branch}_btech`;
                year = year-1;
                const ParentTableName = `sem1_batch${year}_${branch}_btech`; // Assuming the year is 25, adjust this logic if needed
                const inheritedTableQuery = `
                CREATE TABLE IF NOT EXISTS ${inheritedTableName} AS
                SELECT * FROM ${ParentTableName} WHERE false;`;
                await client.query(inheritedTableQuery);
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
                data,
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

function SheetPage({ data, error }) {
  if (error) {
      return <div>Error: {error}</div>;
  }

  if (!data) {
      return <div>Loading data...</div>;
  }

  return (
      <div>
          <h1>Sheet Data</h1>
          {data.map((row, index) => (
              <div key={index}>
                  <p>Name: {row.name || 'N/A'}</p> {/* Provide a default value if name is undefined */}
                  <p>Roll Number: {row.rollNumber || 'N/A'}</p> {/* Provide a default value if rollNumber is undefined */}
                  <p>Grade: {row.grade || 'N/A'}</p> {/* Provide a default value if grade is undefined */}
              </div>
          ))}
      </div>
  );
}

export default SheetPage;