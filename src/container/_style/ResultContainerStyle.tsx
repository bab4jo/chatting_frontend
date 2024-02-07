import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
`;

export const Wrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0 40px 0;
`;
