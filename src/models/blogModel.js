const mongoose = require("mongoose");
const authors = require('./authorModel')
let ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    authorId: {
      type: ObjectId,
      ref: authors,
      required: true,
    },

    tags: {
      type: [],
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: [],
    },
    deletedAt: String,

    isDeleted: {
      type: Boolean,
      default: false,
    },

    publishedAt: String,

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);