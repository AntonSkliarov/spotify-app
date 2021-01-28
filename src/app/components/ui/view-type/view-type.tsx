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

export const ViewType: React.FC<IViewTypeProps> = ({
  type,
  viewFilter,
  onClick
}) => {

  switch (type) {
    case 'list':
      return (
        <button
          className={classNames("view-type view-type__list", {
            'view-type_active': viewFilter === 'list',
          })}
          type="button"
          onClick={() => onClick(type)}
          title='List type'
        >
          <VscListUnordered size={20}/>
        </button>
      );

    case 'cards':
      return (
        <button
          className={classNames("view-type view-type__cards", {
            'view-type_active': viewFilter === 'cards',
          })}
          type="button"
          onClick={() => onClick(type)}
          title='Cards type'
        >
          <AiFillAppstore size={20} />
        </button>
      );
    
    default:
      return (
        <button className="view-type" type="button">
          List view type
        </button>
      );
  }
};
