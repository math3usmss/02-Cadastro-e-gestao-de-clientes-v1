// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   UpdateClientSchema,
//   type UpdateClientSchemaType,
// } from "@starter/shared";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// import {
//   Button,
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui";

// import { useClientById, useUpdateClient } from "../../hooks";

// interface DialogEditClientProps {
//   id: string;
// }

// export default function DialogEditClient({ id }: DialogEditClientProps) {
//   const [open, setOpen] = useState(false);

//   const { data: client, isLoading } = useClientById(id);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<UpdateClientSchemaType>({
//     resolver: zodResolver(UpdateClientSchema),
//   });

//   useEffect(() => {
//     if (!client) return;

//     reset({
//       ...client,
//     });
//   }, [client, reset]);

//   const { mutate, isPending } = useUpdateClient(id);

//   const onSubmit = (data: UpdateClientSchemaType) => {
//     mutate(data, {
//       onSuccess: () => {
//         setOpen(false);
//       },
//     });
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger>Editar</DialogTrigger>

//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Editar Cliente</DialogTitle>
//         </DialogHeader>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex w-full flex-col gap-3"
//         >
//           <Button type="submit" disabled={isPending || isLoading}>
//             Editar Cliente
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
