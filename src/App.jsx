// import cocktailLogo from "./assets/cocktail.svg";
import { useState } from "react";
import ProductSection from "./components/productSection";
import ProductList from "./components/productList";
import Contacts from "./components/contacts/Contacts";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Filters from "./components/filters/Filters";

function App() {
  const [productSection, setProductSection] = useState("");
  const [categoryList, setCategoryList] = useState(["rum", "vodka", "gin"]);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return (
          <div className="App__contacts">
            <Contacts />
          </div>
        );
      case "":
        return (
          <>
            <Filters
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
            {categoryList
              .filter((category) => category.length > 1)
              .map((category, i) => (
                <ProductList
                  name={category}
                  setProductSection={setProductSection}
                  key={i}
                />
              ))}
          </>
        );

      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };

  return (
    <div className="App">
      <Navbar setProductSection={setProductSection} />
      {onRender()}
    </div>
  );
}

export default App;
