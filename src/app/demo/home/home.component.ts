import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrupationService, Agrupation} from 'src/app/services/agrupation.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  agrupations: Array<Agrupation & { safeLogoUrl: SafeUrl }> = [];
  agrupationsFiltradas: Array<Agrupation & { safeLogoUrl: SafeUrl }> = [];
  searchTerm: string = '';
  selectedType: string = '';
  selectedRegion: string = '';
  typeAgrupation: string[] = ["Escuela de Samba", "Roda de Samba", "Bloco Carnavalesco", "Agrupación Musical", "Agrupación de Danza", "Centro Cultural", "Taller", "Otro"];
  nameRegion: string[] = ["Región de Arica y Parinacota", "Región de Tarapacá", "Región de Antofagasta", "Región de Atacama", "Región de Coquimbo", "Región de Valparaíso", "Región Metropolitana", "Región del Libertador General Bernardo OHiggins", "Región del Maule", "Región de Ñuble", "Región del Biobío", "Región de La Araucanía", "Región de Los Ríos", "Región de Los Lagos", "Región de Aysén del G. Carlos Ibáñez del Campo", "Región de Magallanes"];

  constructor(
    private agrupationService: AgrupationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    this.agrupationService.listAgrupations().subscribe(
      (data: Agrupation[]) => {
        this.agrupations = data.map((agrupation: Agrupation) => ({
          ...agrupation,
          safeLogoUrl: this.sanitizer.bypassSecurityTrustUrl(agrupation.logoagrupation)
        }));
        this.agrupationsFiltradas = [...this.agrupations]; // Inicializa la lista filtrada
      },
      (error) => {
        console.error('Error al obtener las agrupaciones', error);
      }
    );
  }

  filtrarAgrupaciones() {
    this.agrupationsFiltradas = this.agrupations.filter(agrupation => {
        const coincideNombre = this.searchTerm ? agrupation.nameagrupation.toLowerCase().includes(this.searchTerm.toLowerCase()) : true;
        const coincideTipo = this.selectedType ? agrupation.typeagrupation === this.selectedType : true;
        const coincideRegion = this.selectedRegion ? agrupation.nameregion === this.selectedRegion : true;

        return coincideNombre && coincideTipo && coincideRegion;
    });
  }
}
