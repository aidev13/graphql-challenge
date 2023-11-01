const { User } = require('../models')


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
    login: async (parent, args, context) => {
      TODO //Implement logic
    },
    addUser: async (parent, args, context) => {
      return await User.create()
    },
    saveBook: async (parent, args, context) => {
      // Implement your logic to resolve the 'saveBook' mutation here
    },
    removeBook: async (parent, args, context) => {
      // Implement your logic to resolve the 'removeBook' mutation here
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