import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  const generations = [
    { year: '1963', model: '901', description: 'The first generation of the Porsche 911, originally known as the Porsche 901 before a name change due to trademark issues, represents the inception of an automotive legend. Introduced in 1963, it laid the foundation for the iconic Porsche 911 lineage, boasting a sleek design, rear-engine layout, and a flat-six engine configuration. The 901 set the standard for sports car performance, blending driving dynamics with everyday usability, and quickly gained a reputation for its agility, handling, and timeless design.', image: '/images/Generations/1963.jfif' },
    { year: '1975', model: '930', description: 'The second generation of the Porsche 911, known as the 930, marked the introduction of the legendary Porsche 911 Turbo. Introduced in 1975, the 930 was a game-changer, featuring a turbocharged engine that delivered exhilarating performance and distinctive styling cues like the iconic "whale tail" rear spoiler. Renowned for its powerful acceleration and impressive top speed, the 930 set new standards for high-performance sports cars. Despite its raw power, the rear-engine layout and refined suspension made it surprisingly manageable for everyday driving, further solidifying its status as an automotive icon.', image: '/images/Generations/1973.jfif' },
    { year: '1989', model: '964', description: 'The third generation of the Porsche 911, known as the 964, introduced a range of technological advancements while retaining the iconic design elements that define the 911 lineage. Introduced in 1989, the 964 featured significant improvements in performance, comfort, and safety compared to its predecessors. It was the first 911 to offer an all-wheel-drive system, known as the Carrera 4, enhancing traction and stability in various driving conditions. Additionally, the 964 showcased a sleeker and more aerodynamic body design, updated interior amenities, and a more refined suspension system, resulting in a balanced driving experience that combined exhilarating performance with everyday usability. The 964 generation played a crucial role in modernizing the 911 platform while preserving its timeless appeal and driving dynamics.', image: '/images/Generations/1988.jfif' },
    { year: '1993', model: '993', description: 'The fourth generation of the Porsche 911, known as the 993, is revered among enthusiasts as the last of the air-cooled 911 models, marking the end of an era for Porsche. Introduced in 1993, the 993 represented a significant evolution of the iconic sports car, featuring a more refined and aerodynamic design, advanced engineering, and improved performance capabilities. It was the first 911 to incorporate a six-speed manual transmission, enhancing gearshift precision and driving dynamics. The 993 also introduced innovative technologies such as a multi-link rear suspension system, providing superior handling and ride comfort compared to its predecessors. With its timeless styling, advanced engineering, and spirited driving experience, the 993 remains a cherished icon in the Porsche 911 lineage.', image: '/images/Generations/1993.jfif' },
    { year: '1998', model: '996', description: 'The fifth generation of the Porsche 911, known as the 996, marked a significant departure from tradition as it introduced several notable changes to the iconic sports car. Launched in 1998, the 996 was the first 911 model to feature a water-cooled engine, replacing the traditional air-cooled powerplant. This transition was driven by the need to meet stricter emissions and performance standards while also enhancing reliability and fuel efficiency. The 996 also showcased a more modern and streamlined design, with smoother body lines and updated headlights, departing from the classic round headlights of previous generations. Despite initial controversy surrounding its design and engineering choices, the 996 played a pivotal role in modernizing the 911 and laying the foundation for future iterations.', image: '/images/Generations/1997.jfif' },
    { year: '2004', model: '997', description: 'The sixth generation of the Porsche 911, known as the 997, represented a refined evolution of the iconic sports car. Introduced in 2004, the 997 retained the classic silhouette and rear-engine layout that defined its predecessors while incorporating modern enhancements and advancements in technology. Notable features of the 997 included improved aerodynamics, revised suspension systems, and updated interior amenities, offering a more comfortable and engaging driving experience. Porsche also introduced new engine options, including more powerful and efficient variants, further enhancing performance capabilities. With its blend of timeless design and contemporary engineering, the 997 continued to uphold the legacy of the 911 as a benchmark for sports car excellence.', image: '/images/Generations/2004.jfif' },
    { year: '2012', model: '991', description: 'The seventh generation of the Porsche 911, known as the 991, marked a significant leap forward in terms of performance, technology, and refinement. Introduced in 2012, the 991 featured a sleeker and more aerodynamic design, with wider rear bodywork and distinctive LED headlights. Under the hood, Porsche introduced a new range of advanced flat-six engines, offering improved power output and fuel efficiency compared to its predecessor. The 991 also saw the introduction of innovative technology such as Porsche Dynamic Chassis Control (PDCC) and Porsche Torque Vectoring Plus (PTV Plus), enhancing handling and driving dynamics. With its combination of cutting-edge engineering and timeless design, the 991 continued the legacy of the 911 as a benchmark for sports car excellence in the modern era.', image: '/images/Generations/2011.jfif' },
    { year: '2019', model: '992', description: 'The eighth generation of the Porsche 911, known as the 992, represents the latest evolution of the iconic sports car. Introduced in 2019, the 992 builds upon the heritage of its predecessors while incorporating modern advancements in technology and performance. It features a refined exterior design with sleeker lines and updated LED lighting elements, blending classic 911 styling cues with contemporary aesthetics. Underneath the skin, the 992 boasts a new platform that enhances rigidity and handling, providing a more dynamic driving experience. Powering the 992 is a range of turbocharged flat-six engines, delivering exhilarating performance and improved fuel efficiency. Inside the cabin, the 992 offers a luxurious and driver-focused environment, with advanced infotainment systems and driver assistance features to complement its sports car pedigree. Overall, the 992 continues the tradition of the 911 as a benchmark for performance, precision, and driving enjoyment in the modern automotive landscape.', image: '/images/Generations/2018.jfif' },
  ];

  return (
    <div className='bg-[#e9e8e8]'>
      <Navbar />
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-10 text-black text-center">Generations</h1>
        <VerticalTimeline>
          {generations.map((generation, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#fff', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date={generation.year}
              iconStyle={{ background: '#d30000', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title font-bold text-3xl">{generation.model}</h1>
              <p>{generation.description}</p>
              <img src={generation.image} alt={generation.model} className="w-full h-auto my-4 rounded-md" />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
