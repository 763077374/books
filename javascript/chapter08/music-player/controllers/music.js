var qstring = require('querystring')
var formidable = require('formidable')
var config = require('../config')
var path = require('path')

var storage = [
  { id: 1, title: '富士山下', singer: '陈奕迅', music: '陈奕迅 - 富士山下.mp3', poster: '陈奕迅.jpg' },
  { id: 2, title: '石头记', singer: '达明一派', music: '达明一派 - 石头记.mp3', poster: '达明一派.jpg' },
  { id: 3, title: '青城山下白素贞', singer: '好妹妹乐队', music: '好妹妹乐队 - 青城山下白素贞.mp3', poster: '好妹妹乐队.jpg' },
  { id: 4, title: '友情岁月', singer: '黄耀明', music: '黄耀明 - 友情岁月.mp3', poster: '黄耀明.jpg' },
  { id: 5, title: '梦里水乡', singer: '江珊', music: '江珊 - 梦里水乡.mp3', poster: '江珊.jpg' },
  { id: 6, title: 'Blowing In The Wind', singer: '南方二重唱', music: '南方二重唱 - Blowing In The Wind.mp3', poster: '南方二重唱.jpg' },
  { id: 7, title: '女儿情', singer: '万晓利', music: '万晓利 - 女儿情.mp3', poster: '万晓利.jpg' },
  { id: 8, title: '王馨平', singer: '别问我是谁', music: '王馨平 - 别问我是谁.mp3', poster: '王馨平.jpg' },
  { id: 9, title: '五环之歌', singer: '岳云鹏', music: '岳云鹏,MC Hotdog - 五环之歌.mp3', poster: '岳云鹏.jpg' }
]

exports.showIndex = function(req, res) {
  res.render('index', {
    title: '首页',
    musicList: storage
  })
}

exports.showAdd = function(req, res) {
  res.render('add', {
    title: '添加音乐'
  })
}

exports.doAdd = function(req, res) {
  // 表单post提交的时候，没有enctype的情况下，可以使用下面这种方式来接收和处理post提交的数据
  // var data = ''
  // req.on('data',function (chunk) {
  //   data += chunk
  // })
  // req.on('end',function () {
  //   var postBody = qstring.parse(data)
  //   console.log(postBody)
  //   res.end(JSON.stringify(postBody))
  // })

  // 如果要处理有文件的表单，那么可以使用社区提供的一个包：formidable
  var form = new formidable.IncomingForm()
  form.uploadDir = config.uploadPath
  form.keepExtensions = true
  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.end(err.message)
    }
    var title = fields.title
    var singer = fields.singer
    var music = path.basename(files.music.path)
    var poster = path.basename(files.poster.path)
    var id = 0
    storage.forEach(function(item) {
      if (item.id > id) {
        id = item.id
      }
    })
    storage.push({
      id: id + 1,
      title: title,
      singer: singer,
      music: music,
      poster: poster
    })
    res.writeHead(302, {
      'Location': 'http://127.0.0.1:3000/'
    })
    res.end()
  })

}

exports.showEdit = function(req, res) {
  var id = req.query.id
  var music = {}
    // 根据 id 查询出该id在数组中对应的项
  storage.forEach(function(item, index) {
    if (item.id == id) {
      music = item
    }
  })
  res.render('edit', {
    title: '编辑音乐',
    music: music
  })
}

exports.doEdit = function(req, res) {
  console.log('doedit 被执行了')
  var id = req.query.id
    // 获取用户提交的数据
  var data = ''
  req.on('data', function(chunk) {
    data += chunk
  })
  req.on('end', function() {
    var postBody = qstring.parse(data)
      // 根据id找到数据中该项的索引
      var music_index = 0
      storage.forEach(function (item, index) {
        if (item.id == id) {
          music_index = index
        }
      })
      storage[music_index].title = postBody.title
      storage[music_index].singer = postBody.singer
      res.writeHead(302, {
        'Location': 'http://127.0.0.1:3000/'
      })
      res.end()
  })


  // 然后做修改操作
}


// 如何获取和解析get请求提价的查询字符串中参数 url模块的parse方法的第二个参数
// 如何从数组中删除一个元素  splice
exports.doRemove = function(req, res) {
  // 获取查询字符串中的 id
  var id = req.query.id
  var music_index = 0
    // 通过该 id 找到数组中的该项
  storage.forEach(function(item, index) {
      if (item.id == id) {
        music_index = index
      }
    })
    // 然后进行真正的删除操作,根据索引下标进行删除
  storage.splice(music_index, 1)
  res.writeHead(302, {
    'Location': 'http://127.0.0.1:3000/'
  })
  res.end()
}
