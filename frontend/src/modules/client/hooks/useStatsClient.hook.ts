import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export interface StatsClientUsecaseReturnType {
  total: number;
  totalCPF: number;
  totalCNPJ: number;
}

export default function useStatsClients(page: number) {
  return useQuery({
    queryKey: ["clients-stats", page],

    queryFn: async () => {
      const response = await AxiosInstance.get<StatsClientUsecaseReturnType>(
        `/client/stats?page=${page}`,
      );

      return response.data;
    },
  });
}
