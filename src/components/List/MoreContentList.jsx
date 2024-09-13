import React from "react";

function MoreContentList({ data, title = "" }) {
  return (
    <>
      <h2 className="mb-6 primaryText">{title}</h2>
      <ul className="list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
        <li className="flex items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-none w-8 mr-2"
            viewBox="0 0 24 24"
            fill="green"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        {data.map((item) => (
          <li key={item.id} className="flex items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-none w-8 mr-2"
              viewBox="0 0 24 24"
              fill="green"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoreContentList;
