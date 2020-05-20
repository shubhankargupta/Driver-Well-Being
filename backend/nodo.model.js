const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Nodo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

//module.exports = mongoose.model('Nodo', Nodo);

module.exports = function(connection) {
    return connection.model('Nodo', Nodo);
};