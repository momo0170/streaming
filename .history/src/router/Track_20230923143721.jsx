import React from 'react';

export default function Track(props) {
  console.log(props);
  return (
    <>
      <span>{artist}</span>
      <span>{image}</span>
      <span>{name}</span>
    </>
  );
}
