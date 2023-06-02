import { useEffect, useState } from "react";

const StickyTable = (props) => {
  const data = props?.data ?? [];
  const columns = props?.columns ?? [];
  const gridSize = columns?.length ?? 0;

  function formatValue(value, type) {
    if (type === "currency") {
      return `$${value}`;
    } else if (type === "date") {
      return new Date(value).toLocaleDateString();
    } else {
      return value;
    }
  }

  return (
    <>
      {data.length > 0 && columns.length > 0 ? (
        <div className="sticky-table-wrapper">
          <div className="sticky-table">
            {/* header */}
            <div
              className="sticky-table-header"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              }}
            >
              {columns.map((column, i) => (
                <p key={i}>{column.name}</p>
              ))}
            </div>
            {/* data */}
            {data.map((row, i) => (
              <div
                key={i}
                className="sticky-table-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
              >
                {columns.map((column, i) => (
                  <p key={i}>{formatValue(row[column.key], column.dataType)}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h4>No Data provided</h4>
      )}
    </>
  );
};

export default StickyTable;
