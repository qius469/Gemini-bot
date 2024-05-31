import Chatbox from "./_compoment/chatbox";
import Chatlist from "./_compoment/chatlist";

export default function(){
    return <div className="w-screen h-screen flex flex-row">
        <div className="w-60 bg-base-200">
            <Chatlist />
            </div>
        <div className="flex-1">
            <Chatbox />
            </div>
    </div>
}