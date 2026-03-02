import type { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { HeroSection } from "@/components/HeroSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionTitle } from "@/components/SectionTitle";
import { StackGroup, type StackItem } from "@/components/StackGroup";
import { SoftSkillsCarousel, type SoftSkill } from "@/components/SoftSkillsCarousel";
import { Footer } from "@/components/Footer";

const stackGroups: { category: string; items: StackItem[] }[] = [
  {
    category: "Hard Skills",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "SCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
      },
      {
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
      }
    ]
  },
  {
    category: "Frameworks e Libs",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg"
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        name: "Lumen",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lumen/lumen-original.svg"
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      },
      {
        name: ".NET",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
      }
    ]
  },
  {
    category: "Ferramentas e DevOps",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      },
      {
        name: "JUnit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg"
      }
    ]
  }
];

const softSkills: SoftSkill[] = [
  {
    title: "Comunicacao tecnica",
    description:
      "Traduzo demandas de negócio para requisitos claros, alinhando expectativas entre áreas técnicas e administrativas.",
    example:
      "Facilitei alinhamentos para transformar requisitos do setor público em backlog priorizado e entregas consistentes."
  },
  {
    title: "Trabalho em equipe",
    description:
      "Colaboro com design, produto e infraestrutura para manter fluidez entre definição, entrega e suporte.",
    example:
      "Integrei times diferentes para garantir que o Portal da Transparencia tivesse dados e UX consistentes."
  },
  {
    title: "Resolução de problemas",
    description:
      "Investigo causas raiz, priorizo impacto e aplico correções com foco em estabilidade e previsibilidade.",
    example:
      "Reduzi gargalos de consulta em APIs críticas ao revisar queries e estratégia de cache."
  },
  {
    title: "Adaptabilidade",
    description:
      "Alterno entre backend, frontend e dados conforme o que o projeto precisa para destravar entregas.",
    example:
      "Assumi tarefas em diferentes camadas para manter o Diário Oficial de Jaboatão dos Guararapes funcionando no prazo."
  },
  {
    title: "Aprendizado contínuo",
    description:
      "Busco atualização constante em ferramentas e arquitetura para melhorar qualidade e produtividade.",
    example:
      "Implementei padrões de service/repository e documentações técnicas para acelerar as evoluções futuras."
  },
  {
    title: "Gestão de tempo",
    description:
      "Organizo entregas por impacto, garantindo visibilidade e ritmo contínuo em ambientes públicos.",
    example:
      "Estruturei prioridades semanais para manter entregas frequentes sem perder qualidade."
  }
];

const timeline: { period: string; title: string; description: string }[] = [
  {
    period: "2024 - Atual",
    title: "Software Developer Fullstack | Prefeitura de Jaboatao dos Guararapes",
    description:
      "Desenvolvimento de produtos web com foco em transparencia, confiabilidade e experiência do usuário. Integração de sistemas legados, modelagem de dados e APIs REST para atender demandas de acesso público a informação. Stacks Principais: ReactJS, Next.js, Node.js, Express, MySQL, PostgresSQL, Docker, Active Directory, GovBR e GitHub."
  },
  {
    period: "2023 - 2024",
    title: "Maple Tecnologia | Ejes Soluções em TI",
    description:
      "Sistemas ERP´s voltados para áreas de saúde, com foco em desenvolvimento de módulos, manutenção evolutiva e suporte técnico. Stacks Principais: PHP(Slim Framework), Ajax, Angular, MySQL, HTML, CSS, Bootstrap e GitHub."
  },
  {
    period: "2022 -2023",
    title: "IEADPE - Desenvolvedor de Software Estagiário",
    description:
      "Responsável por realizar atividades no Sistema de Gerenciamento da Assembleia disponibilizando ferramentas de trabalhos web desenvolvidas para todos os setores e departmanetos. Stacks Principais: Angular, PHP (Laravel), Node.js (Nest.js), Oracle PL/SQL, Jasper Reports, GitHub, Tortoise SVN e CI/CD com Jenkins."
  }
];

