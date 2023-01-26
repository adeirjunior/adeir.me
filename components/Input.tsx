import { JSX } from "preact";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      class="w-full rounded-md border border-[#e0e0e0] bg-white dark:border-gray-600 dark:bg-gray-800 py-3 px-6 text-base font-medium text-[#6B7280]  dark:text-white outline-none focus:border-[#6A64F1] dark:focus:shadow-md"
    />
  );
}
