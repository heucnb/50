const express = require("express");

const app = express();
var fs = require("fs");
const path = require('path');
function ghep_file(){
    const Folder = './static/fontend';
    const fs = require('fs');
    var file_name = "";


    // đọc tên các file trong folder
    // cho file index.js cuối cùng
    fs.readdirSync(Folder).forEach(file => {
         
     if (path.extname(file) == ""){ fs.readdirSync(Folder + "/" + file ).forEach(file_con => { file_name  =   file_name + "," + file + "/" + file_con;}) };
     if (path.extname(file) == ".js" && file !== 'index.js' ){ file_name  =   file_name + "," + file };
    
      console.log(file_name);
    });

    // tạo mảng file_name chứa tên các file
    file_name = file_name.split(",");
    
    file_name = file_name.slice(1);
    file_name.push('index.js')
    console.log(file_name);
  
    var fileData = [];

     
    for (let index = 0; index < file_name.length; index++) {
         // đọc data các file 
    
        fileData.push(fs.readFileSync('./static/fontend'+ '/' + file_name[index] , 'utf8'));
   }

  

     
      var file = "";
      for (let index = 0; index < fileData.length; index++) {
           file = file + fileData[index];   
      }
    
    
      fs.writeFile('./static/index_ghep_file.js', file, { flag: 'w+' }, err => {});
    
  
};
ghep_file();

app.listen(7000, () => console.log("Khi có sự thay đổi ở fontend sẽ ghép các file lại thành file index_ghep_file.js----" + 7000));
//------
// const { exec } = require("child_process");

// exec("./node_modules/.bin/babel ./static/index_ghep_file.js > ./static/index_product_babel.js", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });