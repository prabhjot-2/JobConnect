import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago`</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://th.bing.com/th/id/R.ceaf8384322af790486cff176a0a2f24?rik=miqL9LHAiG2FBQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fmicrosoft%2f28350-5-microsoft-logo-photos.png&ehk=gLNeUUMG1tz9FSTh4v1gEOdCeSICRm2gC8CoPEk9eU0%3d&risl=&pid=ImgRaw&r=0" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Description</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost"> Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full -time</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">20 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button  variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
  )
}

export default Job
