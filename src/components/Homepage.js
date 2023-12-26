import styled from "styled-components";
import React, {useState, useEffect} from "react";
import axios from "axios";

/*interface myData {

}*/

const Homepage = () => {

    const [data, setData] = useState({
        name:'',
        flag:'',
        population:'',
        region:'',
        capital:'',
    });
    const [totalCountries, setTotalCountries] = useState(0);

    //const [responseData, setResponseData] = useState(null);
    //DummyArray
    const myAr = ["ar1", "ar2", "ar3"];

    useEffect(() => {
        console.log("Loading Homepage");
        fetchData();
    },[]);

    useEffect(() => {
        console.log("Data value Changed : ", data);
    },[data]);

    const fetchData = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
        console.log(response.status);
        console.log(response.data);
        console.log("Response Length : ", response.data.length);
        setTotalCountries(response.data.length);
        //setResponseData(response.data);
        console.log("First Country \nName : ", response.data[0].name.common, "\nCapital : ", response.data[0].capital[0]);
        console.log("Flag : ", response.data[0].flags.svg);
        console.log("Population : ", response.data[0].population);
        console.log("Region :", response.data[0].region);

        //

        setData({name : response.data[0].name.common,
             flag: response.data[0].flags.svg,
             population : response.data[0].population, 
             region : response.data[0].region, 
             capital : response.data[0].capital[0]});
    }

    return (
        <Container>
            <Filters>
                <SearchContainer>
                    <SearchIcon>&#128269;</SearchIcon>
                    <Input />
                </SearchContainer>
                <FilterBy defaultValue="Filter By Region">
                    <option defaultValue="Filter By Region" disabled>Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </FilterBy>
            </Filters>
            <DisplayCountries>
                <Country>
                    <CountryFlag src = {data.flag} alt=""/>
                    <CountryName>{data.name}</CountryName>
                    <CountryPopulation>Population : {data.population}</CountryPopulation>
                    <CountryRegion>Region : {data.region}</CountryRegion>
                    <CountryCapital>Capital : {data.capital}</CountryCapital>
                </Country>
            </DisplayCountries>
            <DummyArray>
                {myAr.map( (value, index) => (
                    <div key={index}>{value}</div>
                ) )}
            </DummyArray>
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
    
    //width: 400px;
    //height: 500px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //background-color: red;
`;

const Country = styled.div`

`;

const CountryFlag = styled.img`
    width: 200px;
`;

const CountryName = styled.div`

`;

const CountryPopulation = styled.div`

`;

const CountryRegion = styled.div`

`;

const CountryCapital = styled.div`

`;

const DummyArray = styled.div`
    display: flex;
    flex-direction: row;
`;

export default Homepage;