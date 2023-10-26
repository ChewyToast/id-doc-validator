const {
  validateNifES,
  validateNieES,
  validatePassportES,
  validateVatES,
} = require("../../country_validations/es");

describe("validateNifES", () => {
  it("should return true for valid DNI", () => {
    expect(validateNifES("92400040R")).toBe(true);
    expect(validateNifES("47008288z")).toBe(true);
    expect(validateNifES("01899814Z")).toBe(true);
  });

  it("should return false for invalid DNI", () => {
    expect(validateNifES("1234")).toBe(false);
    expect(validateNifES("12345678")).toBe(false);
    expect(validateNifES("12345678X1")).toBe(false);
    expect(validateNifES("12345678-X")).toBe(false);
  });

  it("should return false for invalid checksum", () => {
    expect(validateNifES("47008288a")).toBe(false);
    expect(validateNifES("92400040A")).toBe(false);
  });
});

describe("validateNieES", () => {
  it("should return true for valid NIE", () => {
    expect(validateNieES("Y7227117W")).toBe(true);
    expect(validateNieES("Y4731627N")).toBe(true);
    expect(validateNieES("X9153879V")).toBe(true);
    expect(validateNieES("Z3082433R")).toBe(true);
  });

  it("should return false for invalid NIE", () => {
    expect(validateNieES("12345678")).toBe(false);
    expect(validateNieES("12345678X1")).toBe(false);
    expect(validateNieES("12345678-X")).toBe(false);
    expect(validateNieES("A3082433R")).toBe(false);
    expect(validateNieES("47008288z")).toBe(false);
    expect(validateNieES("Z-3082433-R")).toBe(false);
  });

  it("should return false for invalid checksum", () => {
    expect(validateNieES("Y7227117A")).toBe(false);
    expect(validateNieES("Y4731627A")).toBe(false);
    expect(validateNieES("X9153879A")).toBe(false);
  });
});

describe("validatePassportES", () => {
  it("should return true for valid passport", () => {
    expect(validatePassportES("paa333388")).toBe(true);
    expect(validatePassportES("ZAB000234")).toBe(true);
    expect(validatePassportES("ZAB000234J")).toBe(true);
  });

  it("should return false for invalid passport", () => {
    expect(validatePassportES("12345678")).toBe(false);
    expect(validatePassportES("12345678X1")).toBe(false);
    expect(validatePassportES("12345678-X")).toBe(false);
    expect(validatePassportES("A3082433R")).toBe(false);
    expect(validatePassportES("47008288z")).toBe(false);
    expect(validatePassportES("Z-3082433-R")).toBe(false);
    expect(validatePassportES("ZA000234A")).toBe(false);
  });
});

describe("validateVatES", () => {
  it("should return true for valid VAT", () => {
    expect(validateVatES("ES47008288Z")).toBe(true);
    expect(validateVatES("ES92400040R")).toBe(true);
    expect(validateVatES("ES01899814Z")).toBe(true);
  });

  it("should return false for invalid VAT", () => {
    expect(validateVatES("ES12345678")).toBe(false);
    expect(validateVatES("ES12345678X1")).toBe(false);
    expect(validateVatES("ES12345678-X")).toBe(false);
    expect(validateVatES("US47008288z")).toBe(false);
    expect(validateVatES("ES-3082433-R")).toBe(false);
    expect(validateVatES("01899814Z")).toBe(false);
  });
});