import Link from "next/link";
import path from "path";
import React from "react";
import axios from "axios";

export default function Masks({ images }: { images: string[] }) {
  console.log({ images: images });
  return (
    <div className="flex flex-col h-screen  justify-center items-center">
      {images.length == 0 && <h1>No Masks </h1>}
      {images.length > 0 &&
        images.map((mask: any) => (
          <div key={mask} className="">
            <a href={`/masks/${mask}`}>
              <p>{mask}</p>
            </a>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  console.log("getStaticProps in pages/masks/index.tsx");
  let res = await axios.get(`http://${process.env.NEXT_PUBLIC_IMAGES_API_HOST ?? "localhost"}/images`, {
    validateStatus: (status) => status < 500,
  });

  if (res.status !== 200) {
    return {
      props: {
        images: [],
      },
    };
  }

  let fileNames = res.data["images"].map((path: any) => path["filename"]);
  console.log({ fileNames: fileNames });

  let masks = fileNames.filter((fileName: string) => fileName.includes("_mask"));
  let images = fileNames.filter((fileName: string) => !fileName.includes("_mask"));
  let result = [];
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let mask = masks.find((mask: string) => mask.includes(image.split(".")[0]));

    if (mask !== undefined) {
      result.push(image);
    }
  }

  // console.log(res);
  // console.log(res);
  return {
    props: {
      images: result,
    },
  };
}
