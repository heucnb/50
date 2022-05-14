module.exports =   function (req, res, con) {

 
        let myPromise = new Promise(function(resolve, reject) { 
            setTimeout(() => { resolve('44444444444'); }, 2000);
            
           
        });




          return    myPromise.then(
                        function(value) { /* code if successful */
                      
                     return  value;

                 


                    },
                        function(error) { /* code if some error */ 
                    
                        return   error ;
                    }
                        );

     


    
    
    //  var gui = await myPromise ;

    //                 console.log(gui)
   //  return   res.send(   gui );
   
   //   res.send(   'dddddddddddd' );
   
}