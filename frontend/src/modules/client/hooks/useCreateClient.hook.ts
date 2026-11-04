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
      toast.success("Funcionalidade criada com sucesso");

      await queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },

    onError: (error) => {
      toast.error("Falha ao criar funcionalidade");
      console.error("Falha ao criar funcionalidade:", error);
    },
  });
}
