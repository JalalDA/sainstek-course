import React, { FC, useState, useRef } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false }
);
import "react-quill/dist/quill.snow.css";

interface ComponentFormEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
  modules?: any;
  limit?: number;
}

const ComponentFormEditor: FC<ComponentFormEditorProps> = (
  props: ComponentFormEditorProps
) => {
  const [character, setCharacter] = useState(0);
  const reactQuillRef = useRef();
  const whiteListEvent = [
    "Backspace",
    "ArrowUp",
    "ArrowRight",
    "ArrowLeft",
    "ArrowDown",
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        value={props.value}
        onKeyDown={(event) => {
          if (
            character === props.limit &&
            !whiteListEvent.includes(event.key)
          ) {
            event.preventDefault();
          }
        }}
        // onChange={(content, delta, source, editor) => {
        //   const char = editor.getLength() - 1;
        //   if (char < props.limit + 1) {
        //     props.onChange(content);
        //     setCharacter(char);
        //   } else {
        //     const diff = char - props.limit;
        //     const newText = editor.getText().slice(0, -(diff + 1));
        //     props.onChange(newText);
        //     setCharacter(newText.length);
        //   }
        // }}
        className={props.className}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        modules={props.modules}
      />
      {props.limit && (
        <div
          className="py-3 pl-3 text-sm text-neutral-40"
        // style={{
        //   backgroundColor: !values.enableEmail ? "#e3eaf1" : "#fff",
        // }}
        >
          {`${character}/${props.limit} characters used`}
        </div>
        // <p className="text-xxs text-grey-80">
        //   {`${character}/${props.limit} characters used`}
        // </p>
      )}
    </>
  );
};

export default ComponentFormEditor;
