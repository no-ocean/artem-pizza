import React, {useState, useEffect, useContext} from "react";
import CheckboxGroup from "../CheckboxGroup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ConfigContext } from "../../helpers/ConfigContext";
import { calculatePrice } from "../../helpers/calculatePrice";
import { getData } from "../../helpers/api";

const Configurator = () => {

    const [data, setData] = useState();
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
                setData(normalizeJson);
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
            sauces: "tomato",
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
                    <div className="col flex flex-col">
                        <span className="mb-10">Выберите размер: </span>
                        <div className="flex radiogroup">
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>30 см</span>
                                    <input
                                        type="radio" 
                                        value={30}
                                        data-price={0}
                                        {...register("size")}
                                    />
                                </label>
                            </div>
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>35 см</span>
                                    <input
                                        type="radio" 
                                        value={35}
                                        data-price={50}
                                        {...register("size")}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col flex flex-col">
                        <span className="mb-10">Выберите тесто: </span>
                        <div className="flex radiogroup">
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Тонкое</span>
                                    <input
                                        type="radio" 
                                        value={"thin"}
                                        data-price={0}
                                        {...register("dough")}
                                    />
                                </label>
                            </div>
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Пышное</span>
                                    <input
                                        type="radio" 
                                        value={"lush"}
                                        data-price={0}
                                        {...register("dough")}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col flex flex-col">
                        <span className="mb-10">Выберите соус: </span>
                        <div className="flex radiogroup">
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Томатный</span>
                                    <input
                                        type="radio" 
                                        value={"tomato"}
                                        data-price={0}
                                        {...register("sauces")}
                                    />
                                </label>
                            </div>
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Майонез</span>
                                    <input
                                        type="radio" 
                                        value={"mayo"}
                                        data-price={0}
                                        {...register("sauces")}
                                    />
                                </label>
                            </div>
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Острый</span>
                                    <input
                                        type="radio" 
                                        value={"spicy"}
                                        data-price={0}
                                        {...register("sauces")}
                                    />
                                </label>
                            </div>
                            <div className="radio mr-10">
                                <label className="flex flex-v-center">
                                    <span>Грибной</span>
                                    <input
                                        type="radio" 
                                        value={"mushroom"}
                                        data-price={0}
                                        {...register("sauces")}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
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