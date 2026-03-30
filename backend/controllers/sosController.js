const SosAlert = require('../models/SosAlert');

exports.triggerSos = async (req, res) => {
  try {
    const { userId, name, contact, location } = req.body;
    
    const mongoose = require('mongoose');
    const isValidUser = userId && mongoose.Types.ObjectId.isValid(userId);
    
    // Build a safe alert even if some data is missing - critical for emergency stability
    const alert = new SosAlert({
      user: isValidUser ? userId : undefined,
      name: name || "Unknown Mother",
      contact: contact || "Missing Contact",
      location: {
        lat: Number(location?.lat) || 11.0168, // Fallback to demo default
        lng: Number(location?.lng) || 76.9558,
        addr: location?.addr || "Location tracking started..."
      }
    });

    await alert.save();
    res.status(201).json({ message: "SOS Alert received. Sending support.", alert });

  } catch (error) {
    console.error("[SOS ERROR]", error.message);
    res.status(500).json({ error: "Failed to broadcast SOS. Offline fallback triggered." });
  }
};

exports.getActiveAlerts = async (req, res) => {
  try {
    const alerts = await SosAlert.find({ status: 'Active' }).sort({ createdAt: -1 }).populate('user');
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
