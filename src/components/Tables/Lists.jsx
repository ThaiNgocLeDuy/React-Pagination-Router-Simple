import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _data from "../../data/data";
import SearchBar from "./filters/SearchBar";
import Pagination from "./pagination/Pagination";
import ListCategories from "./Table/ListCategories";
import ListProducts from "./Table/ListProducts";

const Lists = () => {
  //variables
  const products = _data.products;
  const categories = _data.categories;
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [check, setCheck] = useState(false);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(3);

  const handleOnChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.log(check);
  };

  const getData = () => {
    setData(
      location.pathname === "/list-products" ? _data.products : _data.categories
    );
  };

  useEffect(() => {
    getData();
  });

  //item in page
  const remainderItem = data.length % itemPerPage;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(
    indexOfFirstItem,
    indexOfLastItem + remainderItem
  );

  //paginate
  const pagination = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  console.log("current Item", currentItem);


  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleOnChange={handleOnChange}
        check={handleCheck}
      />
      {location.pathname === "/list-products" ? (
        <ListProducts
          searchTerm={searchTerm}
          products={currentItem}
          data={products}
          check={check}
        />
      ) : (
        <ListCategories
          searchTerm={searchTerm}
          categories={currentItem}
          data={categories}
          check={check}
        />
      )}
      <Pagination
        pagination={pagination}
        itemPerPage={itemPerPage}
        totalItem={data.length}
      />
    </>
  );
};

export default Lists;
