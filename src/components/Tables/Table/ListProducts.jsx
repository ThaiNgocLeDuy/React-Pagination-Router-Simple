import React from "react";
import "./ListStyle.css";

const ListProducts = ({ searchTerm, products, data, check }) => {
  return (
    <div className="wrapper-table">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Promotion</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {check
            ? data
                .filter((val) =>
                  searchTerm === ""
                    ? val
                    : val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ? val
                    : null
                )
                .map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td className="td-img">
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.promotion} %</td>
                    <td>
                      {product.promotion === 0
                        ? product.price
                        : product.price * (product.promotion / 100)}{" "}
                      $
                    </td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td className="status">
                      {product.status ? (
                        <button className="btn-status btn-true">True</button>
                      ) : (
                        <button className="btn-status btn-false">False</button>
                      )}
                    </td>
                    <td className="action">
                      <button className="btn-action btn-delete">Delete</button>
                      <button className="btn-action btn-edit">Edit</button>
                    </td>
                  </tr>
                ))
            : products
                .filter((val) =>
                  searchTerm === ""
                    ? val
                    : val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ? val
                    : null
                )
                .map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td className="td-img">
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.promotion} %</td>
                    <td>
                      {product.promotion === 0
                        ? product.price
                        : product.price * (product.promotion / 100)}{" "}
                      $
                    </td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td className="status">
                      {product.status ? (
                        <button className="btn-status btn-true">True</button>
                      ) : (
                        <button className="btn-status btn-false">False</button>
                      )}
                    </td>
                    <td className="action">
                      <button className="btn-action btn-delete">Delete</button>
                      <button className="btn-action btn-edit">Edit</button>
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
