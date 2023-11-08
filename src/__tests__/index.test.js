const { isValidIdDoc, isValidEUVat } = require("..");

describe("isValidIdDoc", () => {
  it("should return false for missing parameters", () => {
    expect(isValidIdDoc()).toBe(false);
    expect(isValidIdDoc("123456789")).toBe(false);
    expect(isValidIdDoc("1234", null, "dni")).toBe(false);
  });

  it("should return false for invalid parameters", () => {
    expect(isValidIdDoc(123456789, "ES", "dni")).toBe(false);
    expect(isValidIdDoc("123456789", 123, "dni")).toBe(false);
    expect(isValidIdDoc("123456789", "ES", 123)).toBe(false);
  });

  it("should return false for an unsupported country", () => {
    expect(isValidIdDoc("123456789", "ZZ", "passport")).toBe(false);
  });

  it("should return false for an unsupported ID document type", () => {
    expect(isValidIdDoc("123456789", "ES", "invalidType")).toBe(false);
  });

  it("should return true for a valid id document", () => {
    expect(isValidIdDoc("47008288Z", "ES", "dni")).toBe(true);
  });

  it("should return true for a valid id document without specifying the type", () => {
    expect(isValidIdDoc("47008288Z", "ES")).toBe(true);
    expect(isValidIdDoc("Y4731627N", "ES")).toBe(true);
    expect(isValidIdDoc("paa333388", "ES")).toBe(true);
  });

  it("should return false for a valid id document with a wrong country specified", () => {
    expect(isValidIdDoc("47008288Z", "FR")).toBe(false);
  });

  it("should return true for a valid gic from DE", () => {
    expect(isValidIdDoc("l12341234", "DE", "gic")).toBe(true);
  });

  it("should return true for a valid passport from DE", () => {
    expect(isValidIdDoc("c123CFG45", "DE", "passport")).toBe(true);
  });

  it("should return true for a valid vat from DE", () => {
    expect(isValidIdDoc("DE12345678901", "DE", "vat")).toBe(true);
  });

  it("should return true for a valid dni from ES", () => {
    expect(isValidIdDoc("47008288Z", "ES", "dni")).toBe(true);
  });

  it("should return true for a valid nie from ES", () => {
    expect(isValidIdDoc("Y4731627N", "ES", "nie")).toBe(true);
  });

  it("should return true for a valid passport from ES", () => {
    expect(isValidIdDoc("paa333388", "ES", "passport")).toBe(true);
  });

  it("should return true for a valid vat from ES", () => {
    expect(isValidIdDoc("ES47008288Z", "ES", "vat")).toBe(true);
  });

  it("should return true for a valid cni from FR", () => {
    expect(isValidIdDoc("123456789012", "FR", "cni")).toBe(true);
  });

  it("should return true for a valid passport from FR", () => {
    expect(isValidIdDoc("12AB34567", "FR", "passport")).toBe(true);
  });

  it("should return true for a valid vat from FR", () => {
    expect(isValidIdDoc("FR12345678901", "FR", "vat")).toBe(true);
  });

  it("should return true for a valid cf from IT", () => {
    expect(isValidIdDoc("SCRGZL98R27H501I", "IT", "cf")).toBe(true);
  });

  it("should return true for a valid passport from IT", () => {
    expect(isValidIdDoc("AA1234567", "IT", "passport")).toBe(true);
  });

  it("should return true for a valid vat from IT", () => {
    expect(isValidIdDoc("IT07643520567", "IT", "vat")).toBe(true);
  });

  it("should return true for a valid cc from PT", () => {
    expect(isValidIdDoc("12345678 9 ZA1", "PT", "cc")).toBe(true);
  });

  it("should return true for a valid nif from PT", () => {
    expect(isValidIdDoc("123456789", "PT", "nif")).toBe(true);
  });

  it("should return true for a valid passport from PT", () => {
    expect(isValidIdDoc("P123456", "PT", "passport")).toBe(true);
  });

  it("should return true for a valid vat from PT", () => {
    expect(isValidIdDoc("PT123456789", "PT", "vat")).toBe(true);
  });

  it("should return true for a valid passport from AT", () => {
    expect(isValidIdDoc("A1234567", "AT", "passport")).toBe(true);
  });

  it("should return true for a valid vat from AT", () => {
    expect(isValidIdDoc("ATU12345678", "AT", "vat")).toBe(true);
  });

  it("should return true for a valid passport from BE", () => {
    expect(isValidIdDoc("KK1234567", "BE", "passport")).toBe(true);
  });

  it("should return true for a valid vat from BE", () => {
    expect(isValidIdDoc("BE0123456789", "BE", "vat")).toBe(true);
  });

  it("should return true for a valid passport from BG", () => {
    expect(isValidIdDoc("123456789", "BG", "passport")).toBe(true);
  });

  it("should return true for a valid vat from BG", () => {
    expect(isValidIdDoc("BG1234567890", "BG", "vat")).toBe(true);
  });

  it("should return true for a valid passport from HR", () => {
    expect(isValidIdDoc("123456789", "HR", "passport")).toBe(true);
  });

  it("should return true for a valid vat from HR", () => {
    expect(isValidIdDoc("HR12345678901", "HR", "vat")).toBe(true);
  });

  it("should return true for a valid passport from CY", () => {
    expect(isValidIdDoc("A1234567", "CY", "passport")).toBe(true);
  });

  it("should return true for a valid vat from CY", () => {
    expect(isValidIdDoc("CY12345678A", "CY", "vat")).toBe(true);
  });

  it("should return true for a valid passport from CZ", () => {
    expect(isValidIdDoc("12345678", "CZ", "passport")).toBe(true);
  });

  it("should return true for a valid vat from CZ", () => {
    expect(isValidIdDoc("CZ123456789", "CZ", "vat")).toBe(true);
  });

  it("should return true for a valid passport from DK", () => {
    expect(isValidIdDoc("123456789", "DK", "passport")).toBe(true);
  });

  it("should return true for a valid vat from DK", () => {
    expect(isValidIdDoc("DK12345678", "DK", "vat")).toBe(true);
  });

  it("should return true for a valid passport from EE", () => {
    expect(isValidIdDoc("AA1234567", "EE", "passport")).toBe(true);
  });

  it("should return true for a valid vat from EE", () => {
    expect(isValidIdDoc("EE123456789", "EE", "vat")).toBe(true);
  });

  it("should return true for a valid passport from FI", () => {
    expect(isValidIdDoc("AA1234567", "FI", "passport")).toBe(true);
  });

  it("should return true for a valid vat from FI", () => {
    expect(isValidIdDoc("FI12345672", "FI", "vat")).toBe(true);
  });

  it("should return true for a valid passport from GR", () => {
    expect(isValidIdDoc("AA1234567", "GR", "passport")).toBe(true);
  });

  it("should return true for a valid vat from GR", () => {
    expect(isValidIdDoc("EL123456789", "GR", "vat")).toBe(true);
  });
});

describe("isValidEUVat", () => {
  it("should return an object with isValid true if the request didn't fail for a valid VAT", async () => {
    const { isValid, userError, vatNumber } = await isValidEUVat(
      "W0184081H",
      "ES"
    );
    if (userError === "VALID") {
      expect(isValid).toBe(true);
    } else {
      expect(isValid).toBe(false);
    }
    expect(vatNumber).toBe("W0184081H");
  }, 30000);

  it("should return an object with isValid true if the request didn't fail for a valid VAT with country code", async () => {
    const { isValid, userError, vatNumber } = await isValidEUVat(
      "ESW0184081H",
      "ES"
    );
    if (userError === "VALID") {
      expect(isValid).toBe(true);
    } else {
      expect(isValid).toBe(false);
    }
    expect(vatNumber).toBe("W0184081H");
  }, 30000);

  it("should return an object with isValid false for an invalid VAT", async () => {
    const { isValid } = await isValidEUVat("W018408", "ES");
    expect(isValid).toBe(false);
  }, 30000);
});
