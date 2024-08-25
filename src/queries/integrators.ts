import fetchIntegratorsData from '@/api/integrator';
import { FetchQueryOptions } from '@tanstack/react-query';

export function getIntegratorDataOption(): FetchQueryOptions<{
  integratorsVolume: IntegratorStatsData[];
}> {
  return {
    queryKey: ['integrators-data'],
    queryFn: fetchIntegratorsData,
  };
}
