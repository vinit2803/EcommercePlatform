import React, { useEffect, useState } from "react";

const Account = ({ showAlert }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    getallItem();
    // eslint-disable-next-line
  }, []);
  const getallItem = async (e) => {
    // e.preventDefault();
    if (!localStorage.getItem("token")) {
      //   console.log("Please logged in");
      showAlert("PLease Log in", "danger");
    } else {
      const response = await fetch(
        "http://localhost:5000/api/auth/getuserdata",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      // console.log(json);

      setData(json);
    }
  };
  return (
    <div className="container">
      <p>Name: {Data.name}</p>
      <p>Email:{Data.email}</p>
      <p>role:{Data.role}</p>
      <p>CreatedAt:{Data.createdAt}</p>
    </div>
  );
};

export default Account;
