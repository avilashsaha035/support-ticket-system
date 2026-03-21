const fs = require('fs');
const path = require('path');
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

const myTickets = async (req, res) => {
    const tickets = await Ticket.findAll({
        where: { user_id: req.session.userId }
    });

    res.render('my-tickets', { tickets });
};

const showEditTicket = async (req, res) => {
    const ticket = await Ticket.findOne({
        where: {
            id: req.params.id,
            user_id: req.session.userId
        }
    });

    if (!ticket) {
        return res.redirect('/my-tickets');
    }

    res.render('edit-ticket', { ticket });
}

const updateTicket = async (req, res) => {
    const { title, description } = req.body;

    const ticket = await Ticket.findOne({
        where: {
            id: req.params.id,
            user_id: req.session.userId
        }
    });

    if (!ticket) {
        return res.redirect('/my-tickets');
    }

    // update fields
    ticket.title = title;
    ticket.description = description;

    // update file if new one uploaded
    if (req.file) {

        // delete old file if exists
        if (ticket.file_path) {
            const oldPath = path.join(__dirname, '../uploads', ticket.file_path);

            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        // save new file
        ticket.file_path = req.file.filename;
    }

    await ticket.save();

    res.redirect('/my-tickets');
}


module.exports = {
    showCreateTicket,
    createTicket,
    myTickets,
    showEditTicket,
    updateTicket
};