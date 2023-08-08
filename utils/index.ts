export async function fetchCar() {
    const headers = {
        'X-RapidAPI-Key': '058bbea680msh03b297ea12b27b6p1397fajsn8a6a350cf5a0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
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
