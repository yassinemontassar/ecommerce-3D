import { useState, useEffect } from 'react';

const useColor = () => {
  // Check if we are running on the client side (browser)
  const isClient = typeof window !== 'undefined';

  // Retrieve the initial color from local storage or provide a default color
  const initialColor = isClient ? localStorage.getItem('selectedColor') || '#EFBD48' : '#EFBD48';
  const [color, setColor] = useState(initialColor);

  const addColor = (newColor) => {
    // Update the color state
    setColor(newColor);

    // Save the color hex value to local storage (if running on the client side)
    if (isClient) {
      localStorage.setItem('selectedColor', newColor);
    }
  };

  const getColor = () => {
    // Retrieve the current color from local storage (if running on the client side)
    const storedColor = isClient ? localStorage.getItem('selectedColor') : null;

    // Return the stored color or a default color if not found
    return storedColor || '#EFBD48';
  };

  // Use useEffect to initialize the color on the client side
  useEffect(() => {
    if (isClient) {
      const storedColor = localStorage.getItem('selectedColor');
      if (storedColor) {
        setColor(storedColor);
      }
    }
  }, [isClient]);

  return { color, addColor, getColor };
};

export default useColor;
