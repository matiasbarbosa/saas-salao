"use client";

import { useState } from "react";
import { Calendar, MapPin, Search, Clock, ChevronRight } from "lucide-react";

// Mock Data
const MOCK_APPOINTMENTS = [
    {
        id: "a1",
        serviceName: "Corte + Barba Therapy",
        salonName: "Barbearia Vintage",
        professionalName: "Marcos Paulo",
        date: "22 Fev 2026",
        time: "14:30",
        status: "CONFIRMED",
        price: "R$ 70,00",
        coverImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "a2",
        serviceName: "Corte Degradê",
        salonName: "Studio Elegance",
        professionalName: "João Silva",
        date: "10 Fev 2026",
        time: "10:00",
        status: "COMPLETED",
        price: "R$ 45,00",
        coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=300"
    }
];

export default function AppointmentsPage() {
    const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

    const filteredAppointments = MOCK_APPOINTMENTS.filter(app => {
        if (activeTab === "upcoming") return app.status === "CONFIRMED" || app.status === "PENDING";
        return app.status === "COMPLETED" || app.status === "CANCELLED";
    });

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 md:pb-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Seus Agendamentos</h1>
                <p className="text-muted-foreground">Acompanhe seus horários marcados e histórico.</p>
            </header>

            {/* Tabs */}
            <div className="flex p-1 bg-secondary rounded-xl mb-6">
                <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === "upcoming" ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    Próximos
                </button>
                <button
                    onClick={() => setActiveTab("history")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === "history" ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    Histórico
                </button>
            </div>

            {/* Appointments List */}
            <div className="space-y-4">
                {filteredAppointments.length === 0 ? (
                    <div className="text-center py-16 bg-background rounded-3xl border border-border/50 border-dashed">
                        <div className="w-16 h-16 bg-secondary text-muted-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">Nenhum agendamento</h3>
                        <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">
                            Você não possui compromissos {activeTab === "upcoming" ? "futuros" : "no histórico"}.
                        </p>
                    </div>
                ) : (
                    filteredAppointments.map(appointment => (
                        <div key={appointment.id} className="bg-background rounded-3xl overflow-hidden border border-border/60 shadow-sm transition-all hover:shadow-md">
                            <div className="p-4 flex gap-4">
                                {/* Minithumbnail */}
                                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-secondary relative">
                                    <img src={appointment.coverImage} className="w-full h-full object-cover" alt="Salon" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 flex flex-col pt-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-base leading-tight">{appointment.serviceName}</h3>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${appointment.status === 'CONFIRMED' ? 'bg-green-500/10 text-green-600' : 'bg-secondary text-muted-foreground'}`}>
                                            {appointment.status === 'CONFIRMED' ? 'Confirmado' : 'Concluído'}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-3">{appointment.salonName} • {appointment.professionalName}</p>

                                    <div className="flex items-center gap-4 text-xs font-semibold mt-auto">
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <Calendar className="w-4 h-4" />
                                            {appointment.date}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-primary">
                                            <Clock className="w-4 h-4" />
                                            {appointment.time}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions for Upcoming */}
                            {activeTab === "upcoming" && (
                                <div className="border-t border-border/50 p-4 bg-secondary/20 flex gap-3">
                                    <button className="flex-1 rounded-xl border border-border/60 bg-background py-2 text-sm font-semibold hover:bg-secondary transition-colors">
                                        Reagendar
                                    </button>
                                    <button className="flex-1 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive text-destructive-foreground py-2 text-sm font-semibold transition-colors">
                                        Cancelar
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}
