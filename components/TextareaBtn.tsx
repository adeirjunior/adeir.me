import { ComponentChildren } from "preact";

type Props = {
    children: ComponentChildren;
};

export default function TextareaBtn({ children }: Props) {
  return (
    <button type="button" class="p-2 focus:outline-none text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
        {children}
    </button>
  )
}
