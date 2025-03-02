import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {

    const data = useLoaderData();

//   const [data, setData] = useState({}); // Initialize as an empty object
//   useEffect(() => {
//     fetch("https://api.github.com/users/Tahzeeb-sh0") // Fetch data from GitHub API
//       .then((response) => response.json()) // Correct response parsing
//       .then((data) => {
//         console.log(data); // Log data
//         setData(data); // Set state correctly
//       })
//       .catch((error) => console.error("Error fetching data:", error)); // Error handling
//   }, []);

  return (
    <div className="p-4 flex justify-between items-center bg-gray-700  text-white">
      
      {data.name ? (
        <>
        <div className=" overflow-hidden m-3.5 "> <img className="hover:scale-105 transform translate duration-500 ease-in-out" src={data.avatar_url} alt="GitHub Avatar" /></div>
        

         <div className="gap-2 m-auto ">
         <div className="m-3.5"><h2 className="text-2xl font-bold text-white">GitHub Profile</h2></div>
         <p>Name: {data.name}</p>
         <p>Username: {data.login}</p>
         <p>Followers: {data.followers}</p>
         <p>Bio:{data.bio}</p>
         </div>
        
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export const gitHubLoaderInfo = async () => {
   const response = await fetch("https://api.github.com/users/Tahzeeb-sh0");
   return response.json();
    
}
