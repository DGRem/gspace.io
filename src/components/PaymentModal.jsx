
const PaymentModal = ({ isOpen, onClose, onConfirmPayment }) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirmPayment = () => {
    onConfirmPayment();
    onClose(); // Close the modal
    alert('Transaction successful! Your booking is confirmed.'); // Simulate success message
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <p className="mb-4">This is where you would integrate with a payment gateway.</p>
        <p className="mb-4">For demonstration purposes, we'll simulate a successful payment.</p>
        <div className="flex justify-end">
          <button
            onClick={handleConfirmPayment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          >
            Confirm Payment
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

export default PaymentModal;
