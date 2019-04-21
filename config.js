{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 1000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 1000,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "redis",
    "host": "localhost",
    "port": 6379,
    "db": 2,
    "expire": 15552000
  },

  "documents": {
    "about": "./about.md"
  }

}
