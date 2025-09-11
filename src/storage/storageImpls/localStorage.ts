import type { StorageProvider } from '../storage';

export class LocalStorageProvider<T> implements StorageProvider<T> {
  save(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  load(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}
