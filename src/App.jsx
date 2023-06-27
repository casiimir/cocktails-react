// import cocktailLogo from "./assets/cocktail.svg";
import ProductSection from "./components/productSection/ProductSection";
import "./App.css";
import { useState } from "react";

function App() {
  const [productSection, setProductSection] = useState("margarita");

  return (
    <div className="App">
      <ProductSection productSection={productSection} />
    </div>
  );
}

export default App;
