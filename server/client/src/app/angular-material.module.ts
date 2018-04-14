import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule
    ],
    declarations: []
})
export class AngularMaterialModule {}
