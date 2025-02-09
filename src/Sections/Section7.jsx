import React, { useState, useRef } from 'react';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null); // Reference to the audio element

  // Function to handle page flip and play sound
  const handlePageFlip = (newPage) => {
    setCurrentPage(newPage);
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to the start
      audioRef.current.play(); // Play the sound
    }
  };

  return (
    <>
      {/* Audio element for the flip sound */}
      <audio ref={audioRef} src="/sounds/page-flip.mp3" preload="auto"></audio>

      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '-100px', marginTop: '20px', fontFamily: "'AvengersFont', sans-serif", textTransform: "uppercase", color: "red", fontWeight: "bold",   wordSpacing: "7px",
            letterSpacing: "2.5px",fontSize: "55px" }}>E-brochure</h1>

      {/* Flipbook Container */}
      <div className="flipbook-container">
        <div className="book" style={{ '--c': currentPage }}>
          {/* Pages go here as per your existing code */}
          {/* Page 1 */}
          <div className="page" style={{ '--i': 0 }}>
            <div className="front" style={{ backgroundImage: "url('/images/b1.jpg')" }} onClick={() => handlePageFlip(1)}>
              
            </div>
            <div className="back" style={{ backgroundImage: "url('/images/b2.jpg')" }} onClick={() => handlePageFlip(0)}>
              <h2></h2>
            </div>
          </div>

          {/* Page 2 */}
          <div className="page" style={{ '--i': 1 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b3.jpg')" }} 
              onClick={() => handlePageFlip(2)}
            >
            
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/b4.jpg)" }} 
              onClick={() => handlePageFlip(1)}
            >
             
            </div>
          </div>

          {/* Page 3 */}
          <div className="page" style={{ '--i': 2 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b5.jpg')" }} 
              onClick={() => handlePageFlip(3)}
            >
             
              
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/b6.jpg')" }} 
              onClick={() => handlePageFlip(2)}
            >
            </div>
          </div>

          {/* Page 4 */}
          <div className="page" style={{ '--i': 3 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b7.jpg')" }} 
              onClick={() => handlePageFlip(4)}
            >
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/b8.jpg')" }} 
              onClick={() => handlePageFlip(3)}
            >
            </div>
          </div>

          {/* Page 5 */}
          <div className="page" style={{ '--i': 4 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b9.jpg')" }} 
              onClick={() => handlePageFlip(5)}
            >
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/b10.jpg')" }} 
              onClick={() => handlePageFlip(4)}
            >
            </div>
          </div>

          {/* Page 6 */}
          <div className="page" style={{ '--i': 5 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b11.jpg')" }} 
              onClick={() => handlePageFlip(6)}
            >
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/b12.jpg')" }} 
              onClick={() => handlePageFlip(5)}
            >
            </div>
          </div>

          {/* Page 7 */}
          <div className="page" style={{ '--i': 6 }}>
            <div 
              className="front" 
              style={{ backgroundImage: "url('/images/b13.jpg')" }} 
              onClick={() => handlePageFlip(7)}
            >
            </div>
            <div 
              className="back" 
              style={{ backgroundImage: "url('/images/bg5.png')" }} 
              onClick={() => handlePageFlip(6)}
            >
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="/pdf/Brochure.pdf" download style={{ textDecoration: 'none', color: 'white', backgroundColor: 'transparent', 
          border: '2px solid red',
           padding: '10px 20px',
            borderRadius: '5px', 
            fontSize: '16px',
             cursor: 'pointer',
              display: 'inline-flex', 
              alignItems: 'center',
              marginTop:'-50px',
              marginBottom:'50px',
              
               gap: '10px' }}>
          <span>Download E-Brochure</span>
          <span style={{ fontSize: '20px' }}></span> {/* Download icon */}
        </a>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font: 16px/1.4 sans-serif;
          background-color: #232425;
          background-image: url('/images/bg5.png');
          background-size: cover;
          background-position: center;
        }

        .flipbook-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .book {
          display: flex;
          width: 600px;
          height: 500px;
          pointer-events: none;
          transform-style: preserve-3d;
          transition: translate 1s;
          translate: calc(min(var(--c), 1) * 50%) 0%;
          rotate: 1 0 0 30deg;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .page {
          --z: 5px;

          flex: none;
          display: flex;
          width: 100%;
          pointer-events: all;
          user-select: none;
          transform-style: preserve-3d;
          border: 1px solid #0008;
          transform-origin: left center;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1),
              rotate 1s cubic-bezier(0.4, 0, 0.2, 1) calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
          translate: calc(var(--i) * -100%) 0px 0px;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z)));
          rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
        }

        .front,
        .back {
          flex: none;
          width: 100%;
          height: 100%;
          padding: 2rem;
          backface-visibility: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .back {
          translate: -100% 0;
          rotate: 0 1 0 180deg;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .book {
            width: 500px;
            height: 400px;
          }

          .front, .back {
            padding: 1.5rem;
          }

          h1 { font-size: 1.8rem; }
          h2 { font-size: 1.4rem; }
          h3 { font-size: 1.2rem; }
          p { font-size: 0.9rem; }
        }

        @media (max-width: 600px) {
          .book {
            width: 50vw;
            height: 45vh;
            
            rotate: 1 0 0 20deg;
          }

          .flipbook-container {
            padding: 10px;
          }

          .front, .back {
            padding: 1rem;
          }

          h1 { font-size: 1.5rem; }
          h2 { font-size: 1.2rem; }
          h3 { font-size: 1rem; }
          p { font-size: 0.8rem; }
        }

        @media (max-width: 480px) {
          .book {
            height: 40vh;
            
            rotate: 1 0 0 15deg;
          }

          .front, .back {
            padding: 0.8rem;
          }

          h1 { font-size: 1.3rem; }
          h2 { font-size: 1.1rem; }
          p { font-size: 0.7rem; }
        }

        /* Rest of the original styles remain the same */
        .page.flipping {
          rotate: 0 1 0 -180deg;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z))) rotateY(-180deg);
        }

        h1, h2, h3 {
          color: #333;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        p {
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default FlipBook;
