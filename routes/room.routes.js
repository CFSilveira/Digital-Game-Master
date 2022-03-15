const router = require('express').Router();
const mongoose = require('mongoose');

const Room = require('../models/Room.model');

router.post('/room', (req, res, next) => {
  const { name, roomId, gameMaster, players, adventure } = req.body;

  Room.create({ name, roomId, gameMaster, players, adventure })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.get('/room', (req, res, next) => {
  Room.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/room/:roomId', (req, res, next) => {
  const { roomId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Room.findById(roomId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/room/game/:roomId', (req, res, next) => {
  const { roomId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Room.findById(roomId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/room/:roomId', (req, res, next) => {
  const { roomId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }

  Room.findByIdAndUpdate(roomId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete('/room/:roomId', (req, res, next) => {
  const { roomId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(roomId)) {
    res.status(400).json({ message: 'Specified Id is not valid' });
    return;
  }
  Room.findByIdAndRemove(roomId)
    .then(() => res.json({message: `Room with ${roomId} was removed successfully` }))
    .catch((err) => res.json(err));
});

module.exports = router;