'use client'

import { NextUIProvider, Card, CardBody, CardHeader, Snippet } from '@nextui-org/react'
import Link from 'next/link'
import { BsDiscord } from 'react-icons/bs'
import { MdEmail, MdContentCopy } from 'react-icons/md'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbAlertCircle } from 'react-icons/tb'

export default function Home() {
  return (
    <>      
      {/* Skills component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Receipts</CardHeader>
        <CardBody>
          <div className="flex flex-col items-center py-36">
						<TbAlertCircle className="text-4xl text-blue-500" />
						<p className="mt-4 text-2xl">
							{' '}
							There{"'"}s no receipts registered.
						</p>
					</div>
        </CardBody>
      </Card>
      {/**/}
      {/* Contect component*/}
      {/**/}
    </>
  )
}