const { Sequelize, DataTypes } = require("sequelize");
const db = require("../data/db");

const Comment = db.define("Comment", {
  comment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    field: 'created_at',
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "user_id",
    },
  },
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "movies",
      key: "movie_id",
    },
  },
  series_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "series",
      key: "series_id",
    },
  },
}, {
  tableName: 'comments',
  timestamps: false,
});

module.exports = Comment;
