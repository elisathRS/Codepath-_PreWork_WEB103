import React, { useState } from "react";
import { supabase } from '../../client';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './AddCreator.css';

function AddCreator() {
    // State variables to manage form input fields
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(''); 
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');

    // Access the navigate function to manage navigation
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const newCreator = { name, description, imageURL, youtube, instagram, twitter };

        try {
            const { data, error } = await supabase
                .from('creators')
                .upsert(newCreator);

            if (!error) {
                setTimeout(() => navigate('/'), 500); 
                console.error('Error adding creator:', error.message);
            }
        } catch (error) {
            console.error('Error adding creator:', error);
        }
    }

    return (
        <div className="add-creator-container">
            <h2>Add a New Content Creator</h2>
            
            <form onSubmit={handleSubmit} className="add-creator-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} /><br />
    
                <label htmlFor="description">Description:</label>
                <label className="description-help">Provide a description of the creator. Who are they? What makes them interesting?</label>
                <textarea id="description" rows="5" required value={description} onChange={e => setDescription(e.target.value)} /><br />
            
                <label htmlFor="imageURL">Image URL (optional):</label>
                <input type="text" id="imageURL" value={imageURL} onChange={e => setImageURL(e.target.value)} /><br />
                
                <label htmlFor="socialMedia" className="social-media-label">SOCIAL MEDIA LINKS</label>
                <label className="description-help">Provide at least one of the creator's social media links</label>
                
                <label htmlFor="youtube"><AiFillYoutube /> Youtube:</label>
                <label className="description-help">The creator's Youtube handle without the @</label>
                <input type="text" id="youtube" value={youtube} onChange={e => setYoutube(e.target.value)} /><br />
                
                <label htmlFor="instagram"><AiFillInstagram /> Instagram:</label>
                <label className="description-help">The creator's Instagram handle without the @</label>
                <input type="text" id="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} /><br />
                
                <label htmlFor="twitter"><AiOutlineTwitter /> Twitter:</label>
                <label className="description-help">The creator's Twitter handle without the @</label>
                <input type="text" id="twitter" value={twitter} onChange={e => setTwitter(e.target.value)} /><br />
                
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddCreator;
