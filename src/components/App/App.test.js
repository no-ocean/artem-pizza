import { fireEvent, render, screen } from '@testing-library/react';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("App", () => {

    describe("on constructor page load", () => {
        it("renders h1 header", () => {
            render(<BrowserRouter><App /></BrowserRouter>);
            const headerElement = screen.getByText(/Собери/i);
            expect(headerElement).toBeInTheDocument();
        });
    });

    describe("on login click", () => {
        it("navigates to login page", () => {
            const history = createMemoryHistory();
            const { container, getByText } = render(
                <BrowserRouter history={history}>
                    <App />
                </BrowserRouter>
            );

            expect(container.innerHTML).toMatch("Собери");

            fireEvent.click(getByText(/login/i));
            expect(container.innerHTML).toMatch("Авторизация");
        });
    });

    describe("on app click", () => {
        it("navigates to constructor page", () => {
            const history = createMemoryHistory();
            const { container, getByText } = render(
                <BrowserRouter history={history}>
                    <App />
                </BrowserRouter>
            );

            fireEvent.click(getByText(/login/i));
            expect(container.innerHTML).toMatch("Авторизация");
            fireEvent.click(getByText(/app/i));
            expect(container.innerHTML).toMatch("Собери");
        });
    });
});