const express = require('express');
const { getHeadlines, searchArticles } = require('../controllers/newsController');
const cacheMiddleware = require('../middleware/cacheMiddleware');

const router = express.Router();

router.get('/headlines', cacheMiddleware, getHeadlines);
router.get('/search', cacheMiddleware, searchArticles);

module.exports = router;
