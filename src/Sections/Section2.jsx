import React, { useRef } from "react";

const Section2 = () => {
  const videoRef = useRef(null);

  // Ensure the video always plays and only allows muting/unmuting
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted; // Toggle mute/unmute
    }
  };

  // Prevent pausing the video
  const handleVideoPause = (e) => {
    e.preventDefault();
    const video = videoRef.current;
    if (video) {
      video.play(); // Force the video to continue playing
    }
  };

  return (
    <>
      {/* Add the @font-face definition in a <style> tag */}
      <style>
        {`
          @font-face {
            font-family: 'AvengersFont';
            src: url('/fonts/AVENGEANCE HEROIC AVENGER.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          /* Cosmic background animation */
          @keyframes cosmicEffect {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 100%;
            }
          }
          .cosmic-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/images/stars.jpg'); /* Background image with stars */
            background-size: 200% 200%;
            background-position: 0 0;
            animation: cosmicEffect 20s infinite linear;
            z-index: 0;
            filter: blur(5px);
          }
          /* Arc Reactor Glow Effect */
          @keyframes arcReactorGlow {
            0% {
              box-shadow: 0 0 20px 10px rgba(0, 123, 255, 0.6);
            }
            50% {
              box-shadow: 0 0 40px 20px rgba(0, 123, 255, 0.8);
            }
            100% {
              box-shadow: 0 0 20px 10px rgba(0, 123, 255, 0.6);
            }
          }
          .arc-reactor {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 0.4));
            animation: arcReactorGlow 3s infinite ease-in-out;
            z-index: 1;
          }
          /* Superman Flying Animation */
          @keyframes supermanFlying {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px); /* Move up */
            }
            100% {
              transform: translateY(0);
            }
          }
          .superman-container {
            position: absolute;
            right: 3%;
            bottom: 6%;
            z-index: 2;
            animation: supermanFlying 3s infinite ease-in-out; /* Apply flying animation */
          }
          /* Media Queries for Responsiveness */
          @media (max-width: 768px) {
            .superman-container img {
              width: 60px !important; /* Reduce Superman image size */
              height: auto;
            }
            .superman-container {
              right: 1%; /* Adjust position for smaller screens */
              bottom: 10%;
            }
            /* Left Image */
            div[style*="left: 1%"] img {
              width: 60px !important; /* Reduce left image size */
              height: auto;
            }
            /* Adjust text size and positioning for smaller screens */
            h1 {
              font-size: 40px !important;
            }
            p {
              font-size: 1rem !important;
            }
            /* Adjust the main container for smaller screens */
            div[style*="width: 70%"] {
              width: 90% !important;
              height: 80% !important;
            }
            /* Change flex-direction to column for mobile view */
            #about-section {
              flex-direction: column;
            }
            /* Adjust video and content sections for mobile view */
            #about-section > div {
              flex: none;
              width: 100%;
              height: 50vh; /* Adjust height as needed */
            }
            /* Adjust the content section to appear below the video */
            #about-section > div:last-child {
              height: auto;
              padding: 20px;
            }
          }
          @media (max-width: 480px) {
            .superman-container img {
              width: 100px !important; /* Further reduce Superman image size */
            }
            div[style*="left: 1%"] img {
              width: 150px !important; /* Further reduce left image size */
            }
            h1 {
              font-size: 30px !important;
            }
            p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
      <style>
        {`
          @media (max-width: 768px) {
            .superman-container img {
              width: 60px !important; /* Reduce Superman image size */
              height: auto;
            }
            .superman-container {
              right: 1%; /* Adjust position for smaller screens */
              bottom: 10%;
            }
            /* Left Image */
            div[style*="left: 10%"] img {
              width: 60px !important; /* Reduce left image size */
              height: auto;
            }
            /* Adjust text size and positioning for smaller screens */
            h1 {
              font-size: 40px !important;
            }
            p {
              font-size: 1rem !important;
            }
            /* Adjust the main container for smaller screens */
            div[style*="width: 70%"] {
              width: 90% !important;
              height: 80% !important;
            }
            /* Change flex-direction to column for mobile view */
            #about-section {
              flex-direction: column;
            }
            /* Adjust video and content sections for mobile view */
            #about-section > div {
              flex: none;
              width: 100%;
              height: 50vh; /* Adjust height as needed */
            }
            /* Adjust the content section to appear below the video */
            #about-section > div:last-child {
              height: auto;
              padding: 20px;
            }
          }
          @media (max-width: 480px) {
            .superman-container img {
              width: 100px !important; /* Further reduce Superman image size */
            }
            div[style*="left: 10%"] img {
              width: 100px !important; /* Further reduce left image size */
            }
            h1 {
              font-size: 30px !important;
            }
            p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
      <section
        id="about-section"
        style={{
          position: "relative",
          backgroundImage: "url('/images/bgf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {/* Left Section - Full Video */}
        <div
          style={{
            flex: 1.1, // Left section takes up 1 part of the available space
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            controls={false}
            onClick={handleVideoClick}
            onPause={handleVideoPause}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/videos/dj1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Text "DJ Rathan" at the bottom left of the video */}
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "10px",
              fontFamily: "'AvengersFont', sans-serif",
              fontSize: "40px",
              color: "red",
              zIndex: 2,
              wordSpacing: "7px",
              letterSpacing: "1.0px",
            }}
          >
            DJ Rathan
          </div>
          {/* Text "Tap to unmute" at the bottom right of the video */}
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "25px",
              fontSize: "10px",
              color: "gray",
              zIndex: 2,
            }}
          >
            Tap to Mute / Unmute
          </div>
        </div>

        {/* Right Section - Existing Content */}
        <div
          style={{
            flex: 1.9, // Right section takes up 2 parts of the available space (increased width)
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px",
          }}
        >
          {/* Cosmic Animated Background */}
          <div className="cosmic-background"></div>
          {/* Arc Reactor Glow Effect */}
          <div className="arc-reactor"></div>
          {/* Background Blur */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundImage: "url('/images/bgf.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
              zIndex: 0,
            }}
          ></div>
          {/* Image Layer with Reduced Opacity */}
          <div
            style={{
              position: "relative",
              width: "70%",
              height: "70%",
              borderRadius: "20px",
              border: "10px solid transparent",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            {/* Pseudo-element for the image with reduced opacity */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundImage: "url('/images/sec2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.45,
                zIndex: 1,
              }}
            ></div>
            {/* Text Container (no opacity change) */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "20px",
              }}
            >
              <div
                style={{
                  maxWidth: "800px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <h1
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "38px",
                    fontFamily: "'AvengersFont', sans-serif",
                    textTransform: "uppercase",
                    wordSpacing: "10px",
                    letterSpacing: "1.5px",
                  }}
                >
                  &nbsp;About Medha
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  The dynamic minds of the MCA department at Shree Devi Institute of
                  Technology proudly present MEDHA 2k25—a fest like no other, blending
                  technology and creativity into an extraordinary experience. A grand
                  spectacle like no other, where the tides of innovation and creativity
                  converge in a breathtaking fusion of technology and artistry. Choose your
                  passion, set a road map and achieve the success. MEDHA 2k25 is where you
                  unleash your true potential!
                </p>
              </div>
            </div>
          </div>
          {/* Left Image */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              top: "1%",
              zIndex: 2,
            }}
          >
            <img
              src="/images/capa.png"
              alt="Left Image"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
          {/* Right Image - Superman with Flying Effect */}
          <div className="superman-container">
            <img
              src="/images/superman.png"
              alt="Right Image"
              style={{ width: "150px", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;