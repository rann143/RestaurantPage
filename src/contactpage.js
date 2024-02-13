import './style.css';

const createContactPage = () => {

    const contactPageForm = document.createElement('form');
    contactPageForm.setAttribute('id', 'contact-container');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name-input');
    nameLabel.textContent = "Name";
    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name-input');
    nameInput.setAttribute('type', 'text');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email-input');
    emailLabel.textContent = "Email";
    const emailInput = document.createElement('input');
    emailInput.setAttribute('id', 'email-input');
    emailInput.setAttribute('type', "email");

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message-input');
    messageLabel.textContent = "Message";
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message-input');
    messageInput.style.height = "100px";

    
    
    contactPageForm.appendChild(nameLabel);
    contactPageForm.appendChild(nameInput);
    contactPageForm.appendChild(emailLabel);
    contactPageForm.appendChild(emailInput);
    contactPageForm.appendChild(messageLabel);
    contactPageForm.appendChild(messageInput);
    

    return contactPageForm;

   

}

export { createContactPage };