const router = require('express').Router();
const mongoose = require('mongoose');

//axios
const axios = require("axios");

router.get('/inventory', async (req, res, next) => {
  try {
      
    //create a string var that will include the id of all games to search
    let urlToSearch = `https://www.dnd5eapi.co/api/equipment/`;
    //searches API using the var
    const axiosResponse = await axios.get(urlToSearch)
    //filters the data received
    const axiosItems = axiosResponse.data.results.name;
  }
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get('/inventory', async (req, res, next) => {
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