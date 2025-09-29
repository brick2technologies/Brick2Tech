

const steps = [
  {
    title: 'Research & Strategy',
    description: 'Laying the foundation for success by understanding market dynamics and setting strategic goals.',
    color: 'bg-white',
    number: '1',
  },
  {
    title: 'Creative & Content',
    description: 'Crafting engaging experiences through innovative design and compelling storytelling.',
    color: 'bg-white',
    number: '2',
  },
  {
    title: 'Campaign Execution',
    description: 'Implementing strategies with precision to reach the target audience effectively.',
    color: 'bg-white',
    number: '3',
  },
  {
    title: 'Performance Optimization',
    description: 'Maximizing ROI and sustaining growth through continuous analysis and adjustments.',
    color: 'bg-white',
    number: '4',
  },
];

const DigitalTransformation = () => {
  return (
    <div className="py-12 px-6 ">
      
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg p-6 w-full md:w-[45%] lg:w-[22%] ${step.color} text-white`}
          >
            <div className="absolute -top-4 -left-4 bg-white text-sky-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTransformation;