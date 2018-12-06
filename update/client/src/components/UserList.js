import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUsersQuery = gql`
    {
        users {
            name
            github
        }
    }
`;

class UserList extends Component {
    displayUsers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading users...</div> );
        } else {
            return data.users.map(user => {
                return(
                    <div>
                        <li >
                        { user.name }
                        </li>

                        <li >
                        { user.github }
                        </li>

                    </div>
                );
            })
        }
    }

    render(){
        return(
            <div>
                <ul id="user-list">
                    { this.displayUsers() }

                </ul>
            </div>
        );
    }
}

export default graphql(getUsersQuery)(UserList);
