import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserUpdata = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const UpdataUserOld = async () => {
      try {
        const userData = await axios.get(
          `https://server-hnr9.onrender.com/getUser/${id}`
        );
        setName(userData.data.users.name);
        setAge(userData.data.users.age);
        setMobile(userData.data.users.mobile);
      } catch (error) {
        console.log(error.message);
      }
    };
    UpdataUserOld();
  }, []);

  const UpdataUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://server-hnr9.onrender.com/updataUser/${id}`, {
        name,
        age,
        mobile,
      });
      navigate("/");
      setName("");
      setAge("");
      setMobile("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={UpdataUser}>
      <h2>Updata User</h2>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="text"
            className="form-controls"
            id="inputEmail3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="number"
            className="form-controls"
            id="inputPassword3"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="number"
            className="form-controls"
            id="inputPassword3"
            placeholder="Phone no :"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Update
      </button>
    </form>
  );
};

export default UserUpdata;
