import React from "react";
import "./Animation.css";

const Animation = ({ letter }) => {
  return (
    <div id="container">
      <div className={`netflixintro letter-${letter}`}>
        {[1, 2, 3, 4].map((helperIndex) => (
          <div key={helperIndex} className={`helper-${helperIndex}`}>
            <div className="effect-brush">
              {Array.from({ length: 31 }, (_, i) => (
                <span key={`fur-${31 - i}`} className={`fur-${31 - i}`}></span>
              ))}
            </div>
            {helperIndex === 1 && (
              <div className="effect-lumieres">
                {Array.from({ length: 28 }, (_, i) => (
                  <span key={`lamp-${i + 1}`} className={`lamp-${i + 1}`}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animation;
