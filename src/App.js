import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import {BrowserRouter,Route,Routes} from "react-router"
function App() {
  return (
    <div>
      <Header />
      <Products />
      <Footer/>
    </div>
  );
}
export default App;