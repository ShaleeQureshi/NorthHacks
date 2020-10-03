import React from "react";

// Importing my Components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import Footer from "../components/footer";

const ProfileApp = () => {
  return (
    <div className="bg-home">
      <div className="wrapper">
        <Navigation />
        <Jumbo
          elements={
            <div className="landing-txt">
              <h1>Page not Ready</h1>
              <p>This page will be ready when the Hackathon starts!</p>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
};
export default ProfileApp;
