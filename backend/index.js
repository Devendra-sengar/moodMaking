require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require("./config/database");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const path = require("path");
const cookieParser = require('cookie-parser');

const newuser = require('./routes/authenticates');
const PORT = 5000;

const Setupserver = async () => {
  try {
    await connect();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(morgan('short'));
    app.use(cors({
      origin:["http://127.0.0.1:5500","http://localhost:3000"],
      credentials: true,
    }));
    // app.use(errorMiddleware);


 
  // POST Request: Add new diet info (including food and exercise images)
 
app.use('/api/v1/user',newuser);
   
    app.listen(PORT, () => {
      console.log(`HTTPS Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error setting up server:', error);
    process.exit(1);
  }
};

Setupserver();



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       // Store files in 'uploads' directory
//       const uploadDir = 'uploads/';
//       if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir);  // Create directory if it doesn't exist
//       }
//       cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//       // Save file with timestamp to avoid name conflicts
//       cb(null, Date.now() + path.extname(file.originalname));
//     }
//   });
  
//   const upload = multer({ storage });
// const Setupserver = async () => {
//     await connect();
  
 // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static('uploads'));


  
  //   app.listen(PORT, () => {
  //     console.log(Server is running on port ${PORT});
  //   });
  // };
  
  // Setupserver();


// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/dietDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// Diet Schema (with local file path for images)
// const dietSchema = new mongoose.Schema({
//   food: [
//     {
//       name: { type: String, required: true },
//       imagePath: { type: String, required: true }  // Store local file path
//     }
//   ],
//   exercise: [
//     {
//       name: { type: String, required: true },
//       imagePath: { type: String, required: true }  // Store local file path
//     }
//   ],
//   tip: { type: String, required: true }
// });
