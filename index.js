const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { users } = require("./state");

/* BEGIN - create routes here */

// We are now getting all of the users
app.get("/users", (req, res) => {
  res.send(users);
});
//  We now want a single user
app.get("/users/:userId", (req, res) => {
  let userId = parseInt(req.params.userId);
  let user = users.find((user) => user._id === userId);
  res.send(user);
});

// We path for a post request!
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(users[parseInt(req.params.userId) - 1]);

  let user = req.body;
  user._id = user.length + 1;

  // The push method adds a new variable to an array
  users.push(user);

  // Our response is to return the users
  res.send(users);
});

// We are now using the put method to update a user
app.put("/users/:userId", (req, res) => {
  let userId = parseInt(req.params.userId) - 1;

  //  We have to create a function to find users within the payload
  let user = users.find((user) => user._id === userId);

  //  We use dot notation to access the name key and mutate the object
  user.name = "Jane";

  //  Our response is to return the updated user
  res.send(users[0]);
});

//  We want to delete a user
app.delete("/users/:userId", (req, res) => {
  res.send(users.splice(1, 1));
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
