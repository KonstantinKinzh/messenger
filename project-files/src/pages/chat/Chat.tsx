// Mobx
import { observer } from "mobx-react";

// Components
import { Header } from "./ui/header";
import { LeftPanel } from "./ui/leftPanel";
import { WindowChat } from "./ui/windowChat";
import { InputMessage } from "./ui/inputMessage";

// Styles
import "./Chat.css";

export const Chat = observer(() => {
    return (
        <div className="chat">
            <Header />
            <LeftPanel />
            <WindowChat />
            <InputMessage />
        </div>
    );
});