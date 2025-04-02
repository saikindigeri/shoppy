'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import banner from '../../../../public/images/lora.jpg'
import { Label } from '@/components/ui/label';
import logo from '../../../../public/images/logoo.png'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Reigster = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });

      const handleOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData((prev)=>({
            ...prev,
        [event.target.name]:event.target.value,


        }));
        console.log(formData)
      };



  return (
    <div className="min-h-screen bg-[#fff6f4] flex">
    <div className="hidden lg:block w-1/2 bg-[#ffede1] relative overflow-hidden">
      <Image
        src={banner}
        alt="Register"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16 justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="flex justify-center">
          <Image src={logo} width={200} height={50} alt="Logo" />
        </div>
        <form  className="space-y-4">
        
          <div className="space-y-1">
            <Label htmlFor="name" className='font-sans'>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
                className="bg-green-300 font-sans"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleOnChange}
             
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name" className='font-sans'>Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="bg-green-300 font-sans"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
          <Button
            type="submit"
           
            className="w-full font-sans bg-black text-white hover:bg-black transition-colors"
          >
        Sign In
          </Button>
          <p className="text-center text-[#3f3d56] text-sm font-sans">
           Don't have an account{" "}
            <Link
              href={"/auth/register"}
              className="text-[#000] hover:underline font-bold font-serif"
            >
             Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Reigster