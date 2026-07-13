import axios from 'axios'
import React, { useState } from 'react'

const AddDonor = () => {

 const [input, changeInput] = useState(
        {
            donor_name: "", 
            age: "",
            gender: "",
            blood_group: "", 
            phone: "",
            email: "",
            city: "",
            weight_kg: "",
            last_donation_date: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({...input,[event.target.name]: event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-donor" ,input).then(
            (response)=> {
                console.log(response.data)
                alert("Donor added successfully")
            }
        ).catch(
            (error)=>{
                console.error("Error adding donor:",error)

                alert("Failed to add donor")
            }
        )
    }

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Donor Name</label>
                    <input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Age</label>
                    <input type="number" className="form-control"  name="age" value={input.age} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Gender</label>
                    <select name="" id="" className="form-control" name="gender" value={input.gender} onChange={inputHandler} >
                        <option value="">Female</option>
                        <option value="">Male</option>
                        <option value="">Other</option>
                    </select>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Blood Group</label>
                    <select name="" id="" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler} >
                        <option value="">A+</option>
                        <option value="">A-</option>
                        <option value="">B+</option>
                        <option value="">B-</option>
                        <option value="">AB+</option>
                        <option value="">AB-</option>
                        <option value="">O+</option>
                        <option value="">O-</option>
                    </select>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Phone</label>
                    <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='example@gmail.com' name="email" value={input.email} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Weight (in kg)</label>
                    <input type="number" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandler} />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Last donation date</label>
                    <input type="date" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddDonor