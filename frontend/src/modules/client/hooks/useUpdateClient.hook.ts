import {
  type UpdateClientSchemaReturnType,
  type UpdateClientSchemaType,
} from "@starter/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useUpdateClient(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateClient", id],

    mutationFn: async (clientData: UpdateClientSchemaType) => {
      const response = await AxiosInstance.patch<UpdateClientSchemaReturnType>(
        `/client/${id}`,
        clientData,
      );

      return response.data;
    },

    onSuccess: async () => {
      toast.success("Cliente atualizado com sucesso");

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["clients"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["client", id],
        }),
        await queryClient.invalidateQueries({
          queryKey: ["clients-stats"],
        }),
      ]);
    },

    onError: (error) => {
      toast.error("Falha ao atualizar cliente");
      console.error("Falha ao atualizar cliente:", error);
    },
  });
}
