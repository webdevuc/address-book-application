import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import TableView from "./pages/TableView";
import Cards from "./pages/Cards";

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
