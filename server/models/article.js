import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  title_lower: {
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
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true,
  },
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
