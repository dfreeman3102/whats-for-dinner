const {Schema, model} = require('mongoose');

const mealSchema = new Schema({
    mealName: {
        type: String,
        required: true,
        unique: true,
    }
});

const Meal = model('Meal', mealSchema);

module.exports = Meal;