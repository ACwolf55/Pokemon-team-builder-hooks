require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const bcrypt = require("bcryptjs");
const path = require('path')

const authCtrl = require("./Controllers/authControllers");
const userCtrl = require("./Controllers/userControllers");

const { PORT, DATABASE_URL, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json())
// app.use(express.static(`${__dirname}/../build`))

//for heroku
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db ready!");

  app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`));
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

// Endpoints -

// Auth
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);
app.get("/auth/session", authCtrl.getSession);
app.get('/test', authCtrl.test)

// User Teams Endpoints:
app.post("/user/team", userCtrl.saveTeam);
app.get("/user/userTeamNames", userCtrl.userTeamNames);
app.get("/user/team/SavedTeam/:teamid", userCtrl.getTeam);

// app.get('/user/user_teams',userCtrl.allTeams)
// app.put('/user/:id/team/:id',userCtrl.editTeam)
// app.delete('/user/:id/team/:id',userCtrl.deleteTeam)

//for Deployment
app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../build','index.html'))
})