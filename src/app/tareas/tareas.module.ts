import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';

import { TareaComponent } from "./tarea/tarea.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        TareaComponent
    ],
    exports: [
        TareaComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class TareasModule {}