import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import defaultImage from '../../assets/images/defaultAlbumImage.svg';
import {ellipsis} from '../../styles/mixins'

const SongTile = ({song}) => {
    const [songCover,setSongCover] = useState(defaultImage);

    useEffect(()=> {
        fetch(`/api/getAlbumCover?album=${song.album_name}&artist=${song.artist_id}`)
            .then((res) => res.json())
            .then((data) => setSongCover(data.data));   
    },[song]);

  return (
    <StyledSongTile>
        <StyledImage>
            <img src={songCover || defaultImage} alt={song.album_name + " cover image"} />
        </StyledImage>
        <StyledMeta>
            <StyledTitle rows="2" title={song.track_name}>{song.track_name}</StyledTitle>
            <StyledAuthor rows="1" title={song.artist_name}>{song.artist_name}</StyledAuthor>
            {song.explicit === 1 && <StyledExplicit title="This song contains explicit lyrics.">!</StyledExplicit>}
        </StyledMeta>
    </StyledSongTile>
  )
}

const StyledSongTile = styled.div`
    --cover-size: 15rem;
    display: grid;
    grid-template-columns: var(--cover-size) 1fr;
    grid-template-rows: var(--cover-size);
    position: relative;
    cursor: pointer;
    --text-color: var(--color-grey-dark);

    &:after,
    &:before{
        content: "";
        display: block;
        width: 2rem;
        height: 2rem;

        position: absolute;
        right: 0;
        border: 2px solid var(--text-color);
        border-left: none;
        transition: all .4s ease;
    }

    &:after {
        bottom: 0;
        border-top: none;
    }

    &:before {
        top: 0;
        border-bottom: none;
    }

    &:hover {
        &::after,
        &::before {
            width: 100%;
            height: 50%;
            border-width: 5px;
            border-color: var(--color-primary);
        }
    }
`;

const StyledImage = styled.figure`
    width: 100%;
    height: 100%;
    object-fit: cover;

    & > img {
        width: 100%;
    }
`;

const StyledMeta = styled.div`
    padding: 1rem 1.5rem;
`;

const StyledTitle = styled.p`
    font-size: 2.2rem;
    color: black;
    ${ellipsis}
`;

const StyledAuthor = styled.p`
    font-size: 1.75rem;
    color: var(--text-color);
    ${ellipsis}
`;

const StyledExplicit = styled.div`
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    background-color: var(--color-warning);
    color: white;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    cursor: help;
`;

export default SongTile