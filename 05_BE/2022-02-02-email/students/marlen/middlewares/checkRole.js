// this function returns a middleware that checks for a specific role.
// in order to set the role, we call "checkRole" with a role as an argument.
const checkRole = (role) => {
    return (req, res, next) => {
        if (res.user.role !== role) return res.status(403).end();

        next();
    };
};

module.exports = checkRole;
