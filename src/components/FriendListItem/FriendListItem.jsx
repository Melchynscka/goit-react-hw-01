import css from "./FriendListItem.module.css"

export default function FriendlistItem({ friend: { avatar, name, isOnline } }) {
    const statusClasses = [css.text];
    if (isOnline) {
        statusClasses.push(css.isOnline)
    }
    else {
        statusClasses.push(css.isOfline)
    }
    return (
        <div className={css.card}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={statusClasses.join("")}>{isOnline ? "Online" : "Ofline"}</p>
        </div>
    );
}