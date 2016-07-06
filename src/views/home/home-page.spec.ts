import { Component } from '@angular/core';
import { async, beforeEach, describe, expect, inject, it } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { HomePage } from './home-page';


@Component({
  template: '',
  directives: [HomePage]
})
class TestComponent {}


describe('HomePage', () => {
  let builder;

  beforeEach(inject([TestComponentBuilder], tcb => {
    builder = tcb;
  }));

  it('should display a greeting', async(() => {
    builder.createAsync(HomePage)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.nativeElement;
        expect(compiled.querySelector('h3')).toHaveText('Hello Angular! :)');
      });
  }));

  it('should display a greeting (overrideTemplate)', async(() => {
    builder.overrideTemplate(TestComponent, '<home></home>')
      .createAsync(HomePage)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.nativeElement;
        expect(compiled.querySelector('h3')).toHaveText('Hello Angular! :)');
      });
  }));
});
