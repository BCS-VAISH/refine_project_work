import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useGetIdentity } from '@refinedev/core'
import { FieldValues} from 'react-hook-form'
import { useForm } from '@refinedev/react-hook-form'
import Form from '../components/common/Form'
import {User, Property} from '../components/common/user'

const CreateProperty = () => {
  const navigate= useNavigate();
  const {data:userData} = useGetIdentity({});
  const user=userData as User;
  const [propertyImage, setPropertyImage]=useState({name:'',url:''});
  const {refineCore:{onFinish, formLoading}, register, handleSubmit} = useForm({});

  const handleImageChange=(file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = () => reject(new Error('File reading has failed'));
      fileReader.readAsDataURL(readFile);
    });

    reader(file)
      .then((result: string) => setPropertyImage({ name: file?.name, url: result }))
      .catch((error) => console.error(error));
  };
  const onFinishHandler = async (data:FieldValues)=>{
    if(!propertyImage.name) return alert('Please select an image.');

    await onFinish({...data, photo:propertyImage.url, email:user.email});
  };

  return (
    <Form
      type="Create"
      register= {register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  )
}

export default CreateProperty






 