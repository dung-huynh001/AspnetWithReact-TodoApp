import "./App.scss";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar/Sidebar.js";
import Content from "./layouts/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div className="row">
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
