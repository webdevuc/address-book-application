import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import Cards from "./components/Cards";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="/card" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;
