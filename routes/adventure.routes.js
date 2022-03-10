const router = require('express').Router();
const mongoose = require('mongoose');

const Adventure = require('../models/Adventure.model');

router.post('/adventure', (req, res, next) => {
  const { name, image, description, steps, zonesA, zonesB, zonesC, encounters } = req.body;

  Adventure.create({ name, image, description, steps, zonesA, zonesB, zonesC, encounters })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/adventure', (req, res, next) => {
  Adventure.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/adventure/:adventureId', (req, res, next) => {
  const { adventureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(adventureId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Adventure.findById(adventureId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/adventure/:adventureId', (req, res, next) => {
  const { adventureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(adventureId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Adventure.findByIdAndUpdate(adventureId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;