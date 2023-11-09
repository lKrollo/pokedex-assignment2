import "./styles.css";
import React from 'react';
import ReactDOM from "react-dom/client"
import Root from "./Components/Root"
import About from "./Components/About"
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from "./App"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/", 
                element: <App />
            },
            {
                path: "/about",
                element: <About/>
            },
        ],
        
    },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
