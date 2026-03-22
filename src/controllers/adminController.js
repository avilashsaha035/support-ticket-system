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
    const { status } = req.body;

    const ticket = await Ticket.findByPk(req.params.id);

    if (!ticket) {
        return res.redirect('/admin/tickets');
    }

    ticket.status = status;
    await ticket.save();

    res.redirect('/admin/tickets');
};

module.exports = { allTickets, updateStatus }
