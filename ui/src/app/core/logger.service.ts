import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   *logs non-errors to different streams based on environment
   * @param message user friendly message
   * @param content any additional details
   */
  log(message: string, content?: any): void {
    // logging to console when the environment is not production
    if (!environment.production) {
      console.log(`${message} (${this.getCurrentTime()})`, content);
    }
    //If needed, we can use an api or some external system to capture the logs in prod.
  }

  /**
   *logs errors to different streams based on environment
   * @param message user friendly message
   * @param content any additional details
   */
  error(message: string, content?: any): void {
    // logging to console when the environment is not production
    if (!environment.production) {
      console.error(`${message} (${this.getCurrentTime()})`, content);
    }
    //If needed, we can use an api or some external system to capture the logs in prod.
  }

  getCurrentTime = () => new Date().toLocaleTimeString();
}
