import React, { useEffect, useState, useRef } from 'react';

const Typer = () => {
    // List of sentences with their associated colors
    const content = [
        { text: 'Full stack developer', color: '#FFC857' },
        { text: 'dreamer', color: '#E88EED' },
        { text: 'JPEG(NFT) collector', color: '#FF0054' },
        { text: 'Visual Creature', color: '#34E4EA' },
        { text: `{  \xa0\xa0\xa0\xa0\xa0\xa0\xa0  }`, color: '#F9C80E' },
    ];
    const [currentText, setCurrentText] = useState('');
    const [currentColor, setCurrentColor] = useState('');
    const _PART = useRef(0);
    const _PART_INDEX = useRef(0);
    const _INTERVAL_VAL = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const Type = () => {
            let text = content[_PART.current].text.substring(
                0,
                _PART_INDEX.current + 1,
            );
            setCurrentText(text);
            setCurrentColor(content[_PART.current].color);
            _PART_INDEX.current++;

            if (text === content[_PART.current].text) {
                clearInterval(_INTERVAL_VAL.current);
                setTimeout(() => {
                    _INTERVAL_VAL.current = setInterval(Delete, 50);
                }, 1000);
            }
        };
        const Delete = () => {
            const text = content[_PART.current].text.substring(
                0,
                _PART_INDEX.current - 1,
            );
            setCurrentText(text);
            _PART_INDEX.current--;

            if (text === '') {
                clearInterval(_INTERVAL_VAL.current);

                _PART.current =
                    _PART.current === content.length - 1
                        ? 0
                        : _PART.current + 1;
                _PART_INDEX.current = 0;

                setTimeout(() => {
                    _INTERVAL_VAL.current = setInterval(Type, 100);
                }, 200);
            }
        };

        _INTERVAL_VAL.current = setInterval(Type, 100);

        return () => {
            if (_INTERVAL_VAL.current) {
                clearInterval(_INTERVAL_VAL.current);
            }
        };
    }, []);

    return (
        <div className="text-2xl" id="typeContainer">
            {/* <div className="staticText">is a</div> */}
            <div id="typeText" style={{ color: currentColor }}>
                {currentText}
            </div>
            <div id="typeCursor"></div>
        </div>
    );
};

export default Typer;
