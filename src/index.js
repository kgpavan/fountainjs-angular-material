import angular from 'angular';

import {techsModule} from './app/techs/index';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.css';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';


angular
  .module('app', [techsModule],[ngMaterial])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);

