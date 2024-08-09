const mongoose = require('mongoose');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    const connection = mongoose.connection;

    // Check if the collection exists
    const modelExists = await connection.db.listCollections({
      name: collectionName
    }).toArray();

    // If the collection exists, drop it
    if (modelExists.length) {
      await connection.db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
