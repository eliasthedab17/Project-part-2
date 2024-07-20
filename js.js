
document.getElementById('openPopup').addEventListener('click', function () {
  openPopup();
});

document.getElementById('closePopup').addEventListener('click', function () {
  closePopup();
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const index = document.getElementById('contactIndex').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const id = document.getElementById('id').value;
  if (index === "") {
    addContact({ name, phone, email, id });
  } else {
    updateContact(index, { name, phone, email, id });
  }
  closePopup();
});

let contacts = [];

function openPopup(index = "") {
  document.getElementById('contactIndex').value = index;
  document.getElementById('popupTitle').textContent = index === "" ? "Create Contact" : "Edit Contact";
  document.getElementById('name').value = index === "" ? "" : contacts[index].name;
  document.getElementById('phone').value = index === "" ? "" : contacts[index].phone;
  document.getElementById('email').value = index === "" ? "" : contacts[index].email;
  document.getElementById('id').value = index === "" ? "" : contacts[index].id;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function addContact(contact) {
  contacts.push(contact);
  renderContacts();
}

function updateContact(index, contact) {
  contacts[index] = contact;
  renderContacts();
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

function deleteContacts() {
  contacts = [];
  renderContacts();
}

function renderContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  contacts.forEach((contact, index) => {
    const contactItem = document.createElement('li');
    contactItem.className = 'contact-item';
    contactItem.innerHTML = `
      ${contact.name} - ${contact.phone} - ${contact.email} - ${contact.id}
      <div class="buttons">
        <button onclick="showInfo(${index})">More Info</button>
        <button onclick="openPopup(${index})">Edit Contact</button>
        <button onclick="deleteContact(${index})">Delete Contact</button>
      </div>
    `;
    contactList.appendChild(contactItem);
  });
}

function showInfo(index) {
  const contact = contacts[index];
  alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}\nID: ${contact.id}`);
}

document.getElementById('deleteButton').addEventListener('click', function () {
  deleteContacts();
});

const initialContacts = [
  { name: 'Nour Ammar', phone: '0547689443', email: 'nourammarson@gmail.com', id: '214542573' },
  { name: 'Elias Dabbagh', phone: '0527337552', email: 'eliasthedab17@gmail.com', id: '213998339' }
];

initialContacts.forEach(contact => addContact(contact));
