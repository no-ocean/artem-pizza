import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxGroup from "./CheckboxGroup";
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();

const data = {
    mozarella: { id: 1, name: "cheese", val: "Моцарелла", label: "Моцарелла", price: 29 },
    cheddar: { id: 2, name: "cheese", val: "Чеддер", label: "Чеддер", price: 29 },
    dorblu: { id: 3, name: "cheese", val: "Дор Блю", label: "Дор Блю", price: 29 }
};

describe("default rendering checkbox group", () => {
    it("should render radiogroup component", () => {   
        render(<CheckboxGroup title="Добавьте сыр" data={data} register={register}/>);
        const checkboxGroup = screen.getByText(/Добавьте сыр/i);
        expect(checkboxGroup).toBeInTheDocument();
    });
    
    it("should be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={register}/>);
        const checkboxItem = screen.getByDisplayValue(/Моцарелла/i);
        expect(checkboxItem).toBeChecked();
    });
    
    it("should not be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={register}/>);
        const checkboxItem = screen.getByDisplayValue(/Чеддер/i);
        expect(checkboxItem).not.toBeChecked();
    });

    it("should not be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={register}/>);
        const checkboxItem = screen.getByDisplayValue(/Дор Блю/i);
        expect(checkboxItem).not.toBeChecked();
    });
});
