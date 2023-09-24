import React, { useEffect } from 'react';
import topTrack from '../mock/getTopTracks.json';
import Track from './Track';
import axios from 'axios';

export default function Home() {
  console.log(topTrack.tracks.track);
  const instance = axios.create({
    baseURL: 'https://accounts.spotify.com/api',

    method: 'post',
    data: `grant_type=client_credential&client_id=3222a7fad760466c817058a926032a27&client_secret=6940a62822a0455ba0569c4dd1512123`,
  });

  axios({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    data: {
      email: email.value,
      password: password.value,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });

  useEffect(() => {
    instance.post('/token').then((res) => console.log(res));
  });
  return (
    <main className="m-2">
      <h2>인기 트랙</h2>
      <ul>
        {topTrack.tracks.track.map((item, idx) => (
          <li key={idx}>
            <Track item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
