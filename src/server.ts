import app from './app';
import todoRoutes from './routes/todo.routes';

app.use('/api', todoRoutes);

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
