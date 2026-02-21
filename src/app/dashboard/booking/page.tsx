"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Clock, MapPin, Scissors, Star, User } from "lucide-react";

// Mock Data
const MOCK_SERVICES = [
    { id: "1", name: "Corte Degradê", price: "R$ 45", duration: "45 min" },
    { id: "2", name: "Barba Terapia", price: "R$ 35", duration: "30 min" },
    { id: "3", name: "Corte + Barba", price: "R$ 70", duration: "1h 15min" },
];

const MOCK_PROFESSIONALS = [
    { id: "p1", name: "João Silva", rating: 4.9, avatar: "JS" },
    { id: "p2", name: "Marcos Paulo", rating: 4.7, avatar: "MP" },
];

const MOCK_TIMES = ["09:00", "09:45", "10:30", "11:15", "13:00", "14:30", "15:15", "16:00", "17:30"];

export default function BookingFlow() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Handlers simples para avançar o assistente
    const canProceed = () => {
        if (step === 1 && selectedService) return true;
        if (step === 2 && selectedProfessional) return true;
        if (step === 3 && selectedTime) return true;
        return false;
    };

    const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-background pb-24 md:pb-6 relative max-w-2xl mx-auto">
            {/* Header Modal-like */}
            <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 h-16 flex items-center justify-between">
                {step > 1 ? (
                    <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                ) : (
                    <Link href="/dashboard" className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                )}
                <h1 className="font-bold">Agendamento</h1>
                <div className="w-9" /> {/* Spacer */}
            </header>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-secondary">
                <div
                    className="h-full bg-primary transition-all duration-300 ease-in-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                />
            </div>

            <div className="p-4 md:p-6 space-y-6">

                {/* STEP 1: Escolher Serviço */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight mb-2">Escolha o Serviço</h2>
                            <p className="text-muted-foreground text-sm">Selecione o que você precisa hoje.</p>
                        </div>

                        <div className="space-y-3">
                            {MOCK_SERVICES.map(service => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedService === service.id ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border/60 hover:border-primary/50 bg-background shadow-sm'}`}
                                >
                                    <div>
                                        <h3 className="font-bold text-base">{service.name}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground font-medium">
                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{service.duration}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold">{service.price}</span>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedService === service.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                                            {selectedService === service.id && <CheckCircle2 className="w-4 h-4" />}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 2: Escolher Profissional */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight mb-2">Profissional</h2>
                            <p className="text-muted-foreground text-sm">Com quem você gostaria de agendar?</p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => setSelectedProfessional("any")}
                                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedProfessional === "any" ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border/60 hover:border-primary/50 bg-background shadow-sm'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                        <UsersIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">Qualquer Profissional</h3>
                                        <p className="text-xs text-muted-foreground font-medium mt-0.5">Maior disponibilidade de horários</p>
                                    </div>
                                </div>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedProfessional === "any" ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                                    {selectedProfessional === "any" && <CheckCircle2 className="w-4 h-4" />}
                                </div>
                            </button>

                            {MOCK_PROFESSIONALS.map(prof => (
                                <button
                                    key={prof.id}
                                    onClick={() => setSelectedProfessional(prof.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedProfessional === prof.id ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border/60 hover:border-primary/50 bg-background shadow-sm'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                                            {prof.avatar}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base">{prof.name}</h3>
                                            <div className="flex items-center gap-1 mt-0.5 text-xs text-primary font-bold">
                                                <Star className="w-3.5 h-3.5 fill-current" /> {prof.rating}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedProfessional === prof.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}>
                                        {selectedProfessional === prof.id && <CheckCircle2 className="w-4 h-4" />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 3: Data e Hora */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold tracking-tight mb-2">Data e Hora</h2>
                            <p className="text-muted-foreground text-sm">Escolha o melhor momento para você.</p>
                        </div>

                        {/* Pseudo-Calendar Strip for Mobile */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-sm">Fevereiro 2026</h3>
                                <div className="flex gap-2 text-primary">
                                    <ChevronRight className="w-5 h-5 rotate-180" />
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 snap-x no-scrollbar">
                                {[20, 21, 22, 23, 24, 25, 26].map((day, i) => (
                                    <button
                                        key={day}
                                        onClick={() => {
                                            const d = new Date(); d.setDate(day); setSelectedDate(d);
                                        }}
                                        className={`flex flex-col items-center justify-center min-w-[60px] h-[72px] rounded-2xl border snap-start transition-all ${i === 2 ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-background border-border/60 text-muted-foreground hover:bg-secondary'}`}
                                    >
                                        <span className="text-xs font-medium mb-1">{['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][i]}</span>
                                        <span className={`text-lg font-bold ${i === 2 ? '' : 'text-foreground'}`}>{day}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Time Grid */}
                        <div>
                            <h3 className="font-semibold text-sm mb-4">Horários disponíveis</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {MOCK_TIMES.map(time => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 rounded-xl border text-sm font-medium transition-all ${selectedTime === time ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-background border-border/60 hover:border-primary/50'}`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 4: Confirmação */}
                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 text-center py-8">
                        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-3">Agendado!</h2>
                        <p className="text-muted-foreground max-w-[280px] mx-auto mb-8">
                            Seu horário para <strong>Corte + Barba</strong> no dia <strong>22 Fev às 14:30</strong> foi confirmado com sucesso.
                        </p>

                        <div className="space-y-3">
                            <Link href="/dashboard/appointments" className="block w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity">
                                Ver meus agendamentos
                            </Link>
                            <Link href="/dashboard" className="block w-full bg-secondary text-secondary-foreground py-3.5 rounded-full font-semibold hover:bg-secondary/80 transition-colors">
                                Voltar ao Início
                            </Link>
                        </div>
                    </div>
                )}

            </div>

            {/* Footer Nav Bar para "Avançar" */}
            {step < 4 && (
                <div className="fixed bottom-0 md:bottom-auto left-0 right-0 p-4 bg-background border-t border-border z-50 md:sticky md:mt-8 md:border-t-0 md:bg-transparent md:pt-0">
                    <div className="max-w-2xl mx-auto">
                        <button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            className="w-full bg-primary text-primary-foreground h-14 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:shadow-none transition-all"
                        >
                            Continuar
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Pequeno ícone auxiliar
function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
