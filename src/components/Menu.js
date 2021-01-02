import {LocalLibrary, Settings, Info, ExitToApp} from '@material-ui/icons';

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li>
                    <a href='/'>
                        <LocalLibrary style={{ color: 'white' }} />
                        <span>MyLibrary</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <Settings style={{ color: 'white' }} />
                        <span>Settings</span>
                    </a>
                </li>
                <li className='active'>
                    <a href='/'>
                        <Info style={{ color: 'white' }} />
                        <span>About</span>
                    </a>
                </li>
                <li className='bottom'>
                    <a href='/'>
                        <ExitToApp style={{ color: 'white' }} />
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
