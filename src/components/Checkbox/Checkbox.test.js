import { render , screen } from '@testing-library/react';
import Checkbox from "./Checkbox";

const mockRegister = jest.fn();

it("renders checkbox button with data params and label", () => {
    const data = {"name":"Моцарелла","slug":"mozarella","price":"100","category":"cheese"};
    render(<Checkbox itemConfig={data} register={mockRegister}/>);

    const label = screen.getByText(/Моцарелла/i);
    const input = screen.getByDisplayValue(/mozarella/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("mozarella");
});