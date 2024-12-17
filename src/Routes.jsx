import { Routes, Route } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./pages/404Page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
