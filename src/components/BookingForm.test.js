import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} />);
  const dateInput = screen.getByLabelText(/Date:/i);
  const timeSelect = screen.getByLabelText(/Time:/i);
  const guestsInput = screen.getByLabelText(/Number of Guests:/i);
  const occasionSelect = screen.getByLabelText(/Occasion:/i);
  const submitButton = screen.getByText(/Book Now/i);

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('validates form inputs', () => {
  render(<BookingForm availableTimes={['17:00', '18:00']} />);
  const submitButton = screen.getByText(/Book Now/i);

  fireEvent.click(submitButton);

  const dateError = screen.getByText(/Date is required/i);
  expect(dateError).toBeInTheDocument();
});