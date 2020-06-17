// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LANGUAGES = require('../../consts/consts').LANGUAGES;

const GenderSchema = new Schema({
    key: {type: String, unique: true},
    en: {type: String},
    ru: {type: String},
});


GenderSchema.methods.getPublicData = function () {
    const data = {
        key: this.key,
    };
    for(const language of LANGUAGES){
        if (this[language]) {
            data[language] = this[language];
        }
    }
    return data;
};

module.exports = mongoose.model('Gender', GenderSchema);
