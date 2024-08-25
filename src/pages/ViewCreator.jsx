import React from 'react';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../client'; // Ajusta la ruta si es necesario
import './ViewCreator.css'; // Import CSS for styling

function ViewCreator({ contentCreator, handleEditCreator }) {
  const navigate = useNavigate();

  const handleEditCreatorClick = () => {
    handleEditCreator(contentCreator);
  };

  const handleConfirmDelete = async () => {
    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', contentCreator.id); // Usa contentCreator.id

      if (error) {
        throw error;
      } else {
        alert('Successfully deleted creator!');
        navigate('/'); // Redirige a la página principal después de eliminar
      }
    } catch (error) {
      alert('Error deleting content creator');
      console.error('Error:', error);
    }
  };

  return (
    <div className="view-creator-card">
      <img className="creator-image" src={contentCreator.imageURL} alt={contentCreator.name} />
      <div className="creator-info">
        <h2 className="creator-name">{contentCreator.name}</h2>
        <div className="creator-description">
          <p>{contentCreator.description}</p>
        </div>
        <div className="social-links">
          {contentCreator.youtube && (
            <a
              className="social-link youtube"
              href={'https://youtube.com/@' + contentCreator.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube size={30} />@{contentCreator.youtube}
            </a>
          )}
          {contentCreator.instagram && (
            <a
              className="social-link instagram"
              href={'https://www.instagram.com/' + contentCreator.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={30} />@{contentCreator.instagram}
            </a>
          )}
          {contentCreator.twitter && (
            <a
              className="social-link twitter"
              href={'https://twitter.com/' + contentCreator.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={30} />@{contentCreator.twitter}
            </a>
          )}
        </div>
        <div className="buttons-container">
          <button className="edit-button" onClick={handleEditCreatorClick}>Edit</button>
          <button className="delete-button" onClick={handleConfirmDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
