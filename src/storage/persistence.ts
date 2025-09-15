import type { IHabit } from '../types/habitTypes';
import { LocalStorageProvider } from './storageImpls/localStorage';

const storage = new LocalStorageProvider<IHabit[]>();

export const saveHabits = (habits: IHabit[]) => storage.save('habits', habits);
export const loadHabits = (): IHabit[] => storage.load('habits') || [];
