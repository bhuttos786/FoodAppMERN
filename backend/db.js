const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shahzadgofood:shahzadgofood@cluster0.4d0gsfl.mongodb.net/gofood?retryWrites=true&w=majority'
const mongoDB = async function () {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        // Additional code for your application

        const foodItemscollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const fetchedfoodItems = await foodItemscollection.find({}).toArray();
        const fetchedfoodCategory = await foodCategoryCollection.find({}).toArray();

        global.food_items = fetchedfoodItems;
        global.foodCategory = fetchedfoodCategory;

        // console.log(fetchedData);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

    }
}

module.exports = mongoDB;





