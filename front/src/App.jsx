import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Record from "./components/RecordPage/Record";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecordList from "./components/RecordPage/RecordList";
import { useContext } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Record />} />
          <Route path="/login" element={<Login />} />
          <Route path="/records" element={<RecordList />} />
          {/* <Route path="*" element={<Login to="/login" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
