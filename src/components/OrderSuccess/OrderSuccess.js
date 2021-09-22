import { useHistory } from "react-router";
import Check from "../Check";


const OrderSuccess = () => {

    const history = useHistory();

    const onClose = () => {
        history.push("/");
    }

    return (
        <div className="modal">
            <div className="modal-header flex flex-v-center">
                <div className="wide flex flex-v-center space-between">
                    <h2 className="modal-title">Оформление заказа</h2>
                    <button onClick={onClose} className="btn-close">
                        <span className="mdi mdi-close mdi-24px"></span>
                    </button>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-content flex flex-col mb-30 flex-v-center">
                    <div className="success-icon">
                        <span className="mdi mdi-checkbox-marked-circle"></span>
                    </div>
                    <h3>Спасибо за заказ!</h3>
                    <p className="mt-0">Заказ успешно оплачен, ждите вашу пиццу уже через час</p>
                    <div className="mt-30 mb-10" >
                        <Check />
                    </div>
                    <button className="btn btn-primary" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;