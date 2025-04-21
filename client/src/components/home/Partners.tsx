import React from "react";
import './partners.css';

const Partners: React.FC = () => {
  const clientLogos = [
    {
      src: "https://www.talview.com/hubfs/Talview_Website_2019_AB/Talview%20Logo_Website_19.svg",
      alt: "Talview logo"
    },
    {
      src: "https://wajooba.com/wp-content/uploads/2024/07/Wajooba-new-Logo.svg",
      alt: "Wajooba logo"
    },
    {
      src: "https://framerusercontent.com/images/MipS7Me8F2A4bFcAWrI04S10NE.png",
      alt: "Instarails logo"
    },
    {
      src: "https://fletchermitchell.com/wp-content/uploads/2020/05/Aeyons-Logo.png",
      alt: "Aeyons logo"
    }
  ];

  // Double the logos for seamless infinite animation
  const extendedLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">Our Clients</h2>
        <p className="text-center text-gray-500 mb-12">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="logo-scroll-container">
          <div className="logo-scroll">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="logo-image" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
