import IcoMoon, { IconProps } from 'react-icomoon';
import { Svg, Path } from 'react-native-svg';
import SolidIconSet from '@/assets/icon-solid.json';
import OutlineIconSet from '@/assets/icon-outline.json';
import { IconNames } from '@/lib/icon-types';

interface Props extends Omit<IconProps, 'icon'> {
  icon: IconNames;
  solid?: boolean;
}

const Icon = (props: Props) => (
  <IcoMoon
    color="black"
    iconSet={props.solid ? SolidIconSet : OutlineIconSet}
    native
    size={props.size || 24}
    SvgComponent={Svg}
    PathComponent={(pathProps) => {
      if (props.solid) {
        return <Path {...pathProps} fill={props.color} />;
      }
      return <Path {...pathProps} />;
    }}
    {...props}
  />
);

export default Icon;
