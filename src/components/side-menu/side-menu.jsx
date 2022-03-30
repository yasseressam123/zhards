import './side-menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faClipboard, faEnvelope, faFileCirclePlus, faGear, faSquare, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';


const SideMenu = ()=>{
    return(
        <div className='side-menu'>
            <div className='logo'>
                <p>Zhards.com</p>
            </div>
            <div>
                <ul>
                    <li className='active'>
                        <a href="">
                            <FontAwesomeIcon icon={faSquare} />
                            <p>Dashboard</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faClipboard}/>
                            <p>Blog Post</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>Message</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faSquarePollVertical}/>
                            <p>Statistics</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faGear}/>
                            <p>Settings</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                            <p>Log Out</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className='note'>
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                    <p className='note-main-title'>New Draft</p>
                    <p className='note-sub-title'>Do you want to make a new draft to write something?</p>
                    <div>
                        <button className='btn btn-color'>Create File</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;