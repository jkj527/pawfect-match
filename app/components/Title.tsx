import React from 'react';
import { PawPrint } from 'lucide-react';

const Title: React.FC = () => {
    return (
        <div className="text-center">
        <h1 className="text-4xl font-bold">Pawfect</h1>
        <h1 className="text-4xl font-bold flex items-center justify-center mt-2">
          <PawPrint className="text-cerulean mr-2" size={32} />
          Match
        </h1>
      </div>
    );
};

export default Title;