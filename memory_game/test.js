var grungeAlbums = {
    "albums":[
      {
          "name": "Bleach",
          "artist": "Nirvana",
          "unitsSold": 1700000
      },
      {
          "name": "Nevermind",
          "artist": "Nirvana",
          "unitsSold": 30000000
      },
      {
          "name": "In Utero",
          "artist": "Nirvana",
          "unitsSold": 15000000
      },
      {
          "name": "Ten",
          "artist": "Pearl Jam",
          "unitsSold": 10000000
      },
      {
          "name": "Vs",
          "artist": "Pearl Jam",
          "unitsSold": 6100000
      },
      {
          "name": "Vitalogy",
          "artist": "Pearl Jam",
          "unitsSold": 4770000
      }
    ]
  };
  
  var grungeAlbumsJSON = JSON.stringify(grungeAlbums); 
  var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON); 
  
//   console.log(grungeAlbumsJSON)
//   console.log(grungeAlbumsObject)
  
  
  for(let i = 0; i < grungeAlbumsObject.length; i++) { 
    console.log(grungeAlbumsObject[i].albums.name + grungeAlbumsObject[i].albums.artist + grungeAlbumsObject[i].albums.unitsSold)
  }
  
  var grungeAlbums = {
    "albums":[
      {
          "name": "Bleach",
          "artist": "Nirvana",
          "unitsSold": 1700000
      },
      {
          "name": "Nevermind",
          "artist": "Nirvana",
          "unitsSold": 30000000
      },
      {
          "name": "In Utero",
          "artist": "Nirvana",
          "unitsSold": 15000000
      },
      {
          "name": "Ten",
          "artist": "Pearl Jam",
          "unitsSold": 10000000
      },
      {
          "name": "Vs",
          "artist": "Pearl Jam",
          "unitsSold": 6100000
      },
      {
          "name": "Vitalogy",
          "artist": "Pearl Jam",
          "unitsSold": 4770000
      }
    ]
  };
  
  var grungeAlbumsJSON = JSON.stringify(grungeAlbums); 
  var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON); 
  
//   console.log(grungeAlbumsJSON); 
//   console.log(grungeAlbumsObject); 
  
function make() { 
  
  for(let i = 0; i < grungeAlbumsObject.albums.length; i++) { 
      const currentAlbum = grungeAlbumsObject.albums[i]; 
    console.log("Album: " + currentAlbum.name + " Artist: " +  currentAlbum.artist +  " Units Sold: " + currentAlbum.unitsSold)
  }
  }
  make() ; 