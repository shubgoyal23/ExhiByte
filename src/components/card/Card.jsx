import dateConverter from "../../utils/dateConverter";

function Card({ data, deleteUser, currentActive }) {
   return (
      <div className="w-full h-full border-2 border-gray-300 shadow-lg p-4 rounded-lg">
         <div className="flex">
            <div className="w-1/4 flex justify-center items-start mr-3">
               <img
                  src={data.image}
                  alt={`photo of ${data.fullname}`}
                  className="rounded-full"
               />
            </div>
            <div className="w-3/4 pl-3 flex flex-col justify-between">
               <h1 className="text-2xl text-indigo-500">{data.fullname}</h1>
               <div
                  className={`flex justify-between items-center text-gray-600 text-xl ${
                     currentActive == "total"
                        ? "font-semibold text-orange-400"
                        : ""
                  }`}
               >
                  <span>Total Twubric Score </span>
                  <span className="text-red-500">{data.twubric.total}</span>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-3 divide-x-2 border border-gray-300 rounded-md mt-2">
            <div
               className={`flex gap-2 justify-center items-center py-3 ${
                  currentActive == "friends"
                     ? "font-semibold text-orange-400"
                     : ""
               }`}
            >
               <span>Friends:</span>
               <span className="text-red-400">{data.twubric.friends}</span>
            </div>
            <div
               className={`flex gap-2 justify-center items-center py-3 ${
                  currentActive == "influence"
                     ? "font-semibold text-orange-400"
                     : ""
               }`}
            >
               <span>Influence: </span>
               <span className="text-red-400">{data.twubric.influence}</span>
            </div>
            <div
               className={`flex gap-2 justify-center items-center py-3 ${
                  currentActive == "chirpiness"
                     ? "font-semibold text-orange-400"
                     : ""
               }`}
            >
               <span>Chirpiness: </span>
               <span className="text-red-400">{data.twubric.chirpiness}</span>
            </div>
         </div>
         <div className="grid grid-cols-3 divide-x-2 border border-gray-300 rounded-md mt-2">
            <div className="flex gap-2 col-span-2 justify-center items-center py-3">
               <span>Join Date: </span>
               <span className="text-indigo-400">
                  {dateConverter(data.join_date)}
               </span>
            </div>
            <div
               className="flex gap-2 justify-center items-center py-3 cursor-pointer hover:bg-blue-200"
               onClick={() => deleteUser(data.uid)}
            >
               <span>Remove</span>
            </div>
         </div>
      </div>
   );
}

export default Card;
