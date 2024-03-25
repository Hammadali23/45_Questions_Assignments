interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
        tracks
    };

    return album;
}

// Example calls to the function
const album1: Album = makeAlbum('Artist 1', 'Album 1');
const album2: Album = makeAlbum('Artist 2', 'Album 2', 12);
const album3: Album = makeAlbum('Artist 3', 'Album 3', 8);

// Print each album
console.log(album1);
console.log(album2);
console.log(album3);
