import React from "react";
import bg from "../images/bg.jpg";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <div className="text-white text-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '81vh', position: 'relative' }}>
                <h1 className="p-4 py-16 text-6xl">Lorem Ipsum</h1>
                <p className="text-xl p-4 px-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tincidunt laoreet. Donec vitae varius elit, et interdum ligula. Maecenas vulputate dapibus odio, quis pharetra erat faucibus non. Cras placerat ullamcorper metus ac vulputate</p>
                <FaAngleDoubleDown className="text-white text-4xl animate-bounce mx-auto mt-16" />
            </div>
            <div className="text-white text-center" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', position: 'relative' }}>
                <h1 className="p-4 py-16 text-6xl">Lorem Ipsum</h1>
                <p className="text-xl p-4 px-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tincidunt laoreet. Donec vitae varius elit, et interdum ligula. Maecenas vulputate dapibus odio, quis pharetra erat faucibus non. Cras placerat ullamcorper metus ac vulputate</p>
                <FaAngleDoubleDown className="text-white text-4xl animate-bounce mx-auto mt-20" />
            </div>
            <div className="text-white text-center" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', position: 'relative' }}>
                <h1 className="p-4 py-16 text-6xl">Lorem Ipsum</h1>
                <p className="text-xl p-4 px-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tincidunt laoreet. Donec vitae varius elit, et interdum ligula. Maecenas vulputate dapibus odio, quis pharetra erat faucibus non. Cras placerat ullamcorper metus ac vulputate</p>
                <FaAngleDoubleDown className="text-white text-4xl animate-bounce mx-auto mt-20" />
            </div>
        </div>
    )
};
