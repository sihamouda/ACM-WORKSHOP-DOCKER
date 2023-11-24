// import express from "express";
// import dotenv from "dotenv";

const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const app= express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log(req.headers)
  res.send("Express + TypeScript Server");
});

app.get("/healthcheck", (req, res) => {
  res.send("healthy...");
});

app.get("/test", (req, res) => {
  res.send("a test uri...");
});

const users = [
  {
    "id":1,
    "username":"testUser"
  },
  {
    "id":2,
    "username":"testUser2"
  }
]

app.get("/users", (req, res) => {
  res.send(users);
});


app.get("/test", (req, res) => {
  res.send("a test uri...");
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});
