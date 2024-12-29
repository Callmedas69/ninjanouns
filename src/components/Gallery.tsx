"use client";

import Image from "next/image";
import React from "react";
import { ninjaGallery } from "./Constants";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

export function Gallery() {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto mt-6">
      <div className="text-3xl sm:text-4xl text-center font-bold py-6">
        HIERARCHY
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-1 md:gap-5 mt-5">
        {ninjaGallery.map((ninja, index) => (
          <div key={index}>
            <Card className="flex flex-col max-w-[250px] justify-center items-center bg-transparent border-0">
              <CardContent className="pt-5">
                <Image
                  src={ninja.ninjaSrc}
                  alt={ninja.ninjaName}
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </CardContent>
              <div className="flex flex-col justify-center items-center text-center text-wrap">
                <CardTitle className=" text-lg md:text-2xl text-white">
                  {ninja.ninjaName}
                </CardTitle>
                <CardFooter className="h-24 text-wrap text-white row-span-2 items-start text-center text-xs md:text-lg">
                  {ninja.ninjaPosition}
                </CardFooter>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
