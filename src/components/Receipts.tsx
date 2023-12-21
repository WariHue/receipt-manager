import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Snippet} from "@nextui-org/react";
import { AiOutlineGithub } from 'react-icons/ai'

export const Receipts: React.FC<{ amounts: Number[]}> = ({amounts}) => {
  return (
    <>
      <div className='gap-2 grid grid-cols-1'>
        {amounts.map((x, i) => (
          <Snippet symbol="" color="primary" className="w-full" key={i}>
            {x.toString() + " ₩"}
          </Snippet>
        ))}
      </div>
    </>
  );
}
