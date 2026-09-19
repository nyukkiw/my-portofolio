"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-[1.5rem] relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-350 ease-out border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.22)]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        hovered === index && "scale-[1.01] shadow-[0_18px_40px_rgba(59,130,246,0.15)]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="w-full h-auto block object-contain"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div
        className={cn(
          "absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent flex items-end transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-lg md:text-xl font-semibold text-white">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto md:px-6 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
