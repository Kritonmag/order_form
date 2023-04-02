const dropdown = document.querySelector('.dropdown');
const dropdownSelect = document.querySelector('.dropdown-select');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const rangeInput = document.querySelector('.form__range');
const percentElement = document.querySelector('.form-description__percent');

dropdown.addEventListener('click', () => {
  dropdownList.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove('show');
  }
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownSelect.textContent = item.textContent;
  });
});

rangeInput.addEventListener('input', () => {
  const value = rangeInput.value;
  percentElement.textContent = `${value} %`;
});