# Documentation

The docs describe the project as it is. Git keeps its history, so a doc does
not say what changed, when, or who decided it. This applies to every Markdown
file and code comment outside `.scratch/`.

- Keep docs in step with the code. A change that makes a doc wrong updates it
  in the same commit, or removes it when nothing in it still applies.
- State reasons as reasons. Keep why a design is as it is, without the story of
  how it came about. Name an alternative only where it explains a constraint
  that someone would otherwise try to undo.
- Leave out status lines, dates, and words such as "today", "now", "no longer",
  and "replaces", which only make sense against an earlier state.

## Code comments

A comment says what the code cannot, such as a contract, a reason, a
constraint, or an edge case. Leave a declaration without one when its name and
type already say enough. Leave out comments that restate the name, the type, or
the next line, section labels, and history.
