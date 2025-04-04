module.exports = (requiredRoles) => {
    return (req, res, next) => {
      if (!req.user || !requiredRoles.includes(req.user.roleId)) {
        return res.status(403).json({ message: "Forbidden: Role not allowed" });
      }
      next();
    };
  };
  