import React, {useEffect, useState} from 'react'
import { useSearchParams  } from "react-router-dom"

import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';
import SongsGrid from '../../components/SongsGrid/SongsGrid';
import PaginationController from '../../components/PaginationController/PaginationController';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);
    const [songsCount, setSongsCount] = useState();

    const query = searchParams.get("query");

    const handlePageChange = (newPage) => setPage(newPage);
    
    useEffect(()=>{
        fetch(`/api/searchTracks?search=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setSongs(data.data.tracks);
                setSongsCount(data.data.songsCount);
            })
            .catch((error) => {
                console.log(error);
            });
        return () => {
            setSongs([]);
        }
    },[query,page]);

    return (
        <StyledMain>
            <StyledSpacer>{(songs && songs.length) ? <SongsGrid query={query} songs={songs} /> : <LoadingSpinner />}</StyledSpacer>
            <PaginationController currentPage={page} songsCount={songsCount} handlePageChange={handlePageChange} />
        </StyledMain>
    )
}

const StyledMain = styled.main`
  height: 100%;
  position: relative;

  display: grid;
  grid-template-rows: 1fr auto;
`;

const StyledSpacer = styled.div`
    height: 100%;
`;

export default SearchPage