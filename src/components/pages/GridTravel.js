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
          name: 'Singapore',
          tagline: 'Gourmet Haven',
          image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI1NTU4ODA3Njk0OTExOTU2Nzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
        },
        {
            name: 'France',
            tagline: 'Gourmet Haven',
            image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ3NDYwNzI3OTQxOTg5ODk4NjgxNjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
          },
          {
            name: 'France',
            tagline: 'Gourmet Haven',
            image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
          },
          {
            name: 'France',
            tagline: 'Gourmet Haven',
            image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
          },
          {
            name: 'France',
            tagline: 'Gourmet Haven',
            image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
          },
          
          
        
    ];

    return (
        <div className="gridT">
            <h1>{title}</h1>
            <div className="travels-grid">
                {travels.map((travel, index) => (
                    <div className={`travels ${index === 0 ? 'featured' : ''}`} key={travel.name}>
                        <img src={travel.image} alt={travel.name} />
                        <div className="montserrat-travel">
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
