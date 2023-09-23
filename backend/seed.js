const Quote = require('./models/Quote');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/quoteApp-Live')
    .then(()=> console.log('quoteApp-Live DB connected'))
    .catch(err => console.log(err))


const dummyData = [
    {
        text: "The purpose of our lives is to be happy.",
        author:"Dalai Lama"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    {
        text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison"
    },
];

async function seedDB(){
    await Quote.deleteMany({});
    await Quote.insertMany(dummyData);
    console.log('DB seeded!');
}

seedDB();