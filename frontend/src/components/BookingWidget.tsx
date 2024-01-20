// import { useState} from "react";
// import {differenceInCalendarDays} from "date-fns";

// import {Navigate} from "react-router-dom";


export default function BookingWidget({cost}) {
  // const [checkIn,setCheckIn] = useState('');
  // const [checkOut,setCheckOut] = useState('');
  // const [numberOfGuests,setNumberOfGuests] = useState(1);
  // const [name,setName] = useState('');
  // const [phone,setPhone] = useState('');
  // const [redirect,setRedirect] = useState('');
  // const {user} = useContext(UserContext);



  // let numberOfNights = 0;
  // if (checkIn && checkOut) {
  //   numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  // }

 



  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        {/* Price: ${place.price} / per night */}
      
        Price: PKR{cost}
      </div>
      {/* <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number"
                 value={numberOfGuests}
                 onChange={(ev:any )=> setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div> */}
      <button className="primary mt-4">
        Book 
        {/* {numberOfNights > 0 && (
          <span>
             ${numberOfNights * place.price}
             $40
          </span>
        )} */}
      </button>
    </div>
  );
}