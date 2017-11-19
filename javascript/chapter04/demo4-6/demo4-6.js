/*
 * �ļ�����ģ��
 */
var fs = require('fs');
/*�����ļ����ƺ���copy()
* src����Ҫ��ȡ���ļ�
* dist:Ŀ���ļ�
* callback:�ص�����
* */
function copy(src, dist, callback) {
  //��ȡ�ļ�
  fs.readFile(src, function(err, data) {
    if (err) {
      return callback(err);
    }
    //д���ļ�
    fs.writeFile(dist, data.toString(), function(err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
}
module.exports = copy;
