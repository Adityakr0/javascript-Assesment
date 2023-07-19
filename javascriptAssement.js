// create a variable to hold your NFT's
const bookNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(title, author, year, genre) {
    const metaData = {
        title: title,
        author: author,
        year: year,
        genre: genre
    };
    bookNFTs.push(metaData);
    console.log("Minted: " + title);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < bookNFTs.length; i++) {
        console.log("Title: " + bookNFTs[i].title);
        console.log("Author: " + bookNFTs[i].author);
        console.log("Year: " + bookNFTs[i].year);
        console.log("Genre: " + bookNFTs[i].genre);
        console.log("--------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return bookNFTs.length;
}

// call your functions below this line
mintNFT("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
mintNFT("1984", "George Orwell", 1949, "Dystopian");
mintNFT("Pride and Prejudice", "Jane Austen", 1813, "Romance");

listNFTs();

console.log("Total Minted NFTs: " + getTotalSupply());
