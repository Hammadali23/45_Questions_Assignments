"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks
    };
    return album;
}
// Example calls to the function
const album1 = makeAlbum('Artist 1', 'Album 1');
const album2 = makeAlbum('Artist 2', 'Album 2', 12);
const album3 = makeAlbum('Artist 3', 'Album 3', 8);
// Print each album
console.log(album1);
console.log(album2);
console.log(album3);
