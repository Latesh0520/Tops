/*

NOTE - GIVE MEANS GIVE NOT PRINT
- Give means You have to make function which return value what i 
ask for

1. import data from json
2. give all city name of state which one give by user
3. give all city name , which have more character than user given input
4. city list which has population more then user give
5. acending decending population wise
6. top 5 city population wise [only name of city]
7. give total populatin of state which give by user
8. give top 5 state name population wise 
  */
const cityData = require("./data.json");
// console.log("🚀 ~ cityData:", cityData);

// 2. give all city name of state which one give by user
function returnCityByStateNamefunc(statename){
    const filterData = cityData.filter((e)=>{
        return e.state_name == statename;
    })
    const returnCityByStateName =  filterData.map((e)=>{
        return e.city;
    })
    return returnCityByStateName;
}
// console.log("🚀 ~ returnCityByStateName ~ returnCityByStateName:", returnCityByStateNamefunc('Mahārāshtra'))

// 3. give all city name , which have more character than user given input
function returnCityBymoreCharacterfunc(lengthofcity){
    const filterData = cityData.filter((e)=>{
        return e.city.length > lengthofcity;
    })
    const returnCityBymoreCharacter =  filterData.map((e)=>{
        return e.city;
    })
    return returnCityBymoreCharacter;
}
// console.log("🚀 ~ returnCityBymoreCharacterfunc ~ returnCityBymoreCharacterfunc:", returnCityBymoreCharacterfunc(5));

// 4. city list which has population more then user give
function returnCityByMorePopulation(populationOfCIty){
    const filterData = cityData.filter((e)=>{
        return e.population > populationOfCIty;
    })
    const returnCityBymoreCharacter =  filterData.map((e)=>{
        return e.city;
    })
    return returnCityBymoreCharacter;
}
// console.log("🚀 ~ returnCityByMorePopulation ~ returnCityByMorePopulation:", returnCityByMorePopulation(6538001));

let ascSortedCities  = cityData.sort((c1, c2) => c1.population - c2.population);
// console.log("🚀 ~ ascSortedCities:", ascSortedCities)

let descSortedCities  = cityData.sort((c1, c2) => c2.population - c1.population);
// console.log("🚀 ~ descSortedCities:", descSortedCities)

// 6. top 5 city population wise [only name of city]
function topFiveCityByPopulation(){
    let descSortedCities  = cityData.sort((c1, c2) => c2.population - c1.population);
    const filterCities = descSortedCities.filter((e,i)=>{
        return i < 5;
    });
    const Cities = filterCities.map((e)=>{
        return e.city;
    });
    return Cities;
}
// console.log("🚀 ~ topFiveCityByPopulation ~ topFiveCityByPopulation:", topFiveCityByPopulation())

// 7. give total populatin of state which give by user
function getTotalPopulation(state_name_para){
    const filterCities = cityData.filter((e,i)=>{
        return e.state_name == state_name_para;
    });
    // console.log(filterCities);
    let totalofstate = 0;
    for (const key in filterCities) {
        totalofstate += parseInt(filterCities[key].population);
    }
    return totalofstate;       
}

// console.log("🚀 ~ getTotalPopulation ~ getTotalPopulation:",getTotalPopulation('Gujarāt'))

// 8. give top 5 state name population wise     
function getTopFivePopulationTOtalStateWise(){
    stateWisePopulation = {}
    cityData.forEach((city)=>{
        let state = city.state_name;
        let population = parseInt(city.population);

        if(stateWisePopulation[state]){
            stateWisePopulation[state] += population;
        }else{
            stateWisePopulation[state] = population;
        }
    });

    const stateWisePopulationArray  = Object.entries(stateWisePopulation).map(([state,population]) => ({state, population}))
    // console.log("🚀 ~ getTopFivePopulationTOtalStateWise ~ stateWisePopulationArray:", stateWisePopulationArray)

    sortedData = stateWisePopulationArray.sort((s1,s2)=> s2.population - s1.population );
    
    let topFiveDataBypopution = sortedData.filter((e,i)=> i < 5);
    return topFiveDataBypopution;
}
// getTopFivePopulationTOtalStateWise();
console.log("🚀 ~ getTopFivePopulationTOtalStateWise();:", getTopFivePopulationTOtalStateWise())
