import React, { FC } from 'react';

export interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
