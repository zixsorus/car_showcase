import { CarProps, FilterProps } from "@/types";

export async function fetchCar( filters: FilterProps) {
    const { manufacturer, year, limit, fuel, model} = filters;

    const headers = {
        'X-RapidAPI-Key': '058bbea680msh03b297ea12b27b6p1397fajsn8a6a350cf5a0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fule=${fuel}&model=${model}`, {headers: headers});

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 30; // Base rental price per day in dollars
    const mileageFactor = 0.16; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
    const conversionRate = 34; // Conversion rate from USD to THB (1 USD = 34 THB)

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day in dollars
    const rentalRatePerDayInUSD = basePricePerDay + mileageRate + ageRate;

    // Convert rental rate to Thai Baht
    const rentalRatePerDayInTHB = rentalRatePerDayInUSD * conversionRate;

    return rentalRatePerDayInTHB.toFixed(0);
};

export const calculateKmlRate = (city_mpg: number) => {
    const kilometers = 0.425;

    const rate = city_mpg * kilometers;

    return rate.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make, year, model} = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}

export const updateSearchParams = (type : string, value : string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}