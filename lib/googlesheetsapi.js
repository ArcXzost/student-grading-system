import { google } from 'googleapis';
import { resolve } from 'path';

export default async function handler(req, res) {
  try {
    // Read the service account credentials file
    const credentials = {
      type: "service_account",
      project_id: "studarcx",
      private_key_id: "b614380c1847375d2afa66671d7d2ddeb67016d9",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCvqcLLkUj6109+\n+ESC3xtSOZujdVBhxNZHa9q4IjJAVOE8FDMwHbfmowkrOZddDk5xybE73DWUa3xh\neTkCms66NcOAP03UZlaol5Evo4s/aNOrfEs1UQ4fJg+U03cJvfS+lMngOqp7wKCn\n/STlDiR73pxyJD+/jRBEPiankFHn9OQAzwJHcVTpUbg5tBys4FYRM3sZhLLl0MYS\n9TqZLSewerRIGfksAhlzohl5mmq75p9ThbyAGZ+HpSnkILkeRJl4o/1EPxMUjVDE\n8IBg3ZqdmVsjs1LuysM21qdJi8JDeZAs4lhnr5TD7jrXRgU6kDR3Aw4z2sdY1jwh\nzpfBQW+7AgMBAAECgf8V9SJkT8TPlhpZxK7LrRe9L3ZE+GUT04b1ZoXwflXJtNJy\nsBO18AEM01RSEuDYwPENSCjfUqdf5g+mH4EA0lkE7bOCVGdmJWSvrkJ3sfm182SC\nCwdbosYhHqDT+ZrnnNb6+55AaRTmYy2x0fLKrvnggfMMUXumdfuSjDJIv8F9POoo\ni4/T3wdVYTBkFcq3K9lMrCGE8LRq2bGS1Pzn5336SiS2KlM5jS4oMowbwiyYnhGc\n4nZEE5SaYZYvbxPPDsDQSPv52xsPvZPxphlKSW/iOsMXuzSs1Y+3xv2ak6tBgKqe\nWStAF4AC1+BDzCCu1BKuaqNJpqc4QBfOC1pxHgECgYEA4LNp38ciVHe83cNuUc0B\nltxw0MyboDk9Lvn5ejv0455c+OV+bg8r+6zNIBDFEQXinShgMha9jrCC47UlJOXf\ni8XemXuG08rGUJHrbNOza3VNAUbpvTyDuUCUcwKpORukridefGsPeObXxgMFWhRS\nm9D8vAKdSqun+TNIotfUvBMCgYEAyCG3X4TYJs5QrEwUVHgqO3CXOMRXR9Ais7TH\nQnYVFQPcw2AjP/3S4BvPVvZjFt+usFOE8TUNS2dwwabRekdQjrp3AbH/l/MB4rk0\nvAoUXcr3L0jXMnH1JYuMiTpYWn51gQ1ljzKKGwpXW/bdh06XjJIbxI7t9bXzwn1s\nsQWpIrkCgYA9EETLbYBk2A1ZbszCKiYua0W1WIVKa4O3CnPDxhts6BJ4CVXsbu8S\n/Ajal/QWBjVpZBmQQyHMbyeC3i1z84xmnaU6rJkdYVO3fZAvCPEPWNdOa4kFxjY9\n19D/2E9Il7yPH1/MDAQuZP1qcFO6AR/Z/FdSeJtqOW/yhv9MUb8cRQKBgC5AbIqs\nvu+o+sf3BTPIWapHCQvbhHhaR8rUWsCnXZPvwpN8omjlllio1LA6XQgqRcsGYlEE\ne8ATdeGrVfo2hQ2XVm2T34gUZzkoqGFUywQqJhpNcT59S7STnbURQN4ZH7rlh7Ui\nbvx01V+xm9zrcubP1Y8FoUUJ+f3W0snOjxoxAoGAZSkYWXyOfXuzUfnWKTYvqGBs\no7OyG48QeV9aVhJUXwVzJtmPtkPdVBwZtz+BvTy6+U0kq2eBKHcZUV92OTN7PJLe\n0iI8aVSBc9VEYCQIOs4t7cfU/eAg50GyOYxiCGXMlLJsZgyl9fYkJO+166HQKPYU\npszHc+HCvh7pkkbOPbY=\n-----END PRIVATE KEY-----\n",
      client_email: "servarcx@studarcx.iam.gserviceaccount.com",
      client_id: "108481486270307400271",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/servarcx%40studarcx.iam.gserviceaccount.com"
    };

    // Authenticate using the credentials
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    });
    const sheets = google.sheets({ version: 'v4', auth });

    // Retrieve data from the spreadsheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1XEia8g2C5IefhHb_R88D2VtYxmNdmAT6ceeHKefVhRI',
      range: 'Sheet1!A:C',
    });

    const rows = response.data.values;

    // Format the data as an array of objects
    const data = rows.map((row) => ({
      name: row[1],
      rollNumber: row[0],
      grade: row[4],
    }));

    // Send the formatted data as the API response
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    // res.setHeader('Allow-Cross-Origin-Resource', '');
    res.status(200).json({ data });
    resolve();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
    resolve();
  }
}
