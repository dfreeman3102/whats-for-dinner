const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  savedMeals: [String] 

});

// Middleware to hash the password before saving the user
userSchema.pre("save", async function (next) {
  // Check if the password is new or has been modified
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10; // Number of salt rounds for hashing
    this.password = await bcrypt.hash(this.password, saltRounds); // Hash the password
  }
  next();
});

// Method to compare a given password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password); // Compare passwords and return boolean
};

const User = model("User", userSchema);

module.exports = User;
