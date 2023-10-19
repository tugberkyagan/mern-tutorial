const express = require('express')
const router = express.Router()

const { registerUser } = require('../controllers/userController')

router.post('/', function(req, res){
    registerUser
  })

module.exports = router