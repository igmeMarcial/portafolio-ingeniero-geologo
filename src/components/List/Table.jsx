import React from "react";

function Table({ data, title = "" }) {
  return (
    <div className="container my-8 mx-auto px-4 leading-normal">
      <h2 className="mb-6 primaryText">{title}</h2>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {data.headers.map((header) => (
                  <th
                    key={header}
                    className="secondaryText px-5 py-3 border-b-2 border-gray-200 bg-[#F8F7F1] text-left text-xs font-semibold  uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, index) => (
                <tr key={index}>
                  {data.headers.map((header) => (
                    <td
                      key={header}
                      className={`px-5 py-5 border-b border-gray-200 ${
                        index === data.rows.length - 1
                          ? "bg-[#F8F7F1] font-bold"
                          : "bg-white"
                      } text-sm`}
                    >
                      <p className="text-gray-900 whitespace-no-wrap">
                        {row[header]}
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
