# React Learning Syllabus

A practical, project-driven 10-week syllabus to learn React (from fundamentals to advanced patterns) and build real-world applications.

## Goals

- Understand React core concepts and ecosystem
- Build and deploy modern React apps
- Learn state management, routing, performance optimization, and testing
- Gain familiarity with TypeScript in React and modern tooling

## Prerequisites

- Comfortable with JavaScript (ES6+), HTML, CSS
- Basic knowledge of Node.js and npm/yarn

## Duration

- 10 weeks (recommended) — 6–10 hours/week
- Can be compressed or extended depending on prior experience

---

## Week-by-week Plan

Week 1 — Foundations

- Topics: What is React, SPA concepts, component-based architecture, JSX, rendering
- Practice: Create a static component tree, convert HTML sections to JSX
- Resources: Official React docs (Main Concepts)

Week 2 — Components & Props

- Topics: Functional vs class components (focus on functional), props, composition, children
- Practice: Build a reusable UI component library (Button, Card, List)
- Exercise: Prop validation patterns, default props

Week 3 — State & Events

- Topics: useState, event handling, controlled vs uncontrolled inputs
- Practice: Build a Todo app with add/remove/edit
- Focus: Lifting state, immutability

Week 4 — Effects & Data Fetching

- Topics: useEffect, effect cleanup, fetching with fetch/axios, async patterns
- Practice: Build a small app that fetches data (e.g., GitHub users) and displays it
- Consider: error handling, loading states

Week 5 — Routing & Navigation

- Topics: react-router (v6+), nested routes, route params, programmatic navigation
- Practice: Convert a multi-page UI into a routed React app

Week 6 — State Management

- Topics: Context API, useReducer, when to use Redux/other state libs, recoil or Zustand intro
- Practice: Implement global theme or auth state with Context + useReducer
- Advanced: Implement a small cart with local persistence

Week 7 — Styling & Component Patterns

- Topics: CSS-in-JS, CSS modules, BEM, styled-components/emotion, design system basics
- Practice: Create a small design system (tokens, spacing, typography, themed components)

Week 8 — TypeScript with React

- Topics: TS types for props, useState/useReducer typings, generics, discriminated unions
- Practice: Convert an existing small app to TypeScript

Week 9 — Testing & Quality

- Topics: Jest, React Testing Library, unit vs integration tests, test-driven patterns
- Practice: Add tests for components, mocking fetch, snapshot testing

Week 10 — Performance, Build & Deployment

- Topics: Code splitting, lazy, Suspense, memoization (useMemo, useCallback), bundle analysis
- Practice: Optimize a sample app for performance and deploy (Netlify/Vercel)

---

## Projects (pick 2–3)

- Personal Portfolio site (with routing, theme, contact form)
- E-commerce product list + cart (state management + persistence)
- Social feed or blog with external API and search/filter
- Dashboard with charts (integrate a charting library)

Each project should include: responsive UI, accessibility basics, tests, and a CI/deploy step.

---

## Resources

- React docs: https://reactjs.org/docs
- React Router docs: https://reactrouter.com
- Testing Library: https://testing-library.com
- TypeScript: https://www.typescriptlang.org
- Tutorials: Kent C. Dodds, React patterns blog posts, Egghead, Frontend Masters

Recommended reading/videos:

- "The Road to React" (book)
- Official React blog posts on hooks and concurrent features

---

## Assessment & Checklist

- [ ] Build a small CRUD app with React and routing
- [ ] Add global state (Context or state library)
- [ ] Convert some components to TypeScript
- [ ] Write unit and integration tests for key flows
- [ ] Deploy an app and set up a simple CI pipeline

---

## Next steps and further topics

- Server-side rendering (Next.js)
- React Native for mobile
- Advanced performance & concurrency (react-suspense for data, concurrent features)
- GraphQL integration (Apollo, Relay)

---

Happy learning! Customize the weeks and projects to match your schedule and goals.
