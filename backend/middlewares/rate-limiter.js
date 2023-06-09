const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  max: 10,
  windowMS: 10000, // 10 seconds
  message: "'В данный момент вы больше не можете делать никаких запросов. Попробуйте еще раз позже",
});

module.exports = { limiter };
