import React from 'react';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom'

const Page2 = () => {

    return (
        <div>
            <h1>HELLO FROM PAGE 2!</h1>
            <Link className="info" to="/"> Home </Link>
        </div>
    )
}

export default Page2