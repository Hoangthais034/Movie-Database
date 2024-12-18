import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes";
import "./shared/styles/app.css";
import GlobalStyle from './shared/styles/StyleIndex'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}
