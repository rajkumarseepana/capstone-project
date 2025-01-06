import React, { useState } from 'react';
import './css/BookingForm.css';

const BookingForm = ({ availableTimes = [] }) => { // Fallback to an empty array
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || ''); // Fallback to an empty string
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = 'Date is required';
    if (guests < 1 || guests > 10) newErrors.guests = 'Number of guests must be between 1 and 10';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      {errors.date && <span className="error">{errors.date}</span>}

      <label htmlFor="time">Time:</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests:</label>
      <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" max="10" required />
      {errors.guests && <span className="error">{errors.guests}</span>}

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