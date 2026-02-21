"use client";

import { useState } from "react";
import { User as UserIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2, XCircle } from "lucide-react";

// Mock Data para a Visão Diária da Agenda
const MOCK_AGENDA = [
    {
        id: "ag1",
        client: "Carlos Eduardo",
        service: "Barba Terapia",
        professional: "João Silva",
        time: "09:00",
        status: "PENDING", // PENDING, CONFIRMED, COMPLETED, CANCELLED
        duration: "30min",
    },
    {
        id: "ag2",
        client: "Fernando Souza",
        service: "Corte Degradê",
        professional: "Marcos Paulo",
        time: "10:30",
        status: "CONFIRMED",
        duration: "45min",
    },
    {
        id: "ag3",
        client: "Pedro Alves",
        service: "Corte + Barba",
        professional: "João Silva",
        time: "13:00",
        status: "COMPLETED",
        duration: "1h 15min",
    },
    {
        id: "ag4",
        client: "Rafael Lima",
        service: "Corte Social",
        professional: "Marcos Paulo",
        time: "15:00",
        status: "CANCELLED",
        duration: "45min",
    }
];

export default function AgendaPage() {
    const [selectedDate, setSelectedDate] = useState(new Date("2026-02-22"));
    const [filterProf, setFilterProf] = useState("all");

    const formattedDate = selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Controle de Agenda</h1>
                    <p className="text-muted-foreground">Gerencie todos os horários marcados do salão.</p>
                </div>

                {/* Date Selector */}
                <div className="flex items-center gap-4 bg-background border border-border/60 p-1.5 rounded-full shadow-sm w-fit">
                    <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="w-48 text-center font-semibold text-sm capitalize">
                        {formattedDate}
                    </div>
                    <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Filters Area */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
                <button
                    onClick={() => setFilterProf("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${filterProf === "all" ? 'bg-primary text-primary-foreground' : 'bg-background border border-border hover:bg-secondary'}`}
                >
                    Todos Profissionais
                </button>
                <button
                    onClick={() => setFilterProf("Joao")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${filterProf === "Joao" ? 'bg-primary text-primary-foreground' : 'bg-background border border-border hover:bg-secondary'}`}
                >
                    João Silva
                </button>
                <button
                    onClick={() => setFilterProf("Marcos")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${filterProf === "Marcos" ? 'bg-primary text-primary-foreground' : 'bg-background border border-border hover:bg-secondary'}`}
                >
                    Marcos Paulo
                </button>
            </div>

            {/* Agenda Board (Kanban style columns for Desktop, List for Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Column: Pendentes */}
                <div className="bg-secondary/20 rounded-2xl p-4 border border-border/40">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-sm text-amber-600 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-amber-500" /> Pendentes
                        </h3>
                        <span className="text-xs bg-background/50 px-2 py-0.5 rounded-md font-bold text-muted-foreground">1</span>
                    </div>

                    <div className="space-y-3">
                        {MOCK_AGENDA.filter(a => a.status === 'PENDING').map(app => (
                            <AppointmentCard key={app.id} data={app} />
                        ))}
                    </div>
                </div>

                {/* Column: Confirmados */}
                <div className="bg-secondary/20 rounded-2xl p-4 border border-border/40">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-sm text-blue-600 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" /> Confirmados
                        </h3>
                        <span className="text-xs bg-background/50 px-2 py-0.5 rounded-md font-bold text-muted-foreground">1</span>
                    </div>

                    <div className="space-y-3">
                        {MOCK_AGENDA.filter(a => a.status === 'CONFIRMED').map(app => (
                            <AppointmentCard key={app.id} data={app} />
                        ))}
                    </div>
                </div>

                {/* Column: Concluídos */}
                <div className="bg-secondary/20 rounded-2xl p-4 border border-border/40 opacity-70">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-sm text-emerald-600 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Concluídos
                        </h3>
                        <span className="text-xs bg-background/50 px-2 py-0.5 rounded-md font-bold text-muted-foreground">1</span>
                    </div>

                    <div className="space-y-3">
                        {MOCK_AGENDA.filter(a => a.status === 'COMPLETED').map(app => (
                            <AppointmentCard key={app.id} data={app} />
                        ))}
                    </div>
                </div>

                {/* Column: Cancelados */}
                <div className="bg-secondary/20 rounded-2xl p-4 border border-border/40 opacity-50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-sm text-destructive flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-destructive" /> Cancelados
                        </h3>
                        <span className="text-xs bg-background/50 px-2 py-0.5 rounded-md font-bold text-muted-foreground">1</span>
                    </div>

                    <div className="space-y-3">
                        {MOCK_AGENDA.filter(a => a.status === 'CANCELLED').map(app => (
                            <AppointmentCard key={app.id} data={app} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

// Componente do Card do Agendamento (Arrastável no futuro)
function AppointmentCard({ data }: { data: any }) {
    return (
        <div className="bg-background rounded-xl p-4 shadow-sm border border-border/60 hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-3">
                <div className="font-bold leading-tight">{data.time}</div>
                <div className="text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{data.duration}</div>
            </div>

            <div className="mb-4">
                <h4 className="text-sm font-bold truncate">{data.client}</h4>
                <p className="text-xs text-muted-foreground truncate">{data.service}</p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0">
                    {data.professional.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-xs text-muted-foreground font-medium truncate">{data.professional}</span>
            </div>

            {/* Actions Hover (Quick Actions) */}
            {(data.status === 'PENDING' || data.status === 'CONFIRMED') && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors" title="Concluir">
                        <CheckCircle2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors" title="Cancelar">
                        <XCircle className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
