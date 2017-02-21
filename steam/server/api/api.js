const express = require('express');
const router = express.Router();

/* GET /api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/user/:steamId', (req, res) => {
  const userGames = require('./games.json');
  res.send(userGames);
});

/* Get game info: http://store.steampowered.com/api/appdetails?appids=207140 */

module.exports = router;
