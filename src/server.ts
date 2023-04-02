import app from './app';
import DB from './database';
import errorMiddleware from './middleware/error.middleware';
import todoRoutes from './routes/todo.routes';

app.use('/api', todoRoutes);
app.use(errorMiddleware);
const port = process.env.PORT || 3000;

DB.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!');
    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('No soup for you:', error);
  });
