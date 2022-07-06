/* eslint-disable @typescript-eslint/no-explicit-any */
export class Storage {
  static set(key: string, value: any) {
    return localStorage.setItem(key, value);
  }

  static get(key: string) {
    return localStorage.getItem(key);
  }

  static delete(key: string) {
    return localStorage.removeItem(key);
  }

  static clearAll() {
    return localStorage.clear();
  }
}
