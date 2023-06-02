import { useEffect, useState } from "react";

const StickyTable = (props) => {
  const data = props?.data ?? [];
  const sortOrder = props?.sortOrder ?? [];
  const columns = (props?.columns ?? []).sort(
    (a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key)
  );
  const gridSize = columns?.length ?? 0;

  function formatValue(value, type) {
    if (value === null || value === undefined || value === "NaN") value = 0;

    if (type === "currency") {
      return `$${value}`;
    } else if (type === "date") {
      return new Date(value).toLocaleDateString();
    } else {
      return value;
    }
  }

  return (
    <div className="sticky-table-wrapper">
      {data.length > 0 && columns.length > 0 ? (
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
              <p key={i}>
                <span>{column.name}</span>
              </p>
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
                <p key={i}>
                  <span>{formatValue(row[column.key], column.dataType)}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h4>No Data provided</h4>
      )}
    </div>
  );
};

export default StickyTable;
