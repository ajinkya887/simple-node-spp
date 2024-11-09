const User = require('../models/users');

// Controller to add a new user
exports.addUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const newUser = new User({ firstName, lastName, email });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allDbUsers = await User.find();
    const html = `
      <ul>
        ${allDbUsers
          .map((user) => `<li>${user.firstName} - ${user.lastName} - ${user.email}</li>`)
          .join('')}
      </ul>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
};
