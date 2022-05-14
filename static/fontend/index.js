


const {createStore} = Redux;
const {useSelector, Provider, useDispatch } = ReactRedux ;
 const { useState , useRef, useEffect  } = React ;







// redux
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
    return {...state, count : state.count + action.payload};
	
    case 'DECREMENT':
    return {...state, count : state.count - action.payload};
	
    default:
    return {...state};
  }
}
const store = createStore(reducer);
const render = () => { ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}> 
   <App />
    </Provider>
    </React.StrictMode>
  
   , document.getElementById('root')); };
render();
