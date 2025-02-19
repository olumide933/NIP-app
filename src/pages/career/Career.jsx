import { useState } from "react";
import "./Career.css"
import { useSelector, useDispatch } from "react-redux";
import { decreament } from "../../Services/Action";

const Career =() =>{

    const dispatch= useDispatch()
      const useNumber = useSelector((state) => state.myReducer.myValue);
    const decreamentState = () =>{
        dispatch(decreament());
        alert("4 has been deducted")
    };
    

    const [userName, setUserName] =useState("");
    const [email, setEmail] = useState("");
    const [jobRole, setJobRole] =useState("");
    const [ startDate, setStartDate] =useState("")
    const [stateData, setStateData] = useState([
    {
        userName : "Olu Jide",
        email: "olujide@gmail.com",
        jobRole: "Frontend Dev",
        startDate: " 23-5-25",
    },
      {
        userName : "John Doe",
        email: "olami@gmail.com",
        jobRole: "Banker",
        startDate: " 23-5-25",
      },
    ]);
    const postData =(e) =>{
        setStateData([...stateData, {userName, email,jobRole,startDate}]);
        setUserName("");
        setEmail("");
        setJobRole("");
        setStartDate("");
        e.preventDefault();
        alert("New job Request");
           
    }
    
    return(

         <div className="careerContainer" >

<button onClick={decreamentState}>subtract 4 from the state</button>

            <section>
                
                <h1>Tell us about your Career</h1>
            <form onSubmit={postData}>
                <input
                 type="text" placeholder="Enter Your Name"
                  required 
                value={userName}
                onChange={(e) =>{
                    setUserName(e.target.value); 
                 }}
               />
               <br />
                <input 
                type="email" placeholder="Enter Your Email" 
                required
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)

                }}
                />
                <br />
                <input type="text" placeholder="What job role are you going for?"
                 required
                 value={jobRole}
                 onChange={(e) =>{
                    setJobRole(e.target.value);
                 }}    
                 />
                <br />
                <input
                 type="date"
                 value={startDate}
                 onChange={(e) =>{
                    setStartDate(e.target.value);
                 }}
                 />
                 <br />
                {/* <input type="file" /> */}
                <button type="submit">Enter Request</button>
            </form>
                <h1>Cards {useNumber}</h1>
                <main className="cardHoder">
                {stateData.map((data, i) =>{
                return(
                    <div className="careerCard">
                                    <p>
                                        UserName: <b>{data.userName}</b>{""}
                                    </p>
                                    <p>
                                        Email: <b>{data.email}</b>{""}
                                    </p>
                                    <p>
                                        JobRole: <b>{data.jobRole}</b>{""}
                                    </p>
                                    <p>
                                       Date: <strong>{data.startDate}</strong>
                                    </p>
                                </div>
                )
                   
                })};
             </main>
            </section>
        </div>
    );
};

export default Career