// import { useState } from "react";
import "./App.css";
import { Calendar } from "./components/calendar";
import { DataArea } from "./components/dataArea";
import { Middlebar } from "./components/middlebar";
import { Navbar } from "./components/navbar";

function App() {
	// const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div>
			<Navbar />

			<Middlebar />

			<div className="flex flex-col sm:flex-row justify-around mt-6 sm:w-480 mx-auto">
				<Calendar />

				<DataArea />
			</div>
		</div>
	);
}

export default App;
