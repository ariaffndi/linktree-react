import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
			</Route>
		</Routes>
	</BrowserRouter>
);
