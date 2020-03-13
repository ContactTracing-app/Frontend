import * as React from 'react';
import { useParams } from '@reach/router';

type params = {
  uid: string;
};
const ProfileView = () => {
  const params: params = useParams();
  return (
    <div>
      <h1>You are</h1>
      <pre>
        <code>{params.uid}</code>
      </pre>

      <h2>Share this page with your friends &amp; family to connect.</h2>
      <ul>
        <li>Whatsapp</li>
        <li>LINE</li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export default ProfileView;
