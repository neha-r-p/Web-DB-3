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
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first()
    .then(scheme => {
      return scheme;
    });
}

function findSteps(id) {
  return db("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .where({ scheme_id: id })
    .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
    .then(steps => {
      return steps;
    });
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(scheme => {return scheme})
  ;
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
