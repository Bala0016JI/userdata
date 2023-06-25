import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ENV_URL } from "../Main/APIURL";

const initialValues = {
    aboutuserdetails: {
        Name: "",
        Age: "",
        MobileNO: "",
        DOB: "",
    },

    userparentsdetails: {
        FatherName: "",
        MotherName: "",
    },
    address: {
        City: "",
        Pincode: "",
        State: "",

    },
    republic: {
        Mothertongue: "",
        Nationality: "",
    },
};

export default function Profile() {
    const [values, setValues] = useState(initialValues);
    const [isUpdate,setIsUpdate] =useState(false);
    const [id,setId]=useState(0);

    const navigate =useNavigate();
    const location=useLocation();

    useEffect(()=>{
     console.log(location.state);
     if(location.state !=null){
        if(location.state.details !==null){
            setValues(location.state.details);
            setId(location.state.details.id);
            setIsUpdate(true);
        }
     }
    },[location.state])

    let handleProfile=(e)=>{
        e.preventDefault();
        if(!isUpdate){
            handleSubmit();
        }else{
            handleUpdate();
        }
    }

    let handleSubmit = () => {
        axios.post(ENV_URL,values).then(response=>{
            alert('data saved succesfully');
            navigate("/profile-view")
        }).catch(err=>{
            alert(err.message);
        })
    }

    let handleUpdate = () => {
        console.log(id);
        axios.put(ENV_URL+"/"+id,values).then(response=>{
            alert('data updated succesfully');
            navigate("/profile-view")
        }).catch(err=>{
            alert(err.message);
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'Name' || name === "Age" || name === "MobileNO" || name === "DOB") {
            let a = { ...values };
            a.aboutuserdetails[name] = value;
            setValues(a)
        } else if (name === 'City' || name === "State" || name === "Pincode") {
            let b = { ...values };
            b.address[name] = value;
            setValues(b)
        } else if (name === 'FatherName' || name === "MotherName") {
            let c = { ...values };
            c.userparentsdetails[name] = value;
            setValues(c)
        } else if (name === "Mothertongue" || name === "Nationality") {
            let d = { ...values };
            d.republic[name] = value;
            setValues(d)
            // setValues({
            //     ...values,
            //     [name]: value,
            // });
        }
    };

    return (
        <div className="first_class">
            
        <form className="profile">
            <fieldset id="outerline" >
            <h3 id="titile">PERSONAL DETAILS</h3>
                <div id="div_personal">
                    <label htmlFor="Name" id="personal_details_input" ></label>
                    <input
                        value={values.aboutuserdetails.Name}
                        onChange={handleInputChange}
                        name="Name"
                        label="Name"
                        placeholder="Name"
                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="Age" id="personal_details_input"></label>
                    <input
                        value={values.aboutuserdetails.Age}
                        onChange={handleInputChange}
                        name="Age"
                        label="Age"
                        placeholder="Age"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="MobileNo" id="personal_details_input"></label>
                    <input
                        value={values.aboutuserdetails.MobileNO}
                        onChange={handleInputChange}
                        name="MobileNO"
                        label="MobileNO"
                        placeholder="MobileNo"
                        type="number"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="DOB" id="personal_details_input"></label>
                    <input
                        value={values.aboutuserdetails.DOB}
                        onChange={handleInputChange}
                        name="DOB"
                        label="DOB"
                        placeholder="DOB"
                        type= "date"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="FatherName" id="personal_details_input"></label>
                    <input
                        value={values.userparentsdetails.FatherName}
                        onChange={handleInputChange}
                        name="FatherName"
                        label="FatherName"
                        placeholder="FatherName"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="" id="personal_details_input"></label>
                    <input
                        value={values.userparentsdetails.MotherName}
                        onChange={handleInputChange}
                        name="MotherName"
                        label="MotherName"
                        placeholder="MotherName"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="City" id="personal_details_input"></label>
                    <input
                        value={values.address.City}
                        onChange={handleInputChange}
                        name="City"
                        label="City"
                        placeholder="City"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="Pincode" id="personal_details_input"></label>
                    <input
                        value={values.address.Pincode}
                        onChange={handleInputChange}
                        name="Pincode"
                        label="Pincode"
                        placeholder="Pincode"
                        type= "number"


                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="State" id="personal_details_input"></label>
                    <input
                        value={values.address.State}
                        onChange={handleInputChange}
                        name="State"
                        label="State"
                        placeholder="State"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="Mothertongue" id="personal_details_input"></label>
                    <input
                        value={values.republic.Mothertongue}
                        onChange={handleInputChange}
                        name="Mothertongue"
                        label="Mothertongue"
                        placeholder="Mothertongue"

                    />
                </div>
                <div id="div_personal">
                    <label htmlFor="Nationality" id="personal_details_input"></label>
                    <input
                        value={values.republic.Nationality}
                        onChange={handleInputChange}
                        name="Nationality"
                        label="Nationality"
                        placeholder="Nationality"

                    />
                </div>

                <button id="btn_personal" style={{marginTop:12}} type="submit" onClick={handleProfile}> {isUpdate? 'Update':'Submit'} </button>
            </fieldset>
        </form>
        </div>
    );
}