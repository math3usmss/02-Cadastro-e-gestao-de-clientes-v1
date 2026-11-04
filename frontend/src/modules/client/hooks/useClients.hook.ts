import type { FindAllClientSchemaReturnType } from "@starter/shared";
import { useQuery } from "@tanstack/react-query";

import AxiosInstance from "@/lib/axios";

type DocumentType = "ALL" | "CPF" | "CNPJ";

export default function useClients(
  page: number,
  search: string,
  documentType: DocumentType,
) {
  return useQuery({
    queryKey: ["clients", page, search, documentType],

    queryFn: async () => {
      const response = await AxiosInstance.get<FindAllClientSchemaReturnType>(
        "/client",
        {
          params: {
            page,
            searchQuery: search,
            documentType: documentType === "ALL" ? undefined : documentType,
          },
        },
      );

      return response.data;
    },
  });
}
