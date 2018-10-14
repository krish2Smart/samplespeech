import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpeechService } from '../../SpeechRecognition';

@Component({
  selector: 'app-speech-recogniser',
  templateUrl: './speech-recogniser.component.html',
  styleUrls: ['./speech-recogniser.component.css']
})
export class SpeechRecogniserComponent implements OnInit {

  subscription = Subscription.EMPTY;
  comment: string = '';
  started: boolean = false;

  constructor(public speech: SpeechService) { }

  ngOnInit() {
  }
  
  toggleVoiceRecognition(): void {
    console.log('tvr');
    if (this.started) {
      this.speech.stop();
      this.recordStart();
    } else {
      this.speech.start();
      this.recordStop();
    }
    this.started = !this.started;
    console.log('s'+this.comment);
  }

  recordStart(): void {
    this.subscription = this.speech.message.subscribe(msg => {
        this.comment = msg.message;
    });
  }

  recordStop(): void {
    this.subscription.unsubscribe();
  }
}
