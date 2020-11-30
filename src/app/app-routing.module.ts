import { AuthGuard } from "./shared/services/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layout/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layout/auth-layout/auth-layout.component";

const adminRoutes = [
  {
    path: "",
    loadChildren: "./view/home/home.module#HomeModule",
  },
];

const routes: Routes = [
  // {
  //   path: "",
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren: "./view/accounts/accounts.module#AccountsModule",
  //     },
  //   ],
  // },
  {
    path: "",
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    children: adminRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
