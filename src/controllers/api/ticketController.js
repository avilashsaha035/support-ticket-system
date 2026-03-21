const { Ticket } = require('../../models');
const createTicket = async (req, res) => {
    try {
        const { title, description} = req.body;

        const ticket = await Ticket.create({
            title, description,
            file_path: req.file ? req.file.filename : null,
            user_id: req.session.userId
        });

        res.status(201).json({
            message: "Ticket created",
            ticket
        });

    } catch (error) {
        res.status(500).json({ message: "Error creating ticket" });
    }
}

module.exports = { createTicket };