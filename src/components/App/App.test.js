import { render, screen } from '@testing-library/react';
import App from "./App";

test("renders h1 header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Собери/i);
    expect(headerElement).toBeInTheDocument();
});