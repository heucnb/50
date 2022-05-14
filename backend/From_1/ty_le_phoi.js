



module.exports = async function (req, res, con) {
 
  

    res.header("Access-Control-Allow-Origin", "*");
    var query = "select `so tai` ,`ngay phoi`, `duc phoi`,`ngay cai lua truoc`   from sheet1 limit 50";
    let myPromise =  new Promise((resolve, reject) => { con.query(query,function (err, result, fields) { if (err) throw err; var data_return =  result.map(function (element) { return Object.values(element); }); resolve( data_return ) ; }); });
  

    var query_2 = "select `so tai` ,`ngay phoi`   from sheet1 limit 50";
    let myPromise_2 =  new Promise((resolve, reject) => { con.query(query_2,function (err, result, fields) { if (err) throw err; var data_return =  result.map(function (element) { return Object.values(element); }); resolve( data_return ) ; }); });
  

  let array = await Promise.all([myPromise, myPromise_2]);

  
  let combinedArray = array[0].concat(array[1]) ;


    return combinedArray ;
     
   

}