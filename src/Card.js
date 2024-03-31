import React, { useState, useEffect } from 'react';

const Card = ({ title, bookmark, extractedWord }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchFavicon = async (url) => {
      try {
        // Construct favicon URL
        const faviconUrl = new URL(url);
        faviconUrl.pathname = '/favicon.ico';

        // Create a new image element
        const img = new Image();
        img.src = faviconUrl.toString();
        img.onload = () => setUrl(img.src);
        img.onerror = () => console.error('Favicon not found or error fetching favicon');
      } catch (error) {
        console.error('Error fetching favicon:', error);
      }
    };

    fetchFavicon(bookmark);

    // Cleanup function
    return () => {
      setUrl(''); // Reset URL on unmount
    };
  }, [bookmark]); // Re-run effect when bookmark prop changes

  return (
    <div >
      <div className="card" style={{ width: '18rem',paddingLeft:'70px'}}>
        <img style={{width:'120px',height:'120px'}} src={url} className="card-img-top" alt="Screen Capture" />
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          <p className="card-text">{extractedWord}</p>
          <a href={bookmark} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
