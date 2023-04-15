import { app2 } from '../api/firebaseConfig'
import React, { useRef, useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

const Checkout = () => {
    const form = useRef();
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [province, setProvince] = useState("")
    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")
    const db = getFirestore(app2)

    const SaveToDB = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "Address", email), {
            Address: address,
            Country: country,
            Province: province,
            PostalCode: code
        })
    }

    return (
        <>
        <div className='Checkout'>
            <form
            ref={form}
            onSubmit={SaveToDB}
        >
            <h1>Shipping Information</h1>
            <label>Address</label>
            <input
                type="text"
                name="Address"
                onChange={event => setAddress(event.target.value)}
                value={address} />

            <label>Country</label>
            <input
                type="text"
                name="Country"
                onChange={event => setCountry(event.target.value)}
                value={country} />

            <label>State/Province</label>
            <input
                type="text"
                name="State/Province"
                onChange={event => setProvince(event.target.value)}
                value={province} />

            <label>Zip/Postal Code</label>
            <input
                type="text"
                name="Code"
                onChange={event => setCode(event.target.value)}
                value={code} />
            
            <label>Email</label>
            <input
                type="text"
                name="Email"
                onChange={event => setEmail(event.target.value)}
                value={email} />
            <button onClick={SaveToDB}>Save Address?</button>
            <button>Checkout</button>
        </form>
        </div>
        </>
        )

    }
    
    export default Checkout