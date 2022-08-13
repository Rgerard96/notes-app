import Category from '../models/Category';
import Note from '../models/Note';
import { UserInputError } from 'apollo-server-micro';
import mongoose from 'mongoose';

export const resolvers = {
  Query: {
    async getCategories() {
      try {
        const categories = await Category.find().sort({ createdAt: -1 });

        return categories;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getNotes() {
      try {
        const notes = await Note.find()
          .populate('category')
          .sort({ createdAt: -1 });

        return notes;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getNote(_, { noteId }) {
      try {
        const note = await Note.findById(noteId).populate('category');
        console.log(note);
        return note;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createCategory(_, { name }) {
      if (name.trim() === '') {
        throw new UserInputError('Category name must not be empty.', {
          errors: {
            category: 'Category name must not be empty.',
          },
        });
      }

      const newCategory = new Category({
        name,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const category = await newCategory.save();

      return {
        ...category._doc,
        id: category._id,
      };
    },
    async deleteCategory(_, { categoryId }) {
      try {
        const category = await Category.findById(categoryId);
        const ObjectId = mongoose.Types.ObjectId;
        const notes = await Note.find({ category: ObjectId(categoryId) });

        notes.forEach((note) => {
          note.delete();
        });
        await category.delete();

        return 'Category and notes deleted successfully';
      } catch (error) {
        throw new Error(error);
      }
    },
    async createNote(_, { title, body, categoryId }) {
      if (title.trim() === '') {
        throw new UserInputError('Note title must not be empty.', {
          errors: {
            Note: 'Note title must not be empty.',
          },
        });
      }

      const newNote = new Note({
        title,
        body,
        category: categoryId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await newNote.save();

      const note = await Note.findById(newNote._id).populate('category');

      return note;
    },
    async deleteNote(_, { noteId }) {
      try {
        const note = await Note.findById(noteId);
        await note.delete();
        return 'Note deleted successfully';
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
