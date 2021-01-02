import {Search} from '@material-ui/icons';

function SearchBlock() {
    return (
        <div className="Search">
            <div className='search-block'>
                <input placeholder='Search...' className='search-input'/>
                <Search style={{ color: '#ffffff73' }} />
            </div>
            <ul className='search-chips'>
                <li>
                    <a href='/'>
                        All Books
                    </a>
                </li>
                <li>
                    <a href='/'>
                        My Library
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Book Swap
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SearchBlock;
