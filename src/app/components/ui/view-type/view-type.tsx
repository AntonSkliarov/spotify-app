import React from 'react';
import classNames from 'classnames';
import './view-type.sass';
import { VscListUnordered } from "react-icons/vsc";
import { AiFillAppstore } from "react-icons/ai";


type ViewTypeType = 'list' | 'cards';

interface IViewTypeProps {
  type: ViewTypeType;
  viewFilter: string;
  onClick: (type: string) => void;
}

const ViewTypeIcon = {
  'list': <VscListUnordered size={20} />,
  'cards': <AiFillAppstore size={20} />
};

export const ViewType: React.FC<IViewTypeProps> = ({
  type,
  viewFilter,
  onClick
}) => {
  const getViewTypeIcon = ViewTypeIcon[type];
  const classes = classNames('view-type', {
    'view-type__list': type === 'list',
    'view-type__cards': type === 'cards',
    'view-type_active': viewFilter === type
  });

  return (
    <button
      className={classes}
      type="button"
      onClick={() => onClick(type)}
      title={type === 'cards'
        ? 'Cards type'
        : 'List type'
      }
    >
      {getViewTypeIcon}
    </button>
  );
};
