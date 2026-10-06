document.addEventListener('DOMContentLoaded', () => {
  const faqList = document.querySelector('.faq-list');
  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqList) return;

  function setItemState(item, isOpen) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    item.classList.toggle('active', isOpen);

    question.setAttribute('aria-expanded', String(isOpen));
    answer.setAttribute('aria-hidden', String(!isOpen));

    answer.inert = !isOpen;
  }

  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');

    setItemState(item, index === 0);

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        setItemState(otherItem, false);
      });

      if (!isActive) {
        setItemState(item, true);
      }
    });
  });

  faqList.classList.add('is-enhanced');
});