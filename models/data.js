db.users.remove({});
db.users.insert([
  {
    "username": "admin",
    "password": "21232f297a57a5a743894a0e4a801fc3",
    "admin": true,
    "avatar": "assets/img/anime.png"
  },
  {
    "username": "test",
    "password": "098f6bcd4621d373cade4e832627b4f6",
    "admin": false,
    "avatar": ""
  }]
);
