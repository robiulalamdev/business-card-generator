import {
  useCreateTicketMutation,
  useGetTicketsQuery,
} from "@/redux/features/ticket/ticketApi";
import { Button, Dialog, Spinner } from "@material-tailwind/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import randomstring from "randomstring";
import useInputPattern from "@/lib/hooks/useInputPattern";

const CreateTicketPopup = ({ open, close }) => {
  const [createTicket, { isLoading: ticketLoading }] =
    useCreateTicketMutation();
  const { data } = useGetTicketsQuery();
  const { handleSubmit, register, setValue, reset } = useForm();
  const { handleNumber } = useInputPattern();

  const handleSave = async (data) => {
    const options = {
      data: data,
    };
    const result = await createTicket(options);
    if (result?.data?.success) {
      toast.success("Data Save Success!");
      reset();
    } else {
      toast.error("Data Save Failed!");
    }
  };

  const handleGenerateCode = async () => {
    const code = await randomstring.generate({ length: 5, charset: "numeric" });
    setValue("code", code);
  };
  return (
    <Dialog size="xs" open={open} handler={() => close(false)} className="px-1">
      <form
        onSubmit={handleSubmit(handleSave)}
        className="max-w-[400px] w-full mx-auto bg-white h-fit px-3 py-3 my-5 rounded-md shadow border"
      >
        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Email
          </span>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="grid grid-cols-3 items-end gap-4">
          <div className="col-span-2">
            <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
              Code
            </span>
            <input
              {...register("code", { required: true })}
              type="number"
              onInput={handleNumber}
              className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
              placeholder="Enter Code"
              required
            />
          </div>
          <Button
            onClick={() => handleGenerateCode()}
            type="button"
            className="h-10 w-full bg-blue-600  text-current text-white rounded hover:shadow-none shadow-none"
          >
            Generate
          </Button>
        </div>

        <div className="mt-5 col-span-4">
          <Button
            type="submit"
            disabled={ticketLoading}
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-10 shadow-none hover:shadow-none rounded bg-primary"
          >
            {ticketLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            Submit
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default CreateTicketPopup;
