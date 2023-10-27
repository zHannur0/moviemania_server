const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Successfully connected to db!");
    } catch (error) {
        console.log(error);
        console.log("Filed to connect db!");
    }
}