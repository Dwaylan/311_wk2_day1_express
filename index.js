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
app.post("/users/1", (req, res) => {
  let user = { _id: 5, Name: "Sampson", Occupation: "Attourney" };
  // add the user to the array
  users.push(user);
  res.send(user);
});

// We want to make a put request to mutate an object
app.put("/users", (req, res) => {
  res.send(users);
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
