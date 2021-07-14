import React from 'react';
import client from "../../../../hooks/client";

const ProfileIndex = () => {
    const myClient = client();
    console.log(myClient)
    return (
        <div>
            me
        </div>
    );
};

export default ProfileIndex;

