import React from 'react';

const Boton = (props) => {
    return (
        <button className="text-white rounded-md bg-primary p-4 font-bold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200 ">
            {props.children}
        </button>
    );
};

export default Boton;