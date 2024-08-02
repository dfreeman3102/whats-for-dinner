const { User, Meal } = require("../models");

const resolvers = {
  Query: {
    me: async () => {
        return User.find({}).populate("savedMeals");
    }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                return { message: "No user with this email!" };
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                return { message: "Incorrect password!" };
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        saveMeal: async (parent, { mealName }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedMeals: mealName } },
                    { new: true }
                ).populate("savedMeals");
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removeMeal: async (parent, { mealName }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedMeals: mealName } },
                    { new: true }
                ).populate("savedMeals");
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
        }
    }
  }
