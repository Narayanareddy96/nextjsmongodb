import React from 'react';
import project1 from 'public/assets/projects/project1.jpg';
import project2 from 'public/assets/projects/project2.jpg';
import project3 from 'public/assets/projects/project3.jpg';
import Image from 'next/image';

const Portfolio = () => {
  const prortfolio = [
    {
      id: 1,
      name: 'Project 1',
      image: project1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed      auctor orci at est gravida, eu tincidunt velit tincidunt.',
    },
    {
      id: 2,
      name: 'Project 1',
      image: project1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed      auctor orci at est gravida, eu tincidunt velit tincidunt.',
    },
    {
      id: 3,
      name: 'Project 1',
      image: project1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed      auctor orci at est gravida, eu tincidunt velit tincidunt.',
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* loop start  */}
        <div className="bg-white rounded-lg shadow-md">
          <Image
            src={project1}
            alt="Project 1"
            className="w-full h-48 object-cover rounded-t-lg"
          ></Image>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor orci at est gravida, eu tincidunt velit tincidunt.
            </p>
          </div>
        </div>
        {/* loop end */}
      </div>
    </div>
  );
};

export default Portfolio;
