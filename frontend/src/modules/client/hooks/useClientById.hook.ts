import type { FindByIdClientSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

export default function useClientById(id: string) {
  return useQuery({
    queryKey: ["client", id],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindByIdClientSchemaReturnType>(
        `/client/${id}`,
      );

      return response.data;
    },

    enabled: !!id,
  });
}
