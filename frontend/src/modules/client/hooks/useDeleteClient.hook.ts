import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import AxiosInstance from "@/lib/axios";

export default function useDeleteClient(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteClient", id],

    mutationFn: async () => {
      await AxiosInstance.delete(`/client/${id}`);
    },

    onSuccess: async () => {
      toast.success("Cliente deletado com sucesso");

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
      toast.error("Falha ao deletar cliente");
      console.error("Falha ao deletar cliente:", error);
    },
  });
}
