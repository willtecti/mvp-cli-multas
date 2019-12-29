import styled from "styled-components";

import {primary} from '../../styles/colors'

export const Container = styled.div`

  .card {
        display: flex;
        align-items: center;
  }
  .card-img-top{
    width: 200px;
  }

  .card-title {
    color: ${primary}
  }
`;

