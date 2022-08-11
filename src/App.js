import "./styles.css";
import { useState } from "react";

export default function App() {
  const items = [
    {
      brand: "nike"
    },
    {
      brand: "adidas"
    }
  ];

  const [search, setSearchTerm] = useState("");
  const [item, setFoundItem] = useState(null);

  const setSearchTermin = (e) => {
    setSearchTerm(e.target.value);
  };

  const submitSearch = () => {
    const foundItem = items.filter((el) => el.brand === search);
    setFoundItem(foundItem[0]);
    setSearchTerm("");
  };

  console.log(search);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" value={search} onChange={setSearchTermin} />
      <button onClick={submitSearch}>search</button>
      <p>{item ? item.brand : "no item found"}</p>
    </div>
  );
}
