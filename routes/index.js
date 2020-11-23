import express from 'express';
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Cila Test Api');
});

export default router;
