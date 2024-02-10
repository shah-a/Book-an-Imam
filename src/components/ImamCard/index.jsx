// eslint-disable-next-line react/prop-types
function ImamCard({ name, image, description }) {
  return (
    <div className="ImamCard flex items-center bg-stone-800 shadow-lg rounded-lg overflow-hidden w-full">
      <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover ml-4" />
      <div className="py-4 px-6">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-stone-400 text-base">{description}</p>
      </div>
    </div>
  );
}

export default ImamCard;
