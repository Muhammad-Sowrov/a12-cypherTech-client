import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Contacts = () => {
    const axiosPublic = useAxiosPublic();
    const [address, setAddress] = useState([]);
    axiosPublic.get('/dummy')
    .then(res => {
        setAddress(res.data);
    })
  return (
    
      <div className="grid place-items-center mx-14 h-screen">
        <div className="car grid grid-cols-2 mx-20 gap-5 bg-zinc-50 p-10 rounded-lg w-full shadow-xl">
          <div className="w-full">
            {
                address.map(dummy=> <div key={dummy._id}>
                    <div>
                        <h3 className="font-bold">Location</h3>
                        <p>City: {dummy.city}</p>
                        <p>Street: {dummy.street}</p>
                        <p>State: {dummy.state}</p>
                        <p>Postal Code: {dummy.postal_code}</p>
                        <p>Country: {dummy.country}</p>
                    </div>
                </div>)
            }
            
          </div>
          <div className="card-bod w-full">
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg bg-gray-200 border-red-300 p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-black"/>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-ghost outline w-full text-black hover:bg-green-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contacts;
