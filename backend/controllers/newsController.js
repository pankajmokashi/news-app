const axios = require("axios");
const config = require("../config/config");

// Cache storage (simple in-memory cache)
const cache = new Map();
const CACHE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

const fetchNews = async (url, cacheKey) => {
  // Check if response exists in cache
  if (cache.has(cacheKey)) {
    console.log("Serving from cache:", cacheKey);
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Cache the response
    cache.set(cacheKey, data);
    setTimeout(() => cache.delete(cacheKey), CACHE_EXPIRY_MS); // Cache expires in 10 minutes

    return data;
  } catch (error) {
    throw new Error("Error fetching news: " + error.message);
  }
};

const buildUrl = (endpoint, params) => {
  const url = new URL(`${config.BASE_URL}/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  url.searchParams.append("apikey", config.API_KEY);
  return url.toString();
};

// Fetch top headlines
const getHeadlines = async (req, res) => {
  const params = {
    category: req.query.category || "general",
    country: req.query.country || "us",
    lang: req.query.lang || "en",
    page: req.query.page || 1,
    limit: req.query.limit || 10,
  };
  const url = buildUrl("top-headlines", params);
  const cacheKey = `${params.category}_${params.country}_${params.lang}_${params.page}`;

  try {
    const data = await fetchNews(url, cacheKey);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search articles
const searchArticles = async (req, res) => {
  const params = {
    q: req.query.q,
    lang: req.query.lang || "en",
    page: req.query.page || 1,
    limit: req.query.limit || 10,
  };
  const url = buildUrl("search", params);
  const cacheKey = `search_${params.q}_${params.lang}_${params.page}`;

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
