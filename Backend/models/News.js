import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const News = sequelize.define('News', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  media: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // imageUrl: { 
  //   type: DataTypes.STRING,
  //   allowNull: true
  // }
});

export default News;