class LocalStoreService {
  add(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  addObject(key: string, value: object) {
    this.add(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getObject<T extends object>(key: string): T | null {
    const value = this.get(key);
    return value && JSON.parse(value);
  }
}

export { LocalStoreService };
