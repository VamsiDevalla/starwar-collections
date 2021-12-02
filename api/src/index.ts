import app from './app';

//listening on port 8000. We will be mapping to different ports using docker.
app.listen(8000, () => console.log(`server is listening on port 8000`));
