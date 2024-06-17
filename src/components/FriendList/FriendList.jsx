import FriendlistItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export default function FriendList({items}) {
    return (
        <ul className={css.wrapper}>
            {items.map(item =>
                <li className={css.item} key={item.id}>
                    <FriendlistItem friend={item} />
                </li>)}
        </ul>
    );
}