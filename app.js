const express = require("express"); //- קריאה לחבילה
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect"); // בשביל להתחבר למסד נתונים
require("dotenv").config();

//middleware - נקודת אמצע בשביל המשך להכניס את המידע
app.use(express.static("./public"));
app.use(express.json());

//routes -נתיבים

// tasks נתיב
app.use("/api/v1/tasks", tasks);

//  -   url  לנתיבים
// app.get('/api/v1/tasks')    - get all the tasks
// app.post('/api/v1/tasks')   -create a new taks
//app.get('/api/v1/tasks/:id')  -get single task
//app.patch('api/v1/tasks/:id') -update task
// app.delete('/api/v1/tasks/:id') -delete task

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
