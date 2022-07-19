// in config.js file we store non-sensitive variables.
// defining dynamic api url with parameter
const apiUrl = (requestUrl) => `https://sumsi.dev.webundsoehne.com/api/v1/${requestUrl}`

// defining axios headers and body
const axiosOptions = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

// at frontend I tried to work with view engines "ejs", "browserify" nothing worked to hide email and password.
// I decided to hide it at backend and serve token from there.
// I stored the API credentials "email" and "password" with including dontenv package inside .env file.
// now I am declaring it in a body to send auth post request.
let axiosBody = {
  body: {
    email: process.env.API_EMAIL,
    password: process.env.API_PASSWORD
  }
}
axiosBody = JSON.stringify(axiosBody.body)

// exporting the modules here
// if dont export axiosOptions and body here then server will run.
// but if server gets a request to Axios API then server will crash  
module.exports = {
  apiUrl,
  axiosOptions,
  axiosBody
}