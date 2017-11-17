import styled from 'styled-components';
import {media} from '../../../styles';
import {withProps} from '../../../styles/themed-components'

type BrProps = {
  sp?: boolean
  tb?: boolean
}
const Br = withProps<BrProps, HTMLDivElement>(styled.br)`
  display: ${({sp = true}) => (sp ? 'block' : 'none')};

  ${media.tablet`
    display: ${({tb = true}) => (tb ? 'block' : 'none')};
  `}
`;

export default Br;


