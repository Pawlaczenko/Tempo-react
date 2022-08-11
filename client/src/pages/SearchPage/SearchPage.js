import React, {useState} from 'react'
import { useSearchParams  } from "react-router-dom"
import useFetch from '../../hooks/useFetch';

import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';
import SongsGrid from '../../components/SongsGrid/SongsGrid';
import Heading from "../../components/Heading";
import ErrorMessage from '../../components/ErrorMessage';
import PaginationController from '../../components/PaginationController/PaginationController';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const query = searchParams.get("query") || "";
    const [page, setPage] = useState(1);

    const {data : songs, isPending, error} = useFetch(`/api/searchTracks?search=${query}`, page);
    const headingTopic = query || "Top songs in US";

    const handlePageChange = (newPage) => setPage(newPage);

    return (
        <StyledMain>
            <Heading level="3">Results for <mark>{headingTopic}</mark>:</Heading>
            <StyledSpacer>
                {error && <ErrorMessage message={error} />}
                {isPending && <LoadingSpinner />}
                {songs.tracks && <SongsGrid query={query} songs={songs.tracks} /> }
            </StyledSpacer>
            <PaginationController currentPage={page} songsCount={songs.songsCount} handlePageChange={handlePageChange} />
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
    height: 100%;
`;

export default SearchPage