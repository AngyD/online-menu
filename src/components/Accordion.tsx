import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <article className="w-full bg-white border border-gray-200 rounded shadow-md transition-all mb-3">
        <header className="flex flex-row items-center justify-between uppercase p-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <button
            className="flex items-center justify-center text-base text-white w-10 h-10 p-2 bg-slate-900 rounded-[50%]"
            onClick={handleClick}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {isOpen && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 p-4">
            {children}
          </div>
        )}
      </article>
    </>
  );
}
