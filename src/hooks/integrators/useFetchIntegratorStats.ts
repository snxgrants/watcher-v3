import { useQuery } from '@tanstack/react-query/build/modern';
import { getIntegratorDataOption } from '@/queries/integrators';
export default function useFetchIntegratorStats() {
  const { data, isLoading } = useQuery({
    ...getIntegratorDataOption(),
    select(data) {
      return data.integratorsVolume
        ?.filter((_data) => !!_data.tracking_code.match(/Kwenta/i))
        .slice(0, 30);
    },
  });

  return { data, isLoading };
}
