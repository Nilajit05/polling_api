const Option = require('../models/options');
const Question = require('../models/questions');

module.exports.create = async function (req, res) {
    // Create an option for the given question ID
    console.log(req.body, req.params.id);

    // Create a new option using data from the request body
    const opt = await Option.create({
        option: req.body.content,
        question: req.params.id,
    });

    // Add the 'add_vote' URL to the option using string interpolation
    const updateOpt = await Option.findByIdAndUpdate(opt._id, {
        "add_vote": `http://localhost:8000/options/${opt._id}/add_vote`
    });
    updateOpt.save();

    // Find the associated question to append the new option to the 'options' array
    const ques = await Question.findById(req.params.id);

    if (ques) {
        // Add the new option to the question's 'options' array
        ques.options.push(updateOpt);
        ques.save();
        console.log(ques);
        res.send(ques);
    } else {
        res.send('Question does not exist');
    }
}

module.exports.add_vote = async function (req, res) {
    // Add a vote to the specified option by incrementing the 'vote' count
    console.log(req.params.id);

    // Increment the 'vote' count for the specified option
    const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });

    if (opt) {
        await opt.save();
        console.log(opt);
        res.send(opt);
    } else {
        res.send('Option does not exist');
    }
}

module.exports.delete = async function (req, res) {
    // Delete an option by its ID
    console.log('ID', req.params.id);

    const opt = await Option.findById(req.params.id);

    if (opt) {
        // Get the associated question ID to remove the option from the question's 'options' array
        const quesId = opt.question;

        // Find the question and remove the option from its 'options' array
        const ques = await Question.findByIdAndUpdate(quesId, { $pull: { options: req.params.id } });

        // Delete the option from the database
        await Option.findByIdAndDelete(req.params.id);

        console.log(ques);
        res.send('Option deleted');
    } else {
        res.send('ID does not exist');
    }
}
