import { render, screen } from "@testing-library/react";
import Card from "../Card";
import "@testing-library/jest-dom";

// Mock Data based on your JSON
const MOCK_DATA = {
  name: "Meemee's Ice Creams & Desserts",
  cloudinaryImageId: "df0247e7afe28af0df8f1fcf7d909a92",
  locality: "Meena Mehta Marg",
  areaName: "Fort Colaba",
  costForTwo: "₹500 for two",
  avgRating: 4.7,
  cuisines: ["Ice Cream", "Desserts"],
};

describe("Restaurant Card Component Tests", () => {
  it("should render Card component with restaurant name", () => {
    // Passing the mock data as a prop (assuming your component takes 'resData')
    render(<Card resData={MOCK_DATA} />);

    // Accessing the element by text
    const restaurantName = screen.getByText("Meemee's Ice Creams & Desserts");

    // Assertion
    expect(restaurantName).toBeInTheDocument();
  });

  it("should render Card component with cuisines", () => {
    render(<Card resData={MOCK_DATA} />);

    // Since cuisines are an array, checking if the string is present
    const cuisines = screen.getByText("Ice Cream, Desserts");

    expect(cuisines).toBeInTheDocument();
  });
});
