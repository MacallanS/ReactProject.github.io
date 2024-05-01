import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MyDocument from '../../components/MyDocument';

interface IMyForm {
  picture: FileList;
  name: string;
}

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DownloadLink = styled(PDFDownloadLink)`
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #4caf50;
    color: #fff;
  }
`;

const Valera = () => {
  const [task, setTasks] = useState<IMyForm | null>(null);

  const { register, handleSubmit } = useForm<IMyForm>({
    mode: 'onBlur',
  });

  const MyForm = (data: IMyForm) => {
    setTasks(data);
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(MyForm)}>
        <Input
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов',
            },
          })}
          placeholder="Enter name"
        />
        <Input
          type="file"
          accept="image/*"
          {...register('picture', {
            required: 'Изображение',
          })}
        />
        <Button type="submit">Сохранить</Button>
      </FormStyle>
      {task?.name && task?.picture && (
        <DownloadLink document={<MyDocument name={task.name} picture={task.picture} />} fileName="lab_pdf.pdf">
          {({ loading, error }) => {
            try {
              if (loading) return 'Loading document...';
              if (error) throw new Error('Error generating document');
              return 'Download now!';
            } catch (error) {
              console.error('PDF generation error:', error);
              return 'Error generating PDF';
            }
          }}
        </DownloadLink>
      )}
    </>
  );
};

export default Valera;
