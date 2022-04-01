import React from 'react';
import { CardImg, CardsContainer, PrincipalDiv, CardLink } from '../styles/PrincipalStyles';
import { Link } from 'react-router-dom';

const Principal = () => {
    const lenguaje = ["html", "css", "javascript"]

    return (
        <PrincipalDiv>
            <p>Practica tus conocmientos en la categoría que prefieras.</p>
            <CardsContainer className='cards-container'>
                <Link to={`/preguntas/${lenguaje[0]}`}>
                    <div className='card'>
                        <div className='card-img'>
                            <CardImg src='https://www.iconninja.com/files/306/245/260/technologies-front-end-markup-language-long-shadow-web-web-technology-html-icon.svg' />
                        </div>
                        <div className='card-text'>
                            <CardLink>HTML</CardLink>
                        </div>
                    </div>
                </Link>
                <Link to={`/preguntas/${lenguaje[1]}`}>
                    <div className='card'>
                        <div className='card-img'>
                            <CardImg src='https://res.cloudinary.com/lau2401/image/upload/v1648824457/css_dpf4ds.png' />
                        </div>
                        <div className='card-text'>
                            <CardLink href='#'>CSS</CardLink>
                        </div>
                    </div>
                </Link>
                <Link to={`/preguntas/${lenguaje[2]}`}>
                    <div className='card'>
                        <div className='card-img'>
                            <CardImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' />
                        </div>
                        <div className='card-text'>
                            <CardLink href='#'>JavaScript</CardLink>
                        </div>
                    </div>
                </Link>
                
            </CardsContainer>

        </PrincipalDiv>
    );
};

export default Principal;
