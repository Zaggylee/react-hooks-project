import { Routes, Route } from "react-router";
import MoreDetails from "./components/MoreDetails";
import Home from "./components/home";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":movie_id" element={<MoreDetails />} />
      </Routes>
    </section>
  );
}
export default App;
