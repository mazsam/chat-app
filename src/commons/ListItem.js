import React from 'react';
const ListItem = ({user, data}) => {
  return (
    <div className={`flex flex-col${
     user === data.name && `items-end justify-end ` }`}>
      <div
         className={`px-4 py-2 rounded-lg bg-gray-30 max-w-fit my-2 ${
           user === data.name
             ? " bg-blue-600 text-white rounded-br-none"
             : "text-gray-600 bg-gray-300 rounded-bl-none"
         }`}
       >
         <div className='text-xs'>{data.name} </div>
         <h3 className="text-md" style={{ wordWrap: "break-word" }}>
           {data.message}
         </h3>
       </div>
    </div>
   )
}

export default ListItem;