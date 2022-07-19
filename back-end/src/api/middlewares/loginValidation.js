const isValidPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(404).json(
      { message: '"password" is not allowed to be empty' },
    );
  }

  if (password === undefined) {
    return res.status(404).json(
      { message: '"password" is required' },
    );
  }

  if (password.length < 6) {
    return res.status(404).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }

  next();
};

const isValidEmail = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(404).json({ message: '"email" is not allowed to be empty' });
  }

  if (email === undefined) {
    return res.status(404).json({ message: '"email" is required' });
  }

  const pattern = /\S+@\S+\.\S+/;
  const validateEmail = (e) => e.match(pattern);

  if (!validateEmail(email)) {
    return res.status(404).json({ message: '"email" is not on the correct format' });
  }

  next();
};

const isValidName = async (req, res, next) => {
  const { name } = req.body;

  if (name === '') {
    return res.status(404).json({ message: '"name" is not allowed to be empty' });
  }

  if (name === undefined) {
    return res.status(404).json({ message: '"name" is required' });
  }

  if (name.length < 12) {
    return res.status(404).json(
      { message: '"name" length must be at least 12 characters long' },
    );
  }

  next();
};

module.exports = {
  isValidPassword,
  isValidEmail,
  isValidName,
};
