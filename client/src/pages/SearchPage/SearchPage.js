import React, {useEffect, useState} from 'react'
import { useSearchParams  } from "react-router-dom"

import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';
import SongsGrid from '../../components/SongsGrid/SongsGrid';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [songs, setSongs] = useState([]);    
    const query = searchParams.get("query");
    const page = searchParams.get("page");
    
    useEffect(()=>{
        fetch(`/api/searchTracks?search=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.data);
            });
        return () => {
            setSongs([]);
        }
    },[query,page]);

    return (
        <StyledMain>
            {(songs && songs.length) ? <SongsGrid query={query} songs={songs} /> : <LoadingSpinner />}
        </StyledMain>
    )
}

const StyledMain = styled.main`
  height: 100%;
  position: relative;
`;

export default SearchPage