import { environment } from '@environments/environment';

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

  static getDuration(wordsCount: number): number {
    return Math.trunc((0.25 * wordsCount) / 60);
  }

  static validationError(data: any) {
    let result = '';
    data.error.error.validationErrors.forEach((err: any) => {
      err.messages.forEach((message: any) => {
        result += message + '\n';
      });
    });
    return result;
  }

  static async getImageUrl(
    userId: string,
    defaultUrl: string = 'assets/missing-avatar.png'
  ): Promise<string> {
    try {
      const url = `${environment.storageBaseUrl}/avatars/${userId}.png`;
      const response = await fetch(url);
      if (response.ok) {
        return url;
      } else {
        return defaultUrl;
      }
    } catch (err) {
      return defaultUrl;
    }
  }
}
