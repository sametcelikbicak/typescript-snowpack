import { describe, expect, it } from "vitest";
import { setupCounter } from "../src/counter";

describe("counter tests", () => {
  describe("setupCounter", () => {
    it("should defined", () => {
      expect(setupCounter).toBeDefined();
    });

    it("should have 'Count is 0'", async () => {
      const expectedText = "Count is 0";
      const counterButton = document.createElement(
        "button"
      ) as HTMLButtonElement;

      setupCounter(counterButton);

      expect(counterButton.innerHTML).toEqual(expectedText);
    });

    it("should have 'Count is 1' when button clicked", async () => {
      const expectedText = "Count is 1";
      const counterButton = document.createElement(
        "button"
      ) as HTMLButtonElement;
      setupCounter(counterButton);

      counterButton.click();

      expect(counterButton.innerHTML).toEqual(expectedText);
    });
  });
});
