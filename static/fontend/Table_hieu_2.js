
  // *** thẻ input và button khi click sẽ làm mất sự kiện tiêu điểm của focus, thẻ div thì không. Do đó ta phải setTimeout để lấy lại tiêu điểm sau.

  var array_2d_data = new Array(10000).fill(null).map((i)=> i = new Array(50).fill(null)) ;
  var  text_formular = new Array(10000).fill(null).map((i)=> i = new Array(50).fill(null)) ;

  
  function Table_hieu_2(props) {
  

    var vi_tri_o_truoc = [null,null] ;
    var vi_tri_click_in_array_2d_data =[null,null, null, null];
    var  key_formular = [] ;
    var  formular = [];
    var cong_thuc_chua_hoan_thanh = "";
   var onKeyDown_1_element = false;
    var onKeyDown = false ;
    var onclick_tinh_toan = false ;
    var error_ = false;
  var thanh_dia_chi_0_on_keydown = false ;
  var cong_thuc_them_vao = [null,null,null] ;
  var vi_tri_cong_thuc_them_vao ;
  var table_excel =  useRef(null) ;
      var a =  useRef(null) ;
      var div_change_height =  useRef(null);
      var div_change_width =  useRef(null);
      var thanh_dia_chi_0 =  useRef(null);
      var thanh_dia_chi_1 =  useRef(null);
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      useEffect(() => {

        vi_tri_click_in_array_2d_data = [0,0,0,0] ;
        key_enter(0,0,0,0); // tô màu và focus
       
      }, []);



      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function dia_chi_o_click(dia_chi_o_click_array_2d_row,dia_chi_o_click_array_2d_col, dia_chi_o_click_in_view_row , dia_chi_o_click_in_view_col ) {

   // set địa chỉ ô click trong array2d sau hành động trên

   vi_tri_click_in_array_2d_data[0] = dia_chi_o_click_array_2d_row ;
   vi_tri_click_in_array_2d_data[1] = dia_chi_o_click_array_2d_col;
      // set địa chỉ ô click trong khung nhìn hiển thị
   vi_tri_click_in_array_2d_data[2] = dia_chi_o_click_in_view_row ;
   vi_tri_click_in_array_2d_data[3] = dia_chi_o_click_in_view_col ;

   thanh_dia_chi_1.current.innerHTML = vi_tri_click_in_array_2d_data ;
  
}
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function run_function_when_input_focus(input_, i,j,i_array_2d) {

     
     
      var input_formula = thanh_dia_chi_0.current;
      // khi di chuyển chuột trong thẻ input xác định vị trí của con chuột tới vị trí nào trong text input
      input_.onmousedown =  function (event) {  setTimeout(() => {


        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = event.target.selectionStart ; 
        console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)
      }, 0);}



            // input nhận bàn phím bắt đầu từ ký tự thứ 2.
                                                      
            // sau đó khi ấn 1 ký tự bất kỳ từ bàn phím thì lưu nó vào  text_formular
            //để khi scroll thì nó xuất hiện lại trên input
            input_.onkeydown  =  function (event) {
              // hàm này sẽ được kích hoạt lại mỗi khi nhấn bàn phím vào input
            console.log("---------------------_input_.onkeydown") ;
            // khi ấn phím khác enter thì tiến hành ghi dữ liệu vào thẻ input
            if (event.keyCode !== 13) {
                // thay đổi độ rộng của input phù hợp với ký tự nhập vào trước đó 
                var length_ = ((input_.value.length + 1) * 8) ; if ( length_ >= 100) { input_.style.width =  length_ + 'px'; }

                // xác dịnh vị trí focus tại vị trí nào trên thẻ input trước khi sự kiện onkeydown điền giá trị vào.
                // sau đó ta cộng thêm 1 để xác định vị trí sau khi nhấn phím
                vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = event.target.selectionStart + 1 ; 
                console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)
               
                //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
                // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
                    // sau đó gán giá trị khi nhấn lên input_formula
                setTimeout(() => {  text_formular[i + i_array_2d][j] = input_.value ;  console.log('text_formular--'+  text_formular[i + i_array_2d][j]); input_formula.value =  text_formular[i + i_array_2d][j] ; input_formula.vi_tri = [i + i_array_2d,j] ;  }, 0);
          
               
            }
              
            
            
            // khi ấn enter thì tiến hành tính toán.                                                       
            if (event.keyCode === 13) { // key code of the keybord key

              console.log("-------------------input enter")
                    if (error_ === false) {
                      

                    // khi ấn enter thì công thức chưa hoàn thành cũng tính
                    tinh_toan(i,j,"cong_thuc_chua_hoan_thanh");

                    
                           // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
                
                    key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i +1 ,j); // tô màu và focus
                  
                    onKeyDown = false ; 
                    setTimeout(() => { onKeyDown_1_element = false ; }, 0);
                    thanh_dia_chi_0_on_keydown = false ;
                    onclick_tinh_toan = false ; 
                    
                    }
                    if (error_) {
                      error_= false ;
                      a.current.children[i+1].children[j+1].innerHTML = "fuction is not defined" ;

                          // set địa chỉ ô click  sau hành động trên
                          dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
                      key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i +1 ,j); // tô màu và focus
                      onKeyDown = false ; 
                      setTimeout(() => { onKeyDown_1_element = false ; }, 0);
                      thanh_dia_chi_0_on_keydown = false ;
                      onclick_tinh_toan = false ;  
                      };
          
            }
            
    
            };

            
      
    }



      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // hàm xử lý xuất hiện thẻ input khi scroll 
      function change_input_scroll(row_vi_tri_remove,col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {

        let i_array_2d =parseInt((a.current.children[0+1].children[0].innerHTML)); 
              //  xoá tô màu  vị trí trước đó: nếu vị trí trước đó = null hoặc không nằm trong khung nhìn thì xoá focus đang hiện diện ngược lại xoá tô màu
              // row_vi_tri_remove = 0  thì dầu tiên remove tô màu ; sau đó kích hoạt document.activeElement.blur(); 
             
              if (row_vi_tri_remove === null || row_vi_tri_remove < 0 || row_vi_tri_remove > limit - 1 )   {  document.activeElement.blur();         } else {    Object.assign(a.current.children[row_vi_tri_remove + 1].children[col_vi_tri_remove+1].style, css.remove_click); }
              if ( row_vi_tri_remove === 0 ||row_vi_tri_remove === limit - 1   )   {  document.activeElement.blur();         }
              if (row_vi_tri_add < 0 || row_vi_tri_add > limit - 1 )   {      vi_tri_o_truoc[0] = row_vi_tri_add ;   vi_tri_o_truoc[1] = col_vi_tri_add ;          }
              else {   
                        // tô màu
                        Object.assign( a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].style, css.click);
                        vi_tri_o_truoc[0] = row_vi_tri_add ;
                        vi_tri_o_truoc[1] = col_vi_tri_add ;

                        console.log('xuất hiện lại thẻ input và xoá tô màu:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove );
                        console.log('xuất hiện lại thẻ input và tô màu:  ' + row_vi_tri_add + '-' + col_vi_tri_add );
                          // phải focus thẻ div dể thẻ đó nhận sự kiện từ bàn phím được
                        // muốn focus thẻ div phải đặt tabindex cho thẻ đó
                        // ** ảnh hưởng của input và button khi click sẽ làm mất đường viền đen focus của thẻ div ; chính là thuộc tính Outline  của css
                        a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].setAttribute('tabindex', -1);
                        a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].focus({preventScroll:true}) ;



                        // xuất hiện lại thẻ input và focus
                      
                        console.log('xuất hiện lại thẻ input và focus') ;
                      
                      
                          a.current.children[row_vi_tri_add +1 ].children[col_vi_tri_add+1].innerHTML = " <input   type='text'  />"  ;
                          var input_ =  a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].children[0] ;
                          Object.assign(input_.style,css.input_focus) ;

                          input_.value = text_formular[row_vi_tri_add+i_array_2d][col_vi_tri_add] ;

                               // thay đổi độ rộng của input phù hợp với ký tự nhập vào
                               var length_ = ((input_.value.length + 1) * 8) ;
                               if ( length_ >= 100) {
                                input_.style.width =  length_ + 'px';
                             
                               
                               }
                      
                
                          // focus phải đặt trong  setTimeout vì nó phải đợi thẻ input value xuất hiện đã.
                          //****** chú ý focus trong react sẽ render ra tiêu điểm hiển thị luôn rồi chạy tiếp hoạt động giống  console.log  */
                          // do vậy nếu ở đoạn code này ta để a.current.children[row_vi_tri_add].children[col_vi_tri_add+1].children[0].focus({preventScroll:true});
                          // thì khi cuộn nhanh quá sẽ có lỗi focus :Uncaught TypeError: Cannot read properties of undefined (reading 'focus') at <anonymous>
                        //  var len = input_.value.length;
                          setTimeout(()=>{ 
                          //  input_.setSelectionRange(len, len); để lựa chọn vị trí focus
                            input_.focus({preventScroll:true});


                            run_function_when_input_focus (input_,row_vi_tri_add,col_vi_tri_add,i_array_2d);
                           
                          },0)

                         
                      
                         

              }



    
      }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // hàm tô màu và focus khi click hoặc enter
      function key_enter(row_vi_tri_remove,col_vi_tri_remove, row_vi_tri_add, col_vi_tri_add) {

          // chuyển trạng thái onKeyDown_1_element = false; vì khi input trước đó xuất hiện onKeyDown_1_element là true do có chỗ settimeout
      onKeyDown_1_element = false;
      thanh_dia_chi_0_on_keydown = false ;
          
              //  xoá tô màu  vị trí trước đó: nếu vị trí trước đó = null hoặc không nằm trong khung nhìn thì xoá focus đang hiện diện ngược lại xoá tô màu
              // row_vi_tri_remove = 0  thì dầu tiên remove tô màu ; sau đó kích hoạt document.activeElement.blur(); 
             
                if (row_vi_tri_remove === null || row_vi_tri_remove < 0 || row_vi_tri_remove > limit - 1 )   {  document.activeElement.blur();         } else { Object.assign(a.current.children[row_vi_tri_remove +1 ].children[col_vi_tri_remove+1].style, css.remove_click);   a.current.children[row_vi_tri_remove +1 ].children[col_vi_tri_remove+1].blur(); }
               if ( row_vi_tri_remove === 0 ||row_vi_tri_remove === limit - 1   )   {  document.activeElement.blur();         }
                // tô màu vị trí mới  nếu vị trí trước đó = null hoặc không nằm trong khung nhìn thì set lại vị trí trước đó ngược lại  tô màu
              
                if (row_vi_tri_add < 0 || row_vi_tri_add > limit - 1 )   {      vi_tri_o_truoc[0] = row_vi_tri_add ;   vi_tri_o_truoc[1] = col_vi_tri_add ;          }
                else {  
                  
                  Object.assign(a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].style, css.click);
         
                vi_tri_o_truoc[0] = row_vi_tri_add ;
                vi_tri_o_truoc[1] = col_vi_tri_add ;

                console.log('xoá tô màu:  ' + row_vi_tri_remove + '-' + col_vi_tri_remove );
                console.log('tô màu:  ' + row_vi_tri_add + '-' + col_vi_tri_add );
                  // phải focus thẻ div dể thẻ đó nhận sự kiện từ bàn phím được
                // muốn focus thẻ div phải đặt tabindex cho thẻ đó
                // ** ảnh hưởng của input và button khi click sẽ làm mất đường viền đen focus của thẻ div ; chính là thuộc tính Outline  của css
                a.current.children[row_vi_tri_add +1 ].children[col_vi_tri_add+1].setAttribute('tabindex', -1);
                a.current.children[row_vi_tri_add + 1].children[col_vi_tri_add+1].focus({preventScroll:true}) ;
                }

               
                
        
                xuat_hien_the_input = false ; 
    
      }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // hàm tính toán công thức 
    // i, j ở đây là giá trị dòng và cột ở vị trí trước đó.
    function tinh_toan(i,j,z) {
      console.log('tính toán----------')
      console.log('tính toán           '+ vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)

     
     
       let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
     
      
      var text = text_formular[i+i_array_2d][j];  
      // chuyển text null bằng '' để slice không bị lỗi.
      if (text == null) { text = '' ; }
        // nếu công thức chưa hoàn thành mà bấm enter thì hoàn thành công thức gần nhất ghi vào text
        let text_den_vi_tri_con_tro = text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) ;
    if (z=== "cong_thuc_chua_hoan_thanh") {
     
      console.log('text_den_vi_tri_con_tro           ' +text_den_vi_tri_con_tro)

        if ((text_den_vi_tri_con_tro.slice(0,1)==="=" || text_den_vi_tri_con_tro.slice(0,1)==="+" )&&(    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"  || text_den_vi_tri_con_tro.slice(-1)===","    )     )
         {
              while ((    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"  || text_den_vi_tri_con_tro.slice(-1)===","    ) ) 
              {
                text_den_vi_tri_con_tro = text_den_vi_tri_con_tro.slice(0,text_den_vi_tri_con_tro.length - 1) ;
              }
             
          }

       
      
    }
    
    
      //*******/.--------------nếu vị trí con trỏ trong thẻ input đứng sau dấu + thì  kết thúc hàm tính toán ở đây bằng trả về công thức chưa hoàn thành khác "" để sự kiện khác tính tiếp
     // ngược lại nếu vị trí con trỏ không đứng sau dấu + thì thì thực hiện các lệnh phía sau là tính toán và trả về kết quả
      console.log('text_den_vi_tri_con_tro----           ' +text_den_vi_tri_con_tro)
     
      if ((text_den_vi_tri_con_tro.slice(0,1)==="=" || text_den_vi_tri_con_tro.slice(0,1)==="+" )&&(    text_den_vi_tri_con_tro.slice(-1)==="+"  ||  text_den_vi_tri_con_tro.slice(-1)==="-"  ||  text_den_vi_tri_con_tro.slice(-1)==="*"  ||  text_den_vi_tri_con_tro.slice(-1)==="/"  || text_den_vi_tri_con_tro.slice(-1)===","    )      ) { console.log(cong_thuc_chua_hoan_thanh);    return  cong_thuc_chua_hoan_thanh = [i,j,text] ; }
    
    
    
      //2.------------------kiểm tra công thức người dùng viết có bị lỗi không nếu bị lỗi thì  kết thúc hàm tính toán ở đây bằng trả về biển lỗi error true để sự kiện khác tính tiếp
      //2.------------------ nếu không lỗi thêm công thức người dùng viết vào mảng formular nơi chứa tất cả các công thức
      if (text.slice(0,1)==="=" || text.slice(0,1)==="+" ) { 

          // tính toán xong thì xoá dữ liệu nhập vào ở thanh địa chỉ
          setTimeout(() => {  thanh_dia_chi_0.current.value = "";}, 0);

        console.log('lưu công thức viết vào mảng formular ')
    
        try {
          // Code có thể gặp lỗi nào đó
          eval(text)
          
        } catch (error) {
          // Code xử lý khi lỗi xảy ra
          console.log('công thức nhập vào bị lỗi')
          vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
          cong_thuc_chua_hoan_thanh = "" ;
          array_2d_data[i+i_array_2d][j] = "fuction is not defined" ;
          return  error_  = true ;
        
        }
    
      
              // kiểm tra xem trong mảng key_formular có tồn tại vị trí i, j được lưu chưa. Nếu có thay đổi công thức ở vị trí đó.
              var index_; 
              var kiem_tra = key_formular.some((e,index)=>{ index_ =  index ; return e[0] === (i+i_array_2d) && e[1] === j  });  
                if (kiem_tra ) {  
                  console.log( "khac nhau" ) ;
              
                      formular[index_]  = eval("(function(){return "+  "array_2d_data["+(i+i_array_2d)+"]["+j+"]" +" = " + text.slice(1) +  ";})")   
                      // tính toán lại tất cả các công thức đã viết
                      formular.forEach((element) => {console.log(element); element(); }) ;
                      // hiện thị giá trị đã tính toán lên trang web bảng tính
                      //element[0] là giá trị i+i_array_2d được lưu nhưng đó là giá trị trước khi scroll. i_array_2d bây giờ là giá trị sau khi scroll.
                      //
                    key_formular.forEach((element) => { 
                                                      if (  ((element[0] -i_array_2d) <= limit -1 ) && ((element[0] -i_array_2d) >= 0 )   ) {
                                                      
                                                        a.current.children[(element[0] + 1 -i_array_2d)].children[element[1]+1].innerHTML = array_2d_data[element[0]][element[1]]  ;
                                                      }
                                                      
                                                      });
                   vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                    cong_thuc_chua_hoan_thanh = "" ;
    
                    } 
                else {  
                  console.log( "tinh 1 cong thuc----------------" ) ;
                // gán địa chỉ thay đổi công thức vào key_formular
                  key_formular.push([i+i_array_2d,j]) ; formular.push(eval("(function(){return "+  "array_2d_data["+(i+i_array_2d)+"]["+j+"]" +" = " + text.slice(1) +  ";})")  ) 
                  
                  const lastItem = formular[formular.length - 1] ;
                  // tính 1 công thức cuối cùng
                  lastItem();
                  console.log(formular.toString());
                  // hiện thị giá trị đã tính toán lên trang web bảng tính nếu giá trị tính toán sau khi scroll nằm trong khung nhìn
                  if ( (i <= limit - 1 )&( i >= 0) ) {
                                                      
                    a.current.children[i +1].children[j+1].innerHTML = array_2d_data[i+i_array_2d][j] ; 
                  }
                 
                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                  cong_thuc_chua_hoan_thanh = "" ;
                
                }
              
        };
    
    
        //3.---------------------------------------------------------------------------------------------------------
        //nếu người dùng không viết công thức mà viết giá trị thì ghi giá trị người dùng viết vào mảng array_2d_data
        
        if (text.slice(0,1)!="=" && text.slice(0,1)!="+" ) { 
             // tính toán xong thì xoá dữ liệu nhập vào ở thanh địa chỉ
          setTimeout(() => {  thanh_dia_chi_0.current.value = "";}, 0);

                // nếu người dùng nhập số  vào input thì hàm + text  sẽ chuyển ký tự khác số thành số. Vd: có nhiều phím cách "  59" sẽ chuyển thành 59, "  .2" sẽ chuyển thành 2 
                  if (isNaN(Number(text)) == false) {
                    array_2d_data[i+i_array_2d][j] = + text;
                    console.log( "array_2d_data["+(i+i_array_2d)+"]["+j+"]       "    +    array_2d_data[i+i_array_2d][j]);
                    // nếu người dùng không nhập gì thì isNaN(Number(text))  sẽ trả về false khi đó ta gán array_2d_data[i+i_array_2d][j] = '' ;
                    if (text==="") {  array_2d_data[i+i_array_2d][j] = ""}
                      // hiện thị giá trị người dùng viết lên trang web bảng tính nếu giá trị tính toán sau khi scroll nằm trong khung nhìn
                    if ( (i <= limit - 1 )&( i >= 0) ) { a.current.children[i +1 ].children[j+1].innerHTML = text ; }


                    // kiểm tra xem trong mảng key_formular có tồn tại vị trí i, j được lưu chưa. Nếu có xoá vị trí đó trong mảng formular và key_formular
                                  // kiểm tra xem trong mảng key_formular có tồn tại vị trí i, j được lưu chưa. Nếu có kiem_tra trả về true
                                  var index_; 
                                  var kiem_tra = key_formular.some((e,index)=>{ index_ =  index ; return e[0] === (i+i_array_2d) && e[1] === j  });  
                                    if (kiem_tra ) {  

                                      formular.splice(index_, 1);
                                      key_formular.splice(index_, 1);
                                  
                                        } 

                        // tính toán lại tất cả các công thức đã viết
                        formular.forEach((element) => {console.log(element); element(); }) ;
                        // hiện thị giá trị đã tính toán lên trang web bảng tính
                        //element[0] là giá trị i+i_array_2d được lưu nhưng đó là giá trị trước khi scroll. i_array_2d bây giờ là giá trị sau khi scroll.
                        //
                      key_formular.forEach((element) => { 
                                                        if (  ((element[0] -i_array_2d) <= limit -1 ) && ((element[0] -i_array_2d) >= 0 )   ) {
                                                        
                                                          a.current.children[(element[0] +1  -i_array_2d)].children[element[1]+1].innerHTML = array_2d_data[element[0]][element[1]]  ;
                                                        }
                                                        
                                                        });                    

                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;   
                  cong_thuc_chua_hoan_thanh = "" ;
                    
                  }

            // nếu người dùng nhập chữ thì gán chữ
                  if (isNaN(Number(text)) == true) {
                    array_2d_data[i+i_array_2d][j] = text;
                  // hiện thị giá trị người dùng viết lên trang web bảng tính nếu giá trị tính toán sau khi scroll nằm trong khung nhìn
                  if ( (i <= limit - 1 )&( i >= 0) ) { a.current.children[i +1 ].children[j+1].innerHTML = text ; }

                  // kiểm tra xem trong mảng key_formular có tồn tại vị trí i, j được lưu chưa. Nếu có xoá vị trí đó trong mảng formular và key_formular  

                         // kiểm tra xem trong mảng key_formular có tồn tại vị trí i, j được lưu chưa. Nếu có kiem_tra trả về true
                         var index_; 
                         var kiem_tra = key_formular.some((e,index)=>{ index_ =  index ; return e[0] === (i+i_array_2d) && e[1] === j  });  
                           if (kiem_tra ) {  

                             formular.splice(index_, 1);
                             key_formular.splice(index_, 1);
                         
                               } 


                   
                      // tính toán lại tất cả các công thức đã viết
                      formular.forEach((element) => {console.log(element); element(); }) ;
                      // hiện thị giá trị đã tính toán lên trang web bảng tính
                      //element[0] là giá trị i+i_array_2d được lưu nhưng đó là giá trị trước khi scroll. i_array_2d bây giờ là giá trị sau khi scroll.
                      //
                    key_formular.forEach((element) => { 
                                                      if (  ((element[0] -i_array_2d) <= limit -1 ) && ((element[0] -i_array_2d) >= 0 )   ) {
                                                      
                                                        a.current.children[(element[0] +1  -i_array_2d)].children[element[1]+1].innerHTML = array_2d_data[element[0]][element[1]]  ;
                                                      }
                                                      
                                                      });              

                  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = undefined ;     
                  cong_thuc_chua_hoan_thanh = "" ;
            
                  }
            
        }
    
        
      
      };
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // lắng nghe các sự khiện khi thao tác với bàn phím (dùng bàn phím)
    function _onKeyDown(event,i,j) {
    

    //  onKeyDown_1_element === false ở đây chỉ tắt lắng nghe sự kiện cho 1 element table cha này.  Còn để ngoài lúc render react là cho tất cả
    
    if (onKeyDown_1_element === false) {

      let i_array_2d =parseInt((a.current.children[0 +1 ].children[0].innerHTML)); 
                
      // 1. element được kích hoạt và element không ở trạng thái tính toán mà bấm phím enter sẽ xuống dòng 
      if (event.key =="Enter" ) {
       
        if (cong_thuc_chua_hoan_thanh === "") {
          console.log("_onKeyPress-----enter--không ở trạng thái tính toán") ;
          // Khi ấn enter mà ô đó không ở trạng thái tính toán (không có thẻ input bên trong )

          a.current.children[i + 1 ].children[j+1].innerHTML =array_2d_data[i + i_array_2d][j] ;


                 // set địa chỉ ô click  sau hành động trên
                 dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;

          key_enter(i,j,i+1,j); // tô màu và focus
          xuat_hien_the_input = false ;   
          onKeyDown = false ; 
          onclick_tinh_toan = false ;  
          onKeyDown_1_element = false;
        }


        if (cong_thuc_chua_hoan_thanh !== "") {
          console.log("onKeyDown-----enter-- tính toán") ;

          if (error_ === false) {
                      

            // khi ấn enter thì công thức chưa hoàn thành cũng tính
            tinh_toan(i,j,"cong_thuc_chua_hoan_thanh");
                 // set địa chỉ ô click  sau hành động trên
                 dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
            key_enter(i,j,i+1,j); // tô màu và focus
            xuat_hien_the_input = false ;   
            onKeyDown = false ; 
            onKeyDown_1_element = false;
            onclick_tinh_toan = false ; 
            
            }
            if (error_) {
              error_= false ;
              a.current.children[i + 1].children[j+1].innerHTML = "fuction is not defined" ;

                 // set địa chỉ ô click  sau hành động trên
                 dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
              key_enter(i,j,i+1,j); // tô màu và focus
              xuat_hien_the_input = false ;   
              onKeyDown = false ; 
              onKeyDown_1_element = false;
              onclick_tinh_toan = false ;  
              };




                          
        }





     


        
      }
    
      if (event.key != "Enter") {
        console.log("_onKeyDown--nhập dữ liệu")
        // khi ấn phím khác enter thì viết công thức hoặc dữ liệu vào ô đó (thiết lập ô đó ở trạng thái tính toán)
        a.current.children[i + 1].children[j+1].innerHTML = " <input   type='text'  />" ;
        let input_ =  a.current.children[i +1 ].children[j+1].children[0];

        xuat_hien_the_input = true ;

        Object.assign(input_.style,css.input_focus) ;

         // lúc này input nhận giá trị từ bàn phím hiện lên thẻ input 



        // gán giá trị đầu tiên khi nhấn phím đó vào text_formular; các giá trị tiếp theo input xuất hiện sẽ lắng nghe sự kiện onKeyDown để gán tiếp
        //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
        // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
        // sau đó gán giá trị khi nhấn lên input_formula
        var input_formula = thanh_dia_chi_0.current;

     
        

        setTimeout(() => {  text_formular[i + i_array_2d][j] = input_.value ;  console.log( text_formular[i + i_array_2d][j]) ;  input_formula.value =  text_formular[i + i_array_2d][j] ; input_formula.vi_tri = [i + i_array_2d,j] ;  } , 0);
        input_.focus({preventScroll:true});


        
        onclick_tinh_toan = true ;
      
        vi_tri_o_truoc[0] = i ;
        vi_tri_o_truoc[1] = j ;


         // trước gán sự kiện keydown cho input thì ta phải tắt lắng nghe sự kiện onkedown cho 1 element table cha của input 
         onKeyDown_1_element = true ;
        run_function_when_input_focus (input_,i,j,i_array_2d);

                      
                      
        }
      
    }
                  
                              
                                
                  
                    
    }
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    var mien_select = [0,0,0,0];
    var row_begin  ; 
    var col_begin  ;
    var row_end = 0 ;
    var col_end = 0 ; 
    var col_xa_vi_tri_bat_dau_nhat = null ; 
    var row_xa_vi_tri_bat_dau_nhat = null ;

    // hàm chọn miền để sau đó copy giống excel

    function _onMouseEnter(event,i,j) {

      // react thiết lập event.buttons bằng null : không điều khiển nút chuột để tăng hiệu suất. Để thiết lập event.buttons như javascript gốc cần chạy hàm event.persist();
      event.persist();

      //1. Chọn  miền dưới vị trí đầu tiên nhấn giữ chuột và nằm bên phải
        if (event.buttons == 1&& row_begin <=i && col_begin <=j) {
          //***  riêng vùng này phải xoá vùng chọn cuối cùng ở các vùng chọn khác vì các vùng đó không chạy code ở = i, = j
          console.log(col_xa_vi_tri_bat_dau_nhat);
          console.log(row_xa_vi_tri_bat_dau_nhat);
    
                                // xoá vùng chọn còn sót ở phần code 2. Chọn miền trên vị trí đầu tiên nhấn giữ chuột và nằm bên phải
                                for (let index = row_begin; index >= row_end; index--) {
                                  for (let index_j = col_begin; index_j <= col_end; index_j++) {
                                    Object.assign(a.current.children[index +1 ].children[index_j+1].style , css.remove_select) ;

                                  
                                  }
                                }

                                  // xoá vùng chọn còn sót ở phần code //3. Chọn  miền dưới vị trí đầu tiên nhấn giữ chuột và nằm bên trái

                                  for (let index = row_begin; index <= row_end; index++) {
                                    for (let index_j = col_begin; index_j >= col_end; index_j--) {
                                      Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
                                    }
                                  }

                                  // xoá vùng chọn còn sót ở phần code //4. Chọn miền trên vị trí đầu tiên nhấn giữ chuột và nằm bên trái

                                  for (let index = row_begin; index >= row_end; index--) {
                                    for (let index_j = col_begin; index_j >= col_end; index_j--) {
                                      Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
                                    }
                                  }







          mien_select[0] = row_begin ;
          mien_select[1] = col_begin ;
          row_end = i ;
          col_end = j ;
          if (col_xa_vi_tri_bat_dau_nhat <= j) { col_xa_vi_tri_bat_dau_nhat = j } ;
          if (row_xa_vi_tri_bat_dau_nhat <= i) { row_xa_vi_tri_bat_dau_nhat = i } ;

          // đánh dấu vùng lựa chọn
          for (let index = row_begin; index <= row_end; index++) {
            for (let index_j = col_begin; index_j <= col_end; index_j++) {
              Object.assign(a.current.children[index +1 ].children[index_j+1].style , css.select) ;
              
            
            }
          }

          // huỷ bỏ cột chọn thừa
          for (let index = row_begin; index <= row_xa_vi_tri_bat_dau_nhat; index++) {
            for (let index_j = col_end + 1 ; index_j <= col_xa_vi_tri_bat_dau_nhat; index_j++) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
            }
          }

          // huỷ bỏ dòng chọn thừa
          for (let index = row_end + 1; index <= row_xa_vi_tri_bat_dau_nhat; index++) {
            for (let index_j = col_begin ; index_j <= j; index_j++) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
            }
          }

          





          mien_select[2] = i ;
          mien_select[3] = j ;


        
        }

        //2. Chọn miền trên vị trí đầu tiên nhấn giữ chuột và nằm bên phải
        if (event.buttons == 1&& row_begin >i && col_begin <=j ) {
          mien_select[0] = row_begin ;
          mien_select[1] = col_begin ;
          row_end = i ;
          col_end = j ;
          if (col_xa_vi_tri_bat_dau_nhat <= j) { col_xa_vi_tri_bat_dau_nhat = j } ;
          if (row_xa_vi_tri_bat_dau_nhat > i || row_xa_vi_tri_bat_dau_nhat == null ) { row_xa_vi_tri_bat_dau_nhat = i } ;

            // đánh dấu vùng lựa chọn
            for (let index = row_begin; index >= row_end; index--) {
              for (let index_j = col_begin; index_j <= col_end; index_j++) {
                Object.assign(a.current.children[index + 1].children[index_j+1].style , css.select) ;
              }
            }

              // huỷ bỏ cột chọn thừa
          for (let index = row_begin; index >= row_xa_vi_tri_bat_dau_nhat; index--) {
            for (let index_j = col_end + 1 ; index_j <= col_xa_vi_tri_bat_dau_nhat; index_j++) {
              Object.assign(a.current.children[index +1 ].children[index_j+1].style , css.remove_select) ;
            }
          }


            // huỷ bỏ dòng chọn thừa
            for (let index = row_end - 1; index >= row_xa_vi_tri_bat_dau_nhat; index--) {
              for (let index_j = col_begin ; index_j <= j; index_j++) {
                Object.assign(a.current.children[index +1 ].children[index_j+1].style , css.remove_select) ;
              }
            }

            mien_select[2] = i ;
            mien_select[3] = j ;
        

        }


          //3. Chọn  miền dưới vị trí đầu tiên nhấn giữ chuột và nằm bên trái
          if (event.buttons == 1&& row_begin <=i && col_begin >j) {
            mien_select[0] = row_begin ;
            mien_select[1] = col_begin ;
            row_end = i ;
            col_end = j ;
            if (col_xa_vi_tri_bat_dau_nhat > j || col_xa_vi_tri_bat_dau_nhat == null ) { col_xa_vi_tri_bat_dau_nhat = j } ;
            if (row_xa_vi_tri_bat_dau_nhat <= i) { row_xa_vi_tri_bat_dau_nhat = i } ;

              // đánh dấu vùng lựa chọn
          for (let index = row_begin; index <= row_end; index++) {
            for (let index_j = col_begin; index_j >= col_end; index_j--) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.select) ;
            }
          }


            // huỷ bỏ cột chọn thừa
            for (let index = row_begin; index <= row_xa_vi_tri_bat_dau_nhat; index++) {
              for (let index_j = col_end - 1 ; index_j >= col_xa_vi_tri_bat_dau_nhat; index_j--) {
                Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
              }
            }
            
              // huỷ bỏ dòng chọn thừa
          for (let index = row_end + 1; index <= row_xa_vi_tri_bat_dau_nhat; index++) {
            for (let index_j = col_begin ; index_j >= j; index_j--) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
            }
          }

          mien_select[2] = i ;
          mien_select[3] = j ;
        
    
            
    
    
          
          }



          //4. Chọn miền trên vị trí đầu tiên nhấn giữ chuột và nằm bên trái
        if (event.buttons == 1&& row_begin >i && col_begin >j ) {
          mien_select[0] = row_begin ;
          mien_select[1] = col_begin ;
          row_end = i ;
          col_end = j ;
          if (col_xa_vi_tri_bat_dau_nhat > j || col_xa_vi_tri_bat_dau_nhat == null ) { col_xa_vi_tri_bat_dau_nhat = j } ;
          if (row_xa_vi_tri_bat_dau_nhat > i || row_xa_vi_tri_bat_dau_nhat == null ) { row_xa_vi_tri_bat_dau_nhat = i } ;

            // đánh dấu vùng lựa chọn
            for (let index = row_begin; index >= row_end; index--) {
              for (let index_j = col_begin; index_j >= col_end; index_j--) {
                Object.assign(a.current.children[index + 1].children[index_j+1].style , css.select) ;
              }
            }

              // huỷ bỏ cột chọn thừa
          for (let index = row_begin; index >= row_xa_vi_tri_bat_dau_nhat; index--) {
            for (let index_j = col_end - 1 ; index_j >= col_xa_vi_tri_bat_dau_nhat; index_j--) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
            }
          }


            // huỷ bỏ dòng chọn thừa
            for (let index = row_end - 1; index >= row_xa_vi_tri_bat_dau_nhat; index--) {
              for (let index_j = col_begin ; index_j >= j; index_j--) {
                Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
              }
            }


          

            mien_select[2] = i ;
            mien_select[3] = j ;
        

        }








    
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // thực hiện các sự kiện khi chuột trái được nhấn xuống (dùng chuột)
    let xuat_hien_the_input = false ;
    let vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ;

    function _onMouseDown(_this, i, j,event) {
      console.log("_onMouseDown") ;
     
      if (thanh_dia_chi_0_on_keydown === true) {
        onKeyDown_1_element = true;
      } else {
        // chuyển trạng thái onKeyDown_1_element = false; vì khi input trước đó xuất hiện onKeyDown_1_element là true do có chỗ settimeout
      onKeyDown_1_element = false;
        
      }

   
    
    
      let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML));  
     
      // đầu tiên nó chạy hàm 1 click khởi tạo kiem_tra = 1 do đó khi click thêm trong vòng 300 ms giây thì nó chạy hàm 2 click
    

      
      // 2 click _chuột trái trong vòng 300 ms giây thì chạy lại hàm _onMouseDown . Lúc này kiem_tra là 1 thuộc tính toàn cầu lưu trên dom này ( ta lưu vào kiem_tra thuộc tính của element vì nếu lưu biến toàn cục thì sẽ phải tạo mảng biến và truy cập thì phải truyền vị trí rất phức tạp)
      // khi doubleclick xong thuộc tính kiem_tra của element này là 1 do đó khi click tiếp nó sẽ không chạy chỗ onclick nữa.
      // nó sẽ chạy phần code cuối chỗ   setTimeout(()=>{  return _this.kiem_tra = 0   }, 300); _this.kiem_tra = 1 ; 
      // nếu lúc này 2 click thì nó sẽ chạy lại _onDoubleClick
      if (_this.kiem_tra == 1) {
    
        
                    
                      
                          console.log("_onDoubleClick");
                        _this.innerHTML = " <input   type='text'  />" ;
                        xuat_hien_the_input = true ;
                    

                      let input_ =  _this.children[0];

                      Object.assign(input_.style,css.input_focus) ;
                      
                      input_.value = text_formular[i+i_array_2d][j] ;
                  
                        // thay đổi độ rộng của input phù hợp với ký tự nhập vào
                        var length_ = ((input_.value.length + 1) * 8) ;
                        if ( length_ >= 100) {
                          input_.style.width =  length_ + 'px';
                  
                        
                        }
                       // khi di chuyển chuột trong input này thì lưu lại vị trí của con trỏ vào biến vi_tri_con_tro_khi_di_chuyen_trong_double_click_input
                         //để khi element table _this nhận bàn phím thì làm xuất hiện thẻ input lại và focus tại vị trí trước đó 
                        //******** */ sự kiện onkeydown chỉ ảnh hưởng lên element đó khi nó được focus. Nếu nó không được lấy tiêu điểm thì không kích hoạt được sự kiện
                        // do vậy khi input xuất hiện và focus thì element cha này sẽ không lắng nghe sự kiện onkeydown nữa. ==>  _this.onkeydown  chỉ chạy được 1 lần đầu tiên duy nhất vì _this lắng nghe sự kiện onkeydown trước khi thẻ input xuất hiện. 
                          
                        input_.onmousedown =  function (event) {  setTimeout(() => {
                                                                                        vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = event.target.selectionStart ; 
                                                                                        console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)
                                                                                      }, 0);}

                
                                                                          
                      
                      onclick_tinh_toan = true ;
                      vi_tri_o_truoc[0] = i ;
                      vi_tri_o_truoc[1] = j ;
                      
                      onKeyDown = true ;
                    
                      


                    //****Qúa trình chuyển từ Dom ảo react sang Dom ảo javascript thì focus thực thi ngay luôn trước khi input update value nên ta phải setTimeout */
                    //***chú ý: code javascript chạy xong thì render UI mới chạy trừ   console.log ;    alert  cập nhật luôn sẽ làm code chạy rất chậm;    */
              // gặp setTimeout có thời gian khác 0  thì quá trình render UI thực thi không đợi chạy hết code.
              //  // gặp setTimeout có thời gian = 0  thì quá trình render UI phải đợi chạy hết code xong mới thực thi.
              // không lạm dụng dùng setTimeout vì làm code chậm 
              //===> thao túng Dom: 1 Dom không thể nhận 2 biến trạng thái trong  1 quá trình từ code javascript đến kết thúc render UI 
              //====> muốn nhận 2 biến để xác định trạng thái thì phải rerender  2 lần trở lên thông qua setInterval (hàm setInterval gọi lại các lần sau khoảng thời gian đặt trước
              // qua cơ chế closure javascript ).
                      setTimeout(() => {
                         input_.focus({preventScroll:true}); 
                         vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = input_.value.length ; 
                         console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input                     ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) ;
                      
                        
                    }, 0);
                                
                
                  
            
      
      }
    
      // 1 click  xuống mà ô trước  đó không xuất hiện thẻ input  chạy hàm (chỉ ckhi click vào ô input khi có double click hoặc enter mới không chạy gì còn khi click vào ô khác thì ô đó không có thẻ input nên sẽ chạy)
    
      if ( (_this.kiem_tra == 0 || _this.kiem_tra == undefined)&& typeof _this.children[0] != "object"  ) {

                    
        
        // huỷ bỏ miền chọn cũ
          for (let index = mien_select[0]; index <= mien_select[2]; index++) {
            for (let index_j = mien_select[1]; index_j <= mien_select[3]; index_j++) {
              Object.assign(a.current.children[index + 1].children[index_j+1].style , css.remove_select) ;
            
            }
          }

                    row_begin =  i ; 
                    col_begin = j ;
                    row_xa_vi_tri_bat_dau_nhat = 0;
                    col_xa_vi_tri_bat_dau_nhat = 0 ;

                  // thiết lập để  element div này không lắng nghe sự kiện onKeyDown  (khi dùng chuột ta sẽ khoá nhận bàn phím)
                  onKeyDown = false ;
                  console.log("_onClick---");
                  //1.----------------------------------------------------------------
                  if (onclick_tinh_toan) {
                    // kiểm tra nếu ô trước đó chứa công thức hoặc công thức bị sửa thì phải tính toán. Ngược lại không phải tính toán.
                    console.log("_onClick---tinh_toan");

                            tinh_toan(vi_tri_o_truoc[0],vi_tri_o_truoc[1]);
                                
                                onKeyDown = false ; 
                                onclick_tinh_toan = false ;
    
                  }
    
                  //2.----------------------------------------------------------------------
    
                    if (cong_thuc_chua_hoan_thanh === "") {
              
                      if (!error_) {
                        // điền giá trị sau khi tính toán xong bên trên xong vào. Nếu không phải tính toán thì điền giá trị lưu ở bộ nhớ trước đó vào.
                                  // khi scroll nếu vi_tri_o_truoc[0] < 0  hoặc  > limit - 1  tức là không nằm trong khung nhìn thì không cần gán giá trị vào ô đó nữa ngược lại  tô màu
                                
                                  if (vi_tri_o_truoc[0] == null || vi_tri_o_truoc[0] <0 || vi_tri_o_truoc[0] > limit - 1   )   {           } else {     a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1]+1].innerHTML =array_2d_data[(vi_tri_o_truoc[0]+i_array_2d)][vi_tri_o_truoc[1]] ;  }
                            
                            
                                    console.log("_onClick---công thức hoàn thành = '', tô màu");
                                         // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(i + i_array_2d,j,i ,j) ;
                                    // tô màu vào vị trí i,j
                                    key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i ,j); // tô màu và focus
                            
                        };  
    
                      if (error_) {
                        // kiểm tra công thức ô trước đó lỗi thì báo lỗi
                        error_= false ; 
                        a.current.children[vi_tri_o_truoc[0] + 1].children[vi_tri_o_truoc[1]+1].innerHTML = "fuction is not defined" ; 

                             // set địa chỉ ô click  sau hành động trên
                             dia_chi_o_click(i + i_array_2d,j,i  ,j) ;
                        key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],i,j); // tô màu và focus


                        };
    
                      
                        

                  }
    
                //3.---------------------------------------------------------------------------------------
                    if (cong_thuc_chua_hoan_thanh != "") {
                      console.log("_onClick---viet tiếp công thức");
                      console.log(cong_thuc_chua_hoan_thanh);
                    
                     
                      // nếu công thức đang viết dở thì khi onclick sẽ viết tiếp công thức vào ô trước đó.
                      // r,c là vị trí r,c thẻ input trong khung nhìn nếu là số âm hoặc lớn hơn limit thì là vị trí đó cách toạ độ 0,0 của khung nhìn 
                      // r + i_array_2d là vị trí thực tế
                        var r = parseInt(cong_thuc_chua_hoan_thanh[0] )  ;
                        var c = parseInt(cong_thuc_chua_hoan_thanh[1] )  ;
                   
                        // gán công thức cũ vào text
                        var text = cong_thuc_chua_hoan_thanh[2]  ;
                        let len_text = text.length ;
          
                         // khi lần thứ 2 nhấn vào ô khác mà không di chuyển con trỏ thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input vẫn như cũ
                      // vì thế trước đó vẫn là dấu + nên công thức chưa hoà thành
                      // nếu ấn tiếp vào ô khác mà không viết thêm ký tự + đừng sau. ta cần xoá công thức cũ đã viết đi

          
                     console.log("cong_thuc_chua_hoan_thanh    "+ r +'    '+ c);

                       
                        console.log( cong_thuc_them_vao[0]);
                        // click vào ô khác lần 2,3 thì input_truoc_do.cong_thuc_them_vao[0] và  input_truoc_do.vi_tri_cong_thuc_them_vao[0]  đã được set value
                        // nếu input_truoc_do.cong_thuc_them_vao[0] === undefined tức lần nhấn đầu thì không có công thức cũ để xoá nên không làm gì
                        //  input_truoc_do.vi_tri_cong_thuc_them_vao[0] !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input nghĩa là đã di chuyển con chuột trong thẻ input tức là chấp nhận công thức đã viết nên không xoá nữa
                       if (cong_thuc_them_vao[0] === null ||   vi_tri_cong_thuc_them_vao !== vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ) { }else{   text =   text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length ,len_text)  }
                       
                       
                       let text_update = text.slice(0,vi_tri_con_tro_khi_di_chuyen_trong_double_click_input) + "(array_2d_data["+(i+i_array_2d)+"]["+j + "])" +text.slice(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ,len_text) ;
                       
                        cong_thuc_them_vao[0] = "(array_2d_data["+(i+i_array_2d)+"]["+j + "])" ;
                        cong_thuc_them_vao[1] = i+i_array_2d;
                        cong_thuc_them_vao[2] = j;

                        vi_tri_cong_thuc_them_vao = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input ;
                        console.log( cong_thuc_them_vao[0]);

                       // khi scroll nếu input trước đó nằm trong khung nhìn thì viết tiếp công thức vào input đó
                        // nếu input trước đó không nằm trong khung nhìn thì viết rồi lưu công thức vào mảng text_formular
                        // sau đó hiện công thức đó lên thanh formular để người dùng viết tiếp.
                        if ( (r <= limit - 1 )&( r >= 0) ) {
                              
                          var input_truoc_do = a.current.children[r + 1].children[c+1].children[0]; 

                          console.log('_________________________________' + a.current.children[r + 1].children[c+1].onkeydown)
                          // khi scroll: input trước đó đã xuất hiện lại và đang lắng nghe sự kiện onkeydown ta không dược xoá vì ở đây chỉ thiết lập input lắng nghe onkeydown thôi. nhưng element table cha không lắng nghe onkeydown  === null
                          // không scroll: input trước đó đã xuất hiện và đang lắng nghe sự kiện onkeydown ta phải xoá sự kiện đó đi để khi ấn phím element table cha nghe trước rồi kích hoạt input nghe
                          // input xuất hiện do textarea thì cha của nó đang lắng nghe onkeydown nhưng do ta đã khoá fuction đó bằng onKeyDown_1_element === true nên ta không được xoá input lắng nghe onkeydown
                          if (a.current.children[r + 1].children[c+1].onkeydown === null || onKeyDown_1_element === true) { } else {input_truoc_do.onkeydown = null ;}
                          
                          console.log('_________________________________' + input_truoc_do.onkeydown)
                              
                                input_truoc_do.value = text_update ;
                                text_formular[r+i_array_2d][c ] =  text_update;
                                cong_thuc_chua_hoan_thanh[2] = text_update ;
        
                                  // thay đổi độ rộng của input phù hợp với ký tự nhập vào
                                var length_ = ((input_truoc_do.value.length + 1) * 8) ;
                                if ( length_ >= 100) {
                                  input_truoc_do.style.width =  length_ + 'px';
                              
                                
                                }
                                   //**************************************************** */
                                  //focus thẻ input
                                  // ở đây ta dùng setTimeout vì trong react focus thực hiện trước input update value. 
                             
                           
                             // focus tại vị trí mới nhưng không set lại vi_tri_con_tro_khi_di_chuyen_trong_double_click_input. Biến này vẫn ở trạng thái trước đó
                             let vi_tri_focus = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length ; 
                            console.log('vi_tri_focus      ' + vi_tri_focus)
                            console.log('vi_tri_con_tro_khi_di_chuyen_trong_double_click_input      ' + vi_tri_con_tro_khi_di_chuyen_trong_double_click_input)
                            
                                  setTimeout(() => {
                                  input_truoc_do.focus({preventScroll:true});
                                  input_truoc_do.setSelectionRange(vi_tri_focus, vi_tri_focus);
                                 
                                  }, 0);
                                    
                        // hiện công thức đó lên thanh formular để người dùng viết tiếp.
                        var input_formula = thanh_dia_chi_0.current;
                        input_formula.value = text_formular[r+i_array_2d][c ] ;
                        console.log(text_formular[r+i_array_2d][c ]);
                        input_formula.vi_tri = [r+i_array_2d,c] ;
                                  if (thanh_dia_chi_0_on_keydown === true) {

                                    
                                
                                    setTimeout(() => {

                                       input_formula.focus({preventScroll:true});
                                   
                                      }, 0);
                                  }
                       
                                                      
                         
                        }else  {
                             text_formular[r+i_array_2d][c ] =  text_update; 
                              cong_thuc_chua_hoan_thanh[2] = text_formular[r+i_array_2d][c ] ; 
                                // hiện công thức đó lên thanh formular để người dùng viết tiếp.
                                var input_formula = thanh_dia_chi_0.current;
                            input_formula.value = text_formular[r+i_array_2d][c ] ;
                            input_formula.vi_tri = [r+i_array_2d,c] ;
                                  // thay đổi độ rộng của input phù hợp với ký tự nhập vào
                                  var length_ = ((input_formula.value.length + 1) * 8) ;
                                  if ( length_ >= 100) {
                                    input_formula.style.width =  length_ + 'px';
                                
                                  
                                  }
                            setTimeout(() => { input_formula.focus({preventScroll:true}); }, 0);
                                  

                             }  
                        
                       
                      
                      
                  
                     

                        
                        onclick_tinh_toan = true ;
                        // để tắt input lắng nghe sự kiện bàn phím trên all element lúc render
                        onKeyDown = true ;
                      
                       
                  
                  }
    
                                                                                          
                // element table nhận bàn phím thì làm xuất hiện thẻ input
              
                //4. di chuột đến element ấn chuột trái _this xuống thì gán sự kiện onkeydown lên element đó sự kiện này chạy khi onkeydown === false tức là chạy khi dùng chuột ta khoá lắng nghe bàn phím 
                // dùng bàn phím + chuột
                  _this.onkeydown  =  function (event) {
                  
                  //  onKeyDown_1_element === false ở đây chỉ tắt lắng nghe sự kiện cho 1 element table cha này.  Còn để ngoài lúc render react là cho tất cả
                    if (onKeyDown_1_element === false) {

                      
                      console.log("_onMouseDown_onKeyDown") ;
                      // 1.-//nếu sau đó ấn enter thì chạy hàm không tính toán rồi xuống dòng
                      if (event.keyCode === 13 ) {
                           
                      
                        if (cong_thuc_chua_hoan_thanh === "") {
                          console.log("_onMouseDown_onKeyDown-----enter--không tính toán") ;
                          // Khi ấn enter mà ô đó không ở trạng thái tính toán (không có thẻ input bên trong )
          
                          a.current.children[i + 1].children[j+1].innerHTML =array_2d_data[i+i_array_2d][j] ;

                                 // set địa chỉ ô click  sau hành động trên
                                 dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
                          key_enter(i,j,i+1,j); // tô màu và focus
                          xuat_hien_the_input = false ;   
                          onKeyDown = false ; 
                          onclick_tinh_toan = false ;
                          onKeyDown_1_element = false;
                       
                        
                        }

                        if (cong_thuc_chua_hoan_thanh !== "") {
                          console.log("onMouseDown_onKeyDown-----enter-- tính toán") ;

                          if (error_ === false) {
                      

                            // khi ấn enter thì công thức chưa hoàn thành cũng tính
                            tinh_toan(i,j,"cong_thuc_chua_hoan_thanh");

                           // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;

                            key_enter(i,j,i+1,j); // tô màu và focus
                            xuat_hien_the_input = false ;   
                            onKeyDown = false ; 
                            onKeyDown_1_element = false;
                            onclick_tinh_toan = false ; 
                            
                            }
                            if (error_) {
                              error_= false ;
                              a.current.children[i + 1].children[j+1].innerHTML = "fuction is not defined" ;
                              
                           // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(i +1+ i_array_2d,j,i +1 ,j) ;
                              key_enter(i,j,i+1,j); // tô màu và focus
                              xuat_hien_the_input = false ;   
                              onKeyDown = false ; 
                              onKeyDown_1_element = false;
                              onclick_tinh_toan = false ;  
                              };
                
                
                
                
                                          
                        }

                      
          
                         
          
          
                        
                      }
                      //2.-mối khi div table nhận 1 ký tự dữ liệu từ bàn phím thì tiến hành tạo  thẻ input, sau đó di chuyển con trỏ
                      // tới vị trí  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input, sau đó ghi ký tự đã nhấn vào
                    
                      
                      if (event.keyCode != 13) {
                        console.log("_onMouseDown_onKeyDown_keyCodekhac enter") ;

                        // khi ấn phím khác enter thì viết công thức hoặc dữ liệu vào ô đó (thiết lập ô đó ở trạng thái tính toán)
                      
                        a.current.children[i + 1].children[j+1].innerHTML = " <input   type='text'  />" ;
                       // biến này dùng để xác định ảnh hưởng tới scoll
                        xuat_hien_the_input = true ;  
                        var input_ =  a.current.children[i + 1].children[j+1].children[0];

                        Object.assign(input_.style,css.input_focus) ;
                        var input_formula = thanh_dia_chi_0.current;
                        // gán giá trị công thức cũ vào thẻ input. Sự kiện này sẽ diễn ra trước sự kiện thêm 1 ký tự khi ấn bàn phím
                        input_.value = text_formular[i + i_array_2d][j] ; 
                       
                     
                           // thay đổi độ rộng của input phù hợp với ký tự nhập vào trước khi ấn phím
                          var length_ = ((input_.value.length + 1) * 8) ;
                          if ( length_ >= 100) {
                            input_.style.width =  length_ + 'px';
                        
                          
                          }

                          console.log(cong_thuc_them_vao[0])

                          // nếu công thức chưa hoàn thành khác ""  thì di chuyển con trỏ tới vị trí sau khi viết thêm công thức
                          if (cong_thuc_chua_hoan_thanh != "") { vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + cong_thuc_them_vao[0].length}



                          // lúc này thẻ input sẽ thêm 1 ký tự khi ấn bàn phím

                       
                        
                         var len = input_.value.length;
                   
                       console.log('vi_tri_con_tro         ' +  vi_tri_con_tro_khi_di_chuyen_trong_double_click_input )
                         if (vi_tri_con_tro_khi_di_chuyen_trong_double_click_input === undefined) {
                           // nếu thẻ element table trước đó được double click thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input sẽ là khác undefined
                           // nếu thẻ element table trước đó không được double click thì vi_tri_con_tro_khi_di_chuyen_trong_double_click_input sẽ là  undefined
                          // ta bôi đen miền lựa chọn ở đây để khi nhấn phím sẽ xoá toàn bộ ký tự cũ nếu element table không được double click trước đó.
                          input_.setSelectionRange(0, len); 
                          input_.focus({preventScroll:true});
                         
                         }
                         else{
                         // di chuyển con trỏ tới vị trí focus trước  đó.
                          input_.focus({preventScroll:true});
                          input_.setSelectionRange(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input , vi_tri_con_tro_khi_di_chuyen_trong_double_click_input );  
                         }
                            
                         
                         
                          // lúc này sự kiện ghi ký  tự đã nhấn vào input_ sẽ chạy và thêm ký tự vào( hoặc xoá ký tự nếu nhấn phím backspace)
                        

                         
                        // gán giá trị đầu tiên khi nhấn phím đó vào text_formular; các giá trị tiếp theo input đó sẽ láng nghe sự kiện onkeypress để gán tiếp
                        //**************** */ trong javscript thuần ghi giá trị từ bàn phím vào thẻ input sẽ diến ra sau việc lấy giá trị từ thẻ input vào biến.
                        // phải setTimeout ở đây vì phải đợi input lấy giá trị từ bàn phím mới gán vào text_formular
                        // sau đó gán giá trị khi nhấn lên input_formula
                        setTimeout(() => {  text_formular[i + i_array_2d][j] = input_.value ; 
                           console.log( text_formular[i + i_array_2d][j]) ; 
                            input_formula.value =  text_formular[i + i_array_2d][j] ;
                             input_formula.vi_tri = [i + i_array_2d,j] ; 
                            if (vi_tri_con_tro_khi_di_chuyen_trong_double_click_input === undefined ) {vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = 0 }
                             vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = vi_tri_con_tro_khi_di_chuyen_trong_double_click_input + 1 ;
                            

                             } , 0);

                          
                       

                

                        
                        onclick_tinh_toan = true ;
                        
                        vi_tri_o_truoc[0] = i ;
                        vi_tri_o_truoc[1] = j ;
                      // tắt lắng nghe sự kiện onKeyDown cho div element
                      onKeyDown_1_element = true ;
                  
                             // trước gán sự kiện keydown cho input thì ta phải tắt lắng nghe sự kiện onkedown cho 1 element table cha của input
                                run_function_when_input_focus (input_,i,j,i_array_2d);
          

                    }
                                                                                                          
                    
                                        
                                        
        




                      
                    }
              
                   

                  }
    
    
    
      }
    
    
    
    
    // hàm này không đồng bộ chạy cuối của lần click đó.
      setTimeout(()=>{  return _this.kiem_tra = 0   }, 300);
      _this.kiem_tra = 1 ;
    
              }
    ///////////////////////////////////////////////////////////////////////////////////////////////
  // hàm copy
  function copy(event) {
    var mien_copy = [...mien_select];

  let text_copy = "";
    for (let index = mien_copy[0]; index <= mien_copy[2]; index++) {
              let text_copy_row = "";
              // đầu tiên nó truyền index = mien_copy[0] xuống for sau đó nó lặp qua các cột ghép thành text dòng
              for (let index_j = mien_copy[1]; index_j < mien_copy[3]; index_j++) {
                  text_copy_row = text_copy_row +  a.current.children[index + 1].children[index_j+1].innerHTML + "\t";
              }

              text_copy_row = text_copy_row +  a.current.children[index + 1].children[mien_copy[3]+1].innerHTML ;
              // ghép tất cả các dòng lại tạo thành text table copy tới excel được
              text_copy = text_copy +  text_copy_row + "\r";

    }


      navigator.clipboard.writeText(text_copy);
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////


  // khi di chuyển scroll đến vị trí cuối nếu để scroll động scrollHeight sẽ tự động tăng kích thước.
  // cố định scrollHeight thì mới scroll đến cuối được.
  // cố định scrollHeight bằng mã if ( Math.round(event.target.scrollTop) >= data_lenght - 100*20 )
  // hoặc để chiều dài bar_scroll + scrollTop bé hơn scrollHeight (data.lenght  10000 trở lên thì được)
  let table_excel_height = 700 ;
  let limit = 34 ;
  let limit_col = 10 ;

  var  array_2d_data_show = array_2d_data.slice(0,limit)   ;
 var array_2d_data_show_0 = array_2d_data_show.map((item, index)=>{    return  item.slice(0, limit_col)}) ;
 
  let click_scroll_dichuyen = 45 ;

  let data_lenght = (10000 ) *click_scroll_dichuyen ; 
  let data_col_lenght = (50 ) *click_scroll_dichuyen ; 

  function _onScroll(event) {
    let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
              // scrollHeight chiều cao của cả thanh scroll
                  // scrollTop khoảng cách từ top 0 đến vị trí hiện tại
                  //*******/ khi scroll nếu click khoảng cach scroll lớn hơn chiều cao của element có state height thì nó sẽ rerender lại hàm _onScroll
                  // element có 10000 dòng row_height bằng 20 thì có 200000px mỗi 1 click scroll sẽ là 45px do đó vi_tri_cat sẽ chia cho số đó
              // đánh dấu vùng lựa chọn
              

              var di_chuyen   ;
            // dừng scroll tại vị trí muốn
              if (Math.ceil(  (event.target.scrollTop ) )<=445500) {
                di_chuyen = Math.ceil(  (event.target.scrollTop ) ); 
              }
              else
              {
                event.target.scrollTo(0, 445500) ;
                di_chuyen = 445500;
              }

              console.log( 'di_chuyen----------------------------------------------' +  di_chuyen)
              // vị trí cắt là  a.current.children[0 + 1].children[0].innerHTML lúc sau khi render UI xong
              let vi_tri_cat =  Math.round(di_chuyen / click_scroll_dichuyen) ; 


        
                        div_change_height.current.style.height = di_chuyen+'px';
                        a.current.style.height =(data_lenght - di_chuyen) +'px';
                    //  vi_tri_truoc_di_chuyen là  a.current.children[0 + 1].children[0].innerHTML trước khi scroll
                      let  vi_tri_truoc_di_chuyen =  a.current.children[0 + 1].children[0].innerHTML ; // là vị trí cắt trước đó
                      console.log( 'vi_tri_o_truoc--vị tri thẻ input ở khung nhìn trước    ' +  vi_tri_o_truoc)
                      console.log("vi_tri_truoc_di_chuyen-- vị trí cắt trước đó    "+vi_tri_truoc_di_chuyen)
                      console.log("vi_tri_cat    "+vi_tri_cat)
                  
                      console.log("moi_lan_di_chuyen = vi_tri_cat - vi_tri_cat trước đó    "+(vi_tri_cat - vi_tri_truoc_di_chuyen))
                     
                      console.log( 'vị tri thẻ input trong khung nhìn ************' + (vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_truoc_di_chuyen))  )




                      

                        
                    // nếu công thức chưa hoàn thành(xuất hiện thẻ input)

                    if (xuat_hien_the_input) {
                      console.log(     'xuat_hien_the_input--' +  xuat_hien_the_input ) ;
                    
                    
                   
                      
                        // cập nhật lại dữ liệu khi scroll -- bước1
                        for (let index = 0; index <= (limit - 1); index++) {
                        
                          a.current.children[index + 1].children[0].innerHTML = index + vi_tri_cat;
                          for (let index_j = 0; index_j <=9 ; index_j++) {
                          
                            a.current.children[index + 1].children[index_j+1].innerHTML = array_2d_data[index +vi_tri_cat][index_j ];
                          }
                        }  
                        // 
                      change_input_scroll(vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_truoc_di_chuyen),vi_tri_o_truoc[1]); 
                            

                    }
                    else
                    {

                      
                        // cập nhật lại dữ liệu khi scroll -- bước1
                        for (let index = 0; index <= (limit - 1); index++) {
                      
                          a.current.children[index + 1].children[0].innerHTML = index + vi_tri_cat;
                          for (let index_j = 0; index_j <=9 ; index_j++) {
                          
                            a.current.children[index + 1].children[index_j+1].innerHTML = array_2d_data[index +vi_tri_cat][index_j ];
                          }
                        }  


                        // nếu sau khi scroll vị trí tô màu update nằm trong khung nhìn thì tô màu lại ngược lại thì không tô màu lại

                        console.log('key_enter:   '+vi_tri_o_truoc[0]+'__'+vi_tri_o_truoc[1]+'__'+(vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_truoc_di_chuyen))+'__'+vi_tri_o_truoc[1]) ;
                       
                       
                       
                            // set địa chỉ ô click  sau hành động trên
                           dia_chi_o_click(vi_tri_o_truoc[0]+ i_array_2d,vi_tri_o_truoc[1],(vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_truoc_di_chuyen)) ,vi_tri_o_truoc[1]) ;
                        console.log(vi_tri_click_in_array_2d_data);
                        console.log(vi_tri_o_truoc)
                        key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_o_truoc[0]-(vi_tri_cat - vi_tri_truoc_di_chuyen),vi_tri_o_truoc[1]);


                
                            
                    }
          
          

  }





    ////////////////////////////////////////////////////////////////////////////////////////////////

    function thanh_dia_chi_onkeydown(event) {
              let i_array_2d =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
              onclick_tinh_toan = true ;
              thanh_dia_chi_0_on_keydown = true ;
              if (event.keyCode != 13) {
            
              console.log(vi_tri_click_in_array_2d_data);
              setTimeout(() => { 

                text_formular[vi_tri_click_in_array_2d_data[0]][vi_tri_click_in_array_2d_data[1]] = thanh_dia_chi_0.current.value ;
                console.log( text_formular[vi_tri_click_in_array_2d_data[0]][vi_tri_click_in_array_2d_data[1]]);
                   

                    vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = thanh_dia_chi_0.current.value.length ; 
              
                     
                    console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);
                    // nếu vị trí click khi có công thức thêm vào array_2d[][] không nằm trong khung nhìn thì không làm gì ngược lại viết vào khung nhìn

                    if ( (i_array_2d < vi_tri_click_in_array_2d_data[0] - limit - 1  )||( i_array_2d > vi_tri_click_in_array_2d_data[0] + limit - 1) ) {

                    }
                    else{

                       // thay đổi độ rộng của input phù hợp với ký tự nhập vào trước khi ấn phím
                    
                    var parent_input = a.current.children[vi_tri_click_in_array_2d_data[2] + 1].children[vi_tri_click_in_array_2d_data[3]+1] ;
                    var input_ = parent_input.children[0] ;
                    var length_ = ((thanh_dia_chi_0.current.value.length + 1) * 8) ;


                      if (input_ !== undefined) { if ( length_ >= 100) { input_.style.width =  length_ + 'px'; }; input_.value = thanh_dia_chi_0.current.value; }

                      if (input_ === undefined) { 
                        
                    
                                      // khi ấn phím khác enter thì viết công thức hoặc dữ liệu vào ô đó (thiết lập ô đó ở trạng thái tính toán)
                                      parent_input.innerHTML = " <input   type='text'  />" ;
                                  let input_ =  parent_input.children[0];
                            // biến này dùng để xác định ảnh hưởng tới scoll
                            xuat_hien_the_input = true ;  
                              
                            if ( length_ >= 100) {
                              input_.style.width =  length_ + 'px';
                            };
                                  // trước gán sự kiện keydown cho input thì ta phải tắt lắng nghe sự kiện onkedown cho 1 element table cha của input 
                                  
                                  onKeyDown_1_element = true ;
                                  input_.value = thanh_dia_chi_0.current.value;
                                  run_function_when_input_focus (input_,vi_tri_click_in_array_2d_data[2],vi_tri_click_in_array_2d_data[3],i_array_2d);
  
                                      
                                  setTimeout(() => {  thanh_dia_chi_0.current.focus({preventScroll:true}) ;}, 0);
                      
                      }


                    }

                   

                  }, 0);
            
              
            }

            if (event.keyCode === 13) {
              thanh_dia_chi_0_on_keydown = false ;

              tinh_toan(vi_tri_click_in_array_2d_data[0] - i_array_2d,vi_tri_click_in_array_2d_data[1],"cong_thuc_chua_hoan_thanh");
              key_enter(vi_tri_click_in_array_2d_data[2],vi_tri_click_in_array_2d_data[3],vi_tri_click_in_array_2d_data[2]+1,vi_tri_click_in_array_2d_data[3]); // tô màu và focus
              console.log('ô tô màu'+ (vi_tri_click_in_array_2d_data[2]+1 )+ "," + vi_tri_click_in_array_2d_data[3] );
              
                     // set địa chỉ ô click  sau hành động trên
                     dia_chi_o_click(vi_tri_click_in_array_2d_data[0] +1 ,vi_tri_click_in_array_2d_data[1] ,vi_tri_click_in_array_2d_data[2] +1  ,vi_tri_click_in_array_2d_data[3] ) ;
                   
                     xuat_hien_the_input = false ;   
                     onKeyDown = false ; 
                     onKeyDown_1_element = false;
                     onclick_tinh_toan = false ; 

              if ( (i_array_2d <= vi_tri_click_in_array_2d_data[0] - limit - 1  )||( i_array_2d >= vi_tri_click_in_array_2d_data[0]) ) {

       
                table_excel.current.scroll(0,(vi_tri_click_in_array_2d_data[0]*45 -675))
                 thanh_dia_chi_0_on_keydown = false ;

                 tinh_toan(vi_tri_click_in_array_2d_data[0] - i_array_2d,vi_tri_click_in_array_2d_data[1],"cong_thuc_chua_hoan_thanh");

                 let vi_tri_cuon =parseInt((a.current.children[0 + 1].children[0].innerHTML)); 
                let vi_tri_to_mau = vi_tri_click_in_array_2d_data[0] - vi_tri_cuon ;
                
                 key_enter(vi_tri_o_truoc[0],vi_tri_o_truoc[1],vi_tri_to_mau,vi_tri_o_truoc[1]); // tô màu và focus

                 
                 
                        // set địa chỉ ô click  sau hành động trên
                        dia_chi_o_click(vi_tri_click_in_array_2d_data[0] +1 ,vi_tri_click_in_array_2d_data[1] ,vi_tri_click_in_array_2d_data[2] +1  ,vi_tri_click_in_array_2d_data[3] ) ;
                      
                        xuat_hien_the_input = false ;   
                        onKeyDown = false ; 
                        onKeyDown_1_element = false;
                        onclick_tinh_toan = false ; 
        
               
          
               
              }

             
            }
      
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    function thanh_dia_chi_onMouseDown(event) {
      console.log(   "thanh_dia_chi_onMouseDown");
      console.log(   vi_tri_click_in_array_2d_data);
      console.log(   vi_tri_o_truoc);

      // khi ấn chuột trái vào thanh địa chỉ nếu vị trí tô màu không nằm trong khung nhìn thì cuộn để vị trí tô màu nằm trong khung nhìn

      // khi xuất hiện thẻ input sau đó cuộn scroll thì vi_tri_click_in_array_2d_data[2] không thay đổi do đó hàm dưới có if === false nên không chạy
      if ( (vi_tri_click_in_array_2d_data[2] > limit - 1 )||( vi_tri_click_in_array_2d_data[2] < 0) ) {

       
        table_excel.current.scroll(0,(vi_tri_click_in_array_2d_data[0]*45 -675))

        setTimeout(() => {  thanh_dia_chi_0.current.focus({preventScroll:true}) ;}, 0);
  
       
      }
   
      event.persist(); 
        setTimeout(() => {vi_tri_con_tro_khi_di_chuyen_trong_double_click_input = event.target.selectionStart  ; 
  
         
          console.log(vi_tri_con_tro_khi_di_chuyen_trong_double_click_input);}, 0); 

    }

    //////////////////////////////////////////////////////////////////////////////////////////////

   
    function css() {
     
     
      
     
      return {
        //verticalAlign: "top" căn theo cạnh top khối của element cha, nếu trong cha có nhiều anh em thì căn tiếp theo top khối của anh em trước nó
        textarea: {verticalAlign: "top",  marginLeft : "5px", marginRight : "5px", border: "1px solid #ccc", flexGrow: 1, width: `50px` , height: "50px", resize: "none" },
        thanh_dia_chi : {marginLeft : "5px",marginTop : "10px",verticalAlign: "top", backgroundColor: "white", height:  `30px` , padding:"5px", width : `50px`,flexGrow: 0 ,  border: "1px solid #ccc"},
        //overflow: "auto" : Khi chiều cao của box không đủ chứa text, thì thanh scroll sẽ tự động hiển thị ; Khi sử dụng thành phần này sẽ xuất hiện thanh scroll dọc
        table_excel: {  borderCollapse: "collapse",  height: `${table_excel_height}px`, width : "850px",  overflowY: "auto",  overflowX: "auto"},

        bar_reference_row : {  backgroundColor: "#d8dcd6", borderBottomStyle: "none", textAlign: "center" ,        border: "1px ridge #ccc", minWidth: "85px", height: "20px", display: "table-cell" }  ,

        bar_reference_col : { width: "auto" , textAlign: "center",  paddingLeft : "4px" , paddingRight : "4px",  backgroundColor: "#d8dcd6", borderBottomStyle: "none", textAlign: "center" ,        border: "1px ridge #ccc",  height: "20px", display: "table-cell" }  ,

      
        row_excel: { display: "table-row" },

        col_excel: {   border: "1px ridge #ccc", minWidth: "85px", height: "20px", display: "table-cell" },

        click: {boxShadow: "4px 4px 5px  Grey", outlineStyle: "ridge", outlineColor: "coral", outlineWidth: "5px", backgroundColor: "moccasin" },
        remove_click: { boxShadow: "",outlineStyle: "", outlineColor: "", outlineWidth: "", backgroundColor: "" },

        input_focus: { width: "inherit", outlineWidth: "0px", border: "0px", backgroundColor: "moccasin" },

        select: { backgroundColor: "moccasin" },
        remove_select: { backgroundColor: "" }


      }
    }

    var css = css();


 

      return (

        <div> 
          <div>
          <button onClick={(event)=>{ copy(event) }} > copy </button>
          </div>

          <div  style={{ paddingLeft : "5px", paddingTop : "5px", paddingBottom :" 5px",  backgroundColor: "#bdcebe" ,   display: "flex"}} >
          {/* không để khoảng trắng (space) ở giữa <textarea >  </textarea> như vậy vì sẽ tạo khoảng trắng trước + nên không tính được công thức*/}
          <div ref={ thanh_dia_chi_1  }  style={css.thanh_dia_chi} >ADJK65ggg </div>  <textarea ref={ thanh_dia_chi_0  }  style={css.textarea}  onKeyDown={(event)=>{thanh_dia_chi_onkeydown(event)}}   onMouseDown={(event)=> {thanh_dia_chi_onMouseDown(event) }} ></textarea>
      
          </div>
         
       
          {/*  table_excel chứa khung scroll set ban đầu là 700 px  */}
    <div ref={ table_excel  }   style={css.table_excel}    onScroll={(event) => { _onScroll(event)    }}     >
      {/* The div này dùng để thay đổi height */}
    <div ref={ div_change_height  }    >   </div> 
    {/* đây là table_excel trong khung scroll         */}
   
    <div ref={ div_change_width  }    >   </div>           <div  style={{ height : `${data_lenght }px` ,width : `${data_col_lenght }px`, paddingTop : "5px", }}  ref={ a  }  >
                  
                                                                        <div style={  css.row_excel}  > <div style={ css.bar_reference_col} ></div> {array_2d_data_show_0[0].map((cell, j) => { return <div style={css.bar_reference_row} >{j }</div>})}  </div> 
                                                                      
                                                                        {array_2d_data_show_0.map((row, i) => {
                                                                          return (

                                                                            <div  style={  css.row_excel}    >

                                                                            
                                                                          <div style={ css.bar_reference_col }   >{i }</div> {row.map((cell, j) => {   

                                                                    return <div style={css.col_excel} 
                                                                        
                                                                    onMouseDown={(event)=>{var _this =  a.current.children[i + 1].children[j+1]; return _onMouseDown(_this, i, j, event)}} 

                                                                    onMouseEnter={(event)=>{ _onMouseEnter(event,i,j)}  } 
                                                                    // biến onKeyDown mặc định là false
                                                                    onKeyDown={(event)=>{ if(onKeyDown){}else{_onKeyDown(event,i,j)}  }}


                                                                    >   </div>
                                                                              })}

                                                                          
                                                                            </div>

                                                                          
                                                                          

                                                                          );
                                                                        })}  
                                                              </div>   
    </div>
        </div> 
          
        
        
      
      );






    };
    