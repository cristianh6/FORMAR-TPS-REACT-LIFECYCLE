import React from 'react';
import image from '../assets/images/darth-vader.jpg'

const NotFound = () => {
    return (

        <div className="text-center">
            <h2>Oops! Page Not Found!</h2>
            <img className="" style={{width: 50 +'rem'}} src={image} alt=" 404 - Not Found "/>
        </div>

    );
}

export default NotFound;
