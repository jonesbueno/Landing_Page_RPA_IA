import './index.css'
import { useState, useEffect } from 'react'
import { FaRocket, FaBolt, FaShieldAlt, FaCogs, FaChartLine, FaUsers, FaRobot, FaLink, FaHeadset, FaWarehouse, FaFileInvoice, FaHandHoldingUsd, FaAward, FaGlobe, FaHandshake, FaWhatsapp } from 'react-icons/fa'

type SectionProps = {
  id?: string
}

const Button = ({ children, href, variant = 'primary' }: { children: React.ReactNode, href?: string, variant?: 'primary' | 'secondary' }) => {
  const classes = variant === 'primary'
    ? 'inline-block rounded-lg btn-gradient hover-glow text-white px-6 py-3 text-sm font-semibold shadow-md shadow-black/20 hover-elevate'
    : 'inline-block rounded-lg bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-semibold border border-white/20 hover-elevate'
  return href ? (
    <a href={href} className={classes}>{children}</a>
  ) : (
    <button className={classes}>{children}</button>
  )
}

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient">{title}</h2>
    {subtitle && <p className="text-white/85 mt-3">{subtitle}</p>}
      </div>
)

const LogoCarousel = () => {
  const logos = [
    { src: '/SVG/Albert.svg', alt: 'Albert Einstein', size: 'h-10' },
    { src: '/SVG/Bradesco.svg', alt: 'Bradesco', size: 'h-10' },
    { src: '/SVG/Carrefour.svg', alt: 'Carrefour', size: 'h-10' },
    { src: '/SVG/CNN.svg', alt: 'CNN', size: 'h-8' },
    { src: '/SVG/Embraer.svg', alt: 'Embraer', size: 'h-8' },
    { src: '/SVG/Friboi.svg', alt: 'Friboi', size: 'h-8' },
    { src: '/SVG/Itau_1.svg', alt: 'Itaú', size: 'h-10' },
    { src: '/SVG/Magalu.svg', alt: 'Magalu', size: 'h-8' },
    { src: '/SVG/Sequoia.svg', alt: 'Sequoia', size: 'h-8' },
  ]

  return (
    <div className="relative overflow-hidden mt-8">
      {/* Gradiente nas bordas para efeito fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[--bg] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[--bg] to-transparent z-10"></div>
      
      <div className="flex animate-scroll">
        {/* Primeira linha de logos */}
        <div className="flex items-center space-x-12 flex-shrink-0">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex items-center justify-center h-12 w-32">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={`${logo.size} w-auto opacity-40 hover:opacity-70 transition-all duration-300 filter grayscale hover:grayscale-0`}
              />
            </div>
          ))}
        </div>
        {/* Segunda linha de logos (duplicada para efeito infinito) */}
        <div className="flex items-center space-x-12 flex-shrink-0">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex items-center justify-center h-12 w-32">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={`${logo.size} w-auto opacity-40 hover:opacity-70 transition-all duration-300 filter grayscale hover:grayscale-0`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Hero = () => (
  <header className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-deep" />
    <div className="container-page relative pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-3xl mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
        <span className="badge mx-auto">
          <span className="h-2 w-2 rounded-full bg-[--accent]" /> RPA + IA para sua operação
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
          <span className="block md:whitespace-nowrap">Sua Empresa Perde Dinheiro</span>
          <span className="block md:whitespace-nowrap">com <span className="text-gradient">Processos Manuais</span>?</span>
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
          Automatize tarefas repetitivas e transforme sua operação com RPA + Inteligência Artificial
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap gap-4 justify-center">
          <Button href="#contato">Quero Reduzir Custos Agora</Button>
          <Button href="#problemas" variant="secondary">Como funciona?</Button>
        </div>
      </div>
      
      {/* Seção de logos integrada */}
      <div className="mt-16 md:mt-20">
        <div className="text-center mb-6">
          <p className="text-sm md:text-base text-white/70 font-medium">
            Automatizamos processos e entregamos resultados reais para grandes players do mercado como
          </p>
        </div>
        <LogoCarousel />
      </div>
    </div>
  </header>
)


