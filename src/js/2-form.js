import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    const formData =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};

    formData[name] = value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const storedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  Object.entries(storedData).forEach(([name, value]) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (input) {
      input.value = value;
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData =
      JSON.parse(localStorage.getItem('feedback-form-state')) || {};

    if (formData.email && formData.message) {
      console.log({
        email: formData.email,
        message: formData.message,
      });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});
