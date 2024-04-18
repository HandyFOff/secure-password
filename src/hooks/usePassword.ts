import React from "react";
import { checkPassword } from "../utils/checkPassword";

export type Filters = Record<string, boolean>

export const usePassword = () => {
  const [password, setPassword] = React.useState("");
  const [passwordSecurity, setPasswordSecurity] = React.useState("Very Low");
  const [passwordLength, setPasswordLength] = React.useState(12);
  const [filters, setFilters] = React.useState<Filters>({
    uppercase: true,
    lowercase: true,
    symbols: true,
    numbers: true,
  });

  const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
  const numbers = "0123456789";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const generatePassword = React.useCallback(() => {
    const currentFilters = [
      filters.uppercase ? "uppercase" : null,
      filters.lowercase ? "lowercase" : null,
      filters.symbols ? "symbols" : null,
      filters.numbers ? "numbers" : null,
    ].filter((item) => item != null);

    const array = [];

    for (let i = 0; i < passwordLength; i++) {
      let randomId =
        currentFilters[Math.floor(Math.random() * currentFilters.length)];

      if (randomId === "lowercase")
        array.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      if (randomId === "uppercase")
        array.push(
          alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
        );
      if (randomId === "symbols")
        array.push(symbols[Math.floor(Math.random() * symbols.length)]);
      if (randomId === "numbers")
        array.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    setPassword(array.join(""));
    setPasswordSecurity(checkPassword(array.join("")));
  }, [filters, passwordLength, symbols]);

  return {
    password,
    setPasswordLength,
    setFilters,
    generatePassword,
    filters,
    passwordLength,
    passwordSecurity,
  };
};
