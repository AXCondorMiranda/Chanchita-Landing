/* =========================
   SMOOTH SCROLL BUTTONS
========================= */

document.querySelectorAll('button').forEach(button => {

  button.addEventListener('click', () => {

    const text = button.innerText.toLowerCase();

    if(text.includes('cómo')){

      document.querySelector('.how-section')
        .scrollIntoView({
          behavior:'smooth'
        });

    }

    if(text.includes('participar')){

      window.open(
        'https://wa.me/51931329862',
        '_blank'
      );

    }

  });

});

/* =========================
   PROGRESS BAR DYNAMIC
========================= */

const totalTickets = 120;
const soldTickets = 72;

const percentage =
  (soldTickets / totalTickets) * 100;

document.querySelectorAll('.progress-fill')
  .forEach(bar => {

    bar.style.width = percentage + '%';

});

/* =========================
   COUNTER UPDATE
========================= */

const counterNumber =
  document.querySelector('.counter-number');

counterNumber.innerHTML = `
  ${soldTickets} / ${totalTickets}
`;

/* =========================
   REMAINING TICKETS
========================= */

const remaining =
  totalTickets - soldTickets;

const counterTitle =
  document.querySelector('.counter-box h2');

counterTitle.innerHTML = `
  🔥 Quedan solo ${remaining} boletos
`;

/* =========================
   PARTICIPANTS FAKE LIVE
========================= */

const participantsContainer =
  document.querySelector(
    '.participants-container'
  );

const fakeParticipants = [

  '🎟️ Ticket #81 — Carlos M.',
  '🎟️ Ticket #82 — Fernanda R.',
  '🎟️ Ticket #83 — Kevin T.',
  '🎟️ Ticket #84 — Andrea C.',
  '🎟️ Ticket #85 — Luis A.'

];

let participantIndex = 0;

setInterval(() => {

  if(participantIndex >= fakeParticipants.length)
    return;

  const participant =
    document.createElement('div');

  participant.classList.add('participant');

  participant.style.opacity = '0';
  participant.style.transform =
    'translateY(20px)';

  participant.innerHTML =
    fakeParticipants[participantIndex];

  participantsContainer.prepend(participant);

  setTimeout(() => {

    participant.style.transition =
      '0.4s ease';

    participant.style.opacity = '1';

    participant.style.transform =
      'translateY(0px)';

  },100);

  participantIndex++;

},4000);

/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
  document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const answer =
    item.querySelector('p');

  answer.style.display = 'none';

  item.addEventListener('click', () => {

    const isOpen =
      answer.style.display === 'block';

    document.querySelectorAll('.faq-item p')
      .forEach(p => {

        p.style.display = 'none';

      });

    if(!isOpen){

      answer.style.display = 'block';

    }

  });

});

/* =========================
   FLOATING ANIMATION ON SCROLL
========================= */

const observer =
  new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.style.opacity = '1';

        entry.target.style.transform =
          'translateY(0px)';

      }

    });

  },{
    threshold:0.15
  });

const animatedElements =
  document.querySelectorAll(
    '.step-card, .participant, .transparency-card, .future-card'
  );

animatedElements.forEach(el => {

  el.style.opacity = '0';
  el.style.transform =
    'translateY(30px)';
  el.style.transition =
    '0.6s ease';

  observer.observe(el);

});


/* =========================
   ADD REMINDER BUTTON
========================= */

const reminderButton =
  document.querySelector('.live-box button');

reminderButton.addEventListener('click', () => {

  alert(
    '🐷 Recordatorio agregado para el live del sorteo.'
  );

});
