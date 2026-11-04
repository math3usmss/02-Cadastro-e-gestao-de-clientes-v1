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
      toast.success("Funcionalidade deletada com sucesso");

      await queryClient.invalidateQueries({
        queryKey: ["clients"],
      });

      queryClient.removeQueries({
        queryKey: ["client", id],
      });
    },

    onError: (error) => {
      toast.error("Falha ao deletar funcionalidade");
      console.error("Falha ao deletar funcionalidade:", error);
    },
  });
}
