import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FullInput from "./components/FullInput/FullInput";
import Input from "./components/FullInput/Input";
import Button from "./components/FullInput/Button";


type MessageType = {
    message: string
};

type MessagesType = Array<MessageType>;


function App() {

    let [message, setMessage] = useState<MessagesType>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    let [title, setTitle] = useState<string>('');

    const addMessage = (title: string) => {
        const newTitle = [...message];
        newTitle.push({message: title});
        setMessage(newTitle);
    }

    const addMessageSimple = () => {
        addMessage(title);
        setTitle('');
    }


    return (
        <div className="App">

            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={addMessageSimple}/>
            </div>

            <hr/>

            <FullInput addMessage={addMessage}/>
            {
                message.map((item, index) => {
                    return (
                        <div key={index}>{item.message}</div>
                    );
                })
            }
        </div>
    );
}

export default App;
