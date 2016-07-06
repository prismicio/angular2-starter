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

});
