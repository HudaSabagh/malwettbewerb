// including config file to access public variables which are not sensitive
const config = require('../config')
const axios = require('axios')

// sending post request to https://sumsi.dev.webundsoehne.com/api/v1/login to get access token
const getAuthToken = async (req, res) => {
  const sumsiAuthToken = await axios.post(config.apiUrl('login'), config.axiosBody, config.axiosOptions)
  return res.status(200).json(sumsiAuthToken.data)
}

// exporting the module 
module.exports = {
  getAuthToken
}