function CircleWavy({className}: { className?: string}) {
  return (
    <svg className={`animate-spin-slow ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="none" d="M0 0h256v256H0z" />
      <path fill="#990100" d="M240 128c0 10.442-7.51 18.274-14.138 25.185-3.772 3.933-7.673 8-9.146 11.563-1.355 3.273-1.437 8.696-1.516 13.94-.147 9.758-.314 20.819-8.004 28.508-7.69 7.69-18.75 7.857-28.509 8.004-5.244.08-10.667.161-13.94 1.516-3.562 1.473-7.63 5.374-11.562 9.146C146.275 232.49 138.442 240 128 240c-10.443 0-18.274-7.51-25.185-14.138-3.933-3.772-8-7.673-11.563-9.146-3.273-1.355-8.695-1.437-13.94-1.516-9.758-.147-20.819-.314-28.508-8.004s-7.857-18.75-8.004-28.508c-.08-5.244-.161-10.666-1.516-13.94-1.473-3.563-5.374-7.63-9.146-11.563C23.51 146.275 16 138.442 16 128s7.51-18.274 14.138-25.185c3.772-3.933 7.673-8 9.146-11.563 1.355-3.273 1.437-8.696 1.516-13.94.147-9.758.314-20.819 8.004-28.508 7.69-7.69 18.75-7.857 28.509-8.004 5.244-.08 10.666-.161 13.94-1.516 3.562-1.473 7.63-5.374 11.562-9.146C109.725 23.51 117.558 16 128 16c10.443 0 18.274 7.51 25.185 14.138 3.933 3.772 8 7.673 11.563 9.146 3.273 1.355 8.695 1.437 13.94 1.516 9.758.147 20.819.314 28.508 8.004s7.857 18.75 8.004 28.509c.08 5.243.161 10.665 1.516 13.939 1.473 3.563 5.374 7.63 9.146 11.563C232.49 109.725 240 117.558 240 128Z" />
    </svg>
  );
}

export default CircleWavy;
