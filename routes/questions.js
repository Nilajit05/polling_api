
const express=require('express')
const Router=express.Router()
const question_controller=require('../controller/QuestionsController')

// Define routes for questions
// Create a new question
Router.post('/create',question_controller.create)
// View details of a specific question by its ID
Router.get('/view/:id',question_controller.showDetails)
// Delete a question by its ID

Router.delete('/delete/:id',question_controller.deleteQues)
// Include routes related to options (Assuming these routes are defined in a separate file)

Router.use('/options',require('./options'))


module.exports=Router