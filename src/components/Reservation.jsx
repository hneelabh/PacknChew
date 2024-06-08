import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import schedule from "../assets/schedule.jpg";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
const firestore = getFirestore(app);

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [tableType, setTableType] = useState("premium");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    console.log("Handling reservation...");

    const customerQuery = query(
      collection(firestore, "customers"),
      where("email", "==", email)
    );
    const customerSnapshot = await getDocs(customerQuery);
    console.log("Customer snapshot:", customerSnapshot.docs.length);

    if (customerSnapshot.empty) {
      alert(
        "Customer with provided email not found. please Provide the registered email"
      );
      return;
    }

    const customerDoc = customerSnapshot.docs[0].ref;

    try {
      await addDoc(collection(customerDoc, "reservations"), {
        name: firstName,
        reservationDate: reservationDate,
        time: time,
        tableType: tableType,
        phone: phone,
      });
      console.log("Reservation added successfully!");
      navigate("/success");
    } catch (error) {
      console.error("Error adding reservation: ", error);
      alert("Error adding reservation. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-zinc-800 to-zinc-900">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div>
          <img src={schedule} alt="Schedule" className="w-full max-w-md" />
        </div>
        <div className="bg-black text-[#E2C151] p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold mb-2 text-center">MAKE A RESERVATION</h1>
          <p className="text-center mb-4">For Further Questions, Please Call</p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 text-gray-400 md:grid-cols-2 gap-4 my-4">
              <input
                type="date"
                placeholder="Date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                className="border rounded p-2"
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded p-2"
              />
            </div>
            <div className="mb-4  text-gray-400">
              <label htmlFor="Table Type" className="block mb-2">Select Table Type:</label>
              <select
                id="tableType"
                value={tableType}
                onChange={(e) => setTableType(e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="premium">Premium Table</option>
                <option value="simple">Simple Table</option>
                <option value="outdoor">Outdoor Table</option>
                <option value="private">Private Table</option>
              </select>
            </div>
            <button
              type="button"
              onClick={(e) => handleReservation(e)}
              className="bg-[#E2C151] text-black p-2 hover:bg-brightColor rounded flex items-center justify-center w-full"
            >
              RESERVE NOW <HiOutlineArrowNarrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
