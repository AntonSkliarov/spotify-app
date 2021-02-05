import React, { useEffect, useRef } from 'react';
import './menu-list.sass';
import { INavMenuProps } from '../nav-menu';
import { IMenulist } from '@helpers/interfaces';
import { ICONS } from '@helpers/_constants';

interface IMenuListProps extends INavMenuProps {
  isVisible: boolean;
}

export const MenuList: React.FC<IMenuListProps> = ({
  list,
  title,
  isVisible
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (listRef.current && wrapperRef.current) {
      if (!isVisible) {
        listRef.current.style.height = '0';
      } else {
        const wrapperHeight = wrapperRef.current.clientHeight;
        listRef.current.style.height = wrapperHeight + 'px';
      }
    }
  }, [isVisible]);

  return (
    <ul ref={listRef} className="menu-list">
      <div ref={wrapperRef} className="menu-list__wrapper">

        {list.map((item: IMenulist, index: number) => (
          <li className="menu-list__item" key={item.id}>

            <a className="menu-list__link" href="/">
              <span className="menu-list__icon">
                {ICONS[title][index].icon}
              </span>

              <span className="menu-list__title">
                {item.name}
              </span>
            </a>

          </li>
        ))}
      </div>
    </ul>
  );
};
