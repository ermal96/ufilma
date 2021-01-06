import React, { useState } from "react";
import styled from "styled-components";

const UTooltipWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 0;
`;

const UTooltipTop = styled.div`
  position: absolute;
  border-radius: 0.3rem;
  right: 0;
  padding: 1rem;
  color: white;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.6rem;
  line-height: 1;
  z-index: 100;
  bottom: 100%;
`;

const Tooltip = ({ delay, children, content }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <UTooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <UTooltipTop>{content}</UTooltipTop>}
    </UTooltipWrapper>
  );
};

export default Tooltip;
