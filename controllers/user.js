import mongoose from 'mongoose';

import User from '../models/user';

export const getUsers = (req, res, next) => {
  User.find().then(data => res.status(200).json({ data }));
};

export const addUser = (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  user
    .save()
    .then(({ email, _id, firstName, lastName }) => {
      res.status(201).json({
        message: 'User created',
        user: { email, id: _id, firstName, lastName }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

export const deleteUser = (req, res, next) => {
  const id = req.params.userId;
  User.deleteOne({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'User deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
