
const doctors = [
  { name: 'Dr. Raj Patel', spec: 'General Physician' },
  { name: 'Dr. Meera Iyer', spec: 'Pediatrician' },
  { name: 'Dr. Sunil Rao', spec: 'Cardiologist' },
  { name: 'Dr. Patel', spec: 'General surgeon' },
  { name: 'Dr. Meera reddy', spec: 'Gynocologist' },
  { name: 'Dr. Sharma Rao', spec: 'Neurology' }
];

function Doctors() {
  return (
    <div>
      <h2>Doctors</h2>
      <div className="row">
        {doctors.map((d, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="card p-3">
              <h5>{d.name}</h5>
              <p><strong>Specialty:</strong> {d.spec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
