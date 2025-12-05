import { Button } from "@/components/ui/button";
import { CheckCircle2, Apple, PlayCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
const showcaseItems = [{
  badge: "Clube de Recompensas",
  title: "Ganhe pontos e troque por cupons",
  description: "Complete tarefas no app, acumule pontos e quando houver uma campanha ativa, troque seus pontos por cupons de desconto gratuitos nos estabelecimentos parceiros.",
  features: ["Tarefas simples para ganhar pontos", "Campanhas exclusivas com parceiros", "Cupons 100% gratuitos", "Valide direto no estabelecimento"],
  imagePosition: "right"
}, {
  badge: "Explore",
  title: "Descubra novos lugares todos os dias",
  description: "Explore uma variedade de restaurantes incríveis, descubra eventos exclusivos e desfrute de passeios emocionantes com sua família todos os dias.",
  features: ["Busca por geolocalização", "Filtros personalizados", "Avaliações de usuários reais", "Fotos e informações completas"],
  imagePosition: "left"
}, {
  badge: "Cronogramas",
  title: "Planeje roteiros com amigos",
  description: "Crie cronogramas de viagem ou passeios com amigos. Adicione lugares, defina datas e compartilhe o roteiro para todos acompanharem.",
  features: ["Convide amigos para o roteiro", "Visualize no mapa", "Organize por dias", "Sincronize em tempo real"],
  imagePosition: "right"
}];
const AppShowcase = () => {
  return <section id="app-showcase" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container">
        {showcaseItems.map((item, index) => <div key={item.title} className={`relative flex flex-col ${item.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 mb-24 last:mb-0`}>
            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-600 text-sm font-semibold mb-6 border border-brand-200/50">
                {item.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {item.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {item.features.map(feature => <li key={feature} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              {index === 0 && <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="gap-3 shadow-lg shadow-brand-500/30">
                    <Apple className="w-5 h-5" />
                    App Store
                  </Button>
                  <Button variant="outline" size="lg" className="gap-3 border-2 border-brand-200 text-brand-700 hover:bg-brand-50">
                    <PlayCircle className="w-5 h-5" />
                    Google Play
                  </Button>
                </div>}
            </div>

            {/* Phone Side with Curved Background */}
            <div className="relative flex-1 flex justify-center">
              {/* Curved blue background */}
              

              {/* Floating badges */}
              <div className={`hidden md:block absolute ${item.imagePosition === "left" ? "right-[10%]" : "left-[10%]"} top-[15%] bg-white rounded-2xl px-4 py-3 shadow-xl border border-brand-100/50 animate-float z-20`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Feature do app</span>
                </div>
              </div>

              <div className={`hidden md:block absolute ${item.imagePosition === "left" ? "left-[5%]" : "right-[5%]"} bottom-[20%] bg-white rounded-2xl px-4 py-3 shadow-xl border border-brand-100/50 animate-float-slow z-20`} style={{
            animationDelay: '1s'
          }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Feature do app</span>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative w-[280px] md:w-[320px] lg:w-[360px] z-10 transform hover:scale-105 transition-transform duration-500">
                <img src={appMockup} alt={`Ondir App - ${item.title}`} className="w-full h-auto drop-shadow-2xl" />
              </div>
            </div>
          </div>)}
      </div>
    </section>;
};
export default AppShowcase;