import UserClass from "../UserClass";
import { screen, render, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Checking Img is rendered or not", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: "Yug",
          location: "India",
          avatar_url: "https://avatars.githubusercontent.com/u/143815412?v=4",
        }),
    }),
  );

  // Use act to wrap the render AND any immediate state updates
  await act(async () => {
    render(<UserClass />);
  });

  // Wait for the Name to change from "user_name" to "Yug"
  // This confirms the state update actually happened
  await waitFor(() => {
    // Adding "Name: " to match your <h1> rendering logic
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Name: Yug",
    );
  });

  const Img = screen.getByRole("img");
  await waitFor(() => {
    expect(Img).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/143815412?v=4",
    );
  });
});
