// function myAlbum(artistName: string, Albumtitle: string){
//     return {artistName, Albumtitle}
// }

// let album1 = myAlbum("Ali", "Range Mohabbat");
// let album2 = myAlbum("Sufyan", "Tere Name");

// console.log(album1)
// console.log(album2);

function myAlbum2(artistName: string, Albumtitle: string, numberOfTracks?: number){
    return {artistName, Albumtitle,numberOfTracks}
}

let album1 = myAlbum2("/bAli", "Range Mohabbat", 30);

let album2 = myAlbum2("/nSufyan", "Tere Name", 50);

console.log(album1)
console.log(album2);

