import React from 'react';
import "./GridTravel2.css"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const GridTravel = ({title}) => {
    const travels = [
        {
          name: '',
          tagline: 'Diverse Europe.',
          image: 'https://media1.thrillophilia.com/filestore/lwnmyjtny42stcmk2iw237a1oe4r_shutterstock_2385561217.jpg?w=1536&dpr=1.3', // Replace with actual image URL
        },
        {
          name: '',
          tagline: 'Island Paradise',
          image: 'https://media1.thrillophilia.com/filestore/20jj8vbfxjl48ovkqaqyd1uo0t07_Dubai%20Gallery-1.jpg?w=1536&dpr=1.3', // Replace with actual image URL
        },
        {
          name: '',
          tagline: 'Gourmet Haven',
          image: 'https://media1.thrillophilia.com/filestore/5kcj4naff0u6aua7tm6ftyo3qul5_shutterstock_456473839.jpg?w=340&dpr=2', // Replace with actual image URL
        },
        {
            name: '',
            tagline: 'Gourmet Haven',
            image: 'https://media1.thrillophilia.com/filestore/zkip7khwzew8nnesw6tr7qo0zba7_Downpic.cc-482200118.jpg?w=340&dpr=2', // Replace with actual image URL
          },
          {
            name: '',
            tagline: 'Gourmet Haven',
            image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ3NDYwNzI3OTQxOTg5ODk4NjgxNjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==', // Replace with actual image URL
          },
        
          
          
        
    ];

    return (
        <div className="gridT">
            <div className='headingT'  >{title}</div>
            <div className="travels-grid2">
                {travels.map((travel, index) => (
                    <div className={`travels2 ${index === 0 ? 'featured2' : ''}`} key={travel.name}>
                      <Link to="/view"> <img src={travel.image} alt={travel.name} /></Link>
                       
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
