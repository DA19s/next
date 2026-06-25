# NextJS DA — Projet d'apprentissage Next.js 15

Projet pédagogique construit pour explorer les fonctionnalités clés de **Next.js 15** avec l'App Router, React 19 et TypeScript.

---

## Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| [Next.js](https://nextjs.org) | 15.3.4 | Framework React full-stack |
| [React](https://react.dev) | 19.0.0 | Bibliothèque UI |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Typage statique |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling utilitaire |
| [ESLint](https://eslint.org) | 9.x | Linting (flat config) |

---

## Fonctionnalités couvertes

- **App Router** — structure de routes basée sur le système de fichiers
- **Route Groups** — organisation sans impact sur l'URL (ex. `(auth)`)
- **Routes dynamiques** — paramètres d'URL avec `[id]`
- **Layouts imbriqués** — layout racine + layouts par segment
- **Server Components** — rendu côté serveur par défaut
- **Client Components** — directive `"use client"` pour l'interactivité
- **Data fetching** — `fetch` avec revalidation ISR (`revalidate: 60`)
- **Navigation active** — `usePathname` pour surligner le lien courant
- **State local** — `useState` dans un compteur interactif
- **Formulaire d'auth** — LoginForm avec validation basique

---

## Structure du projet

```
src/
└── app/
    ├── layout.tsx              # Layout racine (header + footer)
    ├── page.tsx                # Page d'accueil
    ├── globals.css             # Styles globaux (Tailwind)
    ├── (auth)/                 # Groupe de routes auth (sans impact URL)
    │   ├── login/page.tsx
    │   ├── register/page.tsx
    │   └── forgot-password/page.tsx
    ├── about/page.tsx
    ├── blog/
    │   └── first-post/page.tsx
    ├── products/[id]/          # Route dynamique (en)
    │   ├── page.tsx
    │   └── layout.tsx
    ├── produits/               # Route dynamique (fr) — fetch API externe
    │   ├── page.tsx
    │   └── [id]/page.tsx
    └── components/
        ├── navigation.tsx      # Barre de navigation (client)
        ├── counter.tsx         # Compteur interactif (client)
        ├── greet.tsx           # Composant de salutation (server)
        └── LoginForm.tsx       # Formulaire de connexion (client)
```

---

## Prérequis

- **Node.js** >= 18.x
- **npm** >= 9.x
- Une API REST locale sur `http://localhost:8082` pour les pages `/produits` (optionnel)

L'API attendue expose :
```
GET /api/v1/products          → Product[]
GET /api/v1/products/:id      → Product
```
avec le type `Product { id: number; name: string; price: number }`.

---

## Installation & démarrage

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd next/nextjsda

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement avec hot-reload |
| `npm run build` | Build de production optimisé |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Vérifier le code avec ESLint |

---

## Pages & routes

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil |
| `/about` | Page À propos |
| `/blog/first-post` | Premier article de blog |
| `/login` | Page de connexion |
| `/register` | Page d'inscription |
| `/forgot-password` | Réinitialisation du mot de passe |
| `/produits` | Liste des produits (fetch API) |
| `/produits/:id` | Détail d'un produit |
| `/products/:id` | Route dynamique alternative |

---

## Déploiement

La méthode la plus simple est via [Vercel](https://vercel.com), la plateforme officielle de Next.js :

```bash
npm run build
```

Puis connecter le dépôt sur [vercel.com/new](https://vercel.com/new) pour un déploiement automatique à chaque push.

---

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Tutoriel interactif Next.js](https://nextjs.org/learn)
- [Référence App Router](https://nextjs.org/docs/app)
