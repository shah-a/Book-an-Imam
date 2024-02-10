import { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "Question 1", answer: "Answer to question 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maxime nam quidem laborum nemo sapiente ad asperiores consectetur maiores quas?" },
    { question: "Question 2", answer: "Answer to question 2. Inventore ipsam velit consequuntur rem cupiditate, obcaecati eius molestiae possimus libero nulla ea voluptas! Amet necessitatibus doloribus dolorum ullam libero?" },
    { question: "Question 3", answer: "Answer to question 3. Dum, doloribus repellendus eius et cupiditate ipsum provident beatae ipsa, assumenda consequatur alias laborum similique. Molestias alias repellat neque consequatur." },
    { question: "Question 4", answer: "Answer to question 4. Tenetur rem cupiditate unde omnis dolore eum quia. Dolorum est natus, repudiandae illo esse aspernatur neque mollitia sed architecto hic." },
    { question: "Question 5", answer: "Answer to question 5. Esse incidunt placeat laboriosam iste molestiae molestias natus quae! Laudantium, perferendis voluptas. Explicabo voluptates, commodi fugiat esse laudantium rem illo!" },
    { question: "Question 6", answer: "Answer to question 6. Temporibus pariatur quam, quasi dolor dolorum in deserunt autem, ipsa fugiat tempora minus illo vel. Sunt officia iusto mollitia repellendus?" },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Faq pb-3">
      <h2 className="text-2xl mb-3">Frequently Asked Questions</h2>
      <div className="faq-container md:flex md:flex-row md:justify-between md:space-y-0 space-y-3">
        <div className="faq-column flex-1 space-y-3 md:mr-3">
          {faqData.slice(0, 3).map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question cursor-pointer flex justify-between items-center" onClick={() => toggleFaq(index)}>
                {faq.question} <span>{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer mt-2">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className="faq-column flex-1 space-y-3">
          {faqData.slice(3, 6).map((faq, index) => (
            <div key={index + 3} className="faq-item">
              <div className="faq-question cursor-pointer flex justify-between items-center" onClick={() => toggleFaq(index + 3)}>
                {faq.question} <span>{activeIndex === index + 3 ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index + 3 && <div className="faq-answer mt-2">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
