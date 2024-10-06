import React from 'react';
import "./GridTravel.css"

const GridTravel = ({title}) => {
    const travels = [
        {
          name: 'Europe',
          tagline: 'Diverse Europe.',
          image: 'https://media1.thrillophilia.com/filestore/lwnmyjtny42stcmk2iw237a1oe4r_shutterstock_2385561217.jpg?w=1536&dpr=1.3', // Replace with actual image URL
        },
        {
          name: 'Greece',
          tagline: 'Island Paradise',
          image: 'https://media1.thrillophilia.com/filestore/20jj8vbfxjl48ovkqaqyd1uo0t07_Dubai%20Gallery-1.jpg?w=1536&dpr=1.3', // Replace with actual image URL
        },
        {
          name: 'France',
          tagline: 'Gourmet Haven',
          image: 'https://media1.thrillophilia.com/filestore/plo8mfkpn40x6t8w3vzypnje6fnx_shutterstock_2042237531.jpg?w=240&dpr=2', // Replace with actual image URL
        },
    ];

    return (
        <div className="gridT">
            <h1>{title}</h1>
            <div className="travels-grid">
                {travels.map((travel, index) => (
                    <div className={`travels ${index === 0 ? 'featured' : ''}`} key={travel.name}>
                        <img src={travel.image} alt={travel.name} />
                        <div className="travels-text">
                            <h2>{travel.name}</h2>
                            <p>{travel.tagline}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridTravel;
