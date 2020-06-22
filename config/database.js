module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
        useUnifiedTopology: "${process.env.USE_UNIFIED_TOPOLOGY || false}",
        authenticationDatabase: "${process.env.DATABASE_AUTHENTICATION_DATABASE || ''}",
      },
    },
  },
});