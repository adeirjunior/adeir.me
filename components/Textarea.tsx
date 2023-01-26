import { JSX } from "preact";
import TextareaBtn from "./TextareaBtn.tsx";

export default function Textarea(props: JSX.HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
            <label for={props.name} class="sr-only">Publish post</label>
            <textarea 
            {...props} 
            rows={8} 
            class="block outline-none font-medium px-0 w-full min-h-[25px] max-h-80 text-base text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
            ></textarea>
        </div>
    </div>
  )
}
