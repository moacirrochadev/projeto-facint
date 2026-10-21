// import { useState } from "react";
import "./App.css";
import { Calendar } from "./components/calendar";
// import { DataArea } from "./components/dataArea";
// import { Middlebar } from "./components/middlebar";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

function App() {
	// const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Sidebar />
      <div className="flex flex-1 justify-around">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
