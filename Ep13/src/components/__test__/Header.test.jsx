import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../Store/appStore"; 
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {

    // Test Case 1: Check for text "Home"
    it("should render Header component with a Home link", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const homeText = screen.getByText("Home");
        expect(homeText).toBeInTheDocument();
    });

    // Test Case 2: Check for Login button by Role
    it("should render Header component with a Login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // Being specific with the name ensures you find the right button
        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).toBeInTheDocument();
    });

    // Test Case 3: fireEvent click and check for Logout
    it("should change Login button to Logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });
        
        // Simulate the click
        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });
        expect(logoutButton).toBeInTheDocument();
    });
});