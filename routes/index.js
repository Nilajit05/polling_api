const express=require('express')
const Router=express.Router()

// Main entry point 
Router.use('/question',require('./questions'));
Router.use('/options',require('./options'))

module.exports=Router
