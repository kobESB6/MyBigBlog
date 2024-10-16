
const applyMode = function (mode) {
  let icon, circleColor;
  if (mode === 'light') {
    icon = '☀️';
    circleColor = '#ffb100';
  } else {
    icon = '🌒';
    circleColor = '#8570a5';
  }
  const modeBtnEl = document.querySelector('#toggle');
  if (modeBtnEl) {
  modeBtnEl.textContent = icon;
}
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
const storeLocalStorage = function (data) {
  const allBlogs = readLocalStorage();
  allBlogs.push(data);
  const stringData = JSON.stringify(allBlogs);
  localStorage.setItem('blogs', stringData);
};
const readMode = function () {
  return localStorage.getItem('mode') || 'dark';
};

const saveMode = function (mode) {
  localStorage.setItem('mode', mode);
};
document.addEventListener('DOMContentLoaded',function(){
const modeBtnEl = document.querySelector('#toggle');
if (modeBtnEl) {
  applyMode(readMode());
  modeBtnEl.addEventListener('click', handleModeToggle);
}
});
