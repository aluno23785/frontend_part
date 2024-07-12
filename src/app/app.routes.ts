import { Routes } from '@angular/router';
import { ReadAllComponent } from './components/read-all/read-all.component'; 

import { CreateComponent } from './components/create/create.component';
import { MatInputModule } from '@angular/material/input';
import { UpdateComponent } from './components/update/update.component';

export const routes: Routes = [
    { path: '', component: ReadAllComponent },
    { path: 'create', component: CreateComponent },
     {path: 'update/:id',component: UpdateComponent}
];