// import the router module from Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components to enroute
import { TableComponent } from '../components/table/table.component'

// define routes array
const appRoutes: Routes = [

    //{ path: 'game', component: TableComponent },
    // this way i make the parameter optional. One URL with parameters and one without them
    //{ path: 'pagina-de-pruebas/', component: PaginaComponent },
    //{ path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent },
    // this way i make the not found pages redirect to another page
    //{ path: '**', component: ErrorComponent }

]

// export modules to use in the other modules
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);