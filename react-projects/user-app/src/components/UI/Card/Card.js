import style from './Card.module.css';
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={`${style.card} ${classes}`}>{props.children}</div>;
}

export default Card;