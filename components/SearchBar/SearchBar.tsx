import React, { useState } from "react";
import Image from "next/image";
import search from "@/images/Search.svg";
import close from "@/images/close.svg";

function SearchBar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleClearSearch = () => {
    setInputValue("");
    setSearchTerm("");
  };

  return (
    <div className="search-bar-box">
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <Image src={search} alt="Search" />
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" style={{ display: "none" }}>
          검색
        </button>
        <Image
          src={close}
          alt="Close"
          onClick={handleClearSearch}
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
