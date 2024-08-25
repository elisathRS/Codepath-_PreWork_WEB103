import React from "react";
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IoInformationCircle } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import './ContentCreatorCard.css'; 

function ContentCreatorCard({ contentCreator, handleCurrentCreator, handleEditCreator }) {
    const handleViewCreatorClick = () => {
        const currentCreator = contentCreator;
        handleCurrentCreator(currentCreator);
    };

    const handleEditCreatorClick = () => {
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    };

    return (
        <div
            className="content-creator-card"
            style={{ backgroundImage: `url(${contentCreator.imageURL})` }}
        >
            <div className="content-creator-card-details">
                <div className="content-creator-card-header">
                    <h2 className="creator-nam">{contentCreator.name}</h2>
                    <div className="action-buttons">
                        <Link to={'/' + contentCreator.id} data-tooltip-id="info-tooltip" data-tooltip-content="Display creator's info">
                            <IoInformationCircle size={30} onClick={handleViewCreatorClick} style={{ color: 'white' }} />
                            <Tooltip id="info-tooltip" />
                        </Link>
                        <Link to={'/edit/' + contentCreator.id} data-tooltip-id="edit-tooltip" data-tooltip-content="Edit the creator's info">
                            <AiTwotoneEdit size={30} onClick={handleEditCreatorClick} style={{ color: 'white' }} className="pointer-link" />
                            <Tooltip id="edit-tooltip" />
                        </Link>
                    </div>
                </div>
                <div className="social-link">
                    {contentCreator.youtube && (
                        <a href={'https://youtube.com/@' + contentCreator.youtube} target='__blank' rel='noopener noreferrer'>
                            <AiFillYoutube size={30} style={{ color: 'white' }} />
                        </a>
                    )}
                    {contentCreator.instagram && (
                        <a href={'https://www.instagram.com/' + contentCreator.instagram} target='__blank' rel='noopener noreferrer'>
                            <AiFillInstagram size={30} style={{ color: 'white' }} />
                        </a>
                    )}
                    {contentCreator.twitter && (
                        <a href={'https://twitter.com/' + contentCreator.twitter} target='__blank' rel='noopener noreferrer'>
                            <AiOutlineTwitter size={30} style={{ color: 'white' }} />
                        </a>
                    )}
                </div>
                <p className="description">{contentCreator.description}</p>
            </div>
        </div>
    );
}

export default ContentCreatorCard;

