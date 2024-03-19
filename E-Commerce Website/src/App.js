import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, Category, Cart,PageNotFound,Login} from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import store from "./store/store";
// import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path = "/*" element = {<PageNotFound />} />
          
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
