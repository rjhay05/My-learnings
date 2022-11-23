import Card from "../UI/Card/Card";
import style from './UserList.module.css';

function UsersList(props) {


    if(props.items.length === 0){
        return;
    }

    return (
        <Card className={style[ 'users-list' ]}>
            <ul>
                {props.items.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} ({item.age} years old)
                        </li>
                    )
                })}
            </ul>
        </Card>

    )
}

export default UsersList;