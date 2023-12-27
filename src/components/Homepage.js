import styled from "styled-components";
import React, {useState, useEffect} from "react";
import axios from "axios";

/*interface myData {

}*/

class DataFormat {
    constructor(){
        this.name = '';
        this.flag = '';
        this.population = '';
        this.region = '';
        this.capital = '';
    }
};

class arDataFormat {
    constructor(){
        this.length = 0;
        this.data = [];
    }
}


const Homepage = () => {

    const [arData, setArData] = useState(new arDataFormat());
    const [totalCountries, setTotalCountries] = useState(0);
    const [region, setRegion] = useState("all");
    //const [responseData, setResponseData] = useState(null);
    //DummyArray
    const myAr = ["ar1", "ar2", "ar3"];

    useEffect(() => {
        console.log("Loading Homepage");
        fetchData();
    },[]);

    useEffect(() => {
        console.log("Data value Changed : ", arData);
    },[arData]);

    const populateAr = (apiResponse, targetAr) => {
        for(var i=0;i<apiResponse.data.length;i++)
        {
            //Create object
            const country = new DataFormat();
            country.name = apiResponse.data[i].name.common;
            country.capital = apiResponse.data[i].capital[0];
            country.flag = apiResponse.data[i].flags.svg;
            country.population = apiResponse.data[i].population;
            country.region = apiResponse.data[i].region;
            targetAr.push(country);
        }
    }

    const fetchData = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
        console.log(response.status);
        console.log(response.data);
        console.log("Response Length : ", response.data.length);
        setTotalCountries(response.data.length);

        const arCountries = []; //[country1, country2];
        const arLength = response.data.length;
        populateAr(response,arCountries);

        //set
        setArData ({length:arLength,
                    //data: [country1, country2]
                    data: arCountries,
                });
    }

    const renderCountry = (country) => {
        return(
            <Country key={country.name}>
                <CountryFlag src = {country.flag} alt=""/>
                <CountryName>{country.name}</CountryName>
                <CountryPopulation>Population : {country.population}</CountryPopulation>
                <CountryRegion>Region : {country.region}</CountryRegion>
                <CountryCapital>Capital : {country.capital}</CountryCapital>
            </Country>
        );
    }

    const renderCountries = () => {
        if(arData.length > 0)
        {
            console.log(arData);
            if(region==='all')
            {
                console.log("Rendering all countries");
                return(
                    <DisplayCountries>
                        {arData.data.map((country) => {
                            return(
                                <Country key={country.name}>
                                    <CountryFlag src = {country.flag} alt=""/>
                                    <CountryName>{country.name}</CountryName>
                                    <CountryPopulation>Population : {country.population}</CountryPopulation>
                                    <CountryRegion>Region : {country.region}</CountryRegion>
                                    <CountryCapital>Capital : {country.capital}</CountryCapital>
                                </Country>
                            );
                        } )}
                    </DisplayCountries>
                );
            }
            else{
                console.log("Rendering countries of region = ",region);
                return(
                    <DisplayCountries>
                        {arData.data.map((country) => {
                            if(country.region === region)
                            {   
                                console.log("RegionCheckPass");
                                return renderCountry(country);
                            }
                        })}
                    </DisplayCountries>
                )
            }
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    return (
        <Container>
            <Filters>
                <SearchContainer>
                    <SearchIcon>&#128269;</SearchIcon>
                    <Input />
                </SearchContainer>
                <FilterBy defaultValue="all" onChange={(e) => setRegion(e.target.value)}>
                    <option value="all" defaultValue>Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </FilterBy>
            </Filters>
            {renderCountries()}
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