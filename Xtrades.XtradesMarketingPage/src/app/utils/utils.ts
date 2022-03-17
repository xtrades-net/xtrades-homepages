export class Utils {
  static isDevOrLocalhost() {
    return (
      window.location.href.includes('localhost') ||
      window.location.href.includes('alpha')
    );
  }
  static isLocalhost() {
    return window.location.href.includes('localhost');
  }
}
