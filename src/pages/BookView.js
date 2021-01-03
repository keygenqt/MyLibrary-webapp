let images = [
    'https://api.mylibraryapp.com/images/fb53ecef-2318-434a-99f0-e6723c112f2d.png',
    'https://api.mylibraryapp.com/images/a1d5583b-55a6-4952-a32d-5fcb18e39da5.png',
    'https://api.mylibraryapp.com/images/567e5a6e-b11c-41d1-8bee-250ff3f72c99.png',
    'https://api.mylibraryapp.com/images/9bd61984-8819-4093-9014-8b494dc24886.png',
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
