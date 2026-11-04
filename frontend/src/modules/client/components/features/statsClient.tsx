"use client";

import { Building2, UserRound, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from "@/components/ui";

import { useStatsClients } from "../../hooks";

interface StatsClientProps {
  page: number;
}

export default function StatsClient({ page }: StatsClientProps) {
  const { data: stats, isLoading } = useStatsClients(page);

  const cards = [
    {
      title: "Total de clientes",
      value: stats?.total ?? 0,
      description: "Clientes cadastrados no sistema",
      icon: Users,
      iconClass: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Clientes com CPF",
      value: stats?.totalCPF ?? 0,
      description: "Clientes com CPF cadastrado",
      icon: UserRound,
      iconClass: "bg-emerald-500/10 text-emerald-500",
    },
    {
      title: "Clientes com CNPJ",
      value: stats?.totalCNPJ ?? 0,
      description: "Clientes com CNPJ cadastrado",
      icon: Building2,
      iconClass: "bg-violet-500/10 text-violet-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="gap-4 rounded-xl transition-shadow hover:shadow-md"
          >
            <CardHeader className="flex flex-row items-start justify-between gap-3">
              <div className="space-y-1">
                <CardTitle className="text-muted-foreground text-sm font-medium">
                  {card.title}
                </CardTitle>
              </div>

              <div className={`rounded-lg p-2.5 ${card.iconClass}`}>
                <Icon className="size-5" />
              </div>
            </CardHeader>

            <CardContent className="space-y-2">
              {isLoading ? (
                <Skeleton className="h-9 w-24" />
              ) : (
                <p className="text-3xl font-bold tracking-tight tabular-nums">
                  {card.value.toLocaleString("pt-BR")}
                </p>
              )}

              <p className="text-muted-foreground text-xs">
                {card.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
