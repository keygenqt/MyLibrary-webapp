let images = [
    'https://api.mylibraryapp.com/images/5ff2de42aebd0.png',
    'https://api.mylibraryapp.com/images/5ff2f200f32a9.png',
    'https://api.mylibraryapp.com/images/5ff305e745e4e.png',
    'https://api.mylibraryapp.com/images/5ff3109c09f20.png',
]

function ListBookItem() {
    const image = images[Math.floor(Math.random() * images.length)];
    return (
        <div className="ListBookItem">
            <div className='image' style={{ backgroundImage: `url("${image}")` }}/>
            <div className='data-block'>
                <div className='name'>
                    Producing Open Source Software
                </div>
                <div className='author'>
                    Karl Fogel
                </div>
                <div className='desc'>
                    Producing Open Source Software is a book about the human side of open source development. It describes how successful projects operate, the expectations of users and developers, and the culture of free software. The book is released under an open copyright. You can buy it in bookstores, order copies from O'Reilly Media, or browse and download it here.
                </div>
            </div>
        </div>
    );
}

export default ListBookItem;
