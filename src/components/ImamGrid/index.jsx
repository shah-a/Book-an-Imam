import { useState } from 'react';
import ImamCard from '../ImamCard';
import imamImage from '../../assets/imam.png';

function ImamGrid() {
  const [searchQuery, setSearchQuery] = useState('');

  const imams = [
    { id: 1, name: 'Zayd Amin', image: imamImage, description: 'Expert in family counseling.' },
    { id: 2, name: 'Samir Al-Fayed', image: imamImage, description: 'Renowned Quranic teacher.' },
    { id: 3, name: 'Idris Hakim', image: imamImage, description: 'Specialist in Islamic jurisprudence.' },
    { id: 4, name: 'Karim Jawad', image: imamImage, description: 'Youth mentor and community leader.' },
    { id: 5, name: 'Jalal Al-Din', image: imamImage, description: 'Expert in Islamic finance and economics.' },
    { id: 6, name: 'Tariq Salim', image: imamImage, description: 'Dedicated to interfaith dialogue and peacebuilding.' },
    { id: 7, name: 'Farid Najjar', image: imamImage, description: 'Scholar in Islamic history and civilizations.' },
    { id: 8, name: 'Nabeel Rashid', image: imamImage, description: 'Active in community service and welfare programs.' },
    { id: 9, name: 'Yasir Majid', image: imamImage, description: 'Pioneer in educational reform and spiritual guidance.' },
  ];

  const filteredImams = imams.filter(imam =>
    imam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    imam.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ImamGrid container mx-auto space-y-3">
      <input
        type="text"
        className="w-full p-3 rounded shadow shadow-stone-400 text-black"
        placeholder="Search imams..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
        {filteredImams.map((imam) => (
          <ImamCard key={imam.id} name={imam.name} image={imam.image} description={imam.description} />
        ))}
      </div>
    </div>
  );
}

export default ImamGrid;
