import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {

    title: {
      type: String, 
      trim: true,
    },
    description: {
      type: String, 
      trim: true,
    },
    dueDate: {
      type: String, // YYYY-MM-DD
    },
    due: {
      type: Boolean, // true or false
    },
    category: {
      type: String, // Work or Personal or something else
      lowercase: true,
    },
    status: {
      type: String, // completed Or pending 
    },
  },
  { timestamps: true }
);

taskSchema.pre('save', function (next) {
  if (!this.title) {
    return next(new Error('Title is required.'));
  }
  next();
});

taskSchema.post('find', function (docs, next) {
  docs.forEach(doc => {
    const dueDateString = doc.dueDate;

    if (!dueDateString) {
      doc.due = false;
    } else {
      const currentDate = new Date();
      const dueDate = new Date(dueDateString);

      if (isNaN(dueDate.getTime())) {
        doc.due = false;
      } else {
        doc.due = currentDate > dueDate;
      }
    }
  });

  next();
});

const taskModel = mongoose.model("task", taskSchema);

export default taskModel;