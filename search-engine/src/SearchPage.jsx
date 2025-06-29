import {SearchBox} from './SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser,faFlask } from '@fortawesome/free-solid-svg-icons'

export const SearchPage = () => {

    return (
        <>
            <div>
                <div >
                    <div style={{ "display": "flex", "float": "left" }} className='nav-bar'>
                        <div style={{ "margin": "6px"}}>About</div>
                        <div style={{ "margin": "6px"}}>Store</div>
                    </div>
                    <div style={{ "display": "flex", "float": "right" }} className='nav-bar'>
                        <div style={{ "margin": "6px"}}>Gmail</div>
                        <div style={{ "margin": "6px"}}>Images</div>
                        <div style={{ "margin": "6px"}}><FontAwesomeIcon icon={faFlask} /></div>
                        <div style={{ "margin": "6px"}}><FontAwesomeIcon icon={faCircleUser} /></div>
                    </div>
                </div>
               
            </div>
            <div style={{ "margin-top": "20px"}}>
            <SearchBox/>
            </div>
            
        </>


    )

}

export default { SearchPage };