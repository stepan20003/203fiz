const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Մուտքը մերժված է: Տոկենը չի գտնվել:' });
  }

  try {
    if (!process.env.JWT_SECRET) {
      console.warn('WARNING: JWT_SECRET environment variable is not set. Using insecure fallback for development only.');
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret_key_change_me');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Անվավեր տոկեն:' });
  }
};

module.exports = authMiddleware;
