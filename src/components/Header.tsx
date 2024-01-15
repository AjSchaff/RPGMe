import React, { FC } from 'react';

export interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};
