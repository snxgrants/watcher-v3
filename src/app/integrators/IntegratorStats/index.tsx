'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import useFetchIntegratorStats from "@/hooks/integrators/useFetchIntegratorStats";

const IntegratorStats = () => {
 const { loading, integratorStats} = useFetchIntegratorStats()

  return <div></div>;
};

export default IntegratorStats;
