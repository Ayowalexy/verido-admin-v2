import { CSVLink } from "react-csv";
import { useState, useEffect } from "react";


const CSV = ({data}) => {

    const [bData, setBData] = useState([]);

    const header = [
        { label: "Full Name", key: "full_name" },
        { label: "Email", key: "email" },
        { label: "Date joined", key: "createdAt" },
        { label: "Phone number", key: "mobile_number" },
    ]


    useEffect(() => {
        let d = [];

        for (let el of data) {
            let obj = {
                full_name: el.full_name,
                email: el.email,
                createdAt: el.createdAt ? new Date(el.createdAt).toLocaleDateString() : new Date().toLocaleTimeString(),
                mobile_number: el.phone_number || el.mobile_number
            }

            d.push(obj)
        }

        setBData(d)

    }, [])
    return (
        <CSVLink 
        filename={"my-file.csv"}
        target="_blank"
        onClick={() => {
            console.log("You click the link");
          }}
        data={bData} 
        headers={header}>
            CSV
        </CSVLink>
    )
} 
export default CSV