import React from 'react';

import Simpson from "../Simpson/Simpson";
import {simpsons} from "./data";

const Simpsons = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) =>
                    <Simpson key={index} simpson={simpson}/>
                )
            }
        </div>
    );
};

export default Simpsons;

