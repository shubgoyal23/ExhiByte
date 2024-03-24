import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import sortfunction from "./utils/sortFilter";
import { v4 as uuid } from "uuid";
import Card from "./components/card/Card";
import jData from "./data.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
   const [Maindata, setMainData] = useState(jData);
   const [data, setData] = useState([]);
   const [currentActive, setCurrentActive] = useState("total");
   const [activefilter, setActiveFilter] = useState(true);
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();

   const StateHandler = (item) => {
      if (currentActive != item) {
         setCurrentActive(item);
      }
      setActiveFilter((prev) => !prev);
   };

   const deleteUser = (id) => {
      const newData = data.filter((item) => item.uid !== id);
      setMainData(newData);
   };

   useEffect(() => {
      const list = sortfunction(Maindata, currentActive, activefilter);
      const startDateFilter = startDate
         ? list.filter((item) => new Date(item.join_date) > new Date(startDate))
         : list;
      const endDateFilter = endDate
         ? startDateFilter.filter(
              (item) => new Date(item.join_date) < new Date(endDate)
           )
         : startDateFilter;
      setData(endDateFilter);
   }, [currentActive, activefilter, Maindata, startDate, endDate]);

   return (
      <div className="w-screen m-0 p-2 lg:p-12 bg-white">
         <div className="w-full h-full box-border bg-gradient-to-l from-[#e4f2fe] to-[#ffeefe] rounded-3xl">
            <div className="w-full lg:w-1/2 mx-auto pt-6 px-6 h-10 flex justify-center items-center gap-10">
               <button onClick={() => StateHandler("total")}>
                  Twubric Score
                  {currentActive == "total" ? (
                     activefilter ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                     ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                     )
                  ) : (
                     ""
                  )}
               </button>
               <button onClick={() => StateHandler("friends")}>
                  Friends{" "}
                  {currentActive == "friends" ? (
                     activefilter ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                     ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                     )
                  ) : (
                     ""
                  )}
               </button>
               <button onClick={() => StateHandler("influence")}>
                  Influence
                  {currentActive == "influence" ? (
                     activefilter ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                     ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                     )
                  ) : (
                     ""
                  )}
               </button>
               <button onClick={() => StateHandler("chirpiness")}>
                  Chirpiness
                  {currentActive == "chirpiness" ? (
                     activefilter ? (
                        <FontAwesomeIcon icon={faCaretDown} />
                     ) : (
                        <FontAwesomeIcon icon={faCaretUp} />
                     )
                  ) : (
                     ""
                  )}
               </button>
            </div>
            <div className="w-4/5 mx-auto my-5 flex flex-col md:flex-row justify-center items-center gap-3">
               Filter By Date:
               <DatePicker
                  placeholderText="start Date"
                  className="w-52 h-8 rounded-md text-center bg-gray-50 border border-gray-400 shadow-md outline-none focus:border-blue-400"
                  selected={startDate}
                  onChange={(startDate) => setStartDate(startDate)}
                  startDate={startDate}
               />
               <DatePicker
                  placeholderText="End Date"
                  className="w-52 h-8 rounded-md text-center bg-gray-50 border border-gray-400 shadow-md outline-none focus:border-blue-400"
                  selected={endDate}
                  onChange={(endDate) => setEndDate(endDate)}
                  startDate={endDate}
               />
            </div>
            <div className="w-full text-center capitalize">
               filter by: {currentActive} in{" "}
               {!activefilter ? " Accending order" : " decending order"}
            </div>

            {data.length === 0 ? (
               <div className="text-center text-red-600 mt-10">
                  List is Empty Try Removing Date filter
               </div>
            ) : (
               ""
            )}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 p-10">
               {data.map((item) => (
                  <Card
                     key={uuid()}
                     data={item}
                     deleteUser={deleteUser}
                     currentActive={currentActive}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
