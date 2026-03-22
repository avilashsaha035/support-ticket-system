const isAdmin = (req, res, next) => {
    if (!req.session.userId || req.session.role !== 'admin') {
        return res.redirect('/login');
    }
    next();
};

module.exports = isAdmin;