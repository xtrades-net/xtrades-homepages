export class Utils {
  static isDevOrLocalhost() {
    return (
      window.location.href.includes('localhost') ||
      window.location.href.includes('gracious')
    );
  }
  static isLocalhost() {
    return window.location.href.includes('localhost');
  }

  static getCookie(name = '') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop()?.split(';').shift() : '';
  }

  static getDuration(wordsCount:number):number{
    return Math.trunc(0.25 * wordsCount / 60);
  }
}
