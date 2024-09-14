// // Example cache middleware (if caching happens on a different level)
// const cacheMiddleware = (req, res, next) => {
//     // Add caching logic if needed (this can be used to extend or modify caching behavior)
//     next();
// };

// module.exports = cacheMiddleware;

// In-memory cache object
let cache = {};

// Cache middleware function
const cacheMiddleware = (req, res, next) => {
  const cacheKey = req.originalUrl; // Use the full URL as the cache key

  // Check if cache for this request exists
  if (cache[cacheKey]) {
    console.log("Serving from cache:", cacheKey);
    return res.json(cache[cacheKey]); // Return the cached response
  }

  // Override the `res.json` method to store the response in the cache
  const originalJson = res.json.bind(res);

  res.json = (data) => {
    // Store the response in cache
    cache[cacheKey] = data;
    setTimeout(() => delete cache[cacheKey], 10 * 60 * 1000); // Cache expires in 10 minutes

    // Call the original res.json function
    return originalJson(data);
  };

  // Proceed to the next middleware or route handler
  next();
};

module.exports = cacheMiddleware;
