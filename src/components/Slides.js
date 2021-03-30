  
import React, { useState } from "react";


const Slides = ({ slides }) => {
  const [currentPos, setCurrentPos] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          disabled={currentPos === 0}
          onClick={() => setCurrentPos(0)}
          className="small outlined"
        >Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={currentPos === 0}
          onClick={() => setCurrentPos(currentPos - 1)}
          className="small"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          onClick={() => setCurrentPos(currentPos + 1)}
          disabled={currentPos === slides.length - 1}
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentPos]["title"]}</h1>
        <p data-testid="text">{slides[currentPos]["text"]}</p>
      </div>
    </div>
  );
};

export default Slides;