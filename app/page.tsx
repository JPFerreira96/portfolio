import type { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { HeroSection } from "@/components/HeroSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionTitle } from "@/components/SectionTitle";
import { StackGroup, type StackItem } from "@/components/StackGroup";

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
  }
];

const projects: ProjectCardProps[] = [
  {
    name: "Portal da Transparencia",
    description:
      "Desenvolvimento de modulos fullstack para consulta publica de dados administrativos com navegacao performatica, paginacao eficiente e integracao com servicos institucionais.",
    stack: ["ReactJS", "Node.js", "MySQL", "TypeORM"],
    challenge:
      "Estruturei o consumo de APIs com fallback e normalizacao de resposta para manter consistencia de dados mesmo em cenarios de latencia e payload heterogeneo.",
    repository: "https://github.com/julioseunome/portal-transparencia",
    image: "/projects/portal-transparencia.svg",
    imageAlt: "Preview do Portal da Transparencia"
  },
  {
    name: "Diario Oficial Digital",
    description:
      "Implementacao de fluxos de publicacao e leitura publica com foco em rastreabilidade, indexacao de documentos e experiencia de busca por edicao e data.",
    stack: ["Next.js", "Laravel", "PHP", "Sequelize"],
    challenge:
      "Modelei uma arquitetura de publicacao desacoplada que reduziu acoplamento entre processo editorial e camada de entrega, facilitando manutencao continua.",
    repository: "https://github.com/julioseunome/diario-oficial",
    image: "/projects/diario-oficial.svg",
    imageAlt: "Preview do Diario Oficial Digital"
  },
  {
    name: "Hub de APIs Institucionais",
    description:
      "Projeto focado em padronizacao de endpoints internos e criacao de contratos REST para multiplos consumidores, com documentacao tecnica e versionamento.",
    stack: ["Node.js", "Laravel", "MySQL", "REST APIs"],
    challenge:
      "Apliquei principios SOLID e padroes de service e repository para reduzir duplicacao de regras e facilitar testes e evolucao de features.",
    repository: "https://github.com/julioseunome/hub-apis",
    image: "/projects/hub-apis.svg",
    imageAlt: "Preview do Hub de APIs Institucionais"
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
              title="Desenvolvedor Fullstack focado em engenharia de produto"
              subtitle="Atuo em todo o ciclo da entrega: da modelagem tecnica a interface final, com disciplina de codigo e visao de longo prazo."
            />
            <p className="about-text">
              Minha atuacao combina entrega pratica com rigor tecnico. Tenho experiencia em projetos
              como Portal da Transparencia e Diario Oficial, construindo solucoes com APIs REST,
              modelagem de dados relacional e interfaces responsivas. Busco sempre reduzir
              complexidade acidental, melhorar previsibilidade de manutencao e acelerar evolucao segura
              do produto.
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

        <RevealOnScroll delay={120} direction="up">
          <section id="projetos" className="content-section">
            <SectionTitle
              overline="Projetos reais"
              title="Entregas com contexto tecnico e impacto operacional"
              subtitle="Carrossel continuo com pausa no hover. Clique abre o site do projeto e, se nao houver, o repositorio."
            />
            <ProjectsCarousel projects={projects} />
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={160} direction="up">
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

        <RevealOnScroll delay={210} direction="up">
          <section id="contato" className="content-section contact">
            <SectionTitle
              overline="Contato"
              title="Vamos conversar sobre produto, arquitetura e execucao"
              subtitle="Disponivel para oportunidades como desenvolvedor fullstack, projetos freelance e colaboracoes tecnicas."
            />
            <div className="contact-grid">
              <a href="mailto:julio@example.com">julio@example.com</a>
              <a href="https://github.com/julioseunome" target="_blank" rel="noreferrer noopener">
                github.com/julioseunome
              </a>
              <a
                href="https://www.linkedin.com/in/julioseunome"
                target="_blank"
                rel="noreferrer noopener"
              >
                linkedin.com/in/julioseunome
              </a>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </>
  );
}
