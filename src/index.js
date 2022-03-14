import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from "./pages/expenses/expenses.jsx";
import Invoices from "./pages/invoices/invoices.jsx";
import Interview from "./pages/interview/index.jsx";
import ReactInterview from "./pages/interview/react.jsx"
import ComplexRepeated from "./pages/interview/complexRepeated.jsx"
import SEO from "./pages/interview/seo.jsx"
import Home from "./pages/home/index.jsx"
import { 
  BrowserRouter,  
  Routes,
  Route, } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App /> */}
        <Route path="/" element={<App />}>
          {/* 嵌套路由 */}
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="home" element={<Home />} />
          <Route path="interveiw" element={<Interview/>} />
          <Route path="/interveiw/react" element={<ReactInterview/>} />
          <Route path="/interveiw/complexRepeated" element={<ComplexRepeated/>} />
          <Route path="/interveiw/seo" element={<SEO/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

