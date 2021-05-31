import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxGroup from "./CheckboxGroup";

const data = [
    { id: 1, name: "cheese", val: "Моцарелла", label: "Моцарелла", price: 29 },
    { id: 2, name: "cheese", val: "Чеддер", label: "Чеддер", price: 29 },
    { id: 3, name: "cheese", val: "Дор Блю", label: "Дор Блю", price: 29 }
];

const order = { cheese: ["Моцарелла"] };

describe("default rendering checkbox group", () => {
    it("should render radiogroup component", () => {   
        render(<CheckboxGroup title="Добавьте сыр" data={data} order={order}/>);
        const checkboxGroup = screen.getByText(/Добавьте сыр/i);
        expect(checkboxGroup).toBeInTheDocument();
    });
    
    it("should be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} order={order}/>);
        const checkboxItem = screen.getByDisplayValue(/Моцарелла/i);
        expect(checkboxItem).toBeChecked();
    });
    
    it("should not be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} order={order}/>);
        const checkboxItem = screen.getByDisplayValue(/Чеддер/i);
        expect(checkboxItem).not.toBeChecked();
    });

    it("should not be default checked radiobutton", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} order={order}/>);
        const checkboxItem = screen.getByDisplayValue(/Дор Блю/i);
        expect(checkboxItem).not.toBeChecked();
    });
});

describe("events", () => {
    it("should uncheck and check default checked checkbutton", () => {
        const handleEvent = jest.fn();
    
        render(<CheckboxGroup title="Добавьте сыр" data={data} order={order} onChange={handleEvent}/>);
        const checkboxItem = screen.getByDisplayValue(/Моцарелла/i);
        expect(checkboxItem).toBeChecked();
    
        fireEvent.click(checkboxItem);
        expect(checkboxItem).not.toBeChecked();

        fireEvent.click(checkboxItem);
        expect(checkboxItem).toBeChecked();
    });

    it("should check and uncheck second checkbutton", () => {
        const handleEvent = jest.fn();
    
        render(<CheckboxGroup title="Добавьте сыр" data={data} order={order} onChange={handleEvent}/>);
        const checkboxItem = screen.getByDisplayValue(/Чеддер/i);
        expect(checkboxItem).not.toBeChecked();
    
        fireEvent.click(checkboxItem);
        expect(checkboxItem).toBeChecked();

        fireEvent.click(checkboxItem);
        expect(checkboxItem).not.toBeChecked();
    });

    it("should check and uncheck third checkbutton", () => {
        const handleEvent = jest.fn();
    
        render(<CheckboxGroup title="Добавьте сыр" data={data} order={order} onChange={handleEvent}/>);
        const checkboxItem = screen.getByDisplayValue(/Дор Блю/i);
        expect(checkboxItem).not.toBeChecked();
    
        fireEvent.click(checkboxItem);
        expect(checkboxItem).toBeChecked();

        fireEvent.click(checkboxItem);
        expect(checkboxItem).not.toBeChecked();
    });
});