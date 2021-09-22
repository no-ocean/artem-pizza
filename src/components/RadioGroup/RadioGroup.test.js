import { render, screen, fireEvent } from "@testing-library/react";
import RadioGroup from "./RadioGroup";

const mockRegister = jest.fn();

const data = [
    { "id": 1, "category": "size", "name": "30 см", "slug": "30", "price": "0" },
    { "id": 2, "category": "size", "name": "35 см", "slug": "35", "price": "50" }
];

describe("default rendering radiogroup", () => {
    it("should render radiogroup component", () => {   
        render(<RadioGroup title="Размер" data={data} register={mockRegister}/>);
        const radioGroup = screen.getByText(/размер/i);
        expect(radioGroup).toBeInTheDocument();
    });
    
    it("should not be default checked 30 radiobutton", () => {
        render(<RadioGroup title="Размер" data={data} register={mockRegister}/>);
        const radioButton = screen.getByDisplayValue(/30/i);
        expect(radioButton).not.toBeChecked();
    });
    
    it("should not be default checked 35 radiobutton", () => {
        render(<RadioGroup title="Размер" data={data} register={mockRegister}/>);
        const radioButton = screen.getByDisplayValue(/35/i);
        expect(radioButton).not.toBeChecked();
    });
    
});

describe("radiobutton event", () => {
    it("should check radiobutton", () => {    
        render(<RadioGroup title="Размер" data={data} register={mockRegister}/>);

        const radioButton = screen.getByDisplayValue(/35/i);
        expect(radioButton).not.toBeChecked();
    
        fireEvent.click(radioButton);
        expect(radioButton).toBeChecked();
    });
});