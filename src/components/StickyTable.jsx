import { useEffect, useState } from "react";

const StickyTable = (props) => {
  const data = props?.data ?? [];
  const columns = props?.columns ?? [];
  const gridSize = columns?.length ?? 0;

  const tableWrapperClass = ".sticky-table-wrapper";
  const tableClass = ".sticky-table";
  const stickyHeaderClass = ".sticky-table-header.fixed";

  const [tableScrollLeft, setTableScrollLeft] = useState(0);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [tableWrapper, setTableWrapper] = useState(false);
  const [table, setTable] = useState(false);

  function scrollListener() {
    const stickyHeader = document.querySelector(stickyHeaderClass);

    if (
      document.querySelector("header").getBoundingClientRect().height >
        table.getBoundingClientRect().top &&
      !(
        stickyHeader.getBoundingClientRect().bottom >
        table.getBoundingClientRect().bottom - 20
      )
    ) {
      toggleScrollParams(true);
    } else {
      toggleScrollParams();
    }
  }

  function toggleScrollParams(add) {
    if (add) {
      setShowStickyHeader(true);
    } else {
      setShowStickyHeader(false);
    }
  }

  function tableScrollListener(e) {
    setTableScrollLeft(e.target.scrollLeft);
  }

  function formatValue(value, type) {
    if (type === "currency") {
      return `$${value}`;
    } else if (type === "date") {
      return new Date(value).toLocaleDateString();
    } else {
      return value;
    }
  }

  useEffect(() => {
    const stickyHeader = document.querySelector(stickyHeaderClass);
    if (stickyHeader) stickyHeader.scrollLeft = tableScrollLeft;
    if (tableWrapper) tableWrapper.scrollLeft = tableScrollLeft;
  }, [tableScrollLeft]);

  useEffect(() => {
    setTable(document.querySelector(tableClass));
    if (table)
      document.addEventListener("scroll", scrollListener, { passive: true });

    setTableWrapper(document.querySelector(tableWrapperClass));
    if (tableWrapper)
      tableWrapper.addEventListener("scroll", tableScrollListener, {
        passive: true,
      });

    // cleanup/unmount
    return () => {
      if (table)
        document.removeEventListener("scroll", scrollListener, {
          passive: true,
        });

      if (tableWrapper)
        tableWrapper.removeEventListener("scroll", tableScrollListener, {
          passive: true,
        });
    };
  }, []);

  return (
    <>
      {data.length > 0 && columns.length > 0 ? (
        <div className="sticky-table-wrapper">
          <div className="sticky-table">
            {/* headers */}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`${i === 1 ? "fixed " : ""}${
                  i === 1 && showStickyHeader ? "sticky " : ""
                }sticky-table-header`}
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                }}
              >
                {columns.map((column) => (
                  <p>{column.name}</p>
                ))}
              </div>
            ))}
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
