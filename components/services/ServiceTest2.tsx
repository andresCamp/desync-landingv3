'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import img from "../../public/desync-logo-white.png"
import chatbot from "../../public/services/chatbot.png"
import data from "../../public/services/data.png"
import llm from "../../public/services/llm.png"
import meeting from "../../public/services/meeting.png"
import prompt from "../../public/services/prompt.png"
import webdev from "../../public/services/webdev.png"


export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    interface Item {
        title: string;
        img: string;
        desc: string;
        example: string;
        price: string;
    }
    
    const [activeItem, setActiveItem] = React.useState<Item | null>(null);   

  const list = [
    {
      title: "Web Dev",
      img: "/services/webdev.png",
      desc: "",
      example: "",
      price: "$5.50",
    },
    {
      title: "Internal LLM",
      img: "/services/llm.png",
      desc: "Imagine a world where every internal document, from memos to detailed reports, can communicate directly with you.",
      example: "Empower employees to instantly tap into the organization's knowledge base, eliminating the need to sift through lengthy SOPs or rely on colleagues.",
      price: "$3.00",
    },
    {
      title: "Workshops",
      img: "/services/workshop.png",
      desc: "",
      example: "",
      price: "$10.00",
    },
    {
      title: "Meeting Analysis",
      img: "/services/meeting.png",
      desc: "",
      example: "",
      price: "$5.30",
    },
    {
      title: "Chatbot Integration",
      desc: "Elevate your brand with ChatBots that are a cut above the rest. Fueled by next-gen LLM algorithms and fine-tuned using your sales data, they're not just responsive—they're revolutionary.",
      example: "Unlock the era of autonomous, round-the-clock customer support. Instantly connect your visitors with what they are looking for while significantly reducing the time your sales team spends on routine inquiries.",
      img: "/services/chatbot.png",
      price: "$15.70",
    },
    {
      title: "Ultimate Prompt Library",
      desc: "Imagine having a an expert assistant available to your team for every operational aspect of your business. Our Bespoke Prompt Library offers just that - a series of expertly-designed prompts ranging from content creation to coding, from decision-making to procedural follow-through.",
      example: "Enrich your team's daily operations. With our custom prompts, it's like having a dedicated team of expert assistants, always ready to guide and assist in any challenge.",
      img: "/services/prompt.png",
      price: "$8.00",
    },
    {
      title: "Data Analysis",
      desc: "Dive deep into your data's treasure trove. We meticulously dissect your historical data to uncover hidden patterns, unseen trends, and transformative insights.",
      example: "Seize unprecedented opportunities. By revealing subtle patterns and correlations, our AI-analysis will open doors to strategies and solutions previously unimagined.",
      img: "/services/data.png",
      price: "$7.50",
    },
  ];

  return (
    <>
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => {
            setActiveItem(item);
            onOpen();
          }}>
            <CardBody className="overflow-visible p-0">
              <Image 
                alt={item.title} 
                width={250}
                height={250}
                // className="w-full object-cover h-[140px]" 
                src={item.img} />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">click here</p>
              {/* <p className="text-default-500">{item.price}</p> */}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Modal isOpen={isOpen} onOpenChange={onOpen}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {activeItem?.title}
              </ModalHeader>
              <ModalBody>
                <p> 
                    <span className=" font-bold">Description: </span>
                    {activeItem?.desc}
                </p>
                <p>
                    <span className=" font-bold">Example: </span>
                    {activeItem?.example}
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
