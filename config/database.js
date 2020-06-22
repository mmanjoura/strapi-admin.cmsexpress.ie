module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', 'cluster0-ebvoq.gcp.mongodb.net'),
        // srv: env.bool('DATABASE_SRV', true),
        // port: env.int('DATABASE_PORT', 27017),
        // database: env('DATABASE_NAME', 'cms-strapi'),
        // username: env('DATABASE_USERNAME', 'admin'),
        // password: env('DATABASE_PASSWORD', 'os1967isFun'),
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
