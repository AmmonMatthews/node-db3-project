const db = require('../data/dbConfig.js');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
};

function find(){
   return db('schemes');
}

function findById(id){
    return db('schemes')
        .where({ id })
        .first();
}

function add(scheme){
    return db('schemes')
        .insert(scheme, "id");
}

function update(changes, id){
   return db('schemes')
        .where({ id })
        .update(changes);
}

function remove(id){
  return  db('schemes')
    .where({ id })
    .del();
}

function findSteps(id){
    return db('schemes as sc')
        .join('steps as st', 'sc.Id', 'st.scheme_id')
        .select('sc.Id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .where("scheme_id", id);
}