document.addEventListener('DOMContentLoaded', function() {
  const openPopupBtn = document.getElementById('open-popup');
  const closePopupBtn = document.getElementById('close-popup');
  const popupOverlay = document.getElementById('popup-overlay');

  openPopupBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
  });
});