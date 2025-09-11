export interface StorageProvider<T> {
  save(key: string, data: T): void | Promise<void>;
  load(key: string): T | null | Promise<T | null>;
}
