import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ConvaiCheckerComponent} from './convai-checker.component';
import {PerspectiveStatusComponent} from './convai-perspective-status.component';
import {ConvaiPerspectiveApiService} from './convai-perspectiveapi.service';

@NgModule({
  declarations: [
    ConvaiCheckerComponent,
    PerspectiveStatusComponent,
  ],
  exports: [ConvaiCheckerComponent, PerspectiveStatusComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
    ConvaiPerspectiveApiService,
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [ConvaiCheckerComponent]
})
export class ConvaiCheckerModule {}
