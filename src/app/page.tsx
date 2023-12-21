'use client'

import React, { useEffect, useState } from 'react'
import { NextUIProvider, Card, CardBody, CardHeader, Snippet, Input, Button } from '@nextui-org/react'
import Link from 'next/link'
import { BsDiscord } from 'react-icons/bs'
import { MdEmail, MdContentCopy } from 'react-icons/md'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbAlertCircle } from 'react-icons/tb'
import { alertCheck, readData, saveData, sumData } from '@/utils/functions'
import { Receipts } from '@/components/Receipts'

let amount:Number


export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  return (mounted &&
    <>
      {/* Input component*/}
      <Card className='mt-4'>
        <CardBody className='flex place-items-center'>
          <div className='size-full inline-flex'>
            <form className='size-full' onSubmit={async(e) => {
              await alertCheck(amount)
            }}>
              <Input type="number" className='text-sm' label='금액 입력(엔터 키를 누를 시에 기입)' onChange={(e) => amount = Number(e.target.value)}/>
            </form>
          </div>
        </CardBody>
      </Card>
      {/**/}
      {/* Skills component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Receipts-{sumData(readData())}₩</CardHeader>
        <CardBody>
            {readData().length == 0 ? (
            <Card className="mt-4">
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
          ) : (
            <Receipts amounts={readData()} />
          )}
        </CardBody>
      </Card>
      {/**/}
    </>
  )
}