const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;


const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
    clientId: "22BG2X",
    clientSecret: "50eaad3a2e041b29eca74ef89b871c3b",
    apiVersion: '1.2' // 1.2 is the default
});


// redirect the user to the Fitbit authorization page
app.get("/authorize", (req, res) => {
    // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
    res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:3000'));
});

// handle the callback from the Fitbit authorization flow
app.get("/callback", (req, res) => {
    // exchange the authorization code we just received for an access token
    client.getAccessToken(req.query.code, 'http://localhost:3000').then(result => {
        // use the access token to fetch the user's profile information
        client.get("/profile.json", result.access_token).then(results => {
            res.send(results[0]);
        }).catch(err => {
            res.status(err.status).send(err);
        });
    }).catch(err => {
        res.status(err.status).send(err);
    });
});

app.get("/heartrate/:date", function(req, res) {
  client.get("/activities/heart/date/" + req.params.date + "/1d.json", token)
    .then(async function(results) {
      var date = results[0]['activities-heart'][0]['dateTime'];
      var data = JSON.stringify(results[0]['activities-heart-intraday']['dataset']);
      data = data.replaceAll('"time":"', '"dateTime":"' + date + "T");
      result = await insert_query_json('fitbit.heartrate', data);
      res.send(result);
    }).catch(err => {
      res.status(err.status).send(err);
    });
});


const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection2 = mongoose.createConnection('mongodb://127.0.0.1:27017/nodos', { useNewUrlParser: true });

// connection.model('Todo',Nodo);
// connection2.model('Nodo',Nodo);

// Passing connections to connect to different databases.
let Todo = require('./todo.model')(connection);
let Nodo = require('./nodo.model')(connection2);

//New Line
/*let Nodo = new Schema({
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
*/




app.use(cors());
app.use(bodyParser.json());

/*mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


const Mongoose = require('mongoose').Mongoose;

const instance2 = new Mongoose();
instance2.connect('mongodb://127.0.0.1:27017/nodos', { useNewUrlParser: true });
const connection2 = instance2.connection;

connection2.once('open', function() {
    console.log("MongoDB database 2 connection established successfully");
})
*/





/*var instance1 = new Mongoose();
instance1.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true }); */
//const connection1 = instance1.connection;*/













/*
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection2 = mongoose.createConnection('mongodb://127.0.0.1:27017/nodos', { useNewUrlParser: true });

connection.model('Todo',Nodo);
connection2.model('Nodo',Nodo);
*/



//---------------------------------





todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

//Delete Player
todoRoutes.route('/delete/:id').delete(function(req,res) {

    Todo.deleteOne({_id: req.params.id},(err, Todo) => {
        if(err)
        {
            res.send(err);
        }
        res.json({message: 'Successfully deleted Todo'});
    });
})

//New Line
//New Nodo
todoRoutes.route('/nodo').get(function(req, res) {    
    Nodo.find(function(err, nodos) {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            res.json(nodos);
        }
    });
});



todoRoutes.route('/nodo/:id').get(function(req, res) {
    console.log('Here: /nodo/:id');
    let id = req.params.id;
    Nodo.findById(id, function(err, todo) {
        console.log(err);
        res.json(nodo);
    });
});

todoRoutes.route('/nodo/update/:id').post(function(req, res) {
    Nodo.findById(req.params.id, function(err, nodo) {
        if (!nodo)
            res.status(404).send("data is not found");
        else
            nodo.todo_description = req.body.todo_description;
            nodo.todo_responsible = req.body.todo_responsible;
            nodo.todo_priority = req.body.todo_priority;
            nodo.todo_completed = req.body.todo_completed;

            nodo.save().then(nodo => {
                res.json('Nodo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/node/add').post(function(req, res) {
    let nodo = new Nodo(req.body);
    console.log(nodo);
    nodo.save()
        .then(nodo => {
            res.status(200).json({'nodo': 'nodo added successfully'});            
        })
        .catch(err => {
            res.status(400).send('adding new nodo failed');
        });
});

//Delete Player
todoRoutes.route('/nodo/delete/:id').delete(function(req,res) {

    Nodo.deleteOne({_id: req.params.id},(err, Nodo) => {
        if(err)
        {
            res.send(err);
        }
        res.json({message: 'Successfully deleted Todo'});
    });
})

todoRoutes.route('/:id').get(function(req, res) {    
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});


//---------------------

// Log incoming requests
app.use((req, res, next) => {
    console.log (req.method, req.url);
    next();
});

app.use((err, req, res, next) => {
    res.status(404).json({
        message: "Not Found!"
    });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

/*

const axios = require('axios');
todoRoutes.route('/todo/heart-rate', (req, res) => {
    axios.get(`https://api.fitbit.com/1/user/${userId}/activities/heart/date/[date]/[period].json`).then(response => {
        res.json(response.data);
    }).catch(err => {
        console.log(err);
    })
});


*/