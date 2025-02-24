import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </DndProvider>
    </React.StrictMode>
);
