var admin = require("firebase-admin");


try { 
    var serviceAccount = require("./admin.json");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://snipcode-new.firebaseio.com"
    });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

module.exports = {
    db : admin.database(),
    auth : admin.auth()
};