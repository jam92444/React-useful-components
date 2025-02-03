import React, { useEffect, useState } from "react";

const SearchApp = () => {
  const [users, setUsers] = useState(null);
  const [inputData,setInputData] = useState("")
  const [userFilter,setUserFilter] = useState(null)


  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setUserFilter(data)
  };
  //method 01 : search by exact match on clicking button 
//   const handleSearch =()=>{
//     const filterData = users?.filter(user => user?.name?.toLowerCase()?.includes(inputData?.toLowerCase()));
//     setUserFilter(filterData);
    
//   }

// method 02 checking on type 
  const handleSearch =(el)=>{
    const filterData = users?.filter(user => user?.name?.toLowerCase()?.includes(el.target.value.toLowerCase()));
    setUserFilter(filterData);
    
  }


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>SEARCH APP</h2>

      <div style={{ textAlign: "center" }}>
        {/* method 01 */}
        {/* <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} placeholder="Search here..." /> */}
        {/* <button onClick={handleSearch}>Search</button> */}

        {/* method 02 */}
        <input type="text"  onChange={(e)=> handleSearch(e)} placeholder="Search here..." />
      </div>
      <table style={{ textAlign: "center" }} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {/* {userFilter?.length === 0 && <p>Loading...</p>} */}
          {userFilter?.map((user) => (
            <tr key={user?.id}>
              <td>{user?.name}</td>
              <td>{user?.website}</td>
              <td>{user?.email}</td>
              <td>{user?.address?.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchApp;
