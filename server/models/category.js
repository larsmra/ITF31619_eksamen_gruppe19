import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  slug: String,
});

CategorySchema.virtual('Article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

export default mongoose.model('Category', CategorySchema);
