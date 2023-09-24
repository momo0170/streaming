import React from 'react';

export default function Track(props) {
  const {
    artist: { name },
    image,
    name,
  } = props;
  return (
    <>
      <span>{artist.name}</span>
      {/* <img src={image[1].#text}>{image[1]}</img> */}
      <span>{name}</span>
    </>
  );
}
