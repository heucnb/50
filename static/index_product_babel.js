"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Table_hieu_2, null));
}

;
var x_gobal;
var vi_tri_o_truoc = [0, 0];

var Table_hieu_2 = function Table_hieu_2(props) {
  var myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  var a = useRef(null);

  function sum(a, b) {
    return a + b;
  }

  ;
  var array_2d_data = new Array(1000).fill(null).map(function (i) {
    return i = new Array(26).fill(null);
  });
  var columns = new Array(26).fill(null);
  console.log("------------------------------------"); // const initialValue = {
  //   array_2d_data : [...array_2d_data],
  //   text_formular : [...array_2d_data],
  //   key_formular : [] ,
  //   formular: [],
  //   cong_thuc_chua_hoan_thanh : "",
  // };
  // const [state, set_state] = useState(initialValue);
  // const state_update = (x,value_truyen, y, value_truyen_2)=>{ const state_update = {...state}; state_update[x] = value_truyen ;  state_update[y] = value_truyen_2 ;  set_state(state_update); };
  // Truyền fuction có nút sửa------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  // const input_change = (event,i,j) => {
  //   state.cong_thuc_chua_hoan_thanh = "" ;
  //                             var text = event.target.value;
  //                             if ((text.slice(0,1)==="=" || text.slice(0,1)==="+" )&&(    text.slice(-1)==="+"  ||  text.slice(-1)==="-"  ||  text.slice(-1)==="*"  ||  text.slice(-1)==="/"  || text.slice(-1)===","    )      ) {state.cong_thuc_chua_hoan_thanh = [i,j,text] ; }
  //                         state.array_2d_data[i][j] = text;
  //                         state.text_formular[i][j] =  text;
  //                         a.current.children[i].children[j+1].children[0].value = text ;
  //                         // console.time("concatenation");
  // var   array_2d_input_change =  state.array_2d_data.map(e=>e.map(i=>i)) ;
  // var array_2d_formular_change =  state.text_formular.map(e=>e.map(i=>i)) ;
  // console.timeEnd("concatenation");
  // console.log( "input_change" + state.text_formular[i][j]);
  // state_update("array_2d_data",array_2d_input_change,"text_formular",array_2d_formular_change);
  // }
  //---------------------------------------------------------------------------------------------------------------------------
  //   const input_onBlur = (event,i,j)=>   {
  //     console.log( "input_onBlur" ) ;
  //    var recaculation  ;
  //      var text = event.target.value;
  //      if (       (  text.slice(0,1)==="=" || text.slice(0,1)==="+"  ) && (    text.slice(-1)==="+"  ||  text.slice(-1)==="-"  ||  text.slice(-1)==="*"  ||  text.slice(-1)==="/"  || text.slice(-1)===","    )      ) { text = text.slice(1) }
  // if (text.slice(0,1)==="=" || text.slice(0,1)==="+" ) {  x_gobal = [...state.array_2d_data] ;var kiem_tra = state.key_formular.indexOf(i+"_"+j); if (kiem_tra != -1) {    recaculation = true ;   state.formular[kiem_tra]  = eval("(function(){return "+  "x_gobal["+i+"]["+j+"]" +" = " + text.slice(1) +  ";})")   } else {   recaculation = false ;    state.key_formular.push(i+"_"+j) ;state.formular.push(eval("(function(){return "+  "x_gobal["+i+"]["+j+"]" +" = " + text.slice(1) +  ";})")  ) } };
  // if (recaculation ) {
  //   console.log( "khac nhau" ) ;
  // state.formular.forEach((element,i) => {     element(); console.log(element())});
  // var array_2d_input_change = [...state.array_2d_data] ;
  // a.current.children[i].children[j+1].children[0].disabled = true
  // state_update("array_2d_data",array_2d_input_change);
  // }
  // if (!recaculation  ) { 
  //   console.log( "tinh 1 cong thuc----------------" ) ;
  // const lastItem = state.formular[state.formular.length - 1] ;
  // lastItem();
  // var array_2d_input_change = [...state.array_2d_data] ;
  // a.current.children[i].children[j+1].children[0].disabled = true
  // state_update("array_2d_data",array_2d_input_change);
  // }
  // } 
  //             //------------------------------------------
  //             const input_onKeyPress = (event,i,j) => {
  //                 console.log(event.keyCode);
  //               if (event.key === "Enter" ) {
  //                 input_onBlur(event,i,j);
  //               }
  //          }
  //-----------------------------------------------------------------------
  // const input_onClick = (event,i,j) => {
  //   if (state.cong_thuc_chua_hoan_thanh === "") {
  //     console.log(vi_tri_o_truoc);
  //     a.current.children[vi_tri_o_truoc[0]].children[(vi_tri_o_truoc[1]+1)].children[0].disabled = true; 
  //     a.current.children[i].children[j+1].children[0].disabled = false; 
  //     vi_tri_o_truoc[0] = i ;
  //     vi_tri_o_truoc[1] = j ;
  //     a.current.children[i].children[j+1].children[0].value =  state.text_formular[i][j] ;
  //     a.current.children[i].children[j+1].children[0].focus() ;
  //   }
  //   if (state.cong_thuc_chua_hoan_thanh != "") {
  //      var r = parseInt(state.cong_thuc_chua_hoan_thanh[0] )  ;
  //      var c = parseInt(state.cong_thuc_chua_hoan_thanh[1] )  ;
  //      var text = state.cong_thuc_chua_hoan_thanh[2]  ;
  //     a.current.children[r].children[c+1].children[0].value = text + "(x_gobal["+i+"]["+j + "])" ;
  //     state.text_formular[r][c ] =  text + "(x_gobal["+i+"]["+j + "])";
  //     state.cong_thuc_chua_hoan_thanh = "" ;
  //     a.current.children[r].children[c+1].children[0].disabled = false; 
  //     a.current.children[r].children[c+1].children[0].focus();
  //   }
  //  style={myStyle}
  //}
  //  <input   type="text"  value={cell} disabled = {true}   onChange={ (event)=>{input_change(event,i,j);}  }  />

  return /*#__PURE__*/React.createElement("div", {
    ref: a
  }, array_2d_data.map(function (row, i) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {}
    }, i), " ", row.map(function (cell, j) {
      return /*#__PURE__*/React.createElement("div", {
        onClick: function onClick(event) {
          input_onClick(event, i, j);
        },
        onBlur: function onBlur(event) {
          if (state.cong_thuc_chua_hoan_thanh === "") {
            input_onBlur(event, i, j);
          } else {
            "";
          }
        },
        onKeyPress: function onKeyPress(event) {
          return input_onKeyPress(event, i, j);
        }
      });
    }));
  }));
}; // convert string to obj: JSON.parse(string_obj);  string to array: string_aray.split(' |_| ');
// vd obj :  JSON.stringify(obj); number:  number.toString(); array: array.join(' |_| '); // 'Wind |_| Water'


var _Redux = Redux,
    createStore = _Redux.createStore;
var _ReactRedux = ReactRedux,
    useSelector = _ReactRedux.useSelector,
    Provider = _ReactRedux.Provider,
    useDispatch = _ReactRedux.useDispatch;
var _React = React,
    useState = _React.useState,
    useRef = _React.useRef,
    useMemo = _React.useMemo; // redux

var initialState = {
  count: 0
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + action.payload
      });

    case 'DECREMENT':
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count - action.payload
      });

    default:
      return _objectSpread({}, state);
  }
}

var store = createStore(reducer);

var render = function render() {
  ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, " ", /*#__PURE__*/React.createElement(App, null), " "), document.getElementById('root'));
};

render();

