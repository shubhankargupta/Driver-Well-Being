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



let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});



todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

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


app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});