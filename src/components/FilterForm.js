import React, { useState } from "react";
import "./styles.css";
import { Multiselect } from "./Multiselect";

const FilterForm = () => {
  const flavors = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "dark chocolate", label: "Dark Chocolate" },
    { value: "honey", label: "Honey" },
    { value: "lemon", label: "Lemon" },
    { value: "mocha", label: "Mocha" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const [selected, setSelected] = useState([]);
  console.log("Selected", selected);
  return (
    <Multiselect
      selected={selected}
      setSelected={setSelected}
      flavors={flavors}
    />
  );
}

export default FilterForm 