import  { useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import PaymentModal from '../PaymentModal';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isPaymentComplete, setPaymentComplete] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleRoomChange = (roomType) => {
    setSelectedRoom(roomType);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const isDateAvailable = (date) => {
    // PENDING DATABASE FOR CHECKING
    // SIMPLIFIED EXAMPLE
    const currentDate = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= currentDate; // DATE CHECKER
  };

  const handlePayment = () => {
    // PENDING PAYMENT INTEGRATION
    // SAMPLE SUCCESS PAYMENT
    setModalOpen(true);
  };

  const confirmPayment = () => {
    // PENDING PAYMENT INTEGRATION
    // SAMPLE SUCCESS PAYMENT
    setPaymentComplete(true);
    setModalOpen(false);
    alert('Transaction successful! Your booking is confirmed.');
  };

  

  const closePaymentModal = () => {
    setModalOpen(false);
  };

  const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '10:00 PM', '12:00 AM'];

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 flex">
        <div className="w-1/2 pr-4">
          <h1 className="text-2xl font-bold mb-4">Book a Gaming Room</h1>

          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Date:</label>
            <input
              type="date"
              onChange={(e) => handleDateChange(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Time Slot:</label>
            <select
              onChange={(e) => handleTimeSlotChange(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Room Type:</label>
            <select
              onChange={(e) => handleRoomChange(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="arcade">Arcade Room</option>
              <option value="console">Console Room</option>
              <option value="desktop">Desktop Gaming Room</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Location:</label>
            <select
              onChange={(e) => handleLocationChange(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              {/* Add more locations as needed */}
            </select>
          </div>

          {selectedDate && selectedRoom && !isPaymentComplete && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Confirm Booking</h2>
              <p className="mb-1">Date: {selectedDate}</p>
              <p className="mb-1">Room Type: {selectedRoom}</p>
              {selectedLocation && (
                <p className="mb-2">Location: {selectedLocation}</p>
              )}
              {isDateAvailable(selectedDate) ? (
                <>
                  <p className="mb-1">Total Amount: $20 (for example)</p>
                  <button
                    onClick={handlePayment}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Proceed to Payment
                  </button>
                </>
              ) : (
                <p className="text-red-500">Selected date is not available for booking.</p>
              )}
            </div>
          )}

          {isPaymentComplete && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Booking Confirmed!</h2>
              <p>Your booking for {selectedRoom} on {selectedDate} is confirmed.</p>
            </div>
          )}

          {/* Payment Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment</h2>
            <p>Select a payment method:</p>
            <div className="flex items-center mt-1">
              <input type="radio" id="card" name="paymentMethod" value="card" className="mr-1" />
              <label htmlFor="card" className="mr-3">Credit/Debit Card</label>
              {/* ADD MORE PAYMENT OPTIONS AS NEEDED */}
            </div>
            <button
              onClick={handlePayment}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2"
            >
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">
          {/* Room Image Placeholder */}
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Room Image"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Room Details */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Room Details</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at turpis eu metus fringilla imperdiet. Aliquam erat volutpat.</p>
          </div>

          {/* Sample Inclusions */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Sample Inclusions</h2>
            <ul>
              <li>High-speed internet</li>
              <li>Top-of-the-line gaming equipment</li>
              <li>Comfortable seating</li>
              {/* Add more inclusions as needed */}
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            {/* PENDING MAP INTEGRATION */}
            <p>Map Placeholder</p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, Cityville, Country</p>
          </div>
        </div>
      </div>
      <Footer />

      {/* Render the PaymentModal conditionally */}
      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={closePaymentModal}
          onConfirmPayment={confirmPayment}
        />
      )}
    </>
  );
}
