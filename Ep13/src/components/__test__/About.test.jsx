import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe("These test are for practice and basic contact page testing", () => {

//test give fetch as undifined because it work on jsdom of Node.js not on browser fetch is property of
// browser API that is why we define "fetch" here to not get an error or warnings.
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            name: "Yug",
            location: "India",
            avatar_url: "https://avatars.githubusercontent.com/u/143815412?v=4",
          }),
      })
    );

    it("it should test the imgae is loading or not", () => {
        render(<About></About>)

        const heading = screen.getByText("About a developer")

        // expect(Image).toHaveAttitude("src", "https://avatars.githubusercontent.com/u/143815412?v=4")
        expect(heading).toBeTruthy()
    })
})