const testimonials = [
  {
    quote:
      "Júlio é um excelente profissional exemplar, sempre focado em resultados atento a cada detalhe do processo. Sua dedicação e habilidade em entregar soluções eficientes e experiências de qualidade fazem toda a diferença no time.",
    name: "Larissa Machado - Desenvolvedora UI/UX Designer",
    role: "Desenvolvimento no Portal da Transparência, Diário Oficial, SIGA e Credencial Vagas"
  },
  {
    quote:
      "Ótimo Profissional, esforçado e com vontade de aprender cada dia mais, no período em que trabalhamos juntos Júlio era estagiário, mas com tanta garra e vontade de aprender creio que a efetivação é questão de tempo, de longe o melhor estagiário que já tive o prazer de conhecer e trabalhar junto.",
    name: "Thalis Fernandes - Desenvolvedor Backend",
    role: "ERP Ecclesia - IEADPE"
  },
  {
    quote:
      "Um excelente Profissional, amigo, companheiro, leal e um ótimo desenvolvedor. Sempre que entra em um projeto ele procura entender o que se passa, além de ter uma capacidade resolutiva incrível, profissional esse que me ajuda bastante nos projetos, além de que tive a oportunidade não só de trabalhar, mas vê-lo em formação, até em estudos ele sempre foi muito dedicado e esforçado.",
    name: "Kauê Silva - Desenvolvedor FrontEnd",
    role: "Desenvolvimento no Credencial Vagas e Portal da Transparência"
  }
];

const projects: ProjectCardProps[] = [
  {
    name: "Portal da Transparencia",
    description:
      "Desenvolvimento de layouts e interfaces de alto uso institucional com foco em acessibilidade, paginação eficiente e integração com serviços institucionais. O Portal da Tranparência ganhou o Prêmio de Transparência Diamante 2024 e 2025 do TCE-PE, reconhecendo a excelência na divulgação de informações públicas e o compromisso com a transparência governamental.",
    stack: ["Next.js"],
    challenge:
      "Estruturei o front-end para melhorar a experiencia do usuário e aumentar a acessibilidade, garantindo uma navegacao fluida e intuitiva.",
    repository: "https://portaldatransparencia.jaboatao.pe.gov.br/",
    image: "/uploads/portal-transparencia.png",
    imageAlt: "Preview do Portal da Transparencia"
  },
  {
    name: "Diario Oficial de Jaboatão dos Guararapes",
    description:
      "Implementacao de fluxos de publicação e leitura pública com foco em rastreabilidade, indexação de documentos e experiência de busca por edição e data.",
    stack: ["Next.js", "Laravel", "PHP", "Sequelize"],
    challenge:
      "Modelei uma arquitetura de publicacao desacoplada que reduziu acoplamento entre processo editorial e camada de entrega, facilitando manutencao continua.",
    repository: "https://diariooficial.jaboatao.pe.gov.br/",
    image: "/uploads/diario-oficial.png",
    imageAlt: "Preview do Diario Oficial Digital"
  },
  {
    name: "Credencial Vagas Administrativo",
    description:
      "Portal administrativo para emissao e validacao de credenciais de vagas preferenciais com autenticacao interna via Active Directory e fluxo de aprovacao padronizado.",
    stack: ["Next.js", "Express", "MySQL", "Python", "Active Directory"],
    challenge:
      "Implementei a integracao com o Active Directory via API em Python e organizei a arquitetura MVC com camadas DAO e DTO para manter contratos de dados consistentes.",
    repository: "https://credencialvagas.jaboatao.pe.gov.br",
    image: "/uploads/credencial-vagas-admin.png",
    imageAlt: "Preview do Credencial Vagas Administrativo"
  },
  {
    name: "Credencial Vagas Cidadao",
    description:
      "Ambiente do cidadao integrado ao GovBR para solicitacao digital da credencial de vagas preferenciais, reduzindo burocracia para idosos, autistas, gestantes e PCDs.",
    stack: ["Next.js", "Express", "MySQL", "GovBR"],
    challenge:
      "Integrei autenticacao GovBR e o fluxo de emissao digital com regras de elegibilidade, garantindo acesso remoto e seguro ao beneficio.",
    repository: "https://credencialvagas.jaboatao.pe.gov.br/",
    image: "/uploads/credencial-vagas-cidadao.png",
    imageAlt: "Preview do Credencial Vagas Cidadao"
  },
  {
    name: "Portal SIGA",
    description:
      "Hub de sites institucionais da Prefeitura de Jaboatao dos Guararapes, integrando o legado em Scriptcase com front moderno em Next.js e BFF em Express, mantendo seguranca e tela de login integrada ao Active Directory.",
    stack: ["Next.js", "Express", "Scriptcase", "Active Directory"],
    challenge:
      "Conectei o front moderno ao Scriptcase legado via BFF, garantindo autenticacao integrada ao Active Directory e padroes consistentes de seguranca.",
    repository: "...",
    image: "/uploads/siga.png",
    imageAlt: "Preview do Portal SIGA"
  }
];

