import React, { useEffect, useState } from 'react'
import NavigationBar from './NavBar'
import axios from 'axios'

const ViewBar = () => {
    const[data,changeData] =useState([])

    const fetchData =() => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

useEffect(
    () => {
        fetchData()
    },[]
)

  return (
    <div>
        
<NavigationBar />
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col lg-4 col-xl-4 col-xxl-4">
                                            <div className="card" >
                                               
                                                <div className="card-body">
                                                    <div>
                                                        <strong>Donor Name :</strong> {value.donor_name} <br />
                                                        <strong>Age :</strong> {value.age} <br />
                                                        <strong>Gender :</strong> {value.gender} <br />
                                                        <strong>Blood Group : </strong> {value.blood_group} <br />
                                                        <strong>Phone : </strong> {value.phone} <br />
                                                        <strong>Email : </strong> {value.email} <br />
                                                        <strong>City : </strong> {value.city} <br />
                                                        <strong>Weight (in kg) : </strong> {value.weight_kg} <br />
                                                        <strong>Last Donation Date : </strong> {value.last_donation_date} <br />

                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default ViewBar