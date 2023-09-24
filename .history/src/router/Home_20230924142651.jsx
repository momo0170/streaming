import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: '3222a7fad760466c817058a926032a27',
        client_secret: '6940a62822a0455ba0569c4dd1512123',
      },
    }) //
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('token', res.data.access_token);
      });
  }, []);
  const token = window.localStorage.getItem('token');
  console.log(token);
  // token &&
  //   axios({
  //     method: 'get',
  //     url: 'https://api.spotify.com/v1/artists/3qNVuliS40BLgXGxhdBdqu/top-tracks',
  //     headers: {
  //       Authorization: 'Bearer' + token,
  //     },
  //   }) //
  //     .then((res) => console.log(res));

  return (
    <main className="m-2">
      <h2>인기 트랙</h2>
    </main>
  );
}
