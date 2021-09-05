class LocalStorageUtil {
  static get(key = null) {
    if (!key) return;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  static set(key = null, value) {
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  static delete(key = null) {
    if (!key) return;
    localStorage.removeItem(key);
  }
}

export default LocalStorageUtil;
