# DaenggleJeju Client

pnpm 모노레포
* `packages/daenggle-ui` (컴포넌트 라이브러리)
*  `apps/web` (Next.js 15 App Router).

## 기술 스택

- **Framework**: Next.js 15 App Router
- **Styling**: vanilla-extract (CSS-in-JS, 빌드타임 컴파일)
- **Data fetching**: SWR (클라이언트), async Server Components (서버)
- **Package manager**: pnpm workspaces
- **Linter/Formatter**: Biome

## 핵심 규칙

코드 작성·수정·리뷰 시 아래 규칙을 항상 적용한다.

@.claude/commands/refactor.md

## React / Next.js Best Practice

@.claude/rules/async-api-routes.md

@.claude/rules/async-suspense-boundaries.md

@.claude/rules/client-swr-dedup.md
