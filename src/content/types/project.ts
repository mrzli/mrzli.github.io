export interface ProjectDescription {
  readonly id?: string;
  readonly title: string;
  readonly text: readonly string[];
  readonly roleText: readonly string[];
  readonly tags: readonly string[];
}
