const { Ticket } = require('../models');

const showCreateTicket = (req, res) => {
    res.render('create-ticket');
};

const createTicket = async (req, res) => {
    const { title, description } = req.body;

    await Ticket.create({
        title,
        description,
        file_path: req.file ? req.file.filename : null,
        user_id: req.session.userId
    });

    res.redirect('/my-tickets');
};

module.exports = {
    showCreateTicket,
    createTicket,
};