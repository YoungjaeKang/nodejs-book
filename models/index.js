const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);

// 모델을 시퀄라이즈 객체에 연결 -> 나중에 시퀄라이즈편 이쪽 다시 읽어보기

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;