import React from "react";
import "./ListStyle.css";

const ListCategories = ({ searchTerm, categories, data, check }) => {
  return (
    <div className="wrapper-table">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Category Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {check
            ? data
                .filter((val, i) =>
                  searchTerm === ""
                    ? val
                    : val.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ? val
                    : null
                )
                .map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.category}</td>
                    <td className="status">
                      {category.status ? (
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
            : categories
                .filter((val, i) =>
                  searchTerm === ""
                    ? val
                    : val.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ? val
                    : null
                )
                .map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.category}</td>
                    <td className="status">
                      {category.status ? (
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

export default ListCategories;
