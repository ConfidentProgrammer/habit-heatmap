import { LocalStorageProvider } from './storageImpls/localStorage';

const storage = new LocalStorageProvider<any>();

export const saveHabits = (habits: any[]) => storage.save('habits', habits);
export const loadHabits = (): any[] => storage.load('habits') || [];
