import USA from "./icons/usa";

async function LanguageSwitch() {

  return (
    <div className="flex items-center md:order-2">
          <button
            title="a"
            type="button"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <USA className="w-5 h-5 mr-2 rounded-full" />
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul className="py-2 font-medium">
              <li>
                <button
                  title="a"
                  type="button"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div
                    className="inline-flex items-center"
                  >
                    <USA className="h-3.5 w-3.5 rounded-full mr-2" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
  );
}

export default LanguageSwitch;
