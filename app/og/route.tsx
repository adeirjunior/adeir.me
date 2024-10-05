import { generateRandomGradient } from "@/app/(utils)/utils";
import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Adeir.me";

  const background = generateRandomGradient();

  return new ImageResponse(
    (
      <div
        tw={`flex flex-col w-full h-full items-center justify-center`}
        style={{
          background,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter:
            "progid:DXImageTransform.Microsoft.gradient(startColorstr='#22c1c3', endColorstr='#fdbb2d', GradientType=1)",
        }}
      >
        <div tw="flex flex-col md:flex-row w-full h-full bg-[#ffffff66] py-12 px-4 md:items-center justify-between p-8">
          <h1
            style={{
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "4rem",
              mixBlendMode: "difference",
              color: "#00000099",
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
