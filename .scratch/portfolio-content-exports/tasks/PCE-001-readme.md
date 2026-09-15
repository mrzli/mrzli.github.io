# PCE-001: Replace the template README

Status: awaiting review

Depends on: none

Source: [Task index](../tasks.md) · [Spec](../spec.md)

## Outcome

A short introduction to the portfolio, with development and deployment basics.

## Likely files

README.md and .github/workflows/main.yml for verification.

## Acceptance checklist

- [x] Briefly describe the purpose of the personal website.
- [x] Show bun run dev for starting development, assuming Bun and dependencies are installed.
- [x] Briefly explain automatic build and GitHub Pages deployment when master is pushed to GitHub.
- [x] Omit command catalogs, source-file maps, architecture details, and export implementation details.
- [x] Keep this task documentation-only.

## Verification

Check formatting, the development command, and the deployment statement against
package.json and the GitHub Actions workflow. No application build is required.

## Completion record

Implemented on 2026-09-15. Awaiting user review, uncommitted.

- Simplified the README following user review to purpose, development, and automatic deployment.
  This replaces the original task's broader documentation scope.
- Removed the obsolete statement in .agents/general.md that the README is template documentation.
- Verified the development command and workflow link, and checked the deployment trigger and behavior.
- Scoped formatting and diff whitespace checks passed. No build or browser checks were needed.
- No application, Storybook, package script, CV source, or PDF changes. PCE-002 has not started.
