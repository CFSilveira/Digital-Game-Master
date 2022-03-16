const router = require('express').Router();
const mongoose = require('mongoose');

const Adventure = require('../models/Adventure.model');
const Area = require('../models/Adventure.model');

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
    .populate('areas')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/adventure/game/:adventureId', (req, res, next) => {
  const { adventureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(adventureId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Adventure.findById(adventureId)
    .populate('areas')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/adventure/edit/:adventureId', (req, res, next) => {
  const { adventureId } = req.params;

  console.log(adventureId)

  if (!mongoose.Types.ObjectId.isValid(adventureId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Adventure.findByIdAndUpdate(adventureId, req.body, { new: true })
    .populate('areas')
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/adventure/:adventureId', (req, res, next) => {
  const { adventureId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(adventureId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }
  Area.findByIdAndRemove(adventureId)
    .then(() => res.json({message: `Adventure with ${adventureId} was removed successfully` }))
    .catch((err) => res.json(err));
});

module.exports = router;