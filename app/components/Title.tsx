import React from 'react';
import { PawPrint } from 'lucide-react';

interface TitleProps {
    variant?: 'large' | 'small';
}

const Title: React.FC<TitleProps> = ({ variant = 'large' }) => {

    const isLarge = variant === 'large';
    const textSize = isLarge ? 'text-7xl' : 'text-4xl';
    const iconSize = isLarge ? 72 : 36;

    const hoverClasses = isLarge ? 'transition-transform duration-300 hover:-translate-y-1 hover:scale-110' : '';

    const renderLetters = (word: string) => {
        return word.split('').map((letter, index) => (
            <span key={index} className={`inline-block ${hoverClasses}`}>
                {letter}
            </span>
        ));
    };

    return (
        <div className="text-center">
            <h1 className={textSize}>
                {renderLetters("Pawfect")}
            </h1>
            <h1 className={`${textSize} flex items-center justify-center mt-2`}>
                <span className={`inline-block mr-2 ${hoverClasses}`}>
                    <PawPrint className="text-cerulean" size={iconSize} />
                </span>
                {renderLetters("Match")}
            </h1>
        </div>
    );
};

export default Title;