const User = require('./User');
const Ticket = require('./Ticket');

// relationship
User.hasMany(Ticket, { foreignKey: 'user_id' });
Ticket.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  User,
  Ticket
};