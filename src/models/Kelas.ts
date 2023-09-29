const mongoose = require('mongoose');

// Definisikan schema untuk kelas online
const onlineClassSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  schedule: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxStudents: {
    type: Number,
    required: true,
  },
  enrolledStudents: {
    type: Number,
    default: 0, // Default 0 peserta terdaftar
  },
  durationInMinutes: {
    type: Number,
  },
  videoURL: {
    type: String,
  },
  thumbnailURL: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  category : {
    type : String,
    required : true
  },
  deletedAt : {
    type : Date,
    default : null
  }
}, {
  timestamps : true
});

// Buat model kelas online dari schema
export default mongoose.models.kelas ?? mongoose.model("kelas", onlineClassSchema)
