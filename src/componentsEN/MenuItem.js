import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
const MenuItem = ({activeItem,handler,title,location})=>(
    <Menu.Item 
    name={title.toLowerCase()}
    active={activeItem === title.toLowerCase()} 
    onClick={handler}
    as = {Link}
    to={location}
    style={{ outline: 'none'}}>
      {title}
  </Menu.Item>
)
export default MenuItem;
