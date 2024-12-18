import { Angrypage } from "./angrypage"
import Chatbot from "./components/chatbot"

export default function AngryPage(){
    return (
        <div className=" min-h-screen flex w-full bg-gray-50 bg-gradient-to-r from-blue-100 to-green-100">
        {/* Main Content */}
       
       <Angrypage></Angrypage>
        {/* Floating Chatbot in the bottom-right corner */}
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot />
        </div>
      </div>
    )
}