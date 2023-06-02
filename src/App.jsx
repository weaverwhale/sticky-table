import "./App.css";

import { data, columns } from "./tableData";
import StickyTable from "./components/StickyTable";
import "./components/StickyTable.scss";

function App() {
  return <StickyTable data={data} columns={columns} />;
}

export default App;
