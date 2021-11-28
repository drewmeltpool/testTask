import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { classNames } from 'src/utils';
import { IFlatList } from 'src/types/IFlatList';

const FlatList: React.FC<IFlatList> = ({
  data,
  component,
  setKey,
  tag: Tag = 'div',
  className,
  itemProps = {},
  ...rest
}) => {
  const { tag: Elem = 'div', ...restItemProps } = itemProps;

  const elements = useMemo(
    () =>
      data.map((props) => (
        <Elem key={setKey ? setKey(props) : uuidv4()} {...restItemProps}>
          {component(props)}
        </Elem>
      )),
    [data, Elem, setKey, restItemProps, component]
  );

  return (
    <Tag className={classNames('list', className)} {...rest}>
      {elements}
    </Tag>
  );
};

export default FlatList;
