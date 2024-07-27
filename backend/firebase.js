const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://mcsma-ff2ba-default-rtdb.firebaseio.com/',
    storageBucket: 'mcsma-ff2ba.appspot.com'
  });
}

module.exports = admin;
