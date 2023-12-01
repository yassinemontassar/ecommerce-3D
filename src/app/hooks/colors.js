// useColor.js
import { useState } from 'react';

const useColor = () => {
  // Retrieve the initial color from local storage or provide a default color
  const initialColor = localStorage.getItem('selectedColor') || '#EFBD48';
  const [color, setColor] = useState(initialColor);

  const addColor = (newColor) => {
    // Update the color state
    setColor(newColor);

    // Save the color hex value to local storage
    localStorage.setItem('selectedColor', newColor);
  };

  const getColor = () => {
    // Retrieve the current color from local storage
    const storedColor = localStorage.getItem('selectedColor');

    // Return the stored color or a default color if not found
    return storedColor || '#EFBD48';
  };

  return { color, addColor, getColor };
};

export default useColor;
