# Agent Behavior Expectations

## Planning and Decisions

- State material assumptions explicitly. Resolve routine choices using the request and existing conventions.
- When ambiguity prevents correct implementation, identify it and ask concisely. Continue independent work while awaiting clarification.
- For consequential architecture choices not resolved by the user or existing conventions, present two or three viable options and their tradeoffs before implementing the dependent work.
- If a simpler approach meets the requirements, explain it. Push back when warranted.

## Simplicity and Scope

- Make minimal, targeted changes that solve root causes.
- Do not add unrequested features, configurability, single-use abstractions, or handling for impossible scenarios.
- Touch only what the task requires. Do not refactor unrelated code or change adjacent formatting.
- Match existing style and update documentation affected by code or configuration changes.
- Remove imports, variables, and functions made unused by your changes. Mention unrelated dead code without deleting it unless asked.
- Every changed line should trace directly to the user's request.

## Goal-Driven Execution

- For multi-step work, give a brief plan with concrete verification criteria.
- Define observable success, such as correct navigation, an accessible interaction, or a passing relevant check. Iterate until the requested outcome is complete.
- Continue authorized work without seeking repeated confirmation. Ask for permission only when authorization is missing or the execution environment requires it.

## Project Instruction Maintenance

- When an explicit user-approved change establishes or supersedes a lasting convention documented in `AGENTS.md` or `.agents/`, update the relevant instruction file as part of the task. Do not update instructions for one-off exceptions.
- After editing project instructions, review all instruction files for consistency, duplication, verbosity, and correct scope.
- Put cross-cutting rules in the broadest applicable file. Retain narrower rules only for specific additions, preserving meaning, scope, exceptions, and precision.
- Use separate sentences instead of semicolons in project instructions.
