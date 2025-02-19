import { useSelector } from "react-redux";
import Button from "../reuseable/Button";
import './Hero.css'
const Hero = () =>{
    const countValue = useSelector((state) =>{
       return state.myReducer.myValue
    });
    const myName =useSelector((state) =>state.myReducer.userName)
    console.log(countValue)
    console.log(myName)
    return(
        <div className="heroContainer">
            <section className="HeroTextContainer">
                <h1>Make Remote Work <i>{myName}</i> <span style={{color:"green"}}>{countValue}</span></h1>
                <p>Lorem, ipsum <strong>currently</strong> dolor sit amet consectetur <em> adipisicing </em> elit. Dolore tenetur fugiat, ex vel in consequuntur at excepturi quo error iure necessitatibus eos laboriosam ipsam perspiciatis quia quis aliquid enim voluptate <b>{myName}</b></p>
               <Button title="Learn More" bgColor="black" />
            </section>
            <section className="heroImageContainer" >
                <img src="./dero.png" alt=""/>
            </section>
        </div>
    );
};

export default Hero;