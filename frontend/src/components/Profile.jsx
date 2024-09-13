import React from "react";
import Navbar from "./shared/Navbar";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen, Underline } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills=["Html","Css","Javascript","Reactjs"]

const Profile = () => {

    const isResume=true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://th.bing.com/th/id/R.ceaf8384322af790486cff176a0a2f24?rik=miqL9LHAiG2FBQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fmicrosoft%2f28350-5-microsoft-logo-photos.png&ehk=gLNeUUMG1tz9FSTh4v1gEOdCeSICRm2gC8CoPEk9eU0%3d&risl=&pid=ImgRaw&r=0"
                alt="Profile Photo"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>in here bio is tehre pkeseae enter the bio in here</p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>prabh@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9877463625</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1"> 
            {
                skills.length!=0 ?skills.map((item,index)=><Badge key={index}>{item}</Badge>): NA
            }
            </div>
            
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Resume</Label>
            {
                isResume? <a target="blank" href="https://google.com" className="text-blue-500 w-full hover:underline cursor-pointer"> Resume Link</a>: <span>NA</span>
            }
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl"> 
            <h1 className="font-bold text-lg my-5">
                Applied Jobs
                {/* Application Table */}
            </h1>
            <AppliedJobTable/>
        </div>
    </div>
  );
};

export default Profile;
