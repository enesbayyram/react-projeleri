
class StorageService {

    write(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    read(key: string): any {
        const value: string | null = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return null;
    }

    clear(key: string): void {
        if (key) {
            localStorage.removeItem(key);
        } else {
            localStorage.clear()
        }
    }
}

export default new StorageService();

