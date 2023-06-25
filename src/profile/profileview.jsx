import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ENV_URL } from "../Main/APIURL";

export default function ProfileView() {
  const [profileDetails, setProfileDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDetails();
  }, []);

  let getDetails = () => {
    axios
      .get(ENV_URL)
      .then((response) => {
        console.log("response", response);
        setProfileDetails(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  let handleEdit = (item) => {
    navigate("/profile", {
      state: {
        details: item,
      },
    });
  };

  let handleDelete = (id) => {
    axios
      .delete(ENV_URL + "/" + id)
      .then((response) => {
        alert("Deleted successfully");
        getDetails();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleGoBack = () => {
    navigate("/profile");
  };

  return (
    <div className="profile-view">
      <h1>Profile View</h1>
      <button onClick={handleGoBack}>Back</button> {/* Back button */}
      {profileDetails.map((item, i) => {
        return (
          <ul key={i}>
            <li>
              Personal {item.aboutuserdetails.Name} {item.aboutuserdetails.Age}
            </li>
            <li>
              Family {item.userparentsdetails.FatherName}{" "}
              {item.userparentsdetails.MotherName}
            </li>
            <li>
              Address {item.address.City} {item.address.State}
            </li>
            <li>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
}
