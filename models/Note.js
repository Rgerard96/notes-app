import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  createdAt: String,
  updatedAt: String,
});

const Note = mongoose.models.Note
  ? mongoose.models.Note
  : mongoose.model('Note', noteSchema);

export default Note;
