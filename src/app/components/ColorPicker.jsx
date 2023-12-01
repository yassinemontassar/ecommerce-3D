import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import useColor from '../hooks/colors'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const {addColor} = useColor();
  const handleChange = (color) => {
    state.color = color.hex;
    addColor(color.hex)

  };

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={handleChange}
      />
    </div>
  )
}

export default ColorPicker;
