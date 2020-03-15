//Necessary dependencies and components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Menu } from 'semantic-ui-react'
import { doFetchNews } from '../actions/Article'

const applyQueryState = query => () => ({
  query,
});

class SearchNews extends Component {
  constructor(props) {
    super(props);
     this.state = {
      query: "",
    };

     this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange({ target }) {
    this.setState(applyQueryState(target.value));
  }

  onSubmit(event) {
    const { query } = this.state;
     if (query) {
      this.props.onFetchNews(query);
       this.setState(applyQueryState(""));
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className='navbar'>
        <Menu>
          <Menu.Item name='welcome'>
            <h2>Hacker News</h2>
          </Menu.Item>
          <Menu.Item name='searchBar'>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Input icon={<Icon name='search' inverted circular link />} placeholder='Search here...' type='text' value={this.state.query} onChange={this.onChange} />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

 const mapDispatchToProps = dispatch => ({
  onFetchNews: query => dispatch(doFetchNews(query)),
});

export default connect(null, mapDispatchToProps)(SearchNews);