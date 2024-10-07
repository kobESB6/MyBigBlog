const modeBtnEl = document.querySelector('#toggle');

const applyMode = function (mode) {
  let icon, circleColor;
  if (mode === 'light') {
    icon = '☀️';
    circleColor = '#ffb100';
  } else {
    icon = '🌒';
    circleColor = '#8570a5';
  }
  modeBtnEl.textContent = icon;
  document.body.classList = mode;
  document.documentElement.style.setProperty('--circle-color', circleColor);
};

const handleModeToggle = function () {
  const mode = readMode();
  let nextMode = mode === 'light' ? 'dark' : 'light';
  applyMode(nextMode);
  saveMode(nextMode);
};

const readLocalStorage = function () {
  const stringData = localStorage.getItem('blogs');
  const data = JSON.parse(stringData);
  return data || [];
};

const readMode = function () {
  return localStorage.getItem('mode') || 'dark';
};

const saveMode = function (mode) {
  localStorage.setItem('mode', mode);
};

applyMode(readMode());
modeBtnEl.addEventListener('click', handleModeToggle);
