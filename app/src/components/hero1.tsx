'use client'

import Image from "next/image";
import { FiFigma, FiGithub, FiTwitter } from "react-icons/fi";
import Hero1Image from "@/src/imgs/profile.webp";
import CircleWavy from "./icons/circleWavy";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default async function Hero1() {
  
  const t = useTranslations('hero1');

  return (
    <div className="relative flex items-start justify-center sm:pt-0 mb-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
        <div className="content">
          <div className="flex items-center gap-3">
            <hr className="w-10 bg-orange-500 border " />
            <span className="md:text-[18px] font-medium text-gray-800 dark:text-gray-400">
              {t('subTitle')}
            </span>
            <hr className="w-10 bg-orange-500 border " />
          </div>
          <p className="text-2xl sm:text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 dark:text-white">
            {t('title')}
          </p>
          <p className="mt-5 md:text-md dark:text-white">{t('description')}</p>
          <div className="flex gap-4 flex-col sm:flex-row my-10 items-center dark:text-white">
            <Link href="contact">
              <button
                type="button"
                className="font-medium flex flex-1 justify-center focus:outline-none text-[16px] items-center px-5 py-3 md:py-4 md:px-8 rounded-xl bg-gradient-to-r from-red-500 to-pink-300 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass "
              >
                {t('contact')}
                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
              </button>
            </Link>
            <div className="flex">
              <FiFigma />
              <FiGithub />
              <FiTwitter />
            </div>
          </div>
        </div>
        <div className="relative sm:mt-0 mt-10 sm:px-0">
          <div className="2xl:absolute top-0 left-0 z-10">
            <Image
            className="rounded-full w-[600px] select-none"
            width="1000"
            height="1000"
            src={Hero1Image}
            priority
            alt=""
          />
          </div>
          
          <CircleWavy className="hidden 2xl:block"/>
        </div>
      </div>
    </div>
  );
}
