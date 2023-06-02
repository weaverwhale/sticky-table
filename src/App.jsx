import "./App.css";

import { data, columns, sortOrder } from "./tableData";
import StickyTable from "./components/StickyTable";
import "./components/StickyTable.scss";

function App() {
  return (
    <>
      <h1>Sticky Table Header Demo</h1>
      <StickyTable data={data} columns={columns} sortOrder={sortOrder} />;
    </>
  );
}

export default App;
