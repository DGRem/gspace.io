
const ConfirmBookingModal = ({ isOpen, onClose, onConfirmBooking, bookingDetails }) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirmBooking = () => {
    onConfirmBooking();
    onClose(); 

    alert('Hello, fellow denizen of G-Space'); 
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Availabilty:</h2>

        {/* Booking Summary */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          {bookingDetails && (
            <>
              <p>Date: {bookingDetails.date}</p>
              <p>Time: {bookingDetails.time}</p>
              <p>Room Type: {bookingDetails.roomType}</p>
            </>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          >
            Confirm Booking
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingModal;
