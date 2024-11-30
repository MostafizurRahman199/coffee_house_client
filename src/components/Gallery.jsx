export function Gallery() {
    const data = [
      {
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0pTEMqN6oaJf3jzRcg-I5f0ukVjNjz4tvow&s",
      },
      {
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOpvod5Whi7lCQdb7WIuHE-f6QKGqKUFwqg&s",
      },
      {
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-eYQMHn5jmAEHKU76lc0udOTX98RJoa0Sg&s",
      },
      {
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZZ7OnmqT7ene00QHE86SGFBWhBRilebWCg&s",
      },
      {
        imageLink:
          "https://static.vecteezy.com/system/resources/previews/031/113/215/large_2x/beautiful-latte-art-in-a-wide-cup-of-coffee-photo.jpg",
      },
      {
        imageLink:
          "https://t3.ftcdn.net/jpg/10/76/84/22/360_F_1076842230_hvwsE0gA8DA9tGFZ8pw6BbW1W8uQx5M2.jpg",
      },
      {
        imageLink:
          "https://coffeehero.com.au/cdn/shop/articles/75b12e65520af859fb0012ecc86635f7_2048x2048.jpg?v=1633873792",
      },
    
      {
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOI8pd0-93z4Wk9yVfHNFaizjGqj8mRHvUA&s",
      },
    ];
   
    return (
      <div className="w-10/12 mx-auto my-12">
        <div className="text-center mb-6">
            <p className="text-lg font-semibold" >Follow Us Now</p>
            <h2 className="text-4xl font-bold text-[#331A15]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Follow on Instagram</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 ">
        {data.map(({ imageLink }, index) => (
          <div className="relative rounded-lg w-full h-full transition-transform transform hover:scale-105 ">
             <div key={index} className="overflow-hidden rounded-lg ">
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center transition-opacity duration-300 hover:opacity-80 "
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
          <div className="rounded-lg second absolute inset-0 grid h-full w-full place-items-center bg-black/50 hover:bg-black/0 transition-all duration-300">
          </div>


          </div>

        ))}
      </div>
      </div>
    );
  }
   