
function Home() {
  return (
    <div className="text-center py-5">
      <h1>Welcome to AST Hospital</h1>
      <p className="lead">A healthcare portal for hospital only.</p>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Our Mission</h5>
            <p>Provide simple, secure digital access to healthcare records and appointments.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Quick Links</h5>
            <ul>
              <li>Book Appointment</li>
              <li>View Reports</li>
              <li>Contact Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
