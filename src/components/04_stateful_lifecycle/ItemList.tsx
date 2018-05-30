import * as React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  height: auto;
  position: absolute;
  background-color: #888;
  color: white;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  height: 5rem;
  font-size: 2rem;
  line-height: 5rem;
  margin: 0;
  padding: 0 2rem;
  border-bottom: solid 1px white;
`;

export interface IItem {
  id: string;
  title: string;
  updatedAt: string;
}

class ItemList extends React.Component<{}, { items: IItem[] }> {
  private timerId?: any;
  private counter: number = 0;

  public constructor(props, context) {
    super(props, context);
    this.state = { items: [] };
  }

  public componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ items: this.createNewItems() });
    }, 1000);
  }

  public componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }
  }

  public render() {
    return (
      <List>
        {this.state.items.map(item => (
          <ListItem key={item.id}>
            {item.id} : {item.title} ({item.updatedAt})
          </ListItem>
        ))}
      </List>
    );
  }

  private createNewItems() {
    const newItem = {
      id: '' + this.counter++,
      title: 'item',
      updatedAt: '' + Date.now()
    };
    return [newItem].concat(this.state.items);
  }
}

export default ItemList;
