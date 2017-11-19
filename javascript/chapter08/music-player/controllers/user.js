exports.showRegister = function(req, res) {
  res.render('register')
}

exports.showLogin = function(req, res) {
  res.render('login', {
    title: '用户登陆测试'
  })
}
