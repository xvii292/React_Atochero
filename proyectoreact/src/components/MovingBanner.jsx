import React, { useState, useEffect } from 'react';
import './MovingBanner.css';

const MovingBannerTitle = ({ text }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 1500);

    return () => {
      setOpacity(0);
    };
  }, []);

  return (
    <div className="moving-banner" style={{ opacity }}>
      <div>
        {text}
      </div>
    </div>
  );
};

export default MovingBannerTitle;
