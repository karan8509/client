import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import axios from "axios";
const UserDetails = () => {
  const [userDataLocal, setUserDataLocal] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://server-hnr9.onrender.com/");
        setUserDataLocal(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    console.log("---<", id);
    await axios
      .delete("https://server-hnr9.onrender.com/deleteUser/" + id)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log("---->", err.message));
  };

  return (
    <div className="table-container">
      <NavLink to="/create" className="add-btn">
        Add +
      </NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDataLocal.map((_element, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{_element.name}</td>
              <td>{_element.age}</td>
              <td>{_element.mobile}</td>
              <td>
                <NavLink to={`/updata/${_element._id}`} className="updata-btn">
                  Update
                </NavLink>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(_element._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
