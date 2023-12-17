import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepresentanteResponse {
  id: number;
}

export interface Agrupation {
  id_agrupation: number;
  nameagrupation: string;
  emailagrupation: string;
  phoneagrupation: string;
  typeagrupation: string;
  webagrupation: string;
  descriptionagrupation: string;
  logoagrupation: string;
  nameregion?: string;

}

export interface TotalMembersResponse {
  totalMembers: number;
}

export interface AgrupacionConMasMiembrosResponse {
  nameagrupation: string;
  membersagrupation: string;
  typeagrupation: string;
  fundationdate: string;
}

export interface AgrupacionPorRegion {
  id_region: number;
  nameregion: string;
  cantidad_agrupaciones: number;
}




@Injectable({
  providedIn: 'root'
})
export class AgrupationService {

  private apiUrl = 'https://l8avvgsc5d.execute-api.sa-east-1.amazonaws.com/dev'; //

  constructor(private http: HttpClient) { }

  crearAgrupation(datosAgrupation: unknown) {
    return this.http.post(`${this.apiUrl}/insertAgrupation`, datosAgrupation);
  }

  crearRepresentative(datosRepresentante: unknown): Observable<RepresentanteResponse> {
    return this.http.post<RepresentanteResponse>(`${this.apiUrl}/insertRepresentative`, datosRepresentante);
  }

  deleteAgrupation(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/deleteAgrupation/${id}`);
  }

  listAgrupations(): Observable<Agrupation[]> {
    return this.http.get<Agrupation[]>(`${this.apiUrl}/listAgrupations`);
  }

  getTotalMembers(): Observable<TotalMembersResponse> {
    return this.http.get<TotalMembersResponse>(`${this.apiUrl}/total-members`);
  }

  getAgrupacionConMasMiembros(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/agrupacion-con-mas-miembros`);
  }

  getAgrupacionesPorRegion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/agrupaciones-por-region`);
  }

  getAgrupacionesPorTipo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/agrupaciones-por-tipo`);
  }

}
