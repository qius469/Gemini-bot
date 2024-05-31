import Conversation from "./conversation";
import Footer from "./footer";
import Header from "./header";

export default function(){
    return <div className="h-full flex flex-col">
        <Header />
        <div className="flex-1">
        <Conversation />
        </div>
        <div className="mb-8 px-8">
        <Footer />
        </div>
        
        
        </div>
}