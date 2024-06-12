import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASEURL,
  default_password: process.env.DEFAULT_PASSWORD,
  bycrpt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
};
