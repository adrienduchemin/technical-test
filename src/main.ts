import { createServer } from './server';

const app = createServer();

// Start the server
app.listen(3000, () => {
  console.log(`Server is running`);
});
