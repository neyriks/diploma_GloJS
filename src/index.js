'use strict';

import clubMenu from './modules/clubMenu';
import freeVisitForm from './modules/freeVisitForm';
import gift from './modules/gift';
import callback from './modules/callback';
import topMenu from './modules/topmenu';
import openBurger from './modules/openBurger';
import sliderMain from './modules/sliderMain';
import arrow from './modules/arrow';
import sendForms from './modules/sendForms';
import SliderCarousel from './modules/sliderCaroursel';
import smooth from './modules/smooth';

smooth();
clubMenu();
freeVisitForm();
gift();
callback();
topMenu();
openBurger();
sliderMain();
arrow();
sendForms();
const services = new SliderCarousel();
services.init();