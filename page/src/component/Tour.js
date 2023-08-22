import React from 'react'

const src = "https://youtube/HgC6bjMbqpw"
const Tour = () => {
    return (
        <iframe
        width="560"
        height="315"
        src={src}
        title="Youtube Player"
        frameborder="0"
        allowFullScreen
      />
    );
  };

export default Tour