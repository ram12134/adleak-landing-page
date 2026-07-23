const forms = document.querySelectorAll('form');
const toast = document.getElementById('toast');

forms.forEach((form) => form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });
  } catch {
    // Local previews have no form handler; the form will be collected after Netlify deployment.
  }
  form.reset();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 6000);
}));

toast.querySelector('button').addEventListener('click', () => toast.classList.remove('show'));
