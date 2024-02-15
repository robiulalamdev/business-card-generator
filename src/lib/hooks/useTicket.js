import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTicket = () => {
  const { ticket } = useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const refetch = () => {
    setIsLoading(true);
    if (ticket) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    refetch();
  }, [ticket]);

  return {
    isLoading,
    ticket,
    isValid,
    refetch,
  };
};

export default useTicket;
