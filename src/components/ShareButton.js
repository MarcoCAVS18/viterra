// src/components/ShareButton.js
import React from 'react';
import { toJpeg } from 'html-to-image';
import { FiShare2 } from 'react-icons/fi';

function ShareButton({ targetRef }) {
  const handleShare = async () => {
    if (targetRef.current) {
      try {
        // Generamos la imagen a partir del div referenciado
        const dataUrl = await toJpeg(targetRef.current, { quality: 0.95 });
        
        // Verificamos si el navegador permite la función de compartir
        if (navigator.canShare) {
          const blob = await (await fetch(dataUrl)).blob();
          const file = new File([blob], 'earnings-summary.jpg', { type: 'image/jpeg' });

          // Intentamos compartir
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: 'Earnings Summary',
              text: 'Here is my earnings summary!',
            });
          } else {
            alert('Sharing is not supported for files on this browser.');
          }
        } else {
          // Opción de respaldo: descargar la imagen
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'earnings-summary.jpg';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert('Image downloaded as fallback.');
        }
      } catch (error) {
        console.error('Error generating or sharing image:', error);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md mt-4 mx-auto"
    >
      <FiShare2 className="mr-2" /> Share
    </button>
  );
}

export default ShareButton;