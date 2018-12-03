
/**
 * Created by Lya on 30/11/2018.
 */


import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCRipple} from '@material/ripple/index';

// Instantiation
const ripple = new MDCRipple(document.querySelector('.mdc-card__primary'));
const rippleButton = new MDCRipple(document.querySelector('.more-button'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);