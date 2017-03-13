import angular from 'angular';

import {main} from './app/main';
import {header} from './app/header/header';
import './index.css';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

export const app = 'app';

angular
  .module(app, [ngMaterial])
  .component('main', main)
  .component('header', header);
