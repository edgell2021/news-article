describe("check name called", () => {
  test("it should trigger alert on name Kirk", () => {
    const names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];
    const inputText = "Kirk";
    expect(names).toContain(inputText);
  });
});
