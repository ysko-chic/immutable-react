import React, {Component} from 'react';
import User from './User';

class UserList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }

    render() {
        console.log("UserList 가 렌더링 되고 있어요!!!");
        const {users} = this.props;
        const renderUsers = users.map(user => (
            <User key={user.id} user={user} />
        ))

        return(
            <div>
                {renderUsers}
            </div>
        )
    }
}

export default UserList;