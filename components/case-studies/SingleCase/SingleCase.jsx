import { useState } from 'react';
import SingleCaseTwo from '../SingleCaseTwo/SingeCaseTwo';

export default function SingleCase({ projects }) {
  const [search, setSearch] = useState('all');

  const specifyCase = (x) => {
    return search.toLowerCase() === '' || search.toLowerCase() === 'all'
      ? x
      : x.category.toLowerCase() === search.toLowerCase();
  };

  const CaseStudies = [
    { id: 1, label: 'All', url: '/case-studies/all' },
    { id: 2, label: 'Web Design', url: '/case-studies/web-design' },
    { id: 3, label: 'Web Development', url: '/case-studies/web-development' },
    { id: 4, label: 'UI/UX', url: '/case-studies/ui-ux' },
    { id: 5, label: 'Graphics Design', url: '/case-studies/graphics-design' }
  ];
  return (
    <div>
      <div className="py-5 w-[80%] lg:w-[75%] mx-auto mt-[50px]">
        {CaseStudies?.map((item) => (
          <button
            onClick={(e) => setSearch(e.target.innerText)}
            key={item.id}
            className={
              item.label.toLowerCase() === search.toLowerCase()
                ? 'w-full lg:w-48 px-6 h-12 py-3 bg-[#0057FF] rounded-[35px] text-white text-center gap-3'
                : 'block lg:inline px-10 w-full lg:w-48 lg:px-6 h-12 py-4 text-[#3C3C3C] '
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {projects
          ?.filter((c) => specifyCase(c))
          ?.map((caseStudy, index) => (
            <SingleCaseTwo
              key={index}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}
