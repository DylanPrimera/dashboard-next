'use client'

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

const widgets = [
  {
    title: 10,
    subtitle: "Products",
    label: "Products",
    icon: <IoCafeOutline className="text-4xl" />,
    href: "/dashboard/counter",
  }
];

export const WidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count);
    widgets[0].title = count;
  return (
    <div className="flex flex-wrap justify-center items-center p-2">
      {widgets.map((widget) => (
        <SimpleWidget key={widget.label} {...widget} />
      ))}
    </div>
  );
};
