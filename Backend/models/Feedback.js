// Feedback.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Feedback = sequelize.define('Feedback', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  response: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

export default Feedback;