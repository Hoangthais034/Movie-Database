import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes";
import "./shared/styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
