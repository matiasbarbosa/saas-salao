import { Plus, Edit2, Trash2, Mail, Phone, Calendar } from "lucide-react";

const MOCK_PROFS = [
    { id: "1", name: "João Silva", email: "joao.barbeiro@email.com", phone: "(11) 99999-1111", joinedAt: "10 Fev 2026", active: true },
    { id: "2", name: "Marcos Paulo", email: "marcos.p@email.com", phone: "(11) 99999-2222", joinedAt: "12 Fev 2026", active: true },
    { id: "3", name: "Ana Beatriz", email: "ana.manicure@email.com", phone: "(11) 99999-3333", joinedAt: "15 Fev 2026", active: false },
];

export default function ProfessionalsConfigPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Equipe & Profissionais</h1>
                    <p className="text-muted-foreground">Adicione ou remova membros da equipe do Salão.</p>
                </div>
                <button className="bg-primary text-primary-foreground h-10 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                    <Plus className="w-5 h-5" />
                    Novo Profissional
                </button>
            </header>

            {/* Grid of Professionals Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PROFS.map((prof) => (
                    <div key={prof.id} className="bg-background rounded-2xl border border-border/60 shadow-sm p-6 relative group hover:border-primary/50 transition-colors">

                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 flex gap-2">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${prof.active ? 'bg-emerald-500/10 text-emerald-600' : 'bg-secondary text-muted-foreground'}`}>
                                {prof.active ? 'Ativo' : 'Inativo'}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shrink-0">
                                {prof.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight mb-1">{prof.name}</h3>
                                <p className="text-xs font-semibold text-muted-foreground bg-secondary w-fit px-2 py-0.5 rounded-md">ID: {prof.id}</p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 shrink-0" />
                                <span className="truncate" title={prof.email}>{prof.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 shrink-0" />
                                <span>{prof.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 shrink-0" />
                                <span>Desde {prof.joinedAt}</span>
                            </div>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-2 pt-4 border-t border-border/40">
                            <button className="flex-1 bg-secondary text-foreground py-2 rounded-xl text-sm font-semibold hover:bg-secondary/80 transition-colors flex justify-center items-center gap-2">
                                <Edit2 className="w-4 h-4" /> Editar
                            </button>
                            <button className="px-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-colors shrink-0" title="Desativar">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
