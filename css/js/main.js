function openWhatsApp(text) {
  const msg = encodeURIComponent(
    "Hello! I am interested in: " + text
  );
  window.open(
    "https://wa.me/84778532223?text=" + msg,
    "_blank"
  );
}
