"use client";
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'
import useColor from '../hooks/colors'

const CustomButton = ({type, title, customStyles, handleClick}) => {

    const generateStyle = (type) => {
        const snap = useSnapshot(state);
        const {getColor} = useColor();
        const newSnap = { ...snap, color: getColor() };
        if (type === 'filled') {
            return {
                backgroundColor: newSnap.color,
                color: getContrastingColor(newSnap.color)
            }
        } else if (type === "outline") {
            return {
                borderWidth: '1px',
                borderColor: newSnap.color,
                color: newSnap.color
            }
        }
    }
  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton