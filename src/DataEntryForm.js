import React, { useState } from "react"

export default function DataEntryForm() {
  
    var [formData, setFormData] = useState({
        email: "Not given",
        name: "Not given",
        address: "Not given",
        address2: "Not given",
        city: "Not given",
        province: "Not given",
        postalCode: "Not given"
    })

    const provinces = [
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
        "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
    ]

    var [showData, setShowData] = useState({})
    
    const onSubmit = (e) => {
        e.preventDefault()
        setShowData({...formData})
    }

    const onValChange = (event) => {
        setFormData({...formData, [event.target.id] : event.target.value})
    }
  
    return (
    <>
        <h1>Data Entry Form</h1>
        <form method="POST" onSubmit={(e) => onSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange = {(e) => onValChange(e)}
                    >
                </input>

                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    onChange = {(e) => onValChange(e)}
                    >
                </input>
            </div>
            <div>
            <label htmlFor="address">Address</label>
                <input 
                    type="text"
                    id="address"
                    placeholder="1234 Main St"
                    onChange = {(e) => onValChange(e)}
                    >
                </input>
            </div>          
            
            <div>
                <label htmlFor="address2">Address2</label>
                <input 
                    type="text"
                    id="address2"
                    placeholder="Apartment, studio, or floor"
                    onChange = {(e) => onValChange(e)}
                    >
                </input>
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    id="city"
                    placeholder=""
                    onChange = {(e) => onValChange(e)}
                    >
                </input>

                <label htmlFor="province">Province</label>
                <select 
                    id="province"
                    onChange = {(e) => onValChange(e)}
                    >
                    {
                        provinces.map(province => (
                            <option key={province}>{province}</option>
                        ))
                    }
                </select>

                <label htmlFor="postalCode">Postal Code</label>
                <input 
                    type="text"
                    id="postalCode"
                    placeholder=""
                    onChange = {(e) => onValChange(e)}
                    >
                </input>
            </div>

            <div>
                <input
                    type="checkbox"
                    id="terms"
                    >
                </input>
                <label htmlFor="terms">Agree to Terms & Conditions?</label>
            </div>

            <div>
                <input
                    id="submit"
                    type="submit"
                    value="Submit"
                    >
                </input>
            </div>
        </form>
        <br></br>
        <table><tbody>
            {
                Object.entries(showData).map(element => (
                    <tr key={element}>
                        <th>{element[0]}</th>
                        <td>{element[1]}</td>
                    </tr>
                ))
                
            }
        </tbody></table>
    </>
   
  )
}
