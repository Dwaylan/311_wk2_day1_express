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

// We want to post a new user!
app.post("/users", (req, res) => {
  // requesting the body
  let user = req.body;
  // The new user id will be greater than the one preceeding it by 1
  user._id = user.length + 1;
  // The push method adds a new variable to an array
  users.push(user);
  // Our response is to return the users
  res.send(users);
});

// We are now using the put method to update a user
app.put("/users/", function (req, res) {
  //  We have to create a function to place a user within the payload.
  // We are going to make a user 0
  let user = users[0];

  //  We use dot notation to access the name key and mutate the object
  user.name = "Jane";

  //  Our response is to return the updated user
  res.send(users[0]);
});

//  We want use the  delete method to change the status of a user to false by their user ID
app.delete("/users/:userId", (req, res) => {
  let userId = parseInt(req.params.userId);
  let user = user.find((user) => user._id === userId);
  user.isActive = false;
  res.send("delete");
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
