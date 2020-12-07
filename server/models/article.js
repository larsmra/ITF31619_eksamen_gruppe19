import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  ingress: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    enum: ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'],
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true,
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model('Article', ArticleSchema);
