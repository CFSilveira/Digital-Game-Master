const router = require('express').Router();
const mongoose = require('mongoose');

const Session = require('../models/Session.model');

router.post('/session', (req, res, next) => {
  const { name, sessionId, gameMaster, players, adventure } = req.body;

  Session.create({ name, sessionId, gameMaster, players, adventure })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/session', (req, res, next) => {
  Session.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/session/:sessionId', (req, res, next) => {
  const { sessionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(sessionId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Session.findById(sessionId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/session/:sessionId', (req, res, next) => {
  const { sessionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(sessionId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Session.findByIdAndUpdate(sessionId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;