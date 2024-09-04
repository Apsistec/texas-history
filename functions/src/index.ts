import * as functions from 'firebase-functions';
import axios from 'axios';
import * as AdmZip from 'adm-zip';
import * as csv from 'csv-parser';
import * as admin from 'firebase-admin';
import * as fs from 'fs';

admin.initializeApp();
const db = admin.firestore();

interface CsvRow {
  // Define your CSV row structure here
  id: string;
  // ... other fields
}

export const updateFirestoreFromCSV = functions.https.onRequest(
  async (req, res) => {
    try {
      // 1. Fetch the zip file
      const response = await axios.get('https://texas-history-434319.web.app/src/assets/data/markers.zip', {
       responseType: 'arraybuffer',            
 QQ     });

      // 2. Unzip
      const zip = new AdmZip(response.data);
      const zipEntries = zip.getEntries();
      const csvData = zipEntries[0].getData().toString('utf8');

      // 3. Parse CSV and update Firestore

      fs.createReadStream('data.csv').pipe(
        csv({ separator: ',' })
          .on('data', async (row: CsvRow) => {
            await db.collection('markers').doc(row.id).set(row);
          })
          .on('end', () => {
            res.status(200).send('Firestore updated successfully');
          })
      );
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
    }
  }
);
