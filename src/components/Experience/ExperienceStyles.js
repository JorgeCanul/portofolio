import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  min-height: 60rem;
  padding: 30px;
  overflow-y: auto;

  @media ${props => props.theme.breakpoints.lg} {
    min-height: 90rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    min-height: 50rem;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    min-height: 50rem;
    padding: 30px;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    min-height: 30rem;
    padding: 30px;
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.50rem;
    line-height: 1.2;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.90rem;
    line-height: 1.2;
  }
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 1.5;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 17px;
    line-height: 1.2;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
