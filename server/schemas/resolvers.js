const { User } = require('../models')
const { Book } = require('../models')
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return await User.find()
    },

    mine: async (a ,args ,c) => {
      return await User.findById(args.meId)
    }
  },


  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Something went wrong!');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Something went wrong!');
      }

      const token = signToken(user);
      return { token, user };

    },
    addUser: async (parent, args, context) => {
      return await User.create(args)
    },
    saveBook: async (parent, args, context) => {
      return await Book.updateOne(arg.bookInput)
    },
    removeBook: async (parent, args, context) => {
      return await Book.findById(args.bookId)
    },
  },
  User: {
    savedBooks: async (parent, args, context) => {
      // Implement your logic to resolve the 'savedBooks' field here
    },
  },
  Book: {
    // You can add resolvers for individual fields of the 'Book' type here
  },
  Auth: {
    // You can add resolvers for individual fields of the 'Auth' type here
  },


};

module.exports = resolvers;