import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*navbar */
import { NavbarComponent } from './components/navbar/navbar.component';

/*archivo */
import { EditarArchivosComponent } from './components/archivos/editar-archivos/editar-archivos.component';
import { ListarArchivosComponent } from './components/archivos/listar-archivos/listar-archivos.component';
import { NuevoArchivosComponent } from './components/archivos/nuevo-archivos/nuevo-archivos.component';

/*editar */
import { EditarArchivoComponent } from './components/Edicion/editar-archivo/editar-archivo.component';
import { EditarInventarioComponent } from './components/Edicion/editar-inventario/editar-inventario.component';
import { EditarProveedorComponent } from './components/Edicion/editar-proveedor/editar-proveedor.component';

/* Inventario */
import { CargarInventarioInicialComponent } from './components/Inventarios/cargar-inventario-inicial/cargar-inventario-inicial.component';
import { EntradasInventarioComponent } from './components/Inventarios/entradas-inventario/entradas-inventario.component';
import { ListarInventarioComponent } from './components/Inventarios/listar-inventario/listar-inventario.component';
import { ReporteCierreComponent } from './components/Inventarios/reporte-cierre/reporte-cierre.component';
import { SalidasInventarioComponent } from './components/Inventarios/salidas-inventario/salidas-inventario.component';

/*Proveedor */
import { NuevoProveedorComponent } from './components/Proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './components/Proveedores/listar-proveedor/listar-proveedor.component';
import { ConsultaProveedorComponent } from './components/Proveedores/consulta-proveedor/consulta-proveedor.component';


const routes: Routes = [
   {path:'', component:NavbarComponent},
   {path:'editar-archivos', component:EditarArchivosComponent},
   {path:'listar-archivos', component:ListarArchivosComponent},
   {path:'nuevo-archivos', component:NuevoArchivosComponent},
   {path:'editar-archivo', component:EditarArchivoComponent},
   {path:'editar-inventario', component:EditarInventarioComponent},
   {path:'editar-proveedor', component:EditarProveedorComponent},
   {path:'cargar-inventario-inicial', component:CargarInventarioInicialComponent},
   {path:'entradas-inventario', component:EntradasInventarioComponent},
   {path:'listar-inventario', component:ListarInventarioComponent},
   {path:'reporte-cierre', component:ReporteCierreComponent},
   {path:'salidas-inventario', component:SalidasInventarioComponent},
   {path:'nuevo-proveedor', component:NuevoProveedorComponent},
   {path:'listar-proveedor', component:ListarProveedorComponent},
   {path:'consulta-proveedor', component:ConsultaProveedorComponent},
    {path:'**', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
