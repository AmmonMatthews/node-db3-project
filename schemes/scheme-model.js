const db = require('../data/schemes.db3');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    db('schemes');
}

function findById(id){
    db('schemes')
        .where({ id })
        .first();
}

function add(scheme){
    db('schemes')
        .insert(scheme, "id");
}

function update(changes, id){
    db('schemes')
        .where({ id })
        .update(changes);
}

function remove(id){
    db('schemes')
    .where({ id })
    .del();
}