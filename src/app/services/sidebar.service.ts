import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [

    {

      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu:
        [
          { titulo: 'Main', url: '/dashboard' },
          { titulo: 'ProgressBar', url: 'progress' },
          { titulo: 'Graficas', url: 'grafica1' },
          { titulo: 'Promesas', url: 'promises' },
          { titulo: 'rxjs', url: 'rxjs' }

        ]

    }

  ]
  constructor() { }



}
