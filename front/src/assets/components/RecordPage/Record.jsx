import RecordForm from "./RecordFrom";
import RecordList from "./RecordList";
// import "./Record.css";

import { useState, useEffect, useContext, useRef } from "react";

function Record() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecord = async () => {
    try {
      const res = await fetch("/api/records");
      const resJson = await res.json();
      setRecords(resJson);
    } catch (err) {
      console.log("RecordList の listGet失敗", err);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <main className="record_page">
      <div className="record-container">
        <div className="record-list-wrapper">
          <RecordList records={records} />
        </div>
        <div className="record-form-wrapper">
          <RecordForm fetchRecord={fetchRecord} />
        </div>
      </div>
    </main>
  );
}

export default Record;
