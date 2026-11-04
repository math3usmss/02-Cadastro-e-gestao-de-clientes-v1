import {
  type CreateClientSchemaReturnType,
  type CreateClientSchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useCreateClient() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createClient"],

    mutationFn: async (clientData: CreateClientSchemaType) => {
      const response = await AxiosInstance.post<CreateClientSchemaReturnType>(
        "/client",
        clientData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Cliente criado com sucesso");
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["clients"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["client"],
        }),
        await queryClient.invalidateQueries({
          queryKey: ["clients-stats"],
        }),
      ]);
    },

    onError: (error) => {
      toast.error("Falha ao criar cliente");
      console.error("Falha ao criar cliente:", error);
    },
  });
}
