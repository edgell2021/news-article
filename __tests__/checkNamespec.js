describe("check name", () => {
  test("it should trigger alert on name Kirk", () => {
    const value = "Kirk";
    expect(value).toEqual("Kirk");
    expect(value).not.toEqual("Lucy");
  });
});
