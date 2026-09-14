import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const diagrams = [
  {
    type: 'dataflow',
    spec: 'diagrams/sellout-pipeline.dataflow.json',
    out: 'public/diagrams/sellout-pipeline.dataflow.html'
  },
  {
    type: 'architecture',
    spec: 'diagrams/hypertrophy-pwa.architecture.json',
    out: 'public/diagrams/hypertrophy-pwa.architecture.html'
  },
  {
    type: 'dataflow',
    spec: 'diagrams/caba-scraper.dataflow.json',
    out: 'public/diagrams/caba-scraper.dataflow.html'
  },
  {
    type: 'workflow',
    spec: 'diagrams/azure-gitops.workflow.json',
    out: 'public/diagrams/azure-gitops.workflow.html'
  }
];

// Potential Archify CLI paths
const homeDir = process.env.USERPROFILE || process.env.HOME || '';
const archifyCliCandidates = [
  resolve(process.cwd(), 'node_modules/.bin/archify.mjs'),
  join(homeDir, '.gemini/config/skills/archify/bin/archify.mjs')
];

let cliPath = archifyCliCandidates.find(p => existsSync(p));

console.log('[build:diagrams] Checking Archify toolchain & compiling deliverables...');

for (const d of diagrams) {
  const specPath = resolve(process.cwd(), d.spec);
  const outPath = resolve(process.cwd(), d.out);

  if (!existsSync(specPath)) {
    console.error(`[build:diagrams] Specification not found: ${d.spec}`);
    process.exit(1);
  }

  if (cliPath) {
    try {
      console.log(`[build:diagrams] Compiling ${d.spec} -> ${d.out} via Archify...`);
      execFileSync(process.execPath, [cliPath, 'deliver', d.type, specPath, outPath], { stdio: 'inherit' });
    } catch (err) {
      console.error(`[build:diagrams] Failed to deliver ${d.spec}:`, err.message);
      process.exit(1);
    }
  } else {
    if (existsSync(outPath)) {
      console.log(`[build:diagrams] Standalone artifact verified: ${d.out}`);
    } else {
      console.error(`[build:diagrams] Archify CLI not found and deliverable missing: ${d.out}`);
      process.exit(1);
    }
  }
}

console.log('[build:diagrams] All 4 Archify diagrams built and ready in public/diagrams/');
