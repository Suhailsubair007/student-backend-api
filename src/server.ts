import app from './app';
import { connect_database } from './config/mongoConnection'

const PORT = process.env.PORT || 8001;

connect_database().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
