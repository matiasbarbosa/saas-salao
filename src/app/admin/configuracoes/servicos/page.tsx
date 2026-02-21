import { Plus, Edit2, Trash2 } from "lucide-react";

const MOCK_SERVICES = [
    { id: "1", category: "Cabelos", name: "Corte Degradê", price: "R$ 45,00", duration: "45 min" },
    { id: "2", category: "Barbearia", name: "Barba Terapia", price: "R$ 35,00", duration: "30 min" },
    { id: "3", category: "Barbearia", name: "Corte + Barba", price: "R$ 70,00", duration: "1h 15min" },
    { id: "4", category: "Unhas", name: "Manicure Clássica", price: "R$ 30,00", duration: "45 min" },
];

export default function ServicesConfigPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Serviços & Preços</h1>
                    <p className="text-muted-foreground">Gerencie o catálogo de serviços do seu salão.</p>
                </div>
                <button className="bg-primary text-primary-foreground h-10 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
                    <Plus className="w-5 h-5" />
                    Novo Serviço
                </button>
            </header>

            {/* Services Table */}
            <div className="bg-background rounded-2xl border border-border/60 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/50 text-muted-foreground uppercase text-xs font-bold border-b border-border/60">
                            <tr>
                                <th scope="col" className="px-6 py-4">Serviço</th>
                                <th scope="col" className="px-6 py-4">Categoria</th>
                                <th scope="col" className="px-6 py-4">Duração</th>
                                <th scope="col" className="px-6 py-4">Preço (R$)</th>
                                <th scope="col" className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                            {MOCK_SERVICES.map((service) => (
                                <tr key={service.id} className="hover:bg-secondary/20 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-foreground">{service.name}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-semibold">
                                            {service.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-muted-foreground">{service.duration}</td>
                                    <td className="px-6 py-4 font-bold">{service.price}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-muted-foreground hover:text-blue-600 hover:bg-blue-500/10 rounded-lg transition-colors" title="Editar">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors" title="Excluir">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
