import app from './app';
import config from './App/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Meeting-room-booking app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
