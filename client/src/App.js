import { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const [page, setPage] = useState("null");

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPage(data));
  }, []);

  return (
    <>
    <TopBar/>
    <Write/>
    </>
  );
}

export default App;