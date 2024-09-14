const axios = require('axios');
const config = require('../config/config');

// Cache storage (simple in-memory cache)
let cache = {};

const fetchNews = async (url, cacheKey) => {
    // Check if response exists in cache
    if (cache[cacheKey]) {
        console.log('Serving from cache:', cacheKey);
        return cache[cacheKey];
    }

    try {
        const response = await axios.get(url);
        // Cache the response for 10 minutes
        cache[cacheKey] = response.data;
        setTimeout(() => delete cache[cacheKey], 10 * 60 * 1000); // Cache expires in 10 minutes
        return response.data;
    } catch (error) {
        throw new Error('Error fetching news: ' + error.message);
    }
};

// Fetch top headlines
const getHeadlines = async (req, res) => {
    const { category = 'general', country = 'us', lang = 'en', page = 1, limit = 10 } = req.query;
    const url = `${config.BASE_URL}/top-headlines?category=${category}&country=${country}&lang=${lang}&max=${limit}&page=${page}&apikey=${config.API_KEY}`;
    const cacheKey = `${category}_${country}_${lang}_${page}`;

    try {
        const data = await fetchNews(url, cacheKey);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Search articles
const searchArticles = async (req, res) => {
    const { q, lang = 'en',page = 1, limit = 10 } = req.query;
    const url = `${config.BASE_URL}/search?q=${q}&max=${limit}&lang=${lang}&page=${page}&apikey=${config.API_KEY}`;
    const cacheKey = `search_${q}_${lang}_${page}`;

    try {
        const data = await fetchNews(url, cacheKey);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getHeadlines,
    searchArticles,
};
