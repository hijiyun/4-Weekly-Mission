"use client";

import React, { useState } from "react";
import Header from "@/components/Common/Header/Header";
import Nav from "@/components/Common/Nav/Nav";
import Cardlist from "@/components/Cardlist/Cardlist";
import SearchBar from "@/components/SearchBar/SearchBar";
import Footer from "@/components/Common/Footer/Footer";

function Shared() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="shared">
      <Header />
      <Nav />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Cardlist searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default Shared;
