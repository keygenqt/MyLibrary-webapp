import {LocalLibrary, Settings, Info, ExitToApp} from '@material-ui/icons';

function Menu() {
    return (
        <div className="Menu">
            <ul>
                <li className='active'>
                    <a href='/'>
                        <LocalLibrary/>
                        <span>MyLibrary</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <Settings/>
                        <span>Settings</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <Info/>
                        <span>About</span>
                    </a>
                </li>
                <li className='bottom'>
                    <a href='/'>
                        <ExitToApp/>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
