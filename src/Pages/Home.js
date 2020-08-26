import React from 'react';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1>HOME</h1>
            <Link className="info" to="/Page2"> Page 2 </Link>
        </div>
    )
}

export default Home