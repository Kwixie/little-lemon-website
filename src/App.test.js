import { render, screen } from "@testing-library/react";
import SpecialsSection from "./components/sections/SpecialsSection";

test("renders all three week specials", () => {
  render(<SpecialsSection />);
  expect(screen.getAllByText("Grilled Chicken")[0]).toBeInTheDocument();
  expect(screen.getAllByText("Greek Sallad")[0]).toBeInTheDocument();
  expect(screen.getAllByText("Mozarella Appetizer")[0]).toBeInTheDocument();
});
