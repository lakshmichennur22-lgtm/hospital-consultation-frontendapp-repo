import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">AST Hospital</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/facilities">Facilities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/doctors">Doctors</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/branches">Branches</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/book-consultation">Book Consultation</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Consultations">Consultations</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
