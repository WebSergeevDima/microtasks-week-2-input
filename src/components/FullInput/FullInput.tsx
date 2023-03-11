import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

const FullInput: React.FC<FullInputPropsType> = (props) => {

    let [title, setTitle] = useState<string>('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const addMessageHandler = () => {
        props.addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={addMessageHandler}>+
                </button>
            </div>


        </div>
    );
}

export default FullInput