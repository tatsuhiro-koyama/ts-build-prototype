import * as React from 'react';
import styled from 'styled-components';

const MenuButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  border: solid 0.5px white;
  background-color: black;
  color: white;
  font-size: 32px;
  line-height: 64px;
  text-align: center;
`;

const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 64px;
  bottom: 0;
  background-color: #222;
  color: white;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  height: 5rem;
  font-size: 2rem;
  line-height: 5rem;
  margin: 0;
  padding: 0 2rem;
  border-bottom: solid 1px white;
`;

class Menu extends React.Component<
  { menuList: string[] },
  { menuOpen: boolean }
> {
  public constructor(props, context) {
    super(props, context);
    this.state = { menuOpen: false };
  }

  public render() {
    return (
      <div>
        {this.state.menuOpen ? this.renderMenuList() : null}
        <MenuButton onClick={this.onClickMenuButton}>：</MenuButton>
      </div>
    );
  }

  public onClickMenuButton = () => {
    const menuOpenState = this.state.menuOpen;
    this.setState({ menuOpen: !menuOpenState });
  };

  private renderMenuList() {
    return (
      <MenuList>
        {this.props.menuList.map((menuItem, index) => (
          <MenuItem key={index}>{menuItem}</MenuItem>
        ))}
      </MenuList>
    );
  }
}

export default Menu;
