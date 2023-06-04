import React, { useState } from "react";
import Filter from "./Filter";

const HandlerCategory = () => {
  // Daftar kategori
  const categories = ["all", "animal", "music", "food", "people"];

  // State untuk kategori terpilih
  const [selectedCategory, setSelectedCategory] = useState("all");
  // State untuk pencarian gambar
  const [searchTerm, setSearchTerm] = useState("");

  // Handler saat kategori dipilih
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Handler saat input pencarian berubah
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="navbar-kategori">
        {categories.map((category) => (
          <a
            href="javascript:void(0)"
            key={category}
            data-kategori={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="d-flex justify-content-start">
      <div className="search-bar my-4">
        <input
          type="text"
          placeholder="Search images"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      </div>
      <div className="container-card">
        <Filter category={selectedCategory} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default HandlerCategory;
