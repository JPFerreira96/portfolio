# Portfolio Profissional - Julio Paulo Ferreira

Portfolio em Next.js com foco em posicionamento tecnico para oportunidades Fullstack.

## Visao geral

Este projeto foi desenhado para:

- Demonstrar autoridade tecnica com narrativa profissional clara
- Exibir projetos reais com contexto de arquitetura, stack e desafios resolvidos
- Reforcar boas praticas de engenharia (Clean Code, SOLID, modularizacao)
- Facilitar contato profissional de forma direta
- Publicar em GitHub Pages com build estatico

## Stack do projeto

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS global customizado (tema dark, layout SaaS)
- GitHub Actions para deploy

## Estrutura de pastas

```text
.
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- ProjectCard.tsx
|   |-- SectionTitle.tsx
|   `-- StackGroup.tsx
|-- public/
|-- .github/
|   `-- workflows/
|       `-- deploy.yml
|-- .eslintrc.json
|-- next-env.d.ts
|-- next.config.mjs
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Como rodar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Execute em desenvolvimento:

```bash
npm run dev
```

3. Acesse `http://localhost:3000`.

4. Gere a build estatica:

```bash
npm run build
```

O output final sera gerado em `out/`.

## Deploy no GitHub Pages (passo a passo)

1. Crie um repositorio no GitHub e envie o projeto.
2. Va em `Settings > Pages`.
3. Em `Source`, selecione `GitHub Actions`.
4. Garanta que a branch principal seja `main`.
5. Faca push para `main`.
6. Aguarde o workflow `Deploy Next.js to GitHub Pages` concluir.
7. Abra a URL de Pages informada no job de deploy.

## Configuracao de basePath

- Se o repositorio for `julioseunome.github.io`, mantenha `NEXT_PUBLIC_BASE_PATH` vazio (`""`).
- Se publicar em um repositorio de projeto (exemplo: `portfolio`), altere no workflow:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: "/portfolio"
```

## Pontos de personalizacao

- Conteudo principal: `app/page.tsx`
- Meta tags e SEO: `app/layout.tsx`
- Estilo visual: `app/globals.css`
- Componentes reutilizaveis: `components/*`

## SEO basico implementado

- `title` e `description` estrategicos
- `keywords` orientadas ao posicionamento tecnico
- Open Graph para compartilhamento
- `lang="pt-BR"`
