import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeechModule } from './SpeechRecognition';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SpeechRecogniserComponent } from './searchbox/speech-recogniser/speech-recogniser.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    SpeechRecogniserComponent
  ],
  imports: [
    BrowserModule,
    SpeechModule
  ],
  providers: [
    { 
      provide: 'SPEECH_LANG', 
      useValue: 'en-US' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