const Problems = () => (
  <section id="problemas" className="container-page py-14 md:py-20">
    <SectionTitle title="Reconhece algum desses problemas?" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Processos Lentos', desc: 'Sua equipe perde horas em tarefas manuais e repetitivas que poderiam ser automatizadas', icon: <FaBolt className="text-accent" /> },
        { title: 'Custos Elevados', desc: 'Operações manuais custam caro e impedem seu time de focar no que realmente importa', icon: <FaHandHoldingUsd className="text-accent" /> },
        { title: 'Erros Frequentes', desc: 'Retrabalho e falhas humanas prejudicam a qualidade e aumentam os custos operacionais', icon: <FaShieldAlt className="text-accent" /> },
        { title: 'Falta de Escalabilidade', desc: 'Crescer significa contratar mais pessoas, aumentando custos sem ganhar eficiência', icon: <FaChartLine className="text-accent" /> },
        { title: 'Equipe Sobrecarregada', desc: 'Colaboradores gastam tempo com tarefas repetitivas em vez de gerar valor estratégico', icon: <FaUsers className="text-accent" /> },
        { title: 'Sistemas Desconectados', desc: 'Informações fragmentadas em diferentes plataformas sem comunicação entre si', icon: <FaLink className="text-accent" /> },
      ].map((c) => (
        <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-card hover-elevate">
          <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
            {c.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{c.title}</h3>
          <p className="text-white/80 mt-2">{c.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
      <Button href="#contato">Quero uma Solução Personalizada</Button>
    </div>
  </section>
)

const Solution = () => (
  <section id="solucao" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-section-gradient/50" />
    
    {/* Imagem de fundo do processo com perspectiva */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-full opacity-10 pointer-events-none">
      <img 
        src="/rpa_process.png" 
        alt="Fluxo de processo RPA" 
        className="w-full h-full object-contain"
        style={{ 
          transform: 'rotate(-8deg) scale(1.2)',
          filter: 'blur(1px)'
        }}
      />
    </div>
    
    <div className="container-page relative py-14 md:py-20">
      <SectionTitle
        title="A solução que sua empresa precisa"
        subtitle="Combinamos RPA e Inteligência Artificial para eliminar gargalos e transformar sua operação"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'RPA - Automação Robótica', desc: 'Robôs que executam tarefas repetitivas 24/7, sem erros e sem pausas. Libere seu time para atividades estratégicas.', icon: <FaRobot className="text-white" /> },
          { title: 'Agentes de IA Personalizados', desc: 'Assistentes inteligentes sob medida. Atendem clientes, analisam dados e tomam decisões com precisão.', icon: <FaCogs className="text-white" /> },
          { title: 'Integração Total', desc: 'Conectamos todas as suas ferramentas e sistemas, criando uma operação fluida e inteligente.', icon: <FaLink className="text-white" /> },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border-gradient bg-white/5 p-6 hover-elevate">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 text-white">
              {c.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{c.title}</h3>
            <p className="text-white/80 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href="#como-funciona">Transformar Minha Operação</Button>
      </div>
    </div>
  </section>
)

const Pillars = () => (
  <section id="pilares" className="container-page py-14 md:py-20">
    <SectionTitle title="Pilares da nossa solução" />
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { title: 'Automação Inteligente de Processos', icon: <FaRocket />, color: 'from-[#a78bfa] to-[#60a5fa]', desc: 'Nossa solução identifica os melhores processos para automação e implementa robôs que aprendem e se adaptam ao seu negócio. Imagine um assistente digital 24/7 processando pedidos, atualizando sistemas, gerando relatórios e respondendo solicitações sem erros.' },
        { title: 'Decisões Baseadas em Dados Reais', icon: <FaChartLine />, color: 'from-[#60a5fa] to-[#22d3ee]', desc: 'Agentes de IA analisam grandes volumes de informação em segundos, identificam padrões e entregam insights que transformam sua estratégia. Descubra oportunidades, preveja problemas e decida com base em fatos.' },
        { title: 'Experiência do Cliente Elevada', icon: <FaHeadset />, color: 'from-[#22d3ee] to-[#5eead4]', desc: 'Clientes esperam respostas instantâneas e personalizadas. Ofereça atendimento 24/7, resolva dúvidas em segundos e personalize cada interação, aumentando satisfação e reduzindo chamados.' },
        { title: 'Redução Real de Custos', icon: <FaHandHoldingUsd />, color: 'from-[#5a44e9] to-[#2a8dff]', desc: 'Elimine desperdícios, reduza erros e cresça sem aumentar proporcionalmente o quadro. Reduções de custos operacionais em até 30% nos primeiros meses.' },
      ].map((p) => (
        <div key={p.title} className="rounded-2xl p-1 hover-elevate">
          <div className={`rounded-2xl p-[1px] bg-gradient-to-r ${p.color}`}>
            <div className="rounded-2xl bg-[#0b1020]/80 p-6 border border-white/10">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-3">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="text-white/80 mt-2">{p.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const UseCases = () => {
  const cases = [
    {
      key: 'financeiro' as const,
      title: 'Financeiro e Contabilidade',
      icon: <FaFileInvoice />,
      color: 'from-[#a78bfa] to-[#60a5fa]',
      items: [
        'Extração automática de dados de notas fiscais e documentos',
        'Conciliação bancária com alertas inteligentes',
        'Relatórios financeiros em minutos',
        'Previsão de fluxo de caixa com IA',
      ],
      result: '70% menos tempo de fechamento e 95% menos erros.',
    },
    {
      key: 'atendimento' as const,
      title: 'Atendimento ao Cliente',
      icon: <FaHeadset />,
      color: 'from-[#60a5fa] to-[#22d3ee]',
      items: [
        'Chatbot que resolve 80% das dúvidas',
        'Consulta a múltiplos sistemas com IA',
        'Atendimento personalizado por histórico',
        'Escalação inteligente para humanos',
      ],
      result: '60% menos chamados e +40% em satisfação.',
    },
    {
      key: 'rh' as const,
      title: 'Recursos Humanos',
      icon: <FaUsers />,
      color: 'from-[#22d3ee] to-[#5eead4]',
      items: [
        'Triagem com análise de fit',
        'Agendamento automático de entrevistas',
        'Onboarding digital guiado',
        'Automação de férias e benefícios',
      ],
      result: '50% menos tempo de contratação e 80% menos trabalho manual.',
    },
    {
      key: 'operacoes' as const,
      title: 'Operações e Logística',
      icon: <FaWarehouse />,
      color: 'from-[#5a44e9] to-[#2a8dff]',
      items: [
        'Estoque com previsão de demanda',
        'Pedidos automatizados multi-canais',
        'Rotas otimizadas por IA',
        'Alertas proativos de atrasos',
      ],
      result: '35% menos custos e 90% de precisão de estoque.',
    },
  ]

  type CaseKey = typeof cases[number]['key']
  const [active, setActive] = useState<CaseKey>('financeiro')
  const activeCase = cases.find(c => c.key === active)!

  return (
    <section id="casos" className="relative">
      <div className="container-page py-14 md:py-20">
        <SectionTitle title="Casos de uso reais" subtitle="Veja como RPA + IA transforma áreas-chave do seu negócio" />
        <div className="flex flex-wrap gap-3 justify-center">
          {cases.map(c => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${active === c.key ? 'text-black bg-white border-white' : 'text-white/80 bg-white/10 border-white/10 hover:bg-white/15'}`}
              aria-pressed={active === c.key}
            >
              {c.title}
            </button>
          ))}
        </div>
        <div className="mt-8 rounded-2xl p-[1px] bg-gradient-to-r from-[#5a44e9] to-[#2a8dff]">
          <div className="rounded-2xl bg-[#0b1020]/85 border border-white/10 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                {activeCase.icon}
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{activeCase.title}</h3>
                <p className="text-white/80">{activeCase.result}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {activeCase.items.map(i => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[--accent]"></span>
                    <span className="text-white/85">{i}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button href="#contato">Ver Meu Caso de Uso</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Stats = () => (
  <section className="container-page py-14 md:py-20">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient">
        Estes números podem ser os da sua empresa
      </h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        ['30%', 'Redução de Custos'],
        ['80%', 'Menos Tempo em Tarefas'],
        ['24/7', 'Operação Automatizada'],
        ['95%', 'Redução de Erros'],
      ].map(([n, l]) => (
        <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover-elevate">
          <div className="text-3xl font-extrabold text-white">{n}</div>
          <div className="text-white/80">{l}</div>
        </div>
      ))}
    </div>
    <div className="mt-10 text-center">
      <Button href="#contato">Quero Esses Resultados</Button>
    </div>
  </section>
)

const Benefits = () => (
  <section id="beneficios" className="relative">
    <div className="absolute inset-0 bg-section-gradient/50" />
    <div className="container-page relative py-14 md:py-20">
      <SectionTitle title="O que você ganha" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { t: 'Velocidade', d: 'Processos que levavam horas agora acontecem em minutos', icon: <FaBolt /> },
          { t: 'Economia Real', d: 'Reduza custos operacionais em até 30% nos primeiros meses', icon: <FaHandHoldingUsd /> },
          { t: 'Precisão', d: 'Elimine erros humanos e garanta qualidade consistente', icon: <FaShieldAlt /> },
          { t: 'Escalabilidade', d: 'Cresça sem precisar aumentar proporcionalmente seu time', icon: <FaChartLine /> },
          { t: 'Inovação Contínua', d: 'Libere recursos para investir em projetos estratégicos', icon: <FaRocket /> },
          { t: 'Satisfação do Cliente', d: 'Atendimento mais rápido e personalizado', icon: <FaHeadset /> },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border-gradient bg-white/5 p-6 hover-elevate">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary text-white flex items-center justify-center mb-3">
              {b.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{b.t}</h3>
            <p className="text-white/80 mt-2">{b.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button href="#contato">Garantir Esses Benefícios</Button>
      </div>
    </div>
  </section>
)

const HowItWorks = () => (
  <section id="como-funciona" className="relative">
    <div className="container-page py-14 md:py-20">
      <SectionTitle title="Como funciona nossa implementação" />
      
      {/* Layout em fluxo vertical moderno */}
      <div className="relative max-w-4xl mx-auto">
        {/* Linha de fluxo vertical animada (visível apenas em desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 flow-line rounded-full" 
             style={{ height: 'calc(100% - 80px)', top: '40px' }} />
        
        <div className="space-y-6">
          {[
            { title: 'Diagnóstico', desc: 'Analisamos seus processos e identificamos oportunidades de alto ROI.', icon: '🔍', color: 'from-[#a78bfa] to-[#60a5fa]' },
            { title: 'Planejamento Personalizado', desc: 'Roadmap sob medida com prioridades e projeção de resultados.', icon: '📋', color: 'from-[#60a5fa] to-[#22d3ee]' },
            { title: 'Desenvolvimento Ágil', desc: 'Entregas incrementais com valor desde a primeira semana.', icon: '⚡', color: 'from-[#22d3ee] to-[#5eead4]' },
            { title: 'Testes e Ajustes', desc: 'Validação em ambiente controlado com feedback do seu time.', icon: '🔧', color: 'from-[#5eead4] to-[#2a8dff]' },
            { title: 'Go Live e Treinamento', desc: 'Operação e treinamento para monitoramento eficaz.', icon: '🚀', color: 'from-[#2a8dff] to-[#5a44e9]' },
            { title: 'Suporte e Evolução', desc: 'Acompanhamento contínuo e evolução das automações.', icon: '📈', color: 'from-[#5a44e9] to-[#a78bfa]' },
          ].map((step, idx) => (
            <div key={step.title} className="relative flow-step">
              {/* Card do passo */}
              <div className={`relative ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} md:w-[calc(50%-2rem)]`}>
                <div className={`rounded-2xl p-[2px] bg-gradient-to-r ${step.color} hover-elevate`}>
                  <div className="rounded-2xl bg-[#0b1020]/95 p-6 relative overflow-hidden">
                    {/* Efeito de brilho no fundo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex items-start gap-4">
                      {/* Número do passo */}
                      <div className="flex-shrink-0">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                          {idx + 1}
                        </div>
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{step.icon}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ponto de conexão na linha central com pulso (apenas desktop) */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#5a44e9] to-[#2a8dff] border-4 border-[#0b1020] shadow-lg flow-dot"
                     style={{ 
                       [idx % 2 === 0 ? 'left' : 'right']: 'calc(100% + 1rem)'
                     }} />
              </div>
              
              {/* Seta conectora (mobile) */}
              {idx < 5 && (
                <div className="md:hidden flex justify-center py-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#2a8dff]">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <Button href="#contato">Quero Começar Agora</Button>
      </div>
    </div>
  </section>
)

const WhyEdesoft = () => (
  <section id="por-que-edesoft" className="relative">
    <div className="absolute inset-0 bg-section-gradient/50" />
    <div className="container-page relative py-14 md:py-20">
      <SectionTitle
        title="Por que escolher a Edesoft?"
        subtitle="19 anos transformando TI em ativo de negócio"
      />
      <div className="flex items-center justify-center mt-4 mb-8">
        <img src="/logo-edesoft.svg" alt="Logo Edesoft" className="h-14 md:h-16 opacity-95" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { t: '19 Anos de Mercado', d: 'Décadas ajudando empresas a reduzir custos com tecnologia.', icon: <FaAward /> },
          { t: 'Presença Global', d: 'Atuação no Brasil e Europa para empresas de todos os portes.', icon: <FaGlobe /> },
          { t: 'Especialistas Certificados', d: 'Time com expertise em IA, dados, segurança e gestão.', icon: <FaCogs /> },
          { t: 'Foco em Resultados', d: 'Entregamos resultados mensuráveis alinhados ao negócio.', icon: <FaChartLine /> },
          { t: 'Segurança e Conformidade', d: 'Melhores práticas, LGPD e ISO 27001.', icon: <FaShieldAlt /> },
          { t: 'Parceria de Longo Prazo', d: 'Relações duradouras com suporte e evolução contínua.', icon: <FaHandshake /> },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border-gradient bg-white/5 p-6 hover-elevate">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary text-white flex items-center justify-center mb-3">
              {b.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{b.t}</h3>
            <p className="text-white/80 mt-2">{b.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {[['19', 'Anos de Experiência'], ['200+', 'Projetos Entregues'], ['50+', 'Clientes Ativos'], ['95%', 'Taxa de Satisfação']].map(([n, l]) => (
          <div key={n} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover-elevate">
            <div className="text-3xl font-extrabold text-white">{n}</div>
            <div className="text-white/80">{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <a href="https://edesoft.com.br" target="_blank" rel="noreferrer">
          <Button>Conhecer a Edesoft</Button>
        </a>
      </div>
    </div>
  </section>
)

const VideoSection = () => {
  useEffect(() => {
    // Carrega o script do Vimeo Player API se ainda não estiver carregado
    if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://player.vimeo.com/api/player.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section id="video" className="relative">
      <div className="absolute inset-0 bg-section-gradient/50" />
      <div className="container-page relative py-14 md:py-20">
        <SectionTitle
          title='"Meu vendedor não preenchia o CRM"'
          subtitle="Veja como implementamos uma solução de agente de IA personalizado que transformou áudios de WhatsApp em dados estruturados no CRM"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1129682251?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                title='"Meu vendedor não preenchia o CRM"'
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Este é apenas um exemplo de como nossa tecnologia pode transformar processos manuais em automações inteligentes. 
              <span className="text-white font-semibold"> Imagine o que podemos fazer pela sua empresa.</span>
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Button href="#contato">Quero uma Solução Personalizada</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQ = () => (
  <section id="faq" className="container-page py-14 md:py-20">
    <SectionTitle title="Perguntas Frequentes" />
    <div className="space-y-4">
      {[
        ['Quanto tempo leva para implementar RPA + IA?', 'Resultados nas primeiras 2-4 semanas. Projetos completos em 2 a 4 meses.'],
        ['Preciso substituir meus sistemas atuais?', 'Não. Integramos aos seus sistemas existentes, sem grandes mudanças.'],
        ['Minha equipe vai perder o emprego?', 'Não. Eliminamos tarefas repetitivas; foco em atividades estratégicas.'],
        ['Qual o investimento necessário?', 'Modelos flexíveis. ROI em 6-12 meses via redução de custos.'],
        ['E se meu processo mudar no futuro?', 'Automação flexível com suporte contínuo para evoluções.'],
        ['Como garantem a segurança dos dados?', 'LGPD, ISO 27001, criptografia e processos auditáveis.'],
        ['Vocês oferecem suporte após a implementação?', 'Sim. Suporte e evolução contínuos pós go-live.'],
        ['Posso começar com um projeto piloto?', 'Recomendado. Valide resultados antes de escalar.'],
        ['Quais tecnologias vocês utilizam?', 'Principais plataformas de RPA e agentes de IA personalizados.'],
      ].map(([q, a]) => (
        <details key={q as string} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer text-white font-semibold">{q}</summary>
          <p className="text-white/80 mt-2">{a as string}</p>
        </details>
      ))}
    </div>
    <div className="mt-8 text-center">
      <Button href="#faq">Ainda Tenho Dúvidas</Button>
    </div>
  </section>
)

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Salvar referência ao formulário antes da operação assíncrona
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Converter FormData para objeto JSON
    const formDataObj: Record<string, string> = {}
    formData.forEach((value, key) => {
      formDataObj[key] = value.toString()
    })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObj),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
        console.error('Erro do Web3Forms:', data)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="relative">
      <div className="absolute inset-0 bg-gradient-deep opacity-80" />
      <div className="container-page relative py-14 md:py-20">
        <SectionTitle
          title="Pronto Para Automatizar Sua Operação?"
          subtitle="Agende uma conversa sem compromisso e descubra como podemos reduzir seus custos"
        />
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-center">
          {/* Campos obrigatórios do Web3Forms */}
          <input type="hidden" name="access_key" value="24d4a369-8386-471f-8132-be5cc6b877b2" />
          <input type="hidden" name="subject" value="Novo Lead - Landing Page RPA + IA" />
          <input type="hidden" name="from_name" value="Landing Page Edesoft" />
          
          {/* Proteção anti-spam */}
          <input type="checkbox" name="botcheck" className="hidden" />
          
          {/* Configuração de autoresponder */}
          <input type="hidden" name="autoresponse" value="Obrigado pelo seu interesse!" />
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm text-white/80 mb-1 text-left">Nome Completo</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
            />
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm text-white/80 mb-1 text-left">Empresa</label>
            <input 
              type="text" 
              name="company" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
            />
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm text-white/80 mb-1 text-left">Cargo</label>
            <input 
              type="text" 
              name="position" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
            />
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm text-white/80 mb-1 text-left">E-mail Corporativo</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
            />
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm text-white/80 mb-1 text-left">Telefone</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm text-white/80 mb-1 text-left">Qual seu maior desafio operacional hoje?</label>
            <textarea 
              name="message" 
              required 
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[--accent]" 
              rows={4} 
            />
          </div>
          
          {/* Mensagens de feedback */}
          {submitStatus === 'success' && (
            <div className="md:col-span-2 rounded-lg bg-green-500/20 border border-green-500/50 p-4 text-green-100">
              ✅ Mensagem enviada com sucesso! Em breve um especialista entrará em contato.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="md:col-span-2 rounded-lg bg-red-500/20 border border-red-500/50 p-4 text-red-100">
              ❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.
            </div>
          )}
          
          <div className="md:col-span-2 flex justify-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`inline-block rounded-lg btn-gradient hover-glow text-white px-6 py-3 text-sm font-semibold shadow-md shadow-black/20 hover-elevate ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Enviando...' : 'Quero uma Consultoria Gratuita'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="relative mt-10 border-t border-white/10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-deep opacity-80" />
    <div className="container-page relative py-8 text-center text-white/70">
      © 2025 Edesoft - Transformando TI em Ativo Estratégico
    </div>
  </footer>
)

export default function App({}: SectionProps) {
  return (
    <main>
      <Hero />
      <Problems />
      <Solution />
      <Pillars />
      <UseCases />
      <Stats />
      <Benefits />
      <HowItWorks />
      <WhyEdesoft />
      <VideoSection />
      <FAQ />
      <Contact />
      <Footer />
      {/* Botão flutuante de WhatsApp */}
      <a
        href={
          'https://wa.me/551123072387?text=' +
          encodeURIComponent('Olá! Vim pela landing page de RPA + IA e gostaria de saber como reduzir custos na minha operação.')
        }
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg hover-elevate"
        style={{
          backgroundImage: 'linear-gradient(135deg,#25D366,#128C7E)'
        }}
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp />
        WhatsApp
      </a>
    </main>
  )
}
