import { useState } from "react";

export default function BookConsultation() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        contact: "",
        doctor: "",
        date: "",
        reason: "",
        symptoms: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = process.env.REACT_APP_API_URL + "/consultations";
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })
            .then(res => res.json())
            .then(() => alert("Consultation booked!"))
            .catch(() => alert("Error booking consultation"));
    };

    return (
        <div>
            <h2>Book Consultation</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
                <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required /><br />
                <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required /><br />
                <input name="doctor" placeholder="Doctor" value={form.doctor} onChange={handleChange} required /><br />
                <input type="date" name="date" value={form.date} onChange={handleChange} required /><br />
                <input name="reason" placeholder="Reason" value={form.reason} onChange={handleChange} required /><br />
                <input name="symptoms" placeholder="Symptoms" value={form.symptoms} onChange={handleChange} required /><br />
                <button type="submit">Book</button>
            </form>
        </div>
    );
}
