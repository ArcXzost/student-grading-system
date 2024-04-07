import { google } from 'googleapis';

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
        const { id1, id2 } = context.query; // Destructure id1 and id2 from context.query

        // Retrieve data from the spreadsheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: '1XEia8g2C5IefhHb_R88D2VtYxmNdmAT6ceeHKefVhRI',
            range: `Sheet1!A${id1}:E${id2}`, // Use id1 and id2 to construct the range
        });

        const rows = response.data.values || []; // If no rows, initialize as empty array

        // Map the rows to an array of objects
        const data = rows.map((row) => ({
            name: row[1],
            rollNumber: row[0],
            grade: row[4],
        }));
        // console.log(data);
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
