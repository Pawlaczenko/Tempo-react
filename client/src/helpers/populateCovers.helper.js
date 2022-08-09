export const populateCovers = (songs) => {
    console.log(songs);
    const songsClone = [...songs];
    songsClone.forEach(song => {
        fetch(`/api/getAlbumCover?album=${song.album_name}&artist=${song.artist_id}`)
            .then((res) => res.json())
            .then((data) => song.album_cover = data.data);
    });
    return songsClone;
}