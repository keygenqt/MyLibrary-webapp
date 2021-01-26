let images = [
    'https://api.mylibraryapp.com/images/5ff2de42aebd0.png',
    'https://api.mylibraryapp.com/images/5ff2f200f32a9.png',
    'https://api.mylibraryapp.com/images/5ff305e745e4e.png',
    'https://api.mylibraryapp.com/images/5ff3109c09f20.png',
]

function BookView() {
    const image = images[Math.floor(Math.random() * images.length)];
    return (
        <div className="BookView">
            <div className='block-view block-book'>
                <div className='block-book-data'>
                    <div className='image-book' style={{ backgroundImage: `url("${image}")` }}/>
                    <div className='data-block'>
                        <div className='name'>
                            Producing Open Source Software
                        </div>
                        <div className='author'>
                            Karl Fogel
                        </div>
                        <ul className='data'>
                            <li>
                                <strong>Publisher</strong>
                                <span>O'Reilly</span>
                            </li>
                            <li>
                                <strong>ISBN</strong>
                                <span>978-0-596-00759-1-978-0</span>
                            </li>
                            <li>
                                <strong>Year</strong>
                                <span>2011</span>
                            </li>
                            <li>
                                <strong>Pages</strong>
                                <span>279</span>
                            </li>
                            <li>
                                <strong>Cover</strong>
                                <span>Solid</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='block-user'>
                    <div className='image-user' style={{ backgroundImage: `url("https://keygenqt.com/images/blog/5e5d66c8b82dc.jpg")` }}/>
                    <div className='data-block'>
                        <div className='title'>
                            Vitaliy Zarubin
                        </div>
                        <div className='desc'>
                            Most of all I want to become the kind of person who could make the world a little better.
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-view'>
                <div className='title'>
                    Synopsis
                </div>
                <div className='desc'>
                    Producing Open Source Software is a book about the human side of open source development. It describes how successful projects operate, the expectations of users and developers, and the culture of free software. The book is released under an open copyright. You can buy it in bookstores, order copies from O'Reilly Media, or browse and download it here.
                </div>
            </div>
            <div className='block-view'>
                <div className='title'>
                    Genre Western
                </div>
                <div className='desc'>
                    Fiction set in the American Old West frontier and typically in the late nineteenth to early twentieth century.
                </div>
            </div>
        </div>
    );
}

export default BookView;
