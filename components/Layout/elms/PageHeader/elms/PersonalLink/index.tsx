import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';

import useMediaQuery from '@hooks/useMediaQuery';

import { enterIconWrapper, personal, iconSvg } from './style.css';

import { TABLET } from '@constants/mediaQuery';

const ENTER = 'Войти';
const ACCOUNT_LINK = 'https://client.carprice.ru';

const PersonalLink = () => {
  const isTablet = useMediaQuery(`(min-width: ${TABLET}px)`);
  return (
    <LinkWrapper className={personal} href={ACCOUNT_LINK} isExternal={true}>
      <>
        {ENTER}
        {isTablet && (
          <i className={enterIconWrapper}>
            <Icon className={iconSvg} icon={'enter'} width={24} height={24} />
          </i>
        )}
      </>
    </LinkWrapper>
  );
};

export default PersonalLink;
