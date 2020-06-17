const sqlite3 = require('sqlite3').verbose();

const dbName = './recipesDatabase.db';

const connectToDb = () =>{
    const db = new sqlite3.Database(dbName, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        // console.log(`Connected to the ${dbName} SQlite database.`);
      });
    return db;
}


const disconnectFromDb = (db) => {
    db.close((err) => {
        if (err) {
        return console.error(err.message);
        }
        // console.log('Close the database connection.');
    });
}



const addToDatabase = async (recipe) => {
    const db = connectToDb();
    db.query = function (sql, params) {
      var that = this;
      return new Promise(function (resolve, reject) {
        that.all(sql, params, function (error, rows) {
          if (error)
            reject(error);
          else
            resolve({ rows: rows });
        });
      });
    };
    


      let currentDate = new Date()
      currentDate.setHours(currentDate.getHours()+2);
      currentDate = currentDate.toISOString().substr(0, 19).replace('T', ' ');
      let sql = `INSERT INTO recipes (name, description ) VALUES ('${recipe.name}','${recipe.description}')`
      
      console.log(sql)
      const response = await db.query(sql, []).then( a => a.rows);
      return accounts;
}



module.exports = {
    addToDatabase: addToDatabase
}