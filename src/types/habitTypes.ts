export interface IHabit {
  id: number;
  name: string;
  progress: Record<string, boolean>;
  dataTheme: string;
}
