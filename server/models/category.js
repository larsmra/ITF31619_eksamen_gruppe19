import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: String,
});

CategorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

CategorySchema.virtual('Article', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

export default mongoose.model('Category', CategorySchema);
