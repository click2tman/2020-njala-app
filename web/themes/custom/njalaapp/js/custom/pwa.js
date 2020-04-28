jQuery(document).ready(function($) {
  var deferredPrompt;
  window.addEventListener('beforeinstallprompt', {passive: true}, (e) => {
    e.preventDefault();
    deferredPrompt = e;
    deferredPrompt.prompt();
  });
});
