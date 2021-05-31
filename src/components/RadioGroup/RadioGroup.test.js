import { render, screen, fireEvent } from "@testing-library/react";
import RadioGroup from "./RadioGroup";

const data = [
    { id: 1, name: "size", val: "30 см", label: "30 см", price: 0 },
    { id: 2, name: "size", val: "35 см", label: "35 см", price: 50 }
];

const order = { size: "30 см" };

describe("default rendering radiogroup", () => {
    it("should render radiogroup component", () => {   
        render(<RadioGroup title="Размер" data={data} order={order}/>);
        const radioGroup = screen.getByText(/размер/i);
        expect(radioGroup).toBeInTheDocument();
    });
    
    it("should be default checked radiobutton", () => {
        render(<RadioGroup title="Размер" data={data} order={order}/>);
        const radioButton = screen.getByDisplayValue(/30 см/i);
        expect(radioButton).toBeChecked();
    });
    
    it("should not be default checked radiobutton", () => {
        render(<RadioGroup title="Размер" data={data} order={order}/>);
        const radioButton = screen.getByDisplayValue(/35 см/i);
        expect(radioButton).not.toBeChecked();
    });
    
});

describe("events", () => {
    it("should toggle radiobuttons", () => {
        const handleRadio = jest.fn();
    
        render(<RadioGroup title="Размер" data={data} order={order} onChange={handleRadio}/>);
        const radioButton = screen.getByDisplayValue(/35 см/i);
        expect(radioButton).not.toBeChecked();
    
        fireEvent.click(radioButton);
        expect(radioButton).toBeChecked();
    });
});