import React from 'react'

const PhotoCards = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="h-52 md:h-72 rounded-t-2xl rounded-b-2xl relative group " 
        style={{ 
            backgroundImage: `url(${imgUrl})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "contain", 
            backgroundPosition: "center", 
            backgroundColor: "transparent" 
        }}
    >

    </div>
  )
}

export default PhotoCards
