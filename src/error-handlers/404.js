'use strict';

module.exports = (req, res) => {
  res.status(404).json({
    error: 404,
    route: req.path,
    message: 'your bad rout or bad method',
  });
};