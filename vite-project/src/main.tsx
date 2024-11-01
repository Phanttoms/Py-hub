import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// style
import "./_main.scss";

// chemin des pages
import Router from "./Router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router />
	</StrictMode>
);
