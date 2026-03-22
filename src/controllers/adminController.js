const { Ticket, User } = require('../models');

// display all tickets
const allTickets = async (req, res) => {
    const tickets = await Ticket.findAll({
        include: {
            model: User,
            attributes: ['name', 'email']
        }
    });

    res.render('admin/tickets', { tickets });
}

// update status
const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const ticket = await Ticket.findByPk(req.params.id);

        if (!ticket) {
            return res.redirect('/admin/tickets');
        }

        ticket.status = status;
        await ticket.save();

        res.json({
            message: "Status updated",
            status: ticket.status
        });

    } catch (error) {
        res.status(500).json({ message: "Error updating status" });
    }
};

module.exports = { allTickets, updateStatus }
