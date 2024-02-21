import express from "express";
import axios from "axios";
import ApiKeys from "./ApiKeys.js"

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

const yourUsername = ApiKeys.yourUsername;
const yourPassword = ApiKeys.yourPassword;
const yourAPIKey = ApiKeys.yourAPIKey;
const yourBearerToken = ApiKeys.yourBearerToken;

app.get("/", (req, res) => {
  res.render("index.ejs" , {id:"0" , secret: "0", emScore:"", username:"", timestamp:""});
});



app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    const { id, secret, emScore, username, timestamp } = result.data; 
    res.render("index.ejs", { id, secret, emScore, username, timestamp });
  } catch (error) {
    res.status(404).send("Error: " + error.message);
  }
});



app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const { id, secret, emScore, username, timestamp } = result.data[Math.floor(Math.random() * result.data.length)]; 
    res.render("index.ejs", { id, secret, emScore, username, timestamp });
  } catch (error) {
    res.status(404).send("Error: " + error.message);
  }
});



app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: "5",//it shows the minumum value
        apiKey: yourAPIKey,
      },
    });
    const { id, secret, emScore, username, timestamp } = result.data[Math.floor(Math.random() * result.data.length)]; ; 
    res.render("index.ejs", { id, secret, emScore, username, timestamp });
  } catch (error) {
    res.status(404).send("Error: " + error.message);
  }
});



const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/4", config);
    const { id, secret, emScore, username, timestamp } = result.data ; 
    res.render("index.ejs", { id, secret, emScore, username, timestamp });
  } catch (error) {
    res.status(404).send("Error: " + error.message);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
