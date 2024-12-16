import { View, Text } from 'react-native';
import React from 'react';
import Icon from './Icon';
import cl from 'classnames';
import { IconNames } from '@/lib/icon-types';

type Props = {
  className?: string;
  icon: IconNames;
  selected?: boolean;
  iconSize?: number;
};

const CategoryAvatar = (props: Props) => {
  return (
    <View
      className={cl(
        `self-start bg-gray-100 rounded-full p-2`,
        props.className,
        props.selected ? 'bg-green-100 border border-green-300' : ''
      )}
    >
      <Icon
        color={props.selected ? 'rgb(22 163 74)' : '#000'}
        icon={props.icon}
        size={props.iconSize || 24}
      />
    </View>
  );
};

export default CategoryAvatar;
