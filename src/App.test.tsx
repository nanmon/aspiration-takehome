import { fireEvent, render, screen } from "@testing-library/react";
import Wrapper from "./support/Wrapper";
import App from "./App";

describe("<App/>", () => {
  it("renders loading text", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const element = screen.getByText(/^Loading...$/);
    expect(element).toBeInTheDocument();
  });

  it("redirects to /react", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const title = await screen.findByText(/^react$/);
    expect(title).toBeInTheDocument();
    const subtopic = await screen.findByText(/^vue$/);
    expect(subtopic).toBeInTheDocument();
    const stargazers = await screen.findByText("⭐️ 4");
    expect(stargazers).toBeInTheDocument();
  });

  it('searches by term "angular"', async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "angular" } });
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);
    const title = await screen.findByText(/^angular$/);
    expect(title).toBeInTheDocument();
  });

  it("can click on a related topic", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const relatedTopic = await screen.findByText(/^vue$/, { selector: "a" });
    fireEvent.click(relatedTopic);
    const title = await screen.findByText(/^vue$/, { selector: "h1" });
    expect(title).toBeInTheDocument();
  });
});
