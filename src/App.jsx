import { BrowserRouter, Routes } from "react-router-dom";
import AppRoutes from "./Routes";
import "./shared/styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
