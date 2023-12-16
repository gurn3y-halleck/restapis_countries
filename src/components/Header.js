import styled from "styled-components";

const Header = () => {

    const handleDarkShuffle = () => {
        
    };

    return (
        <Container>
            <TextContent>Where in the world?</TextContent>
            <ModeChanger>
                <MoonImage src="images/blackBorderMoon.svg" />
                <DarkModeText href="" onClick={handleDarkShuffle}>Dark Mode</DarkModeText>
            </ModeChanger>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px ; //20px 20px 20px;
    background-color: hsl(0, 0%, 98%);
    box-shadow: 0px 1px 1px gray;
`;

const TextContent = styled.p`

`;

const ModeChanger = styled.div`
    display: flex;
    flex-direction: row;
`;

const MoonImage = styled.img`
    width: 15px;
    margin: 10px;
    // no effect //border: 100px;
    // no effect //stroke-width: 10;
`;

const DarkModeText = styled.a`
    margin-top: 14px;
    text-decoration: none;
    color: #000000;
`;

export default Header;