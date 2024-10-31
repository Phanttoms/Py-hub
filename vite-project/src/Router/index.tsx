import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Wankil from "../pages/WankilStudio";
import Rayju from "../pages/RayjuLucifurus";
import ElJj from "../pages/ElJj";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/wankil-studio" element={<Wankil />} />
				<Route path="/rayju" element={<Rayju />} />
				<Route path="/eljj" element={<ElJj />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
