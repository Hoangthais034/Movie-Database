import { Routes, Route } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./pages/404Page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/movie-details/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
