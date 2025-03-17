"use client";

import { Tooltip } from "react-tooltip";
import {
  IoEyeOutline,
  IoEyeOffOutline,
  IoWarningOutline,
} from "react-icons/io5";
import clsx from "clsx";
import { useLogin } from "../hooks/use-login";

const inputClassName =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400";

const tooltipId = "login-tooltip";

export const LoginForm = () => {
  const {
    handleSubmit,
    onSubmit,
    errors,
    register,
    passwordRegex,
    viewPassword,
    setViewPassword,
    errorMessage,
  } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              Email
              {errors.email && (
                <div
                  data-tooltip-content={"Invalid email format"}
                  data-tooltip-id={tooltipId}
                >
                  <IoWarningOutline
                    size={15}
                    className="inline-block ml-2 mb-1 text-red-600"
                  />
                </div>
              )}
            </label>
            <input
              type="email"
              className={clsx(inputClassName, {
                "focus:ring-red-500 focus:border-red-500": errors.email,
              })}
              placeholder="your@email.com"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              Password
              {errors.email && (
                <div
                  data-tooltip-content={
                    "Password must be 6 chars or more long and contains at least one letter"
                  }
                  data-tooltip-id={tooltipId}
                >
                  <IoWarningOutline
                    size={15}
                    className="inline-block ml-2 mb-1 text-red-600"
                  />
                </div>
              )}
            </label>
            <div className="relative">
              <input
                type={viewPassword ? "text" : "password"}
                className={clsx(inputClassName, {
                  "focus:ring-red-500 focus:border-red-500": errors.password,
                })}
                placeholder="••••••••"
                {...register("password", {
                  required: true,
                  pattern: passwordRegex,
                })}
              />
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600"
                type="button"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {!viewPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>
          </div>

          <p className="flex items-center my-3 text-sm text-red-600">
            {errorMessage && (
              <>
                <IoWarningOutline className="mr-2" />
                {errorMessage}
              </>
            )}
          </p>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </form>

        <Tooltip id={tooltipId} />
      </div>
    </div>
  );
};
