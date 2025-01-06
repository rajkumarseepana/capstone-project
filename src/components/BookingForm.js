import React, { useState } from 'react';
import './css/BookingForm.css';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <label htmlFor="guests">Number of Guests:</label>
      <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;