import React,{useState} from 'react';
import { Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';
const PageMenu = () => {
    const [activeItem, setActiveItem] = useState('about me');
    return (
        <Menu inverted secondary style={{ fontSize: '1.3em',marginBottom:'25px' }}>
            <MenuItem
                activeItem={activeItem}
                handler={() => setActiveItem('about me')}
                title="About me"
                location="/"
            />
            <MenuItem
                activeItem={activeItem}
                handler={() => setActiveItem('my projects')}
                title="My Projects"
                location="/projects"
            />
        </Menu>
    )
}
export default PageMenu;