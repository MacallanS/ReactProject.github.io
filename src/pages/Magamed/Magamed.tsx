import React, { useState } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';

const WhiteBlock = styled.div`
  background-color: white;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: dodgerblue;
    }
  }

  div {
    color: red;
    font-size: 12px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #007acc;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  p {
    font-family: Arial, sans-serif;
    color: black;
    margin: 5px 0;
  }
`;

interface IMyForm {
  name: string;
  age: number;
}

export const Magamed = () => {
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const saveElement: SubmitHandler<IMyForm> = (data, event) => {
    setTasks((prev) => [...prev, data]);
    reset();
    event?.target.reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: 'onBlur',
  });

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <WhiteBlock>
      <form onSubmit={handleSubmit((data, event) => saveElement(data, event))}>
        <input
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов, не менее 5',
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <input
          {...register('age', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 10,
              message: 'Нужно больше символов, не менее 10',
            },
          })}
        />
        <div>{errors.age?.message}</div>

        <button type="submit" disabled={!isFormValid}>
          Сохранить
        </button>
        {tasks.map((task, index) => (
          <p key={index}>
            {task.name} - {task.age}
          </p>
        ))}
      </form>
    </WhiteBlock>
  );
};

export default Magamed;
