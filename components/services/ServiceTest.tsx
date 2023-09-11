'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Web Dev",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Internal LLM",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Workshops",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Meeting Analysis",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Chatbot Integration",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Prompt Library",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Data Analysis",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}


// import React from "react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

// export default function App() {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen}>Open Modal</Button>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
//               <ModalBody>
//                 <p> 
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
//                   dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
//                   Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
//                   Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
//                   proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
