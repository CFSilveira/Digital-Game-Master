const router = require('express').Router();
const mongoose = require('mongoose');
const Adventure = require('../models/Adventure.model');
const Area = require('../models/Area.model');

router.post('/area', async (req, res, next) => {
  const { name, description, image, step, connections, events, adventureId } = req.body;

  const quest = await Adventure.findById(adventureId);

  Area.create({ name, description, image, step, adventure: quest })
    .then((newArea) => {
      return Adventure.findByIdAndUpdate(adventureId, { $push: { areas: newArea._id } }, { new: true });
    })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/area', (req, res, next) => {
  Area.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/area/:areaId', (req, res, next) => {
  const { areaId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(areaId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Area.findById(areaId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/area/:areaId', (req, res, next) => {
  const { areaId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(areaId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Area.findByIdAndUpdate(areaId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/area/:areaId', (req, res, next) => {
    const { areaId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(areaId)) {
      res.status(400).json({ message: 'Specified Id is not valid' });
      return;
    }
    Area.findByIdAndRemove(areaId)
      .then(() => res.json({message: `Area with ${areaId} was removed successfully` }))
      .catch((err) => res.json(err));
  });



module.exports = router;