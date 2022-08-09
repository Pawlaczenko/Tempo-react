import React, {useEffect, useState} from 'react'
import { useSearchParams  } from "react-router-dom"

import styled from 'styled-components';
import SongsGrid from '../../components/SongsGrid/SongsGrid';
import { populateCovers } from '../../helpers/populateCovers.helper';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [songs, setSongs] = useState();
    const query = searchParams.get("query");
    const page = searchParams.get("page");
    
    useEffect(()=>{
        fetch(`/api/searchTracks?search=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.data);
                // populateCovers(data.data);
            });
    },[query,page]);

    return (
        <StyledMain>
            {songs ? <SongsGrid query={query} songs={songs} /> : "loading"}
        </StyledMain>
    )
}

const StyledMain = styled.main`
  height: 100%;
`;

export default SearchPage