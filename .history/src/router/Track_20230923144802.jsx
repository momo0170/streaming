import React from 'react';

export default function Track(props) {
  console.log(props);
  const { artist, name, image } = props.item;
  return (
    <>
      <img src={image[1].#text} alt="track" />
      <span>{artist.name}</span>
      <span>{name}</span>
    </>
  );
}
