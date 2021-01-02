let images = [
    'https://api.mylibraryapp.com/images/fb53ecef-2318-434a-99f0-e6723c112f2d.png',
    'https://api.mylibraryapp.com/images/a1d5583b-55a6-4952-a32d-5fcb18e39da5.png',
    'https://api.mylibraryapp.com/images/567e5a6e-b11c-41d1-8bee-250ff3f72c99.png',
    'https://api.mylibraryapp.com/images/9bd61984-8819-4093-9014-8b494dc24886.png',
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
