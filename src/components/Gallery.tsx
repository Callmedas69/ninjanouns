"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { ninjaGallery } from "./Constants";

export function Gallery() {
  return (
    <div className="flex flex-col mx-auto max-w-[1200px] justify-center items-center my-10">
      <div className="text-4xl text-left">GALLERY</div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-10">
        {ninjaGallery.map((ninja, index) => (
          <div key={index}>
            <CardContainer className="inter-var p-0 m-0 h-16">
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full aspect-square p-0"
              >
                <div className="w-full h-full">
                  <Image
                    src={ninja.ninjaSrc}
                    alt={ninja.ninjaName}
                    width={135}
                    height={135}
                    className="w-full h-full object-cover rounded-lg group-hover/card:shadow-xl"
                  />
                </div>
              </CardItem>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
