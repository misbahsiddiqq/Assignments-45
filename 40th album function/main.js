// function myAlbum(artistName: string, Albumtitle: string){
//     return {artistName, Albumtitle}
// }
// let album1 = myAlbum("Ali", "Range Mohabbat");
// let album2 = myAlbum("Sufyan", "Tere Name");
// console.log(album1)
// console.log(album2);
function myAlbum2(artistName, Albumtitle, numberOfTracks) {
    return { artistName: artistName, Albumtitle: Albumtitle, numberOfTracks: numberOfTracks };
}
var album1 = myAlbum2("Ali", "Range Mohabbat", 30);
var album2 = myAlbum2("Sufyan", "Tere Name", 50);
console.log(album1);
console.log(album2);
