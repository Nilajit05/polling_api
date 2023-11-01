const express=require('express')
const Router=express.Router()
const optionsController=require('../controller/OptionsController');

// Define routes for options
// Create a new option for a question
Router.post('/:id/create',optionsController.create);
// Add a vote to a specific option by its ID

Router.get('/:id/add_vote',optionsController.add_vote);
// Delete an option by its ID

Router.delete('/delete/:id',optionsController.delete)

module.exports=Router