"use client";
import { useState ,useEffect,useRef } from "react";
import {
  Button,
  DropZone,
  Flex,
  Text,
  VisuallyHidden,
} from '@aws-amplify/ui-react';

const acceptedFileTypes = ['image/png', 'image/jpeg'];

const UploadImage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const hiddenInput = useRef(null);



  const onFilePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedImage) {
      formData.append("name", selectedImage.name);
      formData.append("image", selectedImage);
    }

    const res = await fetch("/api/s3", {
      method: "POST",
      body: formData,
    });
    const { url,error } = await res.json();
    if(error){
      alert(error)}else{
        console.log(url)
      }
    // console.log(url)
  };
  return (
    <>
    <DropZone
      acceptedFileTypes={acceptedFileTypes}
      onDropComplete={({ acceptedFiles, rejectedFiles }) => {
        setFiles(acceptedFiles);
      }}
    >
      <Flex direction="column" alignItems="center">
        <Text>Drag images here or</Text>
        <Button size="small" onClick={() => hiddenInput.current.click()}>
          Browse
        </Button>
      </Flex>
      <VisuallyHidden>
        <input
          type="file"
          tabIndex={-1}
          ref={hiddenInput}
          onChange={onFilePickerChange}
          multiple={true}
          accept={acceptedFileTypes.join(',')}
        />
      </VisuallyHidden>
    </DropZone>
    {files.map((file) => (
      <Text key={file.name}>{file.name}</Text>
    ))}
  </>
  );
};

export default UploadImage;
