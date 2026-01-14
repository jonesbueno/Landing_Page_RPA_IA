import './index.css'
import { useState, useEffect } from 'react'
import { 
  FaRobot, 
  FaHeadset, 
  FaChartLine, 
  FaCogs, 
  FaUsers, 
  FaBrain, 
  FaShoppingCart, 
  FaIndustry, 
  FaUserTie,
  FaLightbulb,
  FaClock,
  FaMoneyBillWave,
  FaThumbsUp,
  FaRocket,
  FaAward,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaWhatsapp,
  FaSearch,
  FaPencilAlt,
  FaCode,
  FaVial,
  FaPlay,
  FaSyncAlt,
  FaDatabase
} from 'react-icons/fa'
import Swal from 'sweetalert2'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void | Promise<void>) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

// Componentes reutilizáveis
const Button = ({ children, href, variant = 'primary', className = '' }: { 
  children: React.ReactNode, 
  href?: string, 
  variant?: 'primary' | 'secondary',
  className?: string 
}) => {
  const classes = variant === 'primary'
    ? `inline-block rounded-full btn-gradient hover-glow px-8 py-4 text-base font-bold shadow-lg hover-elevate ${className}`
    : `inline-block rounded-full px-8 py-4 text-base font-semibold text-[#22d3ee] hover:text-[#7c3aed] border-2 border-[#22d3ee] hover:border-[#7c3aed] hover-elevate bg-[#0a0c14] ${className}`
  return href ? (
    <a href={href} className={classes}>{children}</a>
  ) : (
    <button className={classes}>{children}</button>
  )
}

const SectionTitle = ({ title, subtitle, highlight }: { title: string, subtitle?: string, highlight?: string }) => (
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
      {title} {highlight && <span className="text-gradient">{highlight}</span>}
    </h2>
    {subtitle && <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
)

// ============================================
// HERO SECTION
// ============================================
const Hero = () => (
  <header className="relative overflow-hidden min-h-screen flex items-center bg-[#0a0c14] text-white">
    {/* Brushes decorativos */}
    <div className="brush-top-right" />
    <div className="brush-bottom-left" />

    {/* Imagem do Robô com glow roxo */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] h-auto pointer-events-none select-none hidden sm:block">
      {/* Glow roxo por trás */}
      <div
        className="absolute inset-0 blur-[80px] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.8) 0%, rgba(124, 58, 237, 0.4) 40%, transparent 70%)',
          transform: 'scale(1.2)',
        }}
      />
      {/* Contorno roxo mais definido */}
      <div
        className="absolute inset-0 blur-[30px] opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.9) 0%, rgba(124, 58, 237, 0.5) 30%, transparent 60%)',
        }}
      />
      {/* Imagem do robô */}
      <img
        src="/advanced-robot-futuristic-setting.png"
        alt=""
        className="relative w-full h-auto opacity-70 mix-blend-lighten"
        style={{
          maskImage: 'linear-gradient(to left, black 50%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 95%)',
        }}
      />
    </div>

    <div className="container-page relative py-20 z-10">
      <div className="max-w-5xl mx-auto text-center">
        <span className="badge mb-6 inline-flex">
          <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
          Agentes de IA Autônomos
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] text-white">
          E Se Sua Empresa Tivesse{' '}
          <span className="text-gradient">Colaboradores Digitais</span>{' '}
          Trabalhando 24/7?
        </h1>

        <p className="mt-6 md:mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Agentes de IA autônomos que atendem clientes, analisam dados e executam
          tarefas complexas com <span className="text-gradient font-semibold">precisão absoluta</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button href="#contato">Quero Conhecer os Agentes de IA</Button>
          <Button href="#agentes" variant="secondary">Como Funciona?</Button>
        </div>
      </div>
    </div>
  </header>
)

