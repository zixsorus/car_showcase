"use client";

import { Listbox } from "@headlessui/react";
import { useRouter } from "next/router";

const CustomFilter = () => {
  const router = useRouter

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) =>{
          setSelected(e);
        }}
    </div>
  )
}

export default CustomFilter