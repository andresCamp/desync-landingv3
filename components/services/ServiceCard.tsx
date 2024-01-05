'use client'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Image from 'next/image';
import img from "../../public/hero-card-complete.jpg"


const ServiceCard = () => {
  return (
    <div>
       <Card className="py-4">
        <CardHeader className="absolute pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        
        <CardBody className="overflow-visible py-2">
            <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={270}
            height={270}
            />
        </CardBody>
    </Card>
    </div>
  )
}

export default ServiceCard
