const router = require('express').Router();
const mongoose = require('mongoose');

const Character = require('../models/Character.model');

router.post('/chars', (req, res, next) => {
  const { name, avatar, stats } = req.body;

  Character.create({ name, avatar, class, stats: [], charStatus, inventory: [], position, enemy })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/chars', (req, res, next) => {
  Character.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/chars/:charId', (req, res, next) => {
  const { charId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(charId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Character.findById(charId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/chars/:charId', (req, res, next) => {
  const { charId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(charId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Character.findByIdAndUpdate(charId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;