const isInputEmpty = (inputRef: React.MutableRefObject<HTMLInputElement>) => {
    return (
        inputRef.current?.value === "" || inputRef.current?.value === undefined
    );
};

export default isInputEmpty;
