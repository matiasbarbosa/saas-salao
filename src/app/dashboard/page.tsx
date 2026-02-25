import Link from "next/link";
import { Search, MapPin, Star, Scissors } from "lucide-react";
import Image from "next/image";

// Mock data (será substituído pelo Prisma futuramente)
// const MOCK_CATEGORIES = [
//   { id: "1", name: "Cabelos", icon: "💇‍♀️", color: "bg-pink-500/10 text-pink-600" },
//   { id: "2", name: "Unhas", icon: "💅", color: "bg-purple-500/10 text-purple-600" },
//   { id: "3", name: "Barbearia", icon: "💈", color: "bg-blue-500/10 text-blue-600" },
// ];

const MOCK_FEATURED_SALONS = [
  {
    id: "s1",
    name: "On Hair Studio",
    type: "Salão de Beleza",
    rating: 5,
    distance: "0",
    image: "/images/on-hair-studio.png"
  }
  //{ id: "s2", name: "Barbearia Vintage", type: "Barbearia Clássica", rating: 4.9, distance: "2.5 km", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400&h=300" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Search Bar */}
      {/*<div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar serviços, salões ou profissionais..."
          className="w-full h-14 pl-12 pr-4 bg-background border border-border/60 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>/*}

      {/* Categories Horizontal Scroll */}
      {/*<section>
        {<div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">Especialidades</h2>
          <Link href="/dashboard/categories" className="text-sm font-medium text-primary hover:underline">
            Ver todas
          </Link>
        </div>}


        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 -mx-4 px-4 snap-x no-scrollbar">
          {MOCK_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/dashboard/category/${cat.id}`}
              className="flex flex-col items-center gap-2 min-w-[80px] snap-start group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-border/40 group-hover:scale-105 transition-transform ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>*/}

      {/* Promo Banner */}
      {/*<section className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 text-primary-foreground shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 w-2/3">
          <h3 className="text-xl font-bold mb-2">Renove seu visual</h3>
          <p className="text-primary-foreground/80 text-sm mb-4">Agende hoje e ganhe 15% de desconto no primeiro serviço.</p>
          <Link href="/dashboard/booking" className="inline-flex items-center justify-center rounded-xl bg-background text-foreground text-sm font-semibold h-10 px-4 hover:shadow-md transition-shadow">
            Agendar Agora
          </Link>
        </div>
        <Scissors className="absolute right-4 bottom-4 w-20 h-20 text-white/10" />
      </section>*/}

      {/* Featured Salons */}
      <section>
        {/*<div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight">Em destaque</h2>
        </div>*/}

        <div className="flex flex-col gap-4">
          {MOCK_FEATURED_SALONS.map((salon) => (
            <Link
              key={salon.id}
              href={`/dashboard/salon/${salon.id}`}
              className="group bg-background rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
            >
              <div className="h-40 sm:h-auto sm:w-1/3 relative overflow-hidden">
                <Image
                  src="/images/on-hair-studio.png"
                  alt="On Hair Studio"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-auto"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">{salon.name}</h3>
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {salon.rating}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{salon.type}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mt-auto">
                  <MapPin className="w-4 h-4" />
                  {salon.distance}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
