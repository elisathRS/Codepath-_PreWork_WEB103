import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import for confirmation dialogs
import './EditCreator.css'; // Import your CSS file for this component

function EditCreator({ creatorToEdit }) {
    const [name, setName] = useState(creatorToEdit.name);
    const [description, setDescription] = useState(creatorToEdit.description);
    const [imageURL, setImageURL] = useState(creatorToEdit.imageURL);
    const [youtube, setYoutube] = useState(creatorToEdit.youtube);
    const [instagram, setInstagram] = useState(creatorToEdit.instagram);
    const [twitter, setTwitter] = useState(creatorToEdit.twitter);

    const navigate = useNavigate();

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedCreator = { name, description, imageURL, youtube, instagram, twitter };

        try {
            const { data, error } = await supabase
                .from('creators')
                .update(updatedCreator)
                .eq('id', creatorToEdit.id);

            if (!error) {
                alert('Successfully edited content creator!');
                navigate('/');
            } else {
                alert('Error editing content creator');
            }
        } catch (error) {
            alert('Error editing content creator');
            console.error('Error:', error);
        }
    };


    return (
        <div className="edit-creator-container">
            <h2>Edit Content Creator</h2>
            <form onSubmit={handleEditSubmit} className="edit-creator-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="description">Description:</label>
                <label className="description-help">Provide a description of the creator. Who are they? What makes them interesting?</label>
                <textarea
                    rows="5"
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <label htmlFor="imageUrl">Image URL (optional):</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={imageURL}
                    onChange={e => setImageURL(e.target.value)}
                />

<label htmlFor="socialMedia" className="social-media-label">SOCIAL MEDIA LINKS</label>
<label className="description-help">Provide at least one of the creators social media links </label>

                <label htmlFor="youtubeHandle"><AiFillYoutube /> Youtube:</label>
                <label className="description-help">The creator's Youtube handle without the @</label>
                <input
                    type="text"
                    id="youtube"
                    name="youtube"
                    value={youtube}
                    onChange={e => setYoutube(e.target.value)}
                />

                <label htmlFor="instagramHandle"><AiFillInstagram /> Instagram:</label>
                <label className="description-help">The creator's Instagram handle without the @ </label>
                <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                />

                <label htmlFor="twitterHandle"><AiOutlineTwitter /> Twitter:</label>
                <label className="description-help">The creator's Twitter handle without the @ </label>
                <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    value={twitter}
                    onChange={e => setTwitter(e.target.value)}
                />

                <div className="buttons-container">
                    <button className="submit-edit-button" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
}

export default EditCreator;

