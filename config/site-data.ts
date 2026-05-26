/**
 * Centralized site data configuration
 *
 * This file contains all the dynamic data used across the aicgen-site.
 * Update this file when releasing new versions or adding features.
 */

export const SITE_DATA = {
  version: '1.2.0',

  stats: {
    guidelines: 99,
    categories: 12,
    languages: 12,
    assistants: 4,
    workflows: 6,
  },

  languages: [
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'Rust',
    'Java',
    'C#',
    'Ruby',
    'Dart',
    'Swift',
    'Kotlin',
    'PHP',
  ],

  assistants: [
    'Claude Code',
    'GitHub Copilot',
    'Antigravity',
    'Codex',
  ],

  categories: [
    'Language',
    'Architecture',
    'Testing',
    'Security',
    'Performance',
    'Database',
    'API Design',
    'Code Style',
    'Error Handling',
    'DevOps',
    'Best Practices',
    'Design Patterns',
  ],

  sdlcWorkflow: {
    commands: [
      { name: '/spec', description: 'Capture requirements & acceptance criteria' },
      { name: '/research', description: 'Codebase scan + web research + infra preference' },
      { name: '/plan', description: 'Phased implementation plan with checkpoints' },
      { name: '/build', description: 'Execute plan phase by phase with review gates' },
      { name: '/check', description: 'Verify against spec, run tests, flag regressions' },
      { name: '/ship', description: 'Pre-flight checks + PR description draft' },
    ],
  },

  features: {
    sdlcWorkflows: {
      title: 'SDLC Workflow Commands',
      description: 'Six lifecycle commands (/spec → /research → /plan → /build → /check → /ship) guide requirements, planning, validation, and shipping. /check owns test validation instead of generated test hooks.',
    },
    multiAssistant: {
      title: 'Multi-Assistant Support',
      description: 'Supports Claude Code, GitHub Copilot, Antigravity, and Codex out of the box. Gemini CLI target generation is removed; use Antigravity for Google-side agentic profiles.',
    },
    guidelines: {
      title: '99 Guidelines',
      description: 'Comprehensive coverage across 12 categories including Security, API Design, and Performance.',
    },
    interactiveCLI: {
      title: 'Interactive CLI Wizard',
      description: 'Professional setup wizard with smart defaults, back navigation, and auto-detection.',
    },
    hooksSubAgents: {
      title: 'Agentic Profiles',
      description: 'Three clear levels: basic instructions, standard workflows, and full agentic setup with skills, subagents, guardrail hooks, plugins, and MCP templates.',
    },
    architectureAware: {
      title: 'Architecture Aware',
      description: 'Tailors guidelines for Microservices, Hexagonal, Modular Monoliths, and Event-Driven systems.',
    },
    zeroDependencies: {
      title: 'Zero Dependencies',
      description: 'Self-contained Bun binary with the latest data submodule docs embedded for offline generation.',
    },
  },

  github: {
    url: 'https://github.com/aicgen/aicgen',
    owner: 'aicgen',
    repo: 'aicgen',
  },

  npm: {
    url: 'https://www.npmjs.com/package/@aicgen/aicgen',
    package: '@aicgen/aicgen',
  },

  meta: {
    title: 'aicgen - AI Config Generator',
    description: 'Configuration generator for AI coding assistants. Make your project AI-ready in seconds.',
    author: 'Lahiru Sandaruwan',
  },
} as const;

export type SiteData = typeof SITE_DATA;
