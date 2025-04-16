import React from 'react'

const Tags = ({name, onClick, isSelected}) => {

    const buttonStyles = isSelected
        ? "text-black border-primary-500"
        : "text-black border-[#999999] hover:border-black";

    return (
        <button className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-lg cursor-pointer`} onClick={() => onClick(name) }> {name} </button>
    )
}

export default Tags
