
// convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
 // vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'

// fuction css bằng javascript
 function sheet_style(string_selector, string_css, mySheet) {
  
 //    let mySheet = document.getElementById("style").sheet


    let array_style = mySheet.cssRules ;
  
    let   css =  string_selector + string_css ;
    
    let tim_thay_string_selector = false ;
    let len = array_style.length ;
    for (let index = 0; index < len; index++) {
        if ( array_style[index].selectorText ===  string_selector) {
        tim_thay_string_selector = true ;
    
        mySheet.deleteRule(index);
         return mySheet.insertRule(css, index);
         
      
    }
        
    }

if (tim_thay_string_selector === false) {
 
    return   mySheet.insertRule(css);
}
    
 
    
}

// vd: style tag p   ta dùng     sheet_style('p',  ' { border: 2px solid red; }')