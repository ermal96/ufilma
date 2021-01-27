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
  right: 80%;
  color: white;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
  line-height: 1;
  z-index: 100;
  bottom: 28%;
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
