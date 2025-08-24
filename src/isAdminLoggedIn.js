function isAdminLoggedIn(req, res, next) {
  if (req.session && req.session.adminId) {
    return next();
  }
  return res.status(401).json({ message: "Non autorisé, connectez-vous" });
}

module.exports = isAdminLoggedIn;