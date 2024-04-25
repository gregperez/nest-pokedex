import * as process from 'process';

export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongo_uri: process.env.MONGO_URI,
  mongodbName: process.env.MONGO_DB_NAME,
  port: process.env.PORT || 3002,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
