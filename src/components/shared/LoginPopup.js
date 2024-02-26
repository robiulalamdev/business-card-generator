import { SECRETE_TOKEN } from "@/lib/global";
import { useLoginMutation } from "@/redux/features/user/userApi";
import { Button, Dialog } from "@material-tailwind/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import { AuthContext } from "../context/AuthContext";

const LoginPopup = ({ open, close }) => {
  const { setUser } = useContext(AuthContext);
  const [login, { isLoading }] = useLoginMutation();
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const options = {
      data: data,
    };
    const result = await login(options);
    if (result?.data?.success) {
      localStorage.setItem(SECRETE_TOKEN, result?.data?.accessToken);
      setUser(result?.data?.user);
      toast.success("Login Success!");
      reset();
    }
    if (
      result?.error?.data?.success === false &&
      result?.error?.data?.type === "email"
    ) {
      setError("email", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
    if (
      result?.error?.data?.success === false &&
      result?.error?.data?.type === "password"
    ) {
      setError("password", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
  };
  return (
    <Dialog size="xs" open={open}>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-[400px] w-full mx-auto bg-white h-fit px-3 py-5 rounded-md shadow border my-8"
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
          {errors.email && (
            <small className="text-red-500 text-xs italic block">
              {errors.email.message}
            </small>
          )}
        </div>
        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Password
          </span>
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full h-10 bg-gray-100 outline-none px-2 rounded text-sm"
            placeholder="Enter Password"
            required
          />
          {errors.password && (
            <small className="text-red-500 text-xs italic block">
              {errors.password.message}
            </small>
          )}
        </div>

        <div className="mt-5 col-span-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-10 shadow-none hover:shadow-none rounded bg-primary"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            Login
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default LoginPopup;
