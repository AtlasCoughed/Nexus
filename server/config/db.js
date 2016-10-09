const Sequelize = require('sequelize');
const config    = require('./config');
const db = new Sequelize(config.uri);

db
  .sync()
  .then(success => console.log('Successfully connected to Sequelize database'))
  .catch(err => console.log('Error connecting to Sequelize database:', err));


/* ------------------- USER ------------------- */
const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      len: [1, 255]
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cohortId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  profilePic: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true
  },
});

/* ------------------- COHORT ------------------- */
const Cohort = db.define('Cohort', {
  cohort: Sequelize.INTEGER
});

/* ------------------- ANNOUNCEMENT ------------------- */
const Announcement = db.define('Announcement', {
  announcement: Sequelize.STRING,
  cohortId: Sequelize.INTEGER
});

/* ------------------- TO DO LIST ------------------- */
const Todo = db.define('Todo',
  {
    todo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: Sequelize.INTEGER
  },
  {
    tableName: 'Todos',
    timestamps: true
  }
);

/* ------------------- ASSOCIATIONS ------------------- */
User.hasMany(Todo, { foreignKey: 'adminId' });
Cohort.hasMany(User);
Cohort.hasMany(Announcement);

module.exports = {
  User,
  Cohort,
  Announcement,
  Todo
};
