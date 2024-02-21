# Secrets API Authentication 🔒
# Description

The Secrets API Authentication is a web application built using Express.js and EJS that interacts with a secrets API to fetch and display secret information. The application provides different authentication methods such as No Auth, Basic Auth, API Key, and Bearer Token to access secret data. Users can click on buttons to choose the authentication method and view secret information retrieved from the API.
# Installation and Using


1. Clone this repository to your local machine:
2. Navigate to the project directory.
3. Install dependencies by running:


```bash
import express from "express";
import axios from "axios";
import ApiKeys from "./ApiKeys.js"
...

1. Navigate to http://localhost:3000 in your web browser.
2. Click on one of the authentication method buttons (No Auth, Basic Auth, API Key, Bearer Token) to fetch secret information from the API.
3. View the retrieved secret information displayed on the page.
```

```bash
cd /path/to/your/project

npm install express axios ejs

node index.js

```

# Authentication Methods
### 1- No Auth
* Click on the "No Auth" button to fetch secret information without authentication.
### 2- Basic Auth
* Click on the Basic Auth button to fetch secret information using Basic Authentication.
* Enter your username and password provided by the API.
### 3- API Key
* Click on the API Key button to fetch secret information using an API Key.
* Use your API Key provided by the API.
### 4- Bearer Token
* Click on the Bearer Token button to fetch secret information using a Bearer Token.
* Provide your Bearer Token for authentication.

# How to Obtain Credentials
*To obtain credentials (username, password, API key, bearer token) for authentication*👇

**"https://secrets-api.appbrewery.com"** 

* Username and Password: Contact the API provider to obtain your username and password for Basic Authentication.

* API Key: Sign up on the API provider's website to obtain an API key for authentication.

* Bearer Token: Generate a bearer token by following the API provider's documentation or instructions.

## Contributing 🚀

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
