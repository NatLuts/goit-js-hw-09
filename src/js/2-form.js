const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', onFormInput);

function onSubmitForm(e) {
  e.preventDefault();
  const userData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!userData.email || !userData.message)
    return alert('All form fields must be filled in');

  console.log(userData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onFormInput(e) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  saveToLS(formData);
}

function saveToLS(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function loadFromLS(key) {
  const userData = localStorage.getItem(key);
  try {
    return JSON.parse(userData);
  } catch (error) {
    return userData;
  }
}

function renderPage() {
  const data = loadFromLS(STORAGE_KEY);
  form.elements.message.value = data.message || '';
  form.elements.email.value = data.email || '';
}
renderPage();
