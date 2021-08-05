import React, {useState, useEffect, useContext} from "react";
import { radioData } from "../../helpers/radioData";
import RadioGroup from "../RadioGroup";
import CheckboxGroup from "../CheckboxGroup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ConfigContext } from "../../helpers/ConfigContext";
import { calculatePrice } from "../../helpers/calculatePrice";
import { getData } from "../../helpers/api";

const Configurator = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();
    const [context, setContext] = useContext(ConfigContext);

    useEffect(() => {
        const loadData = async () => {
            try {
                const json = await getData("ingredients");
                const normalizeJson = json.reduce((acc, item) => {
                    acc[item.slug] = item;
                    return acc;
                }, {})
                setData({...radioData, ...normalizeJson});
                setIsLoading(false);              
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        loadData();
    },[]);

    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            size: "30",
            dough: "thin",
            sauces: "tomate",
            cheese: ["cheddar"],
            vegetables: ["broccoli"],
            meat: ["bacon"]
        }
    });

    const values = watch();

    if(isLoading) {
        return <h1>LOADING...</h1>
    }

    if(error) {
        return <h1>ERROR: {error.message}</h1>
    }

    let finalPrice = calculatePrice(data, values, 200)
    
    const groupData = (groupName) => {
        return Object.values(data).filter((item) => {
            return item.category === groupName;
        });
    }

    const onSubmit = (orderData) => {
        setContext({orderData, finalPrice});
        history.push("/order");
    };

    return (
        <>
            <p>{JSON.stringify(data)}</p>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-30">
                    <RadioGroup 
                        title={"Выберите тесто"}
                        data={groupData("size")}
                        register={register}
                    />
                    <RadioGroup 
                        title={"Выберите тесто"}
                        data={groupData("dough")}
                        register={register}
                    />
                </div>
                <div className="row mb-30">
                    <RadioGroup 
                        title={"Выберите соус"}
                        data={groupData("sauces")}
                        register={register}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={"Добавьте сыр"}
                        data={groupData("cheese")}
                        register={register}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={"Добавьте овощи"}
                        data={groupData("vegetables")}
                        register={register}
                    />
                </div>
                <div className="row mb-30">
                    <CheckboxGroup 
                        title={"Добавьте мясо"}
                        data={groupData("meat")}
                        register={register}
                    />
                </div>
                <div className="row flex mb-30">
                    <div className="col">
                        <button className="btn btn-primary" >Заказать за {finalPrice} &#8381;</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Configurator;