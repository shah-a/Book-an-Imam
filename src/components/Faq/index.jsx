import { useState } from 'react';

const faqData = [
  { question: "Question 1", answer: "Answer to question 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem maxime nam quidem laborum nemo sapiente ad asperiores consectetur maiores quas?" },
  { question: "Question 2", answer: "Answer to question 2. Inventore ipsam velit consequuntur rem cupiditate, obcaecati eius molestiae possimus libero nulla ea voluptas! Amet necessitatibus doloribus dolorum ullam libero?" },
  { question: "Question 3", answer: "Answer to question 3. Dum, doloribus repellendus eius et cupiditate ipsum provident beatae ipsa, assumenda consequatur alias laborum similique. Molestias alias repellat neque consequatur." },
  { question: "Question 4", answer: "Answer to question 4. Tenetur rem cupiditate unde omnis dolore eum quia. Dolorum est natus, repudiandae illo esse aspernatur neque mollitia sed architecto hic." },
  { question: "Question 5", answer: "Answer to question 5. Esse incidunt placeat laboriosam iste molestiae molestias natus quae! Laudantium, perferendis voluptas. Explicabo voluptates, commodi fugiat esse laudantium rem illo!" },
  { question: "Question 6", answer: "Answer to question 6. Temporibus pariatur quam, quasi dolor dolorum in deserunt autem, ipsa fugiat tempora minus illo vel. Sunt officia iusto mollitia repellendus?" },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Faq py-20">
      <h2 className="text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="faq-container grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item pb-3 border-b border-stone-400">
            <div className="faq-question cursor-pointer flex justify-between items-center" onClick={() => toggleFaq(index)}>
              {faq.question} <span>{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer mt-2 text-stone-400">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
