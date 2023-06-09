import styled from "styled-components";
import { NavigationBar, Page } from "../DesignSystem";

const HomeScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeScreen>
      <NavigationBar />
      <Page title="Home">SOMETHING MORE!</Page>
    </HomeScreen>
  );
}

export default Home;
