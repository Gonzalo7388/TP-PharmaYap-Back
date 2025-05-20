// config/db.js
import mongoose from 'mongoose';

const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado desde config/db.js');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error.message);
    process.exit(1); // Detiene la app
  }
};

export default connectDB;
