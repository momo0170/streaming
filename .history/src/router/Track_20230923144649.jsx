import React from 'react';

export default function Track(props) {
  console.log(props);
  const { artist, name, image } = props.item;
  return (
    <>
      <span>{artist.name}</span>
    </>
  );
}
