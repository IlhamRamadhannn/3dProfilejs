import React from 'react';
import Button from './components/Button';
import instagramIcon from '/assets/instagram.png';
import gmailIcon from '/assets/ggmail.png';
import linkedinIcon from '/assets/linkedin.png';
import outlookIcon from '/assets/Outlook.png';
// import whatsappicon from '/assets/whatsapp.png';
import notionicon from '/assets/notion.png';

const Contact = () => {
  return (
    <section className="relative inset-0 flex justify-center items-center min-h-screen sm:mt-[-130vh]" id="contact">
      <div className="text-center">
        <h1 className="font-semibold sm:text-4xl text-2xl font-generalisans text-neutral-400 font-bold text-xl text-white transition-colors">
          Contact And OtherLinks:
        </h1>
        <div className="flex justify-center items-center mt-10 space-x-4">
          <a href="https://www.linkedin.com/in/ilhamsyahrulramadhan/" target="_blank" rel="noopener noreferrer">
            <Button name="LinkedIn" containerClass="w-full" icon={linkedinIcon} />
          </a>
          <a href="mailto:ilham.ramadhan004@binus.ac.id" target="_blank" rel="noopener noreferrer">
            <Button name="Outlook" containerClass="w-full" icon={outlookIcon} />
          </a>
          <a href="mailto:ilhamsr05@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button name="Gmail" containerClass="w-full" icon={gmailIcon} />
          </a>
          <a href="https://www.instagram.com/_ilhamsr" target="_blank" rel="noopener noreferrer">
            <Button name="Instagram" containerClass="w-full" icon={instagramIcon} />
          </a>
          <a href="https://lean-ceder-c38.notion.site/Hi-I-m-Ilham-Syahrul-Ramadhan-1066ca1720cd80b6ab61c47c82b7fd90" target="_blank" rel="noopener noreferrer">
            <Button name="Notion (CV)" containerClass="w-full" icon={notionicon} />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
