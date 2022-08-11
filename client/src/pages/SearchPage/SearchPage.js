import React, {useEffect, useState} from 'react'
import { useSearchParams  } from "react-router-dom"

import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';
import SongsGrid from '../../components/SongsGrid/SongsGrid';
import Heading from "../../components/Heading";
import ErrorMessage from '../../components/ErrorMessage';
import PaginationController from '../../components/PaginationController/PaginationController';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);
    const [songsCount, setSongsCount] = useState();
    const [error, setError] = useState(null);

    const query = searchParams.get("query") || "";
    const headingTopic = query || "Top songs in US";

    const handlePageChange = (newPage) => setPage(newPage);
    
    useEffect(()=>{
        fetch(`/api/searchTracks?search=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.data.tracks.length === 0) 
                    setError({
                        errorOccured: true,
                        message: "No results found"
                    });
                setSongs(data.data.tracks);
                setSongsCount(data.data.songsCount);
            })
            .catch((error) => {
                console.log(error);
                setError({
                    errorOccured: true,
                    message: error.message
                });
            });
        return () => {
            setSongs([]);
            setError(null);
        }
    },[query,page]);

    return (
        <StyledMain>
            <Heading level="3">Results for <mark>{headingTopic}</mark>:</Heading>
            <StyledSpacer>
                {error && error.errorOccured && <ErrorMessage message={error.message} />}
                {(songs && songs.length) || (error && error.errorOccured) ? <SongsGrid query={query} songs={songs} /> : <LoadingSpinner />}
            </StyledSpacer>
            <PaginationController currentPage={page} songsCount={songsCount} handlePageChange={handlePageChange} />
        </StyledMain>
    )
}

const StyledMain = styled.main`
  height: 100%;
  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: center;
`;

const StyledSpacer = styled.div`
    /* height: 100%; */
`;

export default SearchPage