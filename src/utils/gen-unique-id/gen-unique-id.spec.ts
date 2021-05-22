import genUniqueId from ".";

describe("gen-unique-id module", () => {
  it("should return a string", () => {
    expect(typeof genUniqueId()).toBe("string");
  });
  it("should not be have same value for different value", () => {
    const id1 = genUniqueId();
    const id2 = genUniqueId();
    expect(id1).not.toEqual(id2);
  });
});
