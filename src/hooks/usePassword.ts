import React, { useContext } from "react";
import { checkPassword } from "../utils/checkPassword";
import HistoryContext from "../context/history";
import { formatDataTime } from "../utils/formatDataTime";
import { v4 as uuidv4 } from 'uuid';

export type Filters = Record<string, boolean>;

export const usePassword = () => {
  const [password, setPassword] = React.useState("");
  const history = useContext(HistoryContext);
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

    const strength = checkPassword(array.join(""));
    const password = array.join("");
    const timestamp = formatDataTime(new Date());
    const id = uuidv4();

    setPassword(password);
    setPasswordSecurity(strength);
    history?.addPassword({id, password, strength, timestamp});
  }, [filters, passwordLength, symbols, history]);

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
