import Button from "../Button/Button";
import Card from "../Card/Card";
import style from './Modal.module.css';

function Modal(props) {

    return (
        <div>
           <div className={style.backdrop} onClick={props.onConfirm}>
                <Card className={style.modal}>
                    <div className={style.header}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={style.content}>
                        {props.message}
                    </div>
                    <div className={style.actions}>
                        <Button onClick={props.onConfirm}>Confirm</Button>
                    </div>
                </Card>
           </div>
        </div>
    )

}

export default Modal;