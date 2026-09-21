export interface SkillSection {
  readonly title: string;
  readonly groups: readonly SkillGroup[];
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly string[];
}
