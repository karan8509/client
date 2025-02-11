import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Create = () => {
  const navigate = useNavigate();
  const userName = useRef(null);
  const userAge = useRef(null);
  const userMobile = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = userName.current.value;
    const userage = userAge.current.value;
    const usermobile = userMobile.current.value;
    try {
      if ((!username !== !userage) !== !usermobile) {
        alert("YOUR DATA NOT SAVE BROTHER  WHY MT!");
        return;
      }
      const response = await axios.post(
        "https://server-hnr9.onrender.com/createUser",
        {
          username,
          userage,
          usermobile,
        }
      );
      navigate("/");

      const { success, message } = response.data;
      console.log(success, message);
      if (success) {
        return toast.success(message);
      } else {
        toast.error(message);
      }

      userName.current.value = "";
      userAge.current.value = "";
      userMobile.current.value = "";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="text"
            className="form-controls"
            id="inputName3"
            placeholder="Name"
            ref={userName}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="number"
            className="form-controls"
            id="inputAge"
            placeholder="Age"
            ref={userAge}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10">
          <input
            type="number"
            className="form-controls"
            id="inputMobile"
            placeholder="Phone no :"
            ref={userMobile}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Post
      </button>
      <ToastContainer />
    </form>
  );
};

export default Create;
