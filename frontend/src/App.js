import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './pages/About';
import BookConsultation from './pages/BookConsultation';
import Branches from './pages/Branches';
import Consultations from './pages/Consultations'; // <-- import consultations list
import Doctors from './pages/Doctors';
import Facilities from './pages/Facilities';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container container-custom mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultations" element={<Consultations />} /> {/* List of consultations */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-consultation" element={<BookConsultation />} /> {/* Booking form */}
        </Routes>
      </div>

      {/* Move nav link OUTSIDE of Routes */}
      <nav className="mt-3">
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/consultations">Consultations</Link>
          </li>
        </ul>
      </nav>

      <div className="footer">© 2025 AST Hospital</div>
    </Router>
  );
}

export default App;
