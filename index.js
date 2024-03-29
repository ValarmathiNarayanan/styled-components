import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

let Input = styled.input`
  background-color: lightblue;
`;

let User = styled.div`
  width: 100px;
`;

let UserText = styled.p`
  color: black;
  font-size: 14px;
`

let UserColor = styled.div`
  width: 30px;
  height: 30px;
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      firsName: '',
      lastName: '',
      color: '',
      users: [{
        firsName: 'Inal',
        lastName: 'Karov',
        color: 'green'
      }]
    }
  }

  submit = () => {
    let {
      firsName,
      lastName,
      color,
      users
    } = this.state;

    users.push({
      firsName,
      lastName,
      color
    })
  }

  render() {
    let {
      firsName,
      lastName,
      color,
      users
    } = this.state;

    return(
      <div>
        <form>
          <Input placeholder='FirstName' type='text' value={firsName} />
          <Input placeholder='lastName' type='text' value={lastName} />
          <Input placeholder='Company ' type='text' value={color} />
          <input onClick={this.submit} value='Submit' type='button' />
        </form>
        <div>
          {
            users.map((user) => {
              <User>
                <UserText>{user.firsName}</UserText>
                <UserText>{user.lastName}</UserText>
                <UserColor color={user.color} />
              </User>
            })
          }
        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)