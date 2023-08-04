"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"


function Hero() {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          ค้นหา จอง หรือเช่ารถ -- อย่างรวดเร็วและง่ายดาย
        </h1>

        <p className="hero__subtitle">
          เปลี่ยนประสบการณ์การเช่ารถของคุณด้วยขั้นตอนการจองที่ง่ายดายของเรา 
        </p>

        <CustomButton 
          title="ค้นหารถที่ถูกใจ"
          containerStyles="bg-primary-blue text-white rounded-full my-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>

    </div>
  )
}

export default Hero