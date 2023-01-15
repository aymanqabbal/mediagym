import React from "react";
const AddressMap = () => {
  return (
    <div className="bg-black google-map-code w-screen h-screen py-16 flex text-white">
      <div className="map-info w-1/2 h-full p-16">
        <h1 className="text-5xl mt-24" data-aos="fade-down">
          FIND US
        </h1>
        <h1
          className="font-light text-lg w-full px-16 mt-10"
          data-aos="fade-up"
        >
          Unrivaled Group Fitness classes. Unparalleled Personal Training. a gym
          that inspires you to perform and luxury amenities that keep you
          feeling your best.
        </h1>
      </div>
      <div
        className="w-1/2 h-full px-6"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <iframe
          className="w-full h-full rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.2767112582133!2d-7.397308249476862!3d33.6758984806154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b662ab0dbd03%3A0x641b945801ac3b79!2sAssociation%20Salle%20de%20Sport%20Hollandia%20GYM!5e0!3m2!1sen!2sma!4v1670793934574!5m2!1sen!2sma"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export { AddressMap };
