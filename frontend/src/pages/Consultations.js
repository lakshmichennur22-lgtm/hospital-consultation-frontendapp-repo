import { useEffect, useState } from "react";

export default function ConsultationList() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "/consultations";
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setConsultations(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Booked Consultations</h2>
      {consultations.length === 0 ? (
        <p>No consultations booked yet.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Reason</th>
              <th>Symptoms</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.age}</td>
                <td>{c.contact}</td>
                <td>{c.doctor}</td>
                <td>{c.date}</td>
                <td>{c.reason}</td>
                <td>{c.symptoms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
