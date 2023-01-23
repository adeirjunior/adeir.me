import Input from "./Input.tsx";
import Textarea from "./Textarea.tsx";

export default function Form() {
    return <>
        <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                    <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Full Name
                    </label>
                    <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Email Address
                    </label>
                    <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="subject"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Subject
                    </label>
                    <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Message
                    </label>
                    <Textarea 
                    placeholder="Type your message..." 
                    id="editor"
                    required
                    />
                </div>

                <div>
                    <button
                    class="hover:shadow-form rounded-md bg-gray-700 py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
    </>
}