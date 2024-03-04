import React from "react";


const GT3ModelsSection = () => {
  const gt3Models = [
    {
      title: 'GT3',
      description: 'The standard GT3 model offers a perfect balance of performance and usability, making it ideal for both track days and daily driving.',
      image: '/images/GT3/992gt3.jpeg'
    },

    {
      title: 'GT3 RS',
      description: 'The GT3 RS is the track-focused variant, featuring enhancements for aerodynamics, weight reduction, and overall performance. The race car.',
      image: '/images/GT3/992gt3rs.jpg'
    },
    {
      title: 'GT3 Touring',
      description: 'The GT3 Touring is designed for enthusiasts who prefer a more understated appearance while still enjoying the exceptional performance of the GT3. The subtle and classy take on the GT3.',
      image: '/images/GT3/992greentouring.jpg'
    }
  ];

  const [selectedModel, setSelectedModel] = React.useState(gt3Models[0]);
  return (
    <div className="">
      
      <div className="flex justify-center space-x-4">
        {gt3Models.map((model, index) => (
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

export default GT3ModelsSection;
