import dotenv from 'dotenv';
import app from './app.js';
import MongoHelper from './infra/database/mongo-helper.js';

dotenv.config();

const port = process.env.PORT || 3333;

MongoHelper.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Database connected!');
    app.listen(port, () => console.log(`Server up 🚀 at localhost:${port}`));
  })
  .catch((error) => console.log('Error to connect on database =>', error));
