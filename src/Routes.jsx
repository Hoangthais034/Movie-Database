import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
