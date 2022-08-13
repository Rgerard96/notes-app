import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: String,
  createdAt: String,
  updatedAt: String,
});

const Category = mongoose.models.Category
  ? mongoose.models.Category
  : mongoose.model('Category', categorySchema);

export default Category;
