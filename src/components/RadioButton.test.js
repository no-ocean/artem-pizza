import { render , screen, fireEvent } from '@testing-library/react';
import RadioButton from "./RadioButton";

it("renders radio button with values and default check", () => {
    const data = {name: "size", val: "30 см", label: "30 см", price: 0};
    const order = {size: "30 см", sizePrice: 0};

    render(<RadioButton itemConfig={data} order={order}/>);

    const input = screen.getByDisplayValue(/30 см/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("30 см");
    expect(input.name).toBe("size");
    expect(input).toBeChecked();
});