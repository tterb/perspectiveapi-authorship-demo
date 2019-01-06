/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingIconStyle } from './convai-perspective-status.component';
import { ConvaiCheckerComponent, DEFAULT_DEMO_SETTINGS, DemoSettings } from './convai-checker.component';

@Component({
  selector: 'convai-checker-no-input-id-specified',
  template: `
        <convai-checker
           id="checker"
           [serverUrl]="serverUrl">
          Loading...
        </convai-checker>
        <textarea id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerNoInputComponent {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  textArea: HTMLTextAreaElement;
  serverUrl = 'test-url';
}

@Component({
  selector: 'convai-checker-no-demo-settings-specified',
  template: `
        <convai-checker
           id="checker"
           [inputId]="checkerInputId"
           [serverUrl]="serverUrl">
          Loading...
        </convai-checker>
        <textarea id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerNoDemoSettingsComponent {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  textArea: HTMLTextAreaElement;
  checkerInputId = 'checkerTextarea';
  serverUrl = 'test-url';
  constructor() {
  }
}

@Component({
  selector: 'convai-checker-invalid-input-id-specified',
  template: `
        <convai-checker
           id="checker"
           [inputId]="thereIsNoTextAreaWithThisId"
           [serverUrl]="serverUrl">
          Loading...
        </convai-checker>
        <textarea id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerInvalidInputComponent {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  textArea: HTMLTextAreaElement;
  serverUrl = 'test-url';
}

@Component({
  selector: 'convai-test-comp-attribute-input',
  template: `
        <convai-checker
           id="checker"
           inputId="checkerTextarea"
           [demoSettings]="demoSettings"
           serverUrl="test-url">
          Loading...
        </convai-checker>
        <textarea class="checkerInputBox"
                  id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerWithAttributeInputComponent {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  demoSettings = JSON.parse(JSON.stringify(DEFAULT_DEMO_SETTINGS));
  constructor() {
    this.demoSettings.configuration = 'external';
  }
}

/** Test component with customizable DemoSettings. */
@Component({
  selector: 'convai-checker-custom-demo-settings',
  template: `
        <convai-checker
           id="checker"
           [inputId]="checkerInputId"
           [serverUrl]="serverUrl"
           [demoSettings]="demoSettings">
          Loading...
        </convai-checker>
        <textarea id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerCustomDemoSettingsComponent implements OnInit {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  textArea: HTMLTextAreaElement;
  checkerInputId = 'checkerTextarea';
  serverUrl = 'test-url';
  demoSettings = JSON.parse(JSON.stringify(DEFAULT_DEMO_SETTINGS));

  ngOnInit() {
    this.textArea = document.getElementById('checkerTextarea') as HTMLTextAreaElement;
  }

  setDemoSettings(demoSettings: DemoSettings) {
    this.demoSettings = demoSettings;
  }
}

/** Test component with JSON DemoSettings. */
@Component({
  selector: 'convai-checker-json-demo-settings',
  template: `
        <convai-checker
           id="checker"
           [inputId]="checkerInputId"
           [serverUrl]="serverUrl"
           [demoSettingsJson]="demoSettingsJson">
          Loading...
        </convai-checker>
        <textarea id="checkerTextarea"
                  placeholder="type something here and see how the dot above reacts.">
        </textarea>`,
})
export class ConvaiCheckerJsonDemoSettingsComponent implements OnInit {
  @ViewChild(ConvaiCheckerComponent) checker: ConvaiCheckerComponent;
  textArea: HTMLTextAreaElement;
  checkerInputId = 'checkerTextarea';
  serverUrl = 'test-url';
  demoSettingsJson = '';

  ngOnInit() {
    const demoSettings = JSON.parse(JSON.stringify(DEFAULT_DEMO_SETTINGS));
    demoSettings.scoreThresholds = [0.2, 0.5, 0.8];
    demoSettings.loadingIconStyle = LoadingIconStyle.EMOJI;
    demoSettings.feedbackText = ['foo', 'bar', 'test'];
    this.demoSettingsJson = JSON.stringify(demoSettings);
    this.textArea = document.getElementById('checkerTextarea') as HTMLTextAreaElement;
  }

  // Allows unit tests access to the custom demo settings specified by this
  // test class.
  getDemoSettingsJson() {
    return this.demoSettingsJson;
  }
}
