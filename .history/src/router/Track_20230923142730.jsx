import React from 'react';

export default function Track(props) {
  const { artist, image, name } = props;
  return (
    <>
      <span>{artist}</span>
      <span>{image}</span>
      <span>{name}</span>
    </>
  );
}
