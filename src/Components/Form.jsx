import React from "react";
import { MdOutlineSend} from "react-icons/md";


export default function Form() {
  return (
    <div>
      <form className="py-10">

        <div className="flex justify-between px-2 items-center">

            {/* group one for name */}
          <div className="w-2/4 px-2">
            <div>
              <label htmlFor="name" className="font-1">
                Name
              </label>
            </div>
            <input
              type={"text"}
              className="bg-[#eaeaea] font-1 rounded text-lg py-1 px-4 w-full"
              placeholder="John Doe"
            />
          </div>

          {/* group 2 for email */}
          <div className="w-2/4">
            <div>
              <label htmlFor="email" className="font-1">
                Email
              </label>
            </div>
            <input
              type={"email"}
              className="bg-[#eaeaea] font-1 rounded text-lg py-1 px-4 w-full"
              placeholder="example@gmail.com"
            />
          </div>

          
          {/* end flex */}
        </div>
        {/* group 3 for message */}
        <div className="w-full px-2 my-3">
            <div><label htmlFor="message" className="font-1">Message</label></div>
            <textarea  className='bg-[#eaeaea] w-full rounded font-1 p-2' placeholder="Hy! what's up " wrap="true"/>
        </div>

        <div className="text-right px-2">
            <button className='btn text-white py-1 px-2 rounded'>Submit</button>
        </div>

      </form>
    </div>
  );
}