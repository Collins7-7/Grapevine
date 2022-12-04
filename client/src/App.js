import { useState, useEffect } from "react";
import TopBar from "./topbar/TopBar";

function App() {
  const [page, setPage] = useState("null");

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPage(data));
  }, []);

  return (
    <TopBar/>
  );
}

export default App;