import styled from "styled-components";

const Homepage = () => {

    

    return (
        <Container>
            <Filters>
                <SearchContainer>
                    <SearchIcon>&#128269;</SearchIcon>
                    <Input />
                </SearchContainer>
                <FilterBy title="Select By Region">
                    <option selected disabled>Select By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </FilterBy>
            </Filters>
            <DisplayCountries>

            </DisplayCountries>
        </Container>
    );
};

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 14px;
`;

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 375px) {
        flex-direction: column;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchIcon = styled.div`

`;

const Input = styled.input`

`;

const FilterBy = styled.select`
    z-index: 10;
`;

const DisplayCountries = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default Homepage;