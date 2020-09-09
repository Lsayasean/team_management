// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import 'bootstrap';
import '../stylesheets/application.scss'
import Rails from '@rails/ujs';

window.jQuery = $;
window.$ = $;

Rails.start();
require('turbolinks').start();
require('@rails/activestorage').start();

// prevent double renders by destroying js widgets
// before cache
document.addEventListener('turbolinks:before-cache', () => {
  $('select').each((n, ele) => {
    if (ele.selectize) ele.selectize.destroy();
  });
});
