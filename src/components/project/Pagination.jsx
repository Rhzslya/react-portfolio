import React from "react";

export default function Pagination({
  postPerPage,
  totalPost,
  onHandleSelectedPage,
  currentPage,
}) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          className={
            number === currentPage ? "page__number active" : "page__number"
          }
          key={number}
          onClick={() => onHandleSelectedPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
