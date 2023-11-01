const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function (req, res) {
  try {
    // In this, the question is created
    console.log(req.url);
    console.log(req.body);

    const ques = await Question.create(req.body);

    console.log(ques);
    res.send(ques);
  } catch (err) {
    console.log("Error in creating the question schema", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.showDetails = async function (req, res) {
  try {
    console.log(req.params.id);

    const ques = await Question.findById(req.params.id).populate('options');

    if (ques) {
      res.send(ques);
    } else {
      res.send("Id does not exist");
    }

    // In this, the details about the question are displayed
  } catch (err) {
    console.log("Error in showing question details", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteQues = async function (req, res) {
  try {
    // In this, the question will be deleted
    const ques = await Question.findById(req.params.id);

    if (ques) {
      // Delete all the options of the option DB having the question id as req.params.id
      await Question.deleteOne({ _id: req.params.id });
      // Deleting all the options of that question
      await Option.deleteMany({ question: req.params.id });

      res.send("Question deleted");
    } else {
      res.send("Question does not exist");
    }
  } catch (err) {
    console.log("Error in deleting the question", err);
    res.status(500).send("Internal Server Error");
  }
};
