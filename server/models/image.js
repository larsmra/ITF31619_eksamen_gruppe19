import mongoose from 'mongoose';

// Denne koden er hentet fra tidligere forelesningsnotater: https://www.dropbox.com/sh/9nr561t0qn6eioo/AAD4E8xcT_7TaAMeU_QSnbbZa/Kodefiler?dl=0&file_subpath=%2Fhifo-leksjon13-master%2Fserver%2Fmodels%2Fimage.js&preview=leksjon_13.zip&subfolder_nav_tracking=1
const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
    file_path: {
      type: String,
      unique: true,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ImageSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'image',
  justOne: false,
});

export default mongoose.model('Image', ImageSchema);
