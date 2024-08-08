'use client';

import { useParams } from 'next/navigation';

const PerpsAccountPage = () => {
  const { address } = useParams();

  return (
    <div>
      <h1>Account</h1>
      <p>{address}</p>
    </div>
  );
};

export default PerpsAccountPage;
