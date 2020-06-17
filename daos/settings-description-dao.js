// Copyright (c) 2020 Anastasiia Birillo

const mongoose = require("mongoose");

const SettingsDescription = mongoose.model("SettingsDescription");

const createSettingsDescription = async (settingsDescription) => {
    const sd = new SettingsDescription({
        profile: settingsDescription.profile,
        actions: settingsDescription.actions,
        task: settingsDescription.task,
        finalScreen: settingsDescription.finalScreen
    });
    return await sd.save();
};

const deleteSettingsDescription = async (settingsDescription) => {
    return await settingsDescription.remove();
};

module.exports = {
    createSettingsDescription,
    deleteSettingsDescription,
};
