import type { FindAllClientSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useClients(page: number) {
  return useQuery({
    queryKey: ["clients", page],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindAllClientSchemaReturnType>(
        "/client",
        {
          params: { page },
        },
      );

      return response.data;
    },
  });
}
