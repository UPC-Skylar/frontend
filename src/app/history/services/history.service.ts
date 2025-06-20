// src/app/history/services/history.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService } from '../../shared/services/base.service';
import { History } from '../../shared/model/history.entity';

export interface HistoryWithCaregiver extends History {
  caregiverName: string;
  caregiverImage?: string;
}

export interface HistoryFilters {
  status?: 'completed' | 'cancelled' | 'pending' | '';
  dateFrom?: string;
  dateTo?: string;
  caregiverId?: string;
}

export interface HistoryStats {
  totalContracts: number;
  completedContracts: number;
  totalSpent: number;
  averageRating: number;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getUserHistory(): Observable<History[]> {
    const userId = '1'; // Mock user ID
    return this.get<History[]>(`/history?userId=${userId}&_sort=date&_order=desc`);
  }

  getHistoryWithCaregiverDetails(): Observable<HistoryWithCaregiver[]> {
    const userId = '1'; // Mock user ID

    // First get history
    return this.get<History[]>(`/history?userId=${userId}&_sort=date&_order=desc`)
      .pipe(
        map((historyItems: History[]) => {
          // For each history item, we need to get caregiver details
          // In a real app, this would be done with a proper join or expand query
          return historyItems.map(item => ({
            ...item,
            caregiverName: this.getCaregiverNameById(item.caregiverId),
            caregiverImage: `https://via.placeholder.com/150`
          }));
        })
      );
  }

  private getCaregiverNameById(caregiverId: string): string {
    // Mock caregiver names mapping
    const caregiverNames: { [key: string]: string } = {
      'cg-001': 'Ana María González',
      'cg-002': 'Carlos Roberto Mendoza',
      'cg-003': 'Patricia Flores Vega',
      'cg-004': 'Luis Fernando Torres',
      'cg-005': 'Rosa Elena Huamán'
    };

    return caregiverNames[caregiverId] || 'Cuidador no encontrado';
  }

  filterHistory(filters: HistoryFilters): Observable<HistoryWithCaregiver[]> {
    let endpoint = `/history?userId=1&_sort=date&_order=desc`;

    if (filters.status) {
      endpoint += `&status=${filters.status}`;
    }

    if (filters.caregiverId) {
      endpoint += `&caregiverId=${filters.caregiverId}`;
    }

    if (filters.dateFrom) {
      endpoint += `&date_gte=${filters.dateFrom}`;
    }

    if (filters.dateTo) {
      endpoint += `&date_lte=${filters.dateTo}`;
    }

    return this.get<History[]>(endpoint)
      .pipe(
        map((historyItems: History[]) => historyItems.map(item => ({
          ...item,
          caregiverName: this.getCaregiverNameById(item.caregiverId),
          caregiverImage: `https://via.placeholder.com/150`
        })))
      );
  }

  getHistoryById(id: string): Observable<HistoryWithCaregiver> {
    return this.get<History>(`/history/${id}`)
      .pipe(
        map((item: History) => ({
          ...item,
          caregiverName: this.getCaregiverNameById(item.caregiverId),
          caregiverImage: `https://via.placeholder.com/150`
        }))
      );
  }

  getHistoryStats(): Observable<HistoryStats> {
    const userId = '1'; // Mock user ID

    return this.get<History[]>(`/history?userId=${userId}`)
      .pipe(
        map((history: History[]) => {
          const totalContracts = history.length;
          const completedContracts = history.filter(h => h.status === 'completed').length;
          const totalSpent = history.reduce((sum, h) => sum + h.amount, 0);
          const averageRating = 4.7; // Mock average rating

          return {
            totalContracts,
            completedContracts,
            totalSpent,
            averageRating
          };
        })
      );
  }
}
