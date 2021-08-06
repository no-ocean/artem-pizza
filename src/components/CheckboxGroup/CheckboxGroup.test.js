import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxGroup from "./CheckboxGroup";

const mockRegister = jest.fn();

const data = [
    { "id": 1, "category": "cheese", "name": "Моцарелла", "slug": "mozarella", "price": "100" },
    { "id": 2, "category": "cheese", "name": "Чеддер", "slug": "cheddar", "price": "100" },
    { "id": 3, "category": "cheese", "name": "Дор Блю", "slug": "dor-blue", "price": "100" }
];

describe("default rendering checkbox group", () => {
    it("should render radiogroup component", () => {   
        render(<CheckboxGroup title="Добавьте сыр" data={data} register={mockRegister}/>);
        const checkboxGroup = screen.getByText(/Добавьте сыр/i);
        expect(checkboxGroup).toBeInTheDocument();
    });
    
    it("mozarella should not be checked", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={mockRegister}/>);
        const checkboxItem = screen.getByDisplayValue(/mozarella/i);
        expect(checkboxItem).not.toBeChecked();
    });
    
    it("cheddar should not be checked", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={mockRegister}/>);
        const checkboxItem = screen.getByDisplayValue(/cheddar/i);
        expect(checkboxItem).not.toBeChecked();
    });

    it("dor blue should not be checked", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={mockRegister}/>);
        const checkboxItem = screen.getByDisplayValue(/dor-blue/i);
        expect(checkboxItem).not.toBeChecked();
    });
});

describe("checkbox events", () => {
    it("should check checkboxes", () => {
        render(<CheckboxGroup  title="Добавьте сыр" data={data} register={mockRegister}/>);

        const checkbox = screen.getByDisplayValue(/mozarella/i);
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    })
})
