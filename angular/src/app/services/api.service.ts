import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Fetches API
 */
export class ApiService {
  private readonly baseUrl: string = 'http://localhost:3000';
  private http = inject(HttpClient);

  /**
   * API request to get all the tasks
   */
  getTasks() {
    return this.http.get(`${this.baseUrl}/tasks`);
  }
}

