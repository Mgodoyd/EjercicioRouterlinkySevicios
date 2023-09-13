import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarArchivosComponent } from './components/archivos/editar-archivos/editar-archivos.component';
import { ListarArchivosComponent } from './components/archivos/listar-archivos/listar-archivos.component';
import { NuevoArchivosComponent } from './components/archivos/nuevo-archivos/nuevo-archivos.component';
import { EditarArchivoComponent } from './components/Edicion/editar-archivo/editar-archivo.component';
import { EditarInventarioComponent } from './components/Edicion/editar-inventario/editar-inventario.component';
import { EditarProveedorComponent } from './components/Edicion/editar-proveedor/editar-proveedor.component';
import { CargarInventarioInicialComponent } from './components/Inventarios/cargar-inventario-inicial/cargar-inventario-inicial.component';
import { EntradasInventarioComponent } from './components/Inventarios/entradas-inventario/entradas-inventario.component';
import { SalidasInventarioComponent } from './components/Inventarios/salidas-inventario/salidas-inventario.component';
import { ListarInventarioComponent } from './components/Inventarios/listar-inventario/listar-inventario.component';
import { ReporteCierreComponent } from './components/Inventarios/reporte-cierre/reporte-cierre.component';
import { NuevoProveedorComponent } from './components/Proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './components/Proveedores/listar-proveedor/listar-proveedor.component';
import { ConsultaProveedorComponent } from './components/Proveedores/consulta-proveedor/consulta-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditarArchivosComponent,
    ListarArchivosComponent,
    NuevoArchivosComponent,
    EditarArchivoComponent,
    EditarInventarioComponent,
    EditarProveedorComponent,
    CargarInventarioInicialComponent,
    EntradasInventarioComponent,
    SalidasInventarioComponent,
    ListarInventarioComponent,
    ReporteCierreComponent,
    NuevoProveedorComponent,
    ListarProveedorComponent,
    ConsultaProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