// ============================================
// SEÇÃO: VOCÊ ESTÁ PERDENDO OPORTUNIDADES?
// ============================================
const Problems = () => {
  const problems = [
    { 
      title: 'Atendimento Limitado', 
      desc: 'Seus clientes precisam de respostas rápidas, mas sua equipe não consegue atender todos ao mesmo tempo',
      icon: <FaHeadset className="text-2xl" />
    },
    { 
      title: 'Perda de Vendas', 
      desc: 'Leads entram em contato fora do horário comercial e você perde negócios para concorrentes mais ágeis',
      icon: <FaShoppingCart className="text-2xl" />
    },
    { 
      title: 'Análise Demorada', 
      desc: 'Seu time gasta dias analisando dados que um agente de IA processaria em minutos',
      icon: <FaChartLine className="text-2xl" />
    },
    { 
      title: 'Processos Complexos Travados', 
      desc: 'Tarefas que exigem consultas em múltiplos sistemas consomem horas da sua equipe',
      icon: <FaCogs className="text-2xl" />
    },
    { 
      title: 'Conhecimento Fragmentado', 
      desc: 'Informações críticas dispersas em documentos, e-mails e sistemas diferentes',
      icon: <FaDatabase className="text-2xl" />
    },
    { 
      title: 'Escalabilidade Cara', 
      desc: 'Crescer significa contratar mais pessoas, aumentando custos sem garantir eficiência',
      icon: <FaMoneyBillWave className="text-2xl" />
    },
  ]

  return (
    <section id="problemas" className="container-page py-20">
      <SectionTitle 
        title="Você Está Perdendo" 
        highlight="Oportunidades?"
      />
      
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p, idx) => (
          <div 
            key={p.title} 
            className="fade-in-up hover-elevate rounded-2xl p-7 text-white shadow-lg" 
            style={{ 
              animationDelay: `${idx * 0.1}s`,
              background: 'linear-gradient(160deg, rgba(34,211,238,0.22), rgba(124,58,237,0.28), rgba(12,18,32,0.95))',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div className="h-12 w-12 rounded-xl  bg-[#0a0c14]/12 flex items-center justify-center mb-4 text-white">
              {p.icon}
          </div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-slate-200/90">{p.desc}</p>
        </div>
      ))}
    </div>
      
      <div className="mt-12 text-center">
        <Button href="#agentes">Quero uma Solução Inteligente</Button>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: CLIENTES (Logos em Cards)
// ============================================
const Clients = () => {
  const logos = [
    { src: '/SVG/Albert.svg', alt: 'Albert Einstein' },
    { src: '/SVG/Bradesco.svg', alt: 'Bradesco' },
    { src: '/SVG/Carrefour.svg', alt: 'Carrefour' },
    { src: '/SVG/CNN.svg', alt: 'CNN' },
    { src: '/SVG/Embraer.svg', alt: 'Embraer' },
    { src: '/SVG/Friboi.svg', alt: 'Friboi' },
    { src: '/SVG/Itau_1.svg', alt: 'Itaú' },
    { src: '/SVG/Magalu.svg', alt: 'Magalu' },
  ]

  return (
    <section className="py-20 bg-section-alt">
      <div className="container-page">
        <SectionTitle 
          title="Quem já usa os"
          highlight="Agentes de IA"
          subtitle="Empresas que já transformaram seus negócios com nossa plataforma"
        />
        
        {/* Grid de logos em 2 linhas como na imagem */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {logos.map((logo) => (
            <div key={logo.alt} className="logo-card">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="h-8 md:h-10 w-auto max-w-[120px] object-contain"
      />
    </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: CONHEÇA OS AGENTES DE IA
// ============================================
const AgentsIntro = () => {
  const capabilities = [
    'Entendem contexto e intenção, não apenas palavras-chave',
    'Consultam múltiplos sistemas e bases de conhecimento automaticamente',
    'Tomam decisões inteligentes baseadas em regras e aprendizado contínuo',
    'Executam ações concretas: agendam reuniões, atualizam sistemas, geram relatórios',
    'Trabalham 24 horas por dia, 7 dias por semana, sem pausas ou erros',
  ]

  const agentTypes = [
    {
      title: 'Agente de Atendimento ao Cliente',
      desc: 'Resolve dúvidas, processa solicitações e escala casos complexos para humanos apenas quando necessário',
      icon: <FaHeadset className="text-3xl" />,
      color: 'from-primary to-accent'
    },
    {
      title: 'Agente de Vendas e Qualificação',
      desc: 'Qualifica leads, agenda reuniões, responde objeções e nutre prospects até o momento ideal de compra',
      icon: <FaShoppingCart className="text-3xl" />,
      color: 'from-accent to-primary'
    },
    {
      title: 'Agente de Análise e Insights',
      desc: 'Monitora dados em tempo real, identifica padrões e gera relatórios estratégicos automaticamente',
      icon: <FaChartLine className="text-3xl" />,
      color: 'from-primary to-accent'
    },
    {
      title: 'Agente de Operações Internas',
      desc: 'Processa solicitações de RH, TI, financeiro e outras áreas com respostas instantâneas e precisas',
      icon: <FaCogs className="text-3xl" />,
      color: 'from-accent to-primary'
    },
    {
      title: 'Agente de Conhecimento Corporativo',
      desc: 'Centraliza todo conhecimento da empresa e responde perguntas complexas consultando documentos, políticas e históricos',
      icon: <FaBrain className="text-3xl" />,
      color: 'from-primary to-accent'
    },
    {
      title: 'Agente de WhatsApp e Multicanal',
      desc: 'Automatiza conversas no WhatsApp, responde mensagens instantaneamente e gerencia templates de comunicação em escala',
      icon: <FaWhatsapp className="text-3xl" />,
      color: 'from-accent to-primary'
    },
  ]

  return (
    <section id="agentes" className="py-20 relative overflow-hidden">
      <div className="container-page relative">
      <SectionTitle
          title="Conheça os Agentes de IA da"
          highlight="Edesoft"
        />
        
        {/* Introdução */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-premium p-8 md:p-10">
            <p className="text-xl text-slate-200 text-center leading-relaxed">
              <span className="text-primary font-semibold">Não são chatbots simples.</span> São agentes inteligentes 
              personalizados que aprendem, raciocinam e agem de forma autônoma para resolver 
              problemas reais do seu negócio.
            </p>
            </div>
          </div>
      
        {/* O que são agentes */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            O Que São <span className="text-gradient">Agentes de IA Autônomos</span>?
          </h3>
          <p className="text-lg text-slate-300 text-center mb-8">
            Imagine ter colaboradores digitais que:
          </p>
          
          <div className="space-y-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
      </div>
                <span className="text-slate-200">{cap}</span>
      </div>
            ))}
    </div>
        </div>

        {/* Tipos de agentes */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Tipos de <span className="text-gradient">Agentes</span> Que Desenvolvemos
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentTypes.map((agent, idx) => (
            <div 
              key={agent.title} 
              className="card-premium p-6 hover-elevate"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4 text-white`}>
                {agent.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{agent.title}</h4>
              <p className="text-slate-300">{agent.desc}</p>
            </div>
          ))}
          </div>
        
        <div className="mt-12 text-center">
          <Button href="#contato">Quero um Agente Personalizado</Button>
        </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: CASOS DE USO REAIS
// ============================================
const UseCases = () => {
  const cases = [
    {
      id: 'ecommerce',
      title: 'E-commerce: Agente de Vendas 24/7',
      icon: <FaShoppingCart className="text-2xl" />,
      challenge: 'Loja online perdia vendas porque clientes tinham dúvidas fora do horário comercial e abandonavam carrinhos.',
      solutions: [
        'Agente de IA que responde dúvidas sobre produtos em tempo real',
        'Recomendações personalizadas baseadas no histórico de navegação',
        'Processamento de trocas e devoluções automaticamente',
        'Escalação inteligente para vendedores apenas em casos complexos',
      ],
      result: 'Aumento de 45% na conversão e redução de 70% no abandono de carrinho',
    },
    {
      id: 'servicos',
      title: 'Empresa de Serviços: Atendimento Multicanal',
      icon: <FaHeadset className="text-2xl" />,
      challenge: 'Volume crescente de chamados sobrecarregava equipe, gerando insatisfação e perda de clientes.',
      solutions: [
        'Agente que atende via chat, e-mail e WhatsApp simultaneamente',
        'Acesso a base de conhecimento completa da empresa',
        'Consulta automática a sistemas de pedidos, contratos e faturas',
        'Criação de tickets para casos que exigem intervenção humana',
      ],
      result: '80% dos atendimentos resolvidos pelo agente, tempo de resposta reduzido de horas para segundos',
    },
    {
      id: 'industria',
      title: 'Indústria: Agente de Análise Preditiva',
      icon: <FaIndustry className="text-2xl" />,
      challenge: 'Gestores precisavam de insights rápidos sobre produção, mas relatórios demoravam dias para serem gerados.',
      solutions: [
        'Agente que monitora indicadores de produção em tempo real',
        'Alertas proativos sobre desvios e potenciais problemas',
        'Análise preditiva de manutenção de equipamentos',
        'Geração automática de relatórios executivos personalizados',
      ],
      result: 'Redução de 35% em paradas não planejadas e tomada de decisão 10x mais rápida',
    },
    {
      id: 'rh',
      title: 'RH: Agente de Onboarding e Suporte',
      icon: <FaUserTie className="text-2xl" />,
      challenge: 'Novos colaboradores tinham dúvidas repetitivas e RH gastava tempo respondendo as mesmas perguntas.',
      solutions: [
        'Agente que orienta novos colaboradores durante todo onboarding',
        'Respostas instantâneas sobre benefícios, políticas e procedimentos',
        'Agendamento automático de treinamentos e reuniões',
        'Portal único de conhecimento acessível por voz ou chat',
      ],
      result: '90% das dúvidas resolvidas sem envolver RH, onboarding 3x mais rápido',
    },
  ]

  const [activeCase, setActiveCase] = useState(cases[0].id)
  const currentCase = cases.find(c => c.id === activeCase)!

  return (
    <section id="casos" className="py-20 bg-section-alt">
      <div className="container-page">
        <SectionTitle 
          title="Casos de Uso"
          highlight="Reais"
          subtitle="Veja como Agentes de IA estão transformando empresas de diferentes setores"
        />
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cases.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCase === c.id 
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                  : 'bg-[#111727] text-slate-200 hover:bg-[#151d2f] border border-white/10'
              }`}
            >
              {c.icon}
              <span className="hidden sm:inline">{c.title.split(':')[0]}</span>
            </button>
          ))}
        </div>
        
        {/* Case Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                {currentCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{currentCase.title}</h3>
              </div>
            
            <div className="mb-6">
              <h4 className="text-primary font-semibold mb-2">Desafio:</h4>
              <p className="text-slate-300">{currentCase.challenge}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-primary font-semibold mb-3">Solução:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentCase.solutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                    <span className="text-slate-300 text-sm">{sol}</span>
                </div>
              ))}
            </div>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="text-accent font-semibold mb-1">Resultado:</h4>
              <p className="text-white font-medium">{currentCase.result}</p>
    </div>
        </div>
    </div>
        
    <div className="mt-10 text-center">
          <Button href="#contato">Ver Meu Caso de Uso</Button>
        </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: O QUE VOCÊ GANHA
// ============================================
const Benefits = () => {
  const benefits = [
    { title: 'Atendimento Sem Limites', desc: 'Seus clientes recebem suporte imediato, qualquer hora, qualquer dia, em qualquer canal', icon: <FaClock /> },
    { title: 'Redução de Custos', desc: 'Diminua até 60% nos custos de atendimento sem comprometer a qualidade', icon: <FaMoneyBillWave /> },
    { title: 'Experiência Personalizada', desc: 'Cada interação é adaptada ao histórico e necessidades específicas do cliente', icon: <FaUsers /> },
    { title: 'Decisões Mais Rápidas', desc: 'Insights e análises complexas entregues em segundos, não em dias', icon: <FaLightbulb /> },
    { title: 'Escalabilidade Real', desc: 'Atenda 10x mais clientes sem aumentar proporcionalmente sua equipe', icon: <FaRocket /> },
    { title: 'Zero Erros Humanos', desc: 'Informações sempre precisas, processos sempre seguidos corretamente', icon: <FaShieldAlt /> },
    { title: 'Equipe Focada', desc: 'Libere seu time de tarefas repetitivas para trabalho estratégico e criativo', icon: <FaBrain /> },
    { title: 'Aprendizado Contínuo', desc: 'Agentes evoluem com cada interação, ficando mais inteligentes ao longo do tempo', icon: <FaChartLine /> },
  ]

  return (
    <section id="beneficios" className="py-20">
      <div className="container-page">
        <SectionTitle 
          title="O Que Você Ganha com"
          highlight="Agentes de IA"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div key={b.title} className="feature-card hover-elevate text-center" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-white text-xl">
              {b.icon}
            </div>
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-slate-300 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
        
        <div className="mt-12 text-center">
          <Button href="#contato">Quero Esses Resultados</Button>
      </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: ESTATÍSTICAS DE IMPACTO
// ============================================
const Stats = () => {
  const stats = [
    { value: '24/7', label: 'Disponibilidade Ininterrupta', icon: <FaClock /> },
    { value: '80%', label: 'Redução em Tempo de Resposta', icon: <FaRocket /> },
    { value: '60%', label: 'Economia em Custos de Atendimento', icon: <FaMoneyBillWave /> },
    { value: '95%', label: 'Satisfação do Cliente', icon: <FaThumbsUp /> },
  ]

  return (
    <section className="py-20 bg-section-alt">
      <div className="container-page">
        <SectionTitle 
          title="Estatísticas de"
          highlight="Impacto"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card hover-elevate">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
                        </div>
          ))}
                      </div>
                        </div>
    </section>
  )
}

// ============================================
// SEÇÃO: COMO FUNCIONA A IMPLEMENTAÇÃO
// ============================================
const Implementation = () => {
  const steps = [
    { 
      step: 1, 
      title: 'Discovery', 
      desc: 'Entendemos profundamente seu negócio, processos e necessidades específicas',
      icon: <FaSearch />
    },
    { 
      step: 2, 
      title: 'Design do Agente', 
      desc: 'Projetamos a personalidade, conhecimento e capacidades do seu agente personalizado',
      icon: <FaPencilAlt />
    },
    { 
      step: 3, 
      title: 'Desenvolvimento Ágil', 
      desc: 'Construímos e treinamos o agente com base nos seus dados e regras de negócio',
      icon: <FaCode />
    },
    { 
      step: 4, 
      title: 'Testes Controlados', 
      desc: 'Validamos performance em ambiente seguro com casos reais',
      icon: <FaVial />
    },
    { 
      step: 5, 
      title: 'Go Live Gradual', 
      desc: 'Implementamos progressivamente, garantindo estabilidade e ajustes',
      icon: <FaPlay />
    },
    { 
      step: 6, 
      title: 'Evolução Contínua', 
      desc: 'Monitoramos, otimizamos e expandimos capacidades conforme sua operação cresce',
      icon: <FaSyncAlt />
    },
  ]

  return (
    <section id="implementacao" className="py-20">
      <div className="container-page">
        <SectionTitle 
          title="Como Funciona a"
          highlight="Implementação"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="timeline-step">
                <div className="timeline-dot">{step.step}</div>
                <div className="feature-card h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                  <p className="text-slate-300 text-sm">{step.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
      
        <div className="mt-12 text-center">
          <Button href="#contato">Começar Minha Jornada</Button>
      </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: POR QUE ESCOLHER A EDESOFT
// ============================================
const WhyEdesoft = () => {
  const reasons = [
    { 
      title: '19 Anos Transformando TI', 
      desc: 'Quase duas décadas entregando soluções tecnológicas que geram resultados reais para empresas de todos os portes',
      icon: <FaAward />
    },
    { 
      title: 'Expertise Multidisciplinar', 
      desc: 'Time especializado em IA, desenvolvimento, data science e integração de sistemas complexos',
      icon: <FaBrain />
    },
    { 
      title: 'Agentes Personalizados', 
      desc: 'Não trabalhamos com templates genéricos. Cada agente é desenvolvido sob medida para seu negócio',
      icon: <FaRobot />
    },
    { 
      title: 'Presença Global', 
      desc: 'Atuamos no Brasil e Europa, com padrões internacionais de qualidade e segurança',
      icon: <FaGlobe />
    },
    { 
      title: 'Segurança e Conformidade', 
      desc: 'Todas as soluções seguem LGPD e ISO 27001, garantindo proteção total dos seus dados',
      icon: <FaShieldAlt />
    },
    { 
      title: 'Suporte de Longo Prazo', 
      desc: 'Não te abandonamos após o projeto. Evoluímos juntos, continuamente',
      icon: <FaHandshake />
    },
  ]

  const services = [
    'RPA + Automação Inteligente',
    'Modernização de Sistemas Legados',
    'Squad as a Service',
    'Data Analytics & BI',
    'Outsourcing de TI',
  ]

  return (
    <section id="edesoft" className="py-20 bg-section-alt">
      <div className="container-page">
      <SectionTitle
          title="Por Que Escolher a"
          highlight="Edesoft?"
      />
        
        <div className="flex justify-center mb-10">
          <img src="/logo-edesoft.svg" alt="Logo Edesoft" className="h-14 md:h-16 opacity-90" />
      </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r) => (
            <div key={r.title} className="feature-card hover-elevate">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-white text-xl">
                {r.icon}
            </div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-slate-300 text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
        
        {/* Outros serviços */}
        <div className="max-w-3xl mx-auto">
          <div className="card-premium p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Além de Agentes de IA, Oferecemos:</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {services.map((service) => (
                <span key={service} className="px-4 py-2 rounded-full bg-white/8 text-slate-300 text-sm border border-white/10">
                  {service}
                </span>
        ))}
      </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
        <a href="https://edesoft.com.br" target="_blank" rel="noreferrer">
            <Button variant="secondary">Conhecer a Edesoft</Button>
        </a>
      </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: VÍDEO
// ============================================
const VideoSection = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://player.vimeo.com/api/player.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section id="video" className="py-20">
      <div className="container-page">
        <SectionTitle
          title="Descubra Como Agentes de IA Estão"
          highlight="Revolucionando Empresas"
          subtitle="Nosso Presidente explica como essa tecnologia pode transformar sua operação"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="card-premium overflow-hidden">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1142480404?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                title="Manoel Edesio - Agente de IA"
              />
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button href="#contato">Quero Implementar na Minha Empresa</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SEÇÃO: FAQ
// ============================================
const FAQ = () => {
  const faqs = [
    {
      q: 'Quanto tempo leva para ter um agente funcionando?',
      a: 'Projetos piloto podem estar operacionais em 4-6 semanas. Implementações completas geralmente levam 2-3 meses, dependendo da complexidade e integrações necessárias.'
    },
    {
      q: 'Preciso ter uma base de dados estruturada?',
      a: 'Não necessariamente. Nossos agentes podem trabalhar com documentos, e-mails, PDFs e sistemas legados. Ajudamos a organizar e estruturar o conhecimento durante o projeto.'
    },
    {
      q: 'O agente substitui minha equipe?',
      a: 'Não. O agente aumenta a capacidade da sua equipe, liberando-a de tarefas repetitivas para focar em interações complexas e estratégicas que exigem empatia e criatividade humana.'
    },
    {
      q: 'Como garantem que o agente não dá respostas erradas?',
      a: 'Implementamos camadas de validação, regras de negócio e aprovação humana para decisões críticas. O agente também sinaliza quando não tem certeza e escalona para humanos.'
    },
    {
      q: 'Posso integrar com meus sistemas atuais?',
      a: 'Sim! Nossos agentes se conectam a ERPs, CRMs, bancos de dados e praticamente qualquer sistema via API ou integração customizada.'
    },
    {
      q: 'Qual o investimento necessário?',
      a: 'Varia conforme complexidade e escopo. Trabalhamos com modelos flexíveis e o ROI geralmente acontece em 6-12 meses considerando economia operacional e aumento de receita.'
    },
    {
      q: 'E se meu negócio mudar?',
      a: 'Agentes são treináveis e evoluem continuamente. Podemos adicionar novas capacidades, conhecimentos e integrações conforme seu negócio cresce.'
    },
  ]

  return (
    <section id="faq" className="py-20 bg-section-alt">
      <div className="container-page">
        <SectionTitle 
          title="Perguntas"
          highlight="Frequentes"
        />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group card-premium p-5">
              <summary className="cursor-pointer text-white font-semibold flex items-center justify-between">
                <span>{faq.q}</span>
              </summary>
              <p className="text-slate-300 mt-4 leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
        
        <div className="mt-10 text-center">
          <Button href="#contato">Tirar Minhas Dúvidas</Button>
        </div>
    </div>
  </section>
)
}

// ============================================
// SEÇÃO: FORMULÁRIO DE CONTATO
// ============================================
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 11) {
      setFormData(prev => ({ ...prev, phone: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'BRL'
      });
    }

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Landing Page Agentes IA',
        content_category: 'Lead Generation'
      });
    }

    try {
      // Obter token do reCAPTCHA
      let recaptchaToken = ''
      if (typeof window !== 'undefined' && window.grecaptcha?.enterprise) {
        await new Promise<void>((resolve) => {
          window.grecaptcha.enterprise.ready(async () => {
            try {
              recaptchaToken = await window.grecaptcha.enterprise.execute('6LdUEBIsAAAAAJY96i8YqKSzoybv_3BV4SLScrtt', { action: 'SUBMIT_FORM' })
              resolve()
            } catch (error) {
              console.error('Erro ao executar reCAPTCHA:', error)
              resolve()
            }
          })
        })
      }

      const requestData = {
        nome: formData.name,
        sobrenome: '',
        email: formData.email,
        telefone: formData.phone,
        mensagem: formData.message,
        empresa: formData.company,
        cargo: formData.position,
        campanha: 'AgentesIA',
        recaptcha_token: recaptchaToken
      }

      const response = await fetch("https://edesoft.com.br/api/sendLeadCampaign", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(requestData),
      })
      
      setIsSubmitting(false)
      
      if (response.ok) {
        Swal.fire({
          title: "Tudo certo!",
          text: "Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.",
          icon: "success",
        })
        setFormData({ name: '', company: '', position: '', email: '', phone: '', message: '' })
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Verifique seus dados e tente novamente mais tarde.",
          icon: "error",
        });
      }
    } catch {
      setIsSubmitting(false)
      Swal.fire({
        title: "Oops...",
        text: "Verifique seus dados e tente novamente mais tarde.",
        icon: "error",
      });
    }
  }

  return (
    <section id="contato" className="py-20 relative bg-section-alt overflow-hidden">
      {/* Brushes decorativos */}
      <div className="brush-top-right" />
      <div className="brush-bottom-left" />
      <div className="container-page relative">
        <SectionTitle
          title="Pronto Para Ter Seu"
          highlight="Agente de IA Personalizado?"
          subtitle="Agende uma demonstração e veja na prática como agentes inteligentes podem transformar sua operação"
        />
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="card-premium p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Nome Completo</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          
              <div>
                <label className="block text-sm text-slate-300 mb-2">Empresa</label>
            <input 
              type="text" 
              name="company" 
              value={formData.company}
              onChange={handleInputChange}
              required 
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          
              <div>
                <label className="block text-sm text-slate-300 mb-2">Cargo</label>
            <input 
              type="text" 
              name="position" 
              value={formData.position}
              onChange={handleInputChange}
              required 
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          
              <div>
                <label className="block text-sm text-slate-300 mb-2">E-mail Corporativo</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-300 mb-2">Telefone / WhatsApp</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
                  onChange={handlePhoneInput}
              required 
              placeholder="11987654321"
                  maxLength={11}
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          
          <div className="md:col-span-2">
                <label className="block text-sm text-slate-300 mb-2">Qual processo você gostaria de automatizar com IA?</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              required 
              rows={4} 
                  className="w-full rounded-xl bg-[#0f172a] border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none" 
            />
              </div>
          </div>
          
            <div className="mt-8 text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
                className={`btn-gradient rounded-xl px-10 py-4 font-bold text-base hover-glow hover-elevate ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? 'Enviando...' : 'Quero uma Demonstração Gratuita'}
            </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10  bg-[#0a0c14]">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img src="/logo-edesoft.svg" alt="Edesoft" className="h-8" />
          <span className="text-slate-400 text-sm">© 2025 Edesoft - Transformando TI em Ativo Estratégico</span>
        </div>
    </div>
  </footer>
)
}

// ============================================
// APP PRINCIPAL
// ============================================
export default function App() {
  return (
    <main>
      <Hero />
      <Problems />
      <Clients />
      <AgentsIntro />
      <UseCases />
      <Benefits />
      <Stats />
      <Implementation />
      <WhyEdesoft />
      <VideoSection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
