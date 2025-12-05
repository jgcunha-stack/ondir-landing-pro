import { MapPin, Gift, Sparkles, Users, Star, Trophy } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Exploração por Geolocalização",
    description:
      "Encontre rapidamente lugares incríveis próximos a você através da localização em tempo real.",
    gradient: "from-brand-100 to-brand-200",
    iconColor: "text-brand-600",
  },
  {
    icon: Gift,
    title: "Cupons Gratuitos",
    description:
      "Complete tarefas, acumule pontos e troque por cupons de desconto em estabelecimentos parceiros. Tudo gratuito!",
    gradient: "from-amber-100 to-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Trophy,
    title: "Sistema de Pontos",
    description:
      "Ganhe pontos por cada interação no app e use em campanhas exclusivas para conseguir benefícios.",
    gradient: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Sparkles,
    title: "Recomendações Inteligentes",
    description:
      "Receba sugestões personalizadas baseadas em suas preferências, histórico e localização atual.",
    gradient: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Cronogramas com Amigos",
    description:
      "Crie roteiros personalizados com amigos. Compartilhe experiências e planeje encontros facilmente.",
    gradient: "from-pink-100 to-pink-200",
    iconColor: "text-pink-600",
  },
  {
    icon: Star,
    title: "Avaliações Reais",
    description:
      "Confira avaliações de outros usuários e compartilhe suas próprias experiências nos estabelecimentos.",
    gradient: "from-brand-100 to-brand-200",
    iconColor: "text-brand-600",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-brand-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-brand-200/40 rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-50/60 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-700 text-sm font-semibold mb-6 border border-brand-200/50">
            <Sparkles className="w-4 h-4" />
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">descobrir mais</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Ondir transforma a descoberta de experiências locais de forma fácil, divertida e gratuita.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-white rounded-3xl border border-brand-100/50 hover:border-brand-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/50 group-hover:to-brand-100/30 rounded-3xl transition-all duration-500" />
              
              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
