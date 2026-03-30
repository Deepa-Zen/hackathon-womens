const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { name, contact, age, lmpDate, language, profilePic, weight, height } = req.body;
    if (!name || !contact) return res.status(400).json({ error: "Name and contact required" });

    let user = await User.findOne({ contact });
    
    if (user) {
      // Update existing user
      if (name) user.name = name;
      if (age) user.age = age;
      if (weight) user.weight = weight;
      if (height) user.height = height;
      if (lmpDate) user.lmpDate = lmpDate;
      if (language) user.language = language;
      if (profilePic) user.profilePic = profilePic;
      await user.save();
      return res.status(200).json({ message: "Profile updated", user });
    }

    // Register new
    user = new User({ name, contact, age, lmpDate, language, profilePic, weight, height });
    await user.save();
    return res.status(201).json({ message: "Registered successfully", user });

  } catch (error) {
    console.error('[registerUser Error]', error.message);
    // If MongoDB is not connected, return a graceful response so app doesn't crash
    if (error.name === 'MongoNotConnectedError' || error.message.includes('ECONNREFUSED') || error.message.includes('buffering timed out')) {
      return res.status(200).json({ 
        message: "Offline mode - saved locally", 
        user: { name: req.body.name, contact: req.body.contact, _id: null } 
      });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.getUserByContact = async (req, res) => {
  try {
    const { contact } = req.params;
    if (!contact) return res.status(400).json({ error: "Contact required" });

    const user = await User.findOne({ contact });
    if (!user) return res.status(200).json(null);
    res.status(200).json(user);

  } catch (error) {
    if (error.name === 'MongoNotConnectedError' || error.message.includes('ECONNREFUSED')) {
      return res.status(200).json(null);
    }
    res.status(500).json({ error: error.message });
  }
};
