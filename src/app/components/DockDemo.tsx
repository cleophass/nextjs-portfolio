import React from "react";

import { Dock, DockIcon } from "./magicui/dock";
interface DockDemoProps {
  iconIds: number[];
}
const icons = {
  1: "/icon/NLP.png",
  2: "/icon/js.png",
  3: "/icon/vite.svg",
  4:"icon/python.webp",
  5:"icon/streamlit.png",
  6:"icon/mongodb.svg",
  7:"icon/nextjs.png",
  8:"icon/react.webp",
  9:"icon/vercel.png",
  10:"icon/pwa.webp",
  11:"icon/postgresql.png",
  13:"icon/sklearn.svg",
  14:"icon/jupyter.png",
  15:"icon/numpy.svg",
};


export function DockDemo({ iconIds = [] }: DockDemoProps) {

  return (
    <div className="relative">
      <Dock direction="middle">
        {iconIds.map((id) => (
          <DockIcon key={id}>
            <img
              src={icons[id]} // Utilisez l'identifiant pour récupérer l'URL de l'icône
              alt={`Icon ${id}`} // Ajoutez une description alternative basée sur l'identifiant
              className="size-6"
            />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}