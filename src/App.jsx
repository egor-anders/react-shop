import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Shop from "./layouts/Shop";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="content">
      <Header />
      <ShopContextProvider>
         <Shop />
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