const differentiators = [
  "Decisoes tecnicas orientadas a manutencao, priorizando legibilidade, separacao de responsabilidades e evolucao incremental.",
  "Aplicacao pratica de Clean Code e SOLID em APIs e interfaces de alto uso institucional.",
  "Experiencia com produtos de interesse publico, onde confiabilidade, clareza de informacao e estabilidade operacional sao criticos.",
  "Visao fullstack para conectar UX, regra de negocio e persistencia sem perder consistencia de arquitetura."
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <main>
        <RevealOnScroll delay={20} direction="up">
          <section id="sobre" className="content-section">
            <SectionTitle
              overline="Sobre mim"
              title="Desenvolvedor fullstack focado em engenharia de produto"
              subtitle="Atuo em todo o ciclo da entrega: da modelagem tecnica a interface final, com disciplina de codigo e visao de longo prazo."
            />
            <p className="about-text">
              Minha atuacao combina entrega pratica com rigor técnico. Tenho experiência em projetos
              como Portal da Transparência e Diário Oficial, construindo soluções com APIs REST,
              modelagem de dados relacional e interfaces responsivas. Busco sempre reduzir
              complexidade acidental, melhorar previsibilidade de manutenção e acelerar evolução
              segura do produto.
            </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={70} direction="up">
          <section id="stack" className="content-section">
            <SectionTitle
              overline="Stack tecnologica"
              title="Tecnologias organizadas por dominio"
              subtitle="Hard skills e frameworks com foco nas tecnologias que uso no dia a dia."
            />
            <div className="stack-grid">
              {stackGroups.map((group) => (
                <StackGroup key={group.category} category={group.category} items={group.items} />
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={110} direction="up">
          <section id="soft-skills" className="content-section">
            <SectionTitle
              overline="Soft skills"
              title="Competencias humanas que aceleram a entrega"
              subtitle="Experiencia pratica em colaboracao, comunicacao e resolucao de problemas reais."
            />
            <SoftSkillsCarousel items={softSkills} />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={140} direction="up">
          <section id="carreira" className="content-section">
            <SectionTitle
              overline="Timeline"
              title="Carreira com foco em impacto publico"
              subtitle="Marcos que sintetizam minha trajetoria profissional e formacao academica."
            />
            <ol className="timeline">
              {timeline.map((item) => (
                <li key={item.title} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={170} direction="up">
          <section id="projetos" className="content-section">
            <SectionTitle
              overline="Projetos reais"
              title="Entregas com contexto tecnico e impacto operacional"
              subtitle="Carrossel continuo com pausa no hover. Clique abre o site do projeto e, se nao houver, o repositorio."
            />
            <ProjectsCarousel projects={projects} />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={200} direction="up">
          <section id="diferenciais" className="content-section">
            <SectionTitle
              overline="Diferenciais tecnicos"
              title="Como eu construo software"
              subtitle="Principios aplicados no dia a dia para manter qualidade sem travar entrega."
            />
            <ul className="diff-list">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={230} direction="up">
          <section id="depoimentos" className="content-section">
            <SectionTitle
              overline="Depoimentos"
              title="Feedbacks que refletem colaboracao e entrega"
              subtitle="Amostras de formato. Substitua por depoimentos reais quando desejar."
            />
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="testimonial-card">
                  <p className="testimonial-quote">&quot;{testimonial.quote}&quot;</p>
                  <div className="testimonial-author">
                    <span>{testimonial.name}</span>
                    <span>{testimonial.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* <RevealOnScroll delay={250} direction="up">
          <section className="cta-section" aria-label="Chamada para acao">
            <div className="cta-card">
              <h3>Vamos conversar sobre seu proximo projeto?</h3>
              <p>
                Disponivel para oportunidades fullstack, colaboracoes tecnicas e projetos com impacto
                real. Vamos construir algo que gere resultado.
              </p>
              <div className="cta-actions">
                <a
                  href="https://www.linkedin.com/in/julioseunome"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cta-primary"
                  aria-label="Falar comigo no LinkedIn"
                >
                  Falar no LinkedIn
                </a>
                <a href="mailto:julio@example.com" className="cta-secondary" aria-label="Enviar email">
                  Enviar Email
                </a>
                <a
                  href="/curriculo-julio-paulo.pdf"
                  className="cta-secondary"
                  aria-label="Baixar curriculo"
                  download
                >
                  Baixar Curriculo
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll> */}

      </main>
      <Footer />
    </>
  );
}
