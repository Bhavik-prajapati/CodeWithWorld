import React from 'react'

const Card = ({
    video: {
        id: { videoId },
        snippet,
      },
}) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${videoId}` } className='card'>
        
        <img src={snippet?.thumbnails?.high?.url} alt="images" />
        <p>{ snippet?.title.slice(0, 60) }</p>
    </a>
  )
}

export default Card