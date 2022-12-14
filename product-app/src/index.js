import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Routes} from 'react-router-dom';
// import ProductTable from './product/ProductTable';
// import ProductForm from './product/ProductForm';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 12 until 17 lines or 20 until 33 lines
// root.render(
//   <React.StrictMode>
//    <BrowserRouter>
//     <Routes>
    
//       {/* <Routes path='/'elementv= {<ProductDisplay/>}/> */}
//       <React.Fragment path='/' element= {<ProductTable products={[]}/>}/>
//       <React.Fragment path='/product/add' element= {<ProductForm/>}/>
//       <React.Fragment path='/product/update/{id}' element= {<ProductForm/>}/>
//     </Routes> 
//      <App />
//    </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// npm aduit fix --force  
