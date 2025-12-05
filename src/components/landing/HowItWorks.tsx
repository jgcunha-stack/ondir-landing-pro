import { Download, Search, Trophy, Ticket } from "lucide-react";
const steps = [{
  icon: Download,
  step: "01",
  title: "Baixe o App",
  description: "Disponível gratuitamente na App Store e Google Play.",
  color: "from-brand-500 to-brand-600"
}, {
  icon: Search,
  step: "02",
  title: "Explore e Interaja",
  description: "Descubra lugares incríveis, avalie e complete tarefas para ganhar pontos.",
  color: "from-purple-500 to-purple-600"
}, {
  icon: Trophy,
  step: "03",
  title: "Acumule Pontos",
  description: "Cada interação vale pontos. Quanto mais usar, mais você ganha!",
  color: "from-amber-500 to-amber-600"
}, {
  icon: Ticket,
  step: "04",
  title: "Troque por Cupons",
  description: "Use seus pontos em campanhas e ganhe cupons de desconto gratuitos.",
  color: "from-green-500 to-green-600"
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Curved blue background */}
      <div className="absolute inset-0">
        
        <div className="absolute top-[100px] bottom-[100px] left-0 right-0 bg-brand-500" />
        
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-3 h-3 bg-white/30 rounded-full animate-pulse-soft" />
        <div className="absolute top-[40%] right-[10%] w-4 h-4 bg-white/20 rounded-full animate-float" />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 bg-white/40 rounded-full animate-float-slow" />
        <div className="absolute top-[60%] right-[5%] w-3 h-3 bg-white/25 rounded-full animate-pulse-soft" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comece em <span className="text-brand-200">4 passos</span>
          </h2>
          <p className="text-lg text-brand-100 leading-relaxed">
            É simples, rápido e gratuito. Em poucos minutos você estará descobrindo os melhores lugares e ganhando recompensas.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-white/20 rounded-full" />
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-white/60 via-white/40 to-white/20 rounded-full" style={{
          clipPath: 'inset(0 75% 0 0)'
        }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => <div key={step.step} className="relative text-center group">
                {/* Step Circle */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className={`w-[120px] h-[120px] bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl shadow-black/20 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-10 h-10 bg-white text-brand-600 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg z-20">
                    {step.step}
                  </span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-100">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;