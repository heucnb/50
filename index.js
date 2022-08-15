const express = require("express");
var fs = require("fs");

var react =  '<script  >'+ fs.readFileSync('./static/CDN'+ '/' + 'react.development.js', 'utf8') + '</script>' ;
var react_dom =  '<script  >'+ fs.readFileSync('./static/CDN'+ '/' + 'react-dom.development.js', 'utf8') + '</script>' ;
var index_ghep_file =  '<script  >'+   fs.readFileSync('./static'+ '/' + 'index_ghep_file.js', 'utf8') + '</script>' ;
var index_html =  fs.readFileSync('./'+ '/' + 'index.html', 'utf8') ;
var all_file = index_html + react + react_dom + index_ghep_file ;

const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");
var con = mysql.createConnection({ host: process.env.host, user: process.env.user, password:process.env.password, database: process.env.database, }); con.connect(function (err) { if (err) { console.log("Error connecting to Db"); return; } console.log("Connection mysql established"); });

const app = express();
const port = process.env.port;
//vd: truy cập file /static/product_index.js trên url gõ localhost/product_index.js
app.use(express.static(__dirname + "/static"));
// nhận body post từ axios
app.use(express.urlencoded({extended: true }));
app.use(express.json());

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
app.get("/", function (req, res) {

        res.write(all_file); 
        return res.end();
});

for (let index = 0; index < file_name.length; index++) {
  console.log(file_name[index]);

 // ở đây có hàm res.send rồi fuction sau đó chỉ cần return value trả về thôi+
 
 model.push( require("./backend" + file_name[index] + ".js"));
  console.log(model[index]); 
  
 app.all(file_name[index], function (req, res) {    model[index](req, res, con); });

}

//console.log(process.env);
app.listen(port, () => console.log("Backend server live on " + port));
