import { render , screen, fireEvent } from '@testing-library/react';
import RadioButton from "./RadioButton";

const testFn = jest.fn();

it("renders radio button with data params and label", () => {
    const data = {"name":"35 см","slug":"35","price":"50","category":"size"};
    render(<RadioButton itemConfig={data} register={testFn}/>);

    const label = screen.getByText(/35 см/i);
    const input = screen.getByDisplayValue(/35/i);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("35");
});