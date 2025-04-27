document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-circle-half-stroke';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      icon.className = 'fa-solid fa-sun';
    } else {
      localStorage.setItem('theme', 'light');
      icon.className = 'fa-solid fa-circle-half-stroke';
    }
  });

  const contactBtn = document.getElementById('contactUsButton');
  const contactSection = document.getElementById('contactFormSection');

  contactBtn.addEventListener('click', () => {
    contactBtn.classList.toggle('shrunk');
    contactSection.classList.toggle('visible');
  });

  const addBtn = document.getElementById('addTaskButton');
  const taskIn = document.getElementById('taskInput');
  const grid = document.getElementById('taskGrid');
  const search = document.getElementById('searchBar');

  addBtn.addEventListener('click', () => {
    const text = taskIn.value.trim();
    if (!text) return;
    const card = document.createElement('div');
    card.className = 'task-card';

    const p = document.createElement('p');
    p.textContent = text;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = '×';
    btn.onclick = () => card.remove();

    card.append(p, btn);
    grid.appendChild(card);
    taskIn.value = '';
  });

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    grid.querySelectorAll('.task-card').forEach(card => {
      const t = card.querySelector('p').textContent.toLowerCase();
      card.style.display = t.includes(q) ? 'block' : 'none';
    });
  });

  function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMsg');

    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill in all fields.';
      formMsg.style.color = 'red';
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      formMsg.textContent = 'Invalid email address.';
      formMsg.style.color = 'red';
      return;
    }

    formMsg.textContent = 'Message submitted successfully!';
    formMsg.style.color = 'green';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });
});
