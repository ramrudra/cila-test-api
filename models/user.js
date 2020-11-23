import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: false
  },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false }
});

export default mongoose.model('User', userSchema);
