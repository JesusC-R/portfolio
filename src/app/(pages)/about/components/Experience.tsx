"use client";

import { useRef } from "react";

interface DetailsProps {
  position: string;
  company?: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="flex flex-col items-center justify-between my-8 first:mt-0
        last:mb-0 w-[60%] mx-auto "
    >

      <div>
        {company ? (
          <h3 className="capitalize font-bold text-2xl">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{company}
            </a>
          </h3>
        ) : (
          <h3 className="capitalize font-bold text-2xl">{position}</h3>
        )}
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-mdeium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div
          className="absolute left-[35px] top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul>
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View CA."
            work="Worked on a team responsible for developing new features for Google's
              search engine, including improving the accuracy and relevance of search results and
              developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="Facebook"
            companyLink="www.facebook.com"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and
            share short-form video content, including designing and implementing a new user interface and developing
            the backend infrastructure to support the feature."
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="www.amazon.com"
            time="2020-2021"
            address="Seattle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features suc
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <Details
            position="Software Developer Intern "
            company="Microsoft"
            companyLink="www.microsoft.com"
            time="Summer 2019"
            address="RedMond, WA."
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system,
            including implementing a new user interface for a system settings panel and optimizing the performance of
            a core system component."
          />
          <Details
            position="Teaching Assistant MIT"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments,
            and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
