import styled from "styled-components";
import { css } from 'styled-components';

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

export const device = {
    mobile: `(max-width: ${breakpoints.mobile})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
};
