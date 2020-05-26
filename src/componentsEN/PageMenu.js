import React, { useState } from 'react';
import { Menu, Grid, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem';
const PageMenu = () => {
    const langMenuStyle = {
        border: '1px solid white',
        padding: '10px 10px 10px 10px',
        outline: 'none'
    }
    const [activeItem, setActiveItem] = useState('about me');
    return (
        <div>
            <Responsive {...Responsive.onlyMobile} as={Grid} columns={2} stackable>
                <Grid.Row>
                    <Grid.Column floated="right" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Menu inverted secondary>
                            <Menu.Item
                                style={langMenuStyle}
                                as={Link}
                                to="/">
                                RU
                            </Menu.Item>
                            <Menu.Item
                                style={langMenuStyle}
                                as={Link}
                                active
                                to="/en">
                                EN
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column>
                        <Menu inverted secondary style={{ fontSize: '1.3em' }}>
                            <MenuItem
                                activeItem={activeItem}
                                handler={() => setActiveItem('about me')}
                                title="About me"
                                location="/en"
                            />
                            <MenuItem
                                activeItem={activeItem}
                                handler={() => setActiveItem('my projects')}
                                title="My Projects"
                                location="/en/projects"
                            />
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth} as={Grid} columns={2} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Menu inverted secondary style={{ fontSize: '1.3em' }}>
                            <MenuItem
                                activeItem={activeItem}
                                handler={() => setActiveItem('about me')}
                                title="About me"
                                location="/en"
                            />
                            <MenuItem
                                activeItem={activeItem}
                                handler={() => setActiveItem('my projects')}
                                title="My Projects"
                                location="/en/projects"
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column floated="right" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Menu inverted secondary>
                            <Menu.Item
                                style={langMenuStyle}
                                as={Link}
                                to="/">
                                RU
                            </Menu.Item>
                            <Menu.Item
                                style={langMenuStyle}
                                as={Link}
                                active
                                to="/en">
                                EN
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Responsive>
        </div>
    )
}
export default PageMenu;