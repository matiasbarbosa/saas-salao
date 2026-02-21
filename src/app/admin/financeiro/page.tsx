import { TrendingUp, Users, Scissors, DollarSign, ArrowUpRight, ReceiptText } from "lucide-react";

const MOCK_FINANCIALS = {
    monthlyRevenue: "R$ 15.420,00",
    monthlyRevenueGrowth: "+12.5%",
    activeClients: 342,
    activeClientsGrowth: "+4.1%",
    totalServices: 458,
    totalServicesGrowth: "+8.2%",
    avgTicket: "R$ 65,00",
    avgTicketGrowth: "+2.4%",
};

const RECENT_TRANSACTIONS = [
    { id: "t1", client: "Carlos Eduardo", service: "Barba Terapia", value: "R$ 35,00", date: "Hoje, 14:30", status: "Pago" },
    { id: "t2", client: "Fernando Souza", service: "Corte Degradê", value: "R$ 45,00", date: "Hoje, 10:00", status: "Pago" },
    { id: "t3", client: "Pedro Alves", service: "Corte + Barba", value: "R$ 70,00", date: "Ontem, 16:15", status: "Pago" },
    { id: "t4", client: "Rafael Lima", service: "Corte Social", value: "R$ 40,00", date: "Ontem, 11:30", status: "Pendente" },
];

export default function FinanceiroPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
            <header>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Resumo Financeiro</h1>
                <p className="text-muted-foreground">Acompanhe o faturamento e métricas do seu salão.</p>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card 1: Revenue */}
                <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-sm text-muted-foreground">Faturamento Mês</h3>
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                            <DollarSign className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{MOCK_FINANCIALS.monthlyRevenue}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 w-fit px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" />
                        {MOCK_FINANCIALS.monthlyRevenueGrowth} em relação ao mês anterior
                    </div>
                </div>

                {/* Card 2: Clients */}
                <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-sm text-muted-foreground">Clientes Atendidos</h3>
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                            <Users className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{MOCK_FINANCIALS.activeClients}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 w-fit px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" />
                        {MOCK_FINANCIALS.activeClientsGrowth}
                    </div>
                </div>

                {/* Card 3: Services */}
                <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-sm text-muted-foreground">Serviços Realizados</h3>
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center">
                            <Scissors className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{MOCK_FINANCIALS.totalServices}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 w-fit px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" />
                        {MOCK_FINANCIALS.totalServicesGrowth}
                    </div>
                </div>

                {/* Card 4: Ticket */}
                <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-sm text-muted-foreground">Ticket Médio</h3>
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                            <ReceiptText className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{MOCK_FINANCIALS.avgTicket}</div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 w-fit px-2 py-0.5 rounded-md">
                        <TrendingUp className="w-3 h-3" />
                        {MOCK_FINANCIALS.avgTicketGrowth}
                    </div>
                </div>
            </div>

            {/* Main Charts & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Placeholder para Gráfico (Pode futuramente usar Recharts) */}
                <div className="lg:col-span-2 bg-background rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col min-h-[400px]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Receita Diária (Fev 2026)</h3>
                        <button className="text-sm text-primary font-semibold hover:underline flex items-center gap-1">
                            Ver Relatório Completo <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex-1 rounded-xl border border-dashed border-border flex items-center justify-center bg-secondary/30 relative">
                        <div className="text-center text-muted-foreground w-full max-w-sm">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                                <TrendingUp className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <p className="font-medium text-sm">Integração de Gráficos na Próxima Etapa</p>
                            <p className="text-xs mt-1">Aqui você visualizará as barras diárias de faturamento usando a biblioteca Recharts ou Chart.js baseada nos agendamentos processados.</p>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions List */}
                <div className="bg-background rounded-2xl border border-border/60 shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Últimos Lançamentos</h3>
                    </div>

                    <div className="flex-1 space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                        {RECENT_TRANSACTIONS.map((tx) => (
                            <div key={tx.id} className="flex justify-between items-center p-3 rounded-xl border border-border/40 hover:bg-secondary/40 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                                        {tx.client.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm leading-tight mb-0.5">{tx.client}</p>
                                        <p className="text-xs text-muted-foreground">{tx.service} • {tx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">{tx.value}</p>
                                    <p className={`text-[10px] font-bold ${tx.status === 'Pago' ? 'text-emerald-600' : 'text-amber-500'}`}>
                                        {tx.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
