import React, { useEffect, useState } from 'react';

import Track from './Track';
import axios from 'axios';

export default function Home() {
  const [token, setToken] = useState('');
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
    }).then((res) => {
      setToken(res.data.access_token);
    });
  }, []);

  return (
    <main className="m-2">
      <h2>인기 트랙</h2>
    </main>
  );
}
