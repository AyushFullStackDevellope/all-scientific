import React from "react";
import "../styles/TempControll.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";

const TempControll = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12">
            <Header />
            {/* Image Section */}
            <div className="md:w-1/2">
                <img
                    src="/path-to-your-image.jpg"
                    alt="CO2 Incubator"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 p-6">
                <h2 className="text-3xl font-bold">Co2 Incubators</h2>
                <h3 className="text-xl font-semibold mt-2">
                    Repair - Maintain - Calibrate
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    Performing planned maintenance on CO₂ incubators is crucial to
                    ensuring optimal cell culture conditions, preventing contamination,
                    and maintaining consistent temperature, humidity, and CO₂ levels.
                    Regular maintenance helps prevent the buildup of bacteria, fungi, and
                    other contaminants that could compromise research or clinical results.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    Performing planned maintenance on CO₂ incubators is crucial to
                    ensuring optimal cell culture conditions, preventing contamination,
                    and maintaining consistent temperature, humidity, and CO₂ levels.
                    Regular maintenance helps prevent the buildup of bacteria, fungi, and
                    other contaminants that could compromise research or clinical results.
                </p>
            </div>
<Footer />
        </div>
    );
};

export default TempControll;
