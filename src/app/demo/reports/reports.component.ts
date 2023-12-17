import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrupationService, AgrupacionPorRegion, TotalMembersResponse} from 'src/app/services/agrupation.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';




import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, SharedModule, NgxChartsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {
  view: [number, number] = [1200, 400];
  totalMembers: number = 0;

  colorScheme = 'vivid';
  single: any[] = [];
  singleType: any[] = [];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;


  constructor(private agrupationService: AgrupationService) {}

  ngOnInit(): void {
    this.agrupationService.getAgrupacionesPorRegion().subscribe((data: { cantidadAgrupacionesPorRegion: AgrupacionPorRegion[] }) => {
      this.single = data.cantidadAgrupacionesPorRegion.map((item: AgrupacionPorRegion) => ({
        name: item.nameregion,
        value: item.cantidad_agrupaciones
      }));
    });

    this.agrupationService.getTotalMembers().subscribe((response: TotalMembersResponse) => {
      this.totalMembers = response.totalMembers; // Asegúrate de que la propiedad corresponda con la respuesta del backend
    }, error => {
      console.error('Error al obtener el total de miembros', error);
    });


  }
}

    // this.agrupationService.getAgrupacionesPorTipo().subscribe((data: any[]) => {
    //   this.singleType = data.map(item => ({
    //     name: item.typeagrupation,
    //     value: item.cantidad_agrupaciones
    //   }));
    // });
