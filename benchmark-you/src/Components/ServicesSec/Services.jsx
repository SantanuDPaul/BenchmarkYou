import React from 'react'
import './Services.css'
import serviceData from './ServiceData';

const ServiceBox = ({ iconClass, title, description, url}) => {
    return (
        <div className='service-box'>
            <a href={url} className='card' style={{ textAlign: 'center', position: 'relative' }}>
                <div className={iconClass} style={{ fontSize: '60px' }}></div>
                <h3>{title}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
};

const Services = () => {
    return (
        <div className='g-back'>
            <div className='g-box'>
                {serviceData.map(service => (
                    <ServiceBox 
                        key={service.id}
                        iconClass={service.iconClass} 
                        title={service.title} 
                        description={service.description}
                        url={service.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;