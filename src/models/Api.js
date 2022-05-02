const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },

    image: {
        type: String,
        require: true,
    },
});

const Character = mongoose.model('api', characterSchema, 'api-characters');

module.exports = Character;