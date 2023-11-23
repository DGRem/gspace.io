import { useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import ConfirmBookingModal from '../ConfirmBooking';
import Pic1 from '/src/assets/images/arcadebook.jpeg';
import Pic2 from '/src/assets/images/consolebook.jpeg';
import Pic3 from '/src/assets/images/pcbook.jpeg';

const RoomDetails = {
  arcade: {
    image: Pic1,
    description: 'Welcome to the Nexus of Nostalgia, the Arcade Room! Immerse yourself in a symphony of electronic symphonies and pixelated dreams. From the hypnotic glow of classic CRT monitors to the click-clack of arcade buttons, this room is a time capsule of gaming evolution. Unleash your inner pixel warrior as you navigate through mazes, dodge virtual enemies, and conquer high scores that echo through the corridors of gaming history. Get ready to level up your reality, where every token is a key to unlocking memories and every joystick is a magic wand in the hands of a digital sorcerer. Step inside, Player One, and let the adventure begin!',
    price: 'P1,000 ',
  },
  console: {
    image: Pic2,
    description: "Welcome to the Console Citadel, where pixels meet power! Immerse yourself in the sleek aesthetics and high-tech prowess of gaming consoles from across the ages. From the iconic hum of loading screens to the satisfying click of a controller, this room is a haven for console enthusiasts. Unleash your inner adventurer as you explore vast digital landscapes, challenge legendary bosses, and forge unforgettable gaming moments. Get ready to level up your gaming experience, where every button press is a step towards victory and every console is a portal to infinite worlds. Grab your controller, Player Two, and let the gaming saga unfold!",
    price: 'P1,500',
  },
  desktop: {
    image: Pic3,
    description: "Welcome to the Binary Battleground, the Desktop Gaming Room! Here, the hum of cooling fans harmonizes with the click-clack of mechanical keyboards, creating a symphony of digital conquest. Immerse yourself in the world of high-performance rigs, where graphics are crystal clear, and framerates are as smooth as a perfectly executed headshot. Unleash your strategic genius as you command armies, conquer galaxies, and embark on epic quests. Get ready to level up your gaming rig, where every pixel is a battlefield and every keystroke is a tactical maneuver. Power up your gaming throne, Player Zero, and let the desktop odyssey commence!",
    price: 'P2,000',
  },
};

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Set to today's date by default
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
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

  const isDateAvailable = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= currentDate; 
  };

  const closeBookingModal = () => {
    setModalOpen(false);
  };

  const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '10:00 PM', '12:00 AM'];

  return (
    <>
      <NavBar />
      <main className='bg-customPurple text-white'>
      <div className="container mx-auto p-4 flex pt-40 ">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          <h1 className="text-2xl font-bold mb-4">Book a Gaming Room</h1>

          {/* Date Selector */}
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Date:</label>
            <input
              type="date"
              onChange={(e) => handleDateChange(e.target.value)}
              value={selectedDate}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          {/* Time Slot Selector */}
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Time Slot:</label>
            <select
              onChange={(e) => handleTimeSlotChange(e.target.value)}
              value={selectedTimeSlot}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="" disabled hidden>Select Time Slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          {/* Room Type Selector */}
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-2">Select Room Type:</label>
            <select
              onChange={(e) => handleRoomChange(e.target.value)}
              value={selectedRoom}
              className="border rounded px-3 py-2 w-full"
              required
            >
              <option value="" disabled hidden>Select Room Type</option>
              <option value="arcade">Arcade Room</option>
              <option value="console">Console Room</option>
              <option value="desktop">Desktop Gaming Room</option>
            </select>
          </div>

          {/* Booking Confirmation Section */}
          {selectedDate && selectedRoom && !isModalOpen && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Confirm Booking</h2>
              <p className="mb-1">Date: {selectedDate}</p>
              <p className="mb-1">Time Slot: {selectedTimeSlot}</p>
              <p className="mb-1">Room Type: {selectedRoom}</p>
              {isDateAvailable(selectedDate) ? (
                <>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Check Availabilty
                  </button>
                </>
              ) : (
                <p className="text-red-500">Selected date is not available for booking.</p>
              )}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">

          {/* Room Preview */}
          {selectedRoom && RoomDetails[selectedRoom] && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Room Preview</h2>
              <img
                src={RoomDetails[selectedRoom].image}
                alt={`${selectedRoom} Room`}
                className="w-full h-auto rounded"
              />
             <p>{RoomDetails[selectedRoom].description}</p>
            <p>{RoomDetails[selectedRoom].price}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {isModalOpen && (
        <ConfirmBookingModal
          isOpen={isModalOpen}
          onClose={closeBookingModal}
          onConfirmBooking={() => {
            closeBookingModal();
          }}
          bookingDetails={{
            date: selectedDate,
            time: selectedTimeSlot,
            roomType: selectedRoom,
          }}
        />
      )}
      </main>
    </>
  );
}
