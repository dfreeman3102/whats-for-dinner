const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_, __, context) => {
      const { user } = context;
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findById(user._id);
    },
    users: async () => {
      return User.find({});
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user with this email!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { fullName, email, password }) => {
      const user = await User.create({ fullName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveMeal: async (_, { savedMeal }, context) => {
      const { user } = context;
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findByIdAndUpdate(
        user._id,
        { $addToSet: { savedMeals: savedMeal } },
        { new: true }
      );
    },
    removeMeal: async (_, { savedMeal }, context) => {
      const { user } = context;
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return await User.findByIdAndUpdate(
        user._id,
        { $pull: { savedMeals: savedMeal } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
