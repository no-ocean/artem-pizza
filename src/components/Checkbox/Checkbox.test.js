import { render , screen } from '@testing-library/react';
import Checkbox from "./Checkbox";
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();

it("renders checkbox button with values and default check", () => {
    const data = {name: "cheese", val: "Моцарелла", label: "Моцарелла", price: 29};
    
    render(<Checkbox itemConfig={data} register={register}/>);

    const input = screen.getByDisplayValue(/Моцарелла/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Моцарелла");
    expect(input.name).toBe("cheese");
    expect(input).toBeChecked();
});