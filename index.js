const express = require("express");

var fs = require("fs");
// lưu file index.html vào ram
var index_html =  fs.readFileSync('./'+ '/' + 'index.html', 'utf8') ;

const path = require('path');

// Với việc sử dụng .env : Giấu các thông tin bí mật (username, password) trong file .env, không được commit thông qua git thông thường. Tận dụng để chuyển qua lại giữa các môi trường ứng với mục đích sử dụng khác nhau.
const dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");
var con = mysql.createConnection({ host: process.env.host, user: process.env.user, password:process.env.password, database: process.env.database, }); con.connect(function (err) { if (err) { console.log("Error connecting to Db"); return; } console.log("Connection mysql established"); });

const app = express();
const port = process.env.port;
//vd: truy cập file /static/product_index.js trên url gõ localhost/product_index.js

var options = {
  etag: true,
  redirect: true,
  setHeaders: function (res, _path, stat) {

    // _path là các string src có trong file index.html mà chưa bị cache được brower gửi lên sever để lấy dữ liệu
    // _path.includes('index_ghep_file.js')  kiểm tra trong string _path có chứa string 'index_ghep_file.js' nếu có trả về true
    // max-age tính bằng giây  604800 là 1 tuần
    res.set({

        'Cache-Control' :  (_path.includes('index_ghep_file.js')||_path.includes('styles.css') ) ? 'no-store' : 'public, max-age=604800'
      });
  }
}






app.use(express.static((__dirname + "/static") , options   )  );


// nhận body post từ axios
app.use(express.urlencoded({extended: true }));
app.use(express.json());
      // readdirSync(Folder)  : đọc Folder sẽ được tên các file
    // tao array Url vào [] file_name
    const Folder = './backend';
    var file_name = "";
    fs.readdirSync(Folder).forEach(file => { 
     if (path.extname(file) == ""){ fs.readdirSync(Folder + "/" + file ).forEach(file_con => { file_name  =   file_name + "," +"/" + file + "/" + file_con.slice(0,file_con.length - 3) ;}) };
     if (path.extname(file) == ".js"){ file_name  =   file_name + "," +"/" + file.slice(0, file.length - 3) };
    });
    file_name = file_name.split(",");
    file_name = file_name.slice(1);
var model = [];
app.use( function (req, res) {

  console.log(req.path);
  let string_path = req.path ;
  // lấy string đầu tiên có /a và đừng sau là bất kì ký tự gì
 let path_match =  string_path.match(/\/.*/) ;
 console.log(path_match[0]);
      if (string_path === path_match[0]) {
        res.write(index_html); 
        return res.end();
        
      }

      
});

app.get('/hh.html',function(req,res){
  const data = fs.readFileSync('./static/hh.html', 'utf8');
 
  res.write(data); 
  return res.end();

});


//  model[index] là fuction khớp với file_name[index]    
// vd: model[index]  là  function (req, res, con) { return  res.send(req.body["id"].toString()); }
// vd: app.all(  "/decrement"  , function (req, res) {    model[index](req, res, con); }); 
for (let index = 0; index < file_name.length; index++) {
  console.log(file_name[index]);

 model.push( require("./backend" + file_name[index] + ".js"));

 app.all(file_name[index], function (req, res) {    model[index](req, res, con); });

}

app.listen(port, () => console.log("Backend server live on " + port));
