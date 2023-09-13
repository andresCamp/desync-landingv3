'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Image from "next/image";
import img from "../../public/desync-logo-white.png"
import chatbot from "../../public/services/chatbot.png"
import data from "../../public/services/data.png"
import llm from "../../public/services/llm.png"
import meeting from "../../public/services/meeting.png"
import prompt from "../../public/services/prompt.png"
import webdev from "../../public/services/webdev.png"

const list = [
  {
    title: "Web Dev",
    img: "/services/webdev.png",
    desc: "Revolutionize your web development with our AI-driven solutions.",
    example: "",
    liner: "Your website built faster and smarter with AI.",
  },
  {
    title: "Internal LLM",
    img: "/services/llm.png",
    desc: "Imagine a world where every internal document, from memos to detailed reports, can communicate directly with you.",
    example: "Empower employees to instantly tap into the organization's knowledge base, eliminating the need to sift through lengthy SOPs or rely on colleagues.",
    liner: "Talk to all your documents at once, get answers instantly.",
  },
  {
    title: "Employee Training",
    img: "/services/workshop.png",
    desc: "Our hands-on workshops empower your team to harness the full potential of our technology. Don’t adopt AI for the sake of adopting it. Employee training will make sure everyone knows how to leverage it.",
    example: "ChatGPT, MidJourney Available",
    liner: "Empowering your team to leverage AI effectively.",
  },
  {
    title: "Meeting Analysis",
    img: "/services/meeting.png",
    desc: "Extract key insights in minutes, not hours. Deploy your resources wisely with our world-class data analysis tools. Do more with less. ",
    example: "",
    liner: "Every word analyzed to turn meetings into actionable insights.",
  },
  {
    title: "Chatbot Integration",
    desc: "Elevate your brand with ChatBots that are a cut above the rest. Fueled by next-gen LLM algorithms and fine-tuned using your sales data, they're not just responsive—they're revolutionary.",
    example: "Unlock the era of autonomous, round-the-clock customer support. Instantly connect your visitors with what they are looking for while significantly reducing the time your sales team spends on routine inquiries.",
    img: "/services/chatbot.png",
    liner: "24/7 customer service with perfect knowledge of every product.",
  },
  {
    title: "Ultimate Prompt Library",
    desc: "Imagine having a an expert assistant available to your team for every operational aspect of your business. Our Bespoke Prompt Library offers just that - a series of expertly-designed prompts ranging from content creation to coding, from decision-making to procedural follow-through.",
    example: "Enrich your team's daily operations. With our custom prompts, it's like having a dedicated team of expert assistants, always ready to guide and assist in any challenge.",
    img: "/services/prompt.png",
    liner: "Expert guidance for every business task, just a prompt away.",
  },
  // {
  //   title: "Data Analysis",
  //   desc: "Dive deep into your data's treasure trove. We meticulously dissect your historical data to uncover hidden patterns, unseen trends, and transformative insights.",
  //   example: "Seize unprecedented opportunities. By revealing subtle patterns and correlations, our AI-analysis will open doors to strategies and solutions previously unimagined.",
  //   img: "/services/data.png",
  //   price: "$7.50",
  // },
];

export default function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    interface Item {
        title: string;
        img: string;
        desc: string;
        example: string;
        liner: string;
    }
    
    const [activeItem, setActiveItem] = React.useState<Item | null>(null);   


  return (
    <>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card className="hover:brightness-150" shadow="sm" key={index} isPressable onPress={() => {
            setActiveItem(item);
            onOpen();
          }}>
            <CardBody className="overflow-visible p-0">
              <Image 
                alt={item.title} 
                width={300}
                height={250}
                className="w-full object-cover" 
                // className="w-full object-cover h-[140px]" 
                src={item.img} />
            </CardBody>
            <CardFooter className="text-lg justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">click here</p>
              {/* <p className="text-default-500">{item.price}</p> */}
            </CardFooter>
            <Divider className="mx-4" />
            <CardFooter className="text-lg justify-between">
              <p className="text-default-500">{item.liner}</p>
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
