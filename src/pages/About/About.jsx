import { useSelector } from "react-redux";
import "./About.css"
import { useEffect, useState } from "react";
import { use } from "react";
const About =() => {
    const stateValue =useSelector((state) =>{
        return state.myReducer.myValue;
    });

    const [getData, setGetData]= useState([])

    // Geting API using Async function

// const getAPIData = async()=>{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     setGetData(data)
//     console.log(data)
// }

// Geting API using try and catch function

const getAPIData = async()=>{
    try {
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setGetData(data)
    console.log(data)
    } catch (error) {
        console.log('An error has occured' )
        
    }
}

useEffect(()=>{
    getAPIData()
}, [])

    return(
        <div>
            <h1>This is my About page current value of{" "}
                <span style={{
                    color:"red" 
                }}> {stateValue}{" "}
                </span>{" "}
                </h1>
                <h2>Getting an API from JSONplace holder with fetch</h2>
                <div className="abotTableContainer">
                <table>
                    <thead>
                    <tr >
                        <th>ID</th>
                        <th>Name</th>
                        <th>userName</th>
                        <th>Email</th>
                        <th>Street Adress</th>
                        <th>City Adress</th>
                        <th>Phone No</th>
                        <th>Website</th>
                        <th>Company Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getData.map((userData, i)=>{
                       return <tr>
                        <td>{userData.id}</td>
                        <td>{userData.name}</td>
                        <td>{userData.username}</td>
                        <td>{userData.email}</td>
                        <td>{userData.address.street}</td>
                        <td>{userData.address.city}</td>
                        <td>{userData.phone}</td>
                        <td><a href={`https://${userData.website}`}>www.{userData.website}</a></td>
                        <td>{userData.company.name}</td>
                    </tr>
                    })}
                    </tbody>
                    </table>
                </div>
        </div>
    );
};

export default About