const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  //calling find returns promise that resolves to an array of all schemas
  return db("schemes");
}

function findById(id) {
  //expects a scheme id as parameter
  //resolve to a single scheme object
  //on an invalid id, resolves to null
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  // Expects a scheme id.
  // Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
  // This array should include the scheme_name not the scheme_id.
}

function add(scheme) {
  //     Expects a scheme id.
  // Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
  // This array should include the scheme_name not the scheme_id.
}

function update(changes, id) {
  //     Expects a changes object and an id.
  // Updates the scheme with the given id.
  // Resolves to the newly updated scheme object.
}

function remove(id) {
  //     Removes the scheme object with the provided id.
  // Resolves to the removed scheme
  // Resolves to null on an invalid id.
  // (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)
}
