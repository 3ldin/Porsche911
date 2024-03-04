import React from "react";


const GT2ModelsSection = () => {
  
  const gt2Models = [
    {
      title: 'GT2',
      description: 'The Porsche 911 GT2, celebrated for its uncompromising performance, was notably available with a manual transmission, providing enthusiasts with an engaging driving experience characterized by precise gear shifts and unparalleled connection to the road.',
      image: '/images/GT2/997gt2.jpeg'
    },

    {
      title: 'GT2 RS',
      description: 'The Porsche 911 GT2 RS, a pinnacle of automotive engineering, stands as a testament to the relentless pursuit of performance. With its race-inspired design and track-focused dynamics, the GT2 RS delivers blistering speed and agility, setting new benchmarks for supercars on both the road and the track.',
      image: '/images/GT2/redgt2rs.jpeg'
    },
    {
      title: 'GT2 RS MR',
      description: 'The Porsche 911 GT2 RS MR, hailed as the ultimate track weapon, embodies the epitome of automotive performance and precision. With its exclusive Manthey-Racing enhancements and record-breaking Nürburgring lap time, the GT2 RS MR reigns supreme as the ultimate expression of speed and agility on the most challenging circuits.',
      image: '/images/GT2/gt2rsmr.jpg'
    }
  ];

  const [selectedModel, setSelectedModel] = React.useState(gt2Models[0]);

  return (
    <div className="">
      <div className="flex justify-center space-x-4">
        {gt2Models.map((model, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border ${selectedModel.title === model.title ? 'bg-[#d30000] text-white border-black border-2' : 'bg-white text-gray-900 drop-shadow-lg'}`}
            onClick={() => setSelectedModel(model)}
          >
            {model.title}
          </button>
        ))}
      </div>

 
      <div className="flex justify-center mt-4">
        <div className="w-md lg:w-1/2 border border-gray-300 bg-white drop-shadow-xl p-4 rounded-md">
          <h3 className="text-xl text-black font-bold mb-2">{selectedModel.title}</h3>
          <p className="text-black">{selectedModel.description}</p>
          <img src={selectedModel.image} alt={selectedModel.title} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default GT2ModelsSection;
