import Career from '../../../pages/career/Career';
import Button from '../reuseable/Button';
import './Header.css';
import {Link} from 'react-router-dom'
import {useState} from 'react';

const Header = () =>{
    const [myNumber, setMyNumber] =useState();
    return(
        <div className='headerContainer'>
            <section className='logoNav'>
                <Link to="/">
                <img src='./logo.svg' alt=''/>
                </Link>
                <main className='navs'>
                    <Link to ="feature">
                    <nav>Features</nav>
                    </Link>
                    <Link to="Company">
                    <nav>Company</nav>
                    </Link>
                    <Link to="Career">
                    <nav>Career {myNumber} </nav>
                    </Link>
                    <Link to="About">
                    <nav>About</nav>
                    </Link>
                </main>
            </section>
            <section className='btns'>
                <nav>Login</nav>
                <Button title ="Register" />
            </section>
        </div>
    );
};

export default Header;