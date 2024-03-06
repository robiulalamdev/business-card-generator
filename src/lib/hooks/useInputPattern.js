const useInputPattern = () => {
  const handleNumber = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const handleNumberAndComma = (e) => {
    e.target.value = e.target.value.replace(/[^0-9,]/g, "");
  };

  const handleAlphabeticInput = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
  };

  const handlePhoneNumberInput = (e) => {
    let inputValue = e.target.value;

    // Remove all characters except digits and the characters '+', '-', and whitespace
    inputValue = inputValue.replace(/[^0-9+\-\s]/g, "");

    // Add "+1" to the beginning of the input value if it's not already there
    if (!inputValue.startsWith("+1")) {
      inputValue = "+1" + inputValue;
    }

    // Limit the length to 12 characters (including "+1")
    inputValue = inputValue.substr(0, 12);

    // Update the input value
    e.target.value = inputValue;
  };

  const handleAmount = async (e) => {
    const input = e.target.value.replace(/[^0-9,]/g, "");
    const numericValue =
      input.trim() === ""
        ? ""
        : input.includes(",")
        ? parseFloat(input.replace(/,/g, ""))
        : parseInt(input, 10);
    e.target.value = numericValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  };

  return {
    handleNumber,
    handleNumberAndComma,
    handleAlphabeticInput,
    handlePhoneNumberInput,
    handleAmount,
  };
};

export default useInputPattern;
