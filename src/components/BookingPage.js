import React from 'react'; // Removed useState import
import BookingForm from './BookingForm';
import './css/BookingPage.css';

const BookingPage = () => {
  // Define availableTimes as a constant array
  const availableTimes = ['17:00', '18:00', '19:00', '20:00'];

  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default BookingPage;