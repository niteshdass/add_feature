import React from "react";
import Select from "react-select";
import { ClearIndicator } from "./ClearIndicator";

export const Multiselect = ({ selected, setSelected, flavors }) => {
  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };
  const customStyles = {
    indicatorSeparator: () => {}
  };
  return (
    <Select
      isMulti
      isClearable={true}
      components={{ ClearIndicator }}
      defaultValue={selected}
      value={selected}
      styles={customStyles}
      placeholder="Search with vote, comments, and others"
      onChange={onChange}
      options={flavors}
      isSearchable={true}
    />
  );
};