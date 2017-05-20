import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './users/user/user.component';
import {UsersComponent} from './users/users.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'servers', component: ServersComponent, children: [
        {path: ':id/edit', component: EditServerComponent},
        {path: ':id', component: ServerComponent},
    ]},
    {path: 'users', component: UsersComponent, children: [
        {path: ':id/:name', component: UserComponent},
    ]},
    {path: 'something', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/something'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}