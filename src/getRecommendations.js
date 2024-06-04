function getRecommendations(weather, forecastData, units) {
    const { temp, details } = weather;
    // console.log('Temperature:', temp, 'Details:', details, 'Chance of Rain:', forecastData);
    let clothingRecommendation = '';
    let activityRecommendations = [];

    if (units === 'imperial') {
        // Recommendations for Fahrenheit
        if (temp <= 32) {
            clothingRecommendation = 'It\'s freezing outside! Wear a heavy coat, gloves, and a hat.';
        } else if (temp > 32 && temp <= 50) {
            clothingRecommendation = 'It\'s quite cold. Wear a warm jacket and consider a hat and gloves.';
        } else if (temp > 50 && temp <= 68) {
            clothingRecommendation = 'The weather is cool.';
        } else if (temp > 68 && temp <= 86) {
            clothingRecommendation = 'The weather is warm. Dress in light clothing.';
        } else if (temp > 86) {
            clothingRecommendation = 'It\'s hot outside! Wear shorts and a t-shirt, and stay hydrated.';
        }
    } else if (units === 'metric') {
        // Recommendations for Celsius
        if (temp <= 0) {
            clothingRecommendation = 'It\'s freezing outside! Wear a heavy coat, gloves, and a hat.';
        } else if (temp > 0 && temp <= 10) {
            clothingRecommendation = 'It\'s quite cold. Wear a warm jacket and consider a hat and gloves.';
        } else if (temp > 10 && temp <= 20) {
            clothingRecommendation = 'The weather is cool.';
        } else if (temp > 20 && temp <= 30) {
            clothingRecommendation = 'The weather is warm. Dress in light clothing.';
        } else if (temp > 30) {
            clothingRecommendation = 'It\'s hot outside! Wear shorts and a t-shirt, and stay hydrated.';
        }
    }
    // Clothing recommendations based on weather details and chance of rain
    if (details.toLowerCase().includes('rain') || details.toLowerCase().includes('drizzle') || forecastData[0].chanceOfPrecipitation > 0.5) {
        clothingRecommendation += ' And there is a high chance of rain, so consider wearing a waterproof jacket and carrying an umbrella or raincoat.';
    } else if (details.toLowerCase().includes('snow')) {
        clothingRecommendation += ' And snow is expected. Wear warm layers, a heavy coat, and insulated boots.';
    } else if (details.toLowerCase().includes('clear') || details.toLowerCase().includes('sunny')) {
        clothingRecommendation += ' And it\'s a clear or sunny day. Wear light and breathable clothing, sunglasses, and sunscreen.';
    } else if (details.toLowerCase().includes('clouds')) {
        clothingRecommendation += ' And it\'s cloudy. Bring a light jacket or sweater in case it gets cooler.';
    }
    // console.log('Updated Clothing Recommendation:', clothingRecommendation);
    // Activity recommendations based on weather details
    if (details.toLowerCase().includes('rain') || details.toLowerCase().includes('drizzle') || forecastData[0].chanceOfPrecipitation > 0.5) {
        activityRecommendations = [
            'Reading a book indoors',
            'Drinking hot coffee or tea',
            'Baking indoors',
            'Do a movie marathon',
            'Playing board games indoors'
        ];
    } else if (details.toLowerCase().includes('snow')) {
        activityRecommendations = [
            'Having a snowball fight',
            'Building a snowman',
            'Skiing or snowboarding',
            'Bake something delicious',
            'Playing winter sports'
        ];
    } else if (details.toLowerCase().includes('clear') || details.toLowerCase().includes('sunny')) {
        activityRecommendations = [
            'Going for a walk or hike',
            'Having a picnic outdoors',
            'Swimming or sunbathing at the beach',
            'Playing outdoor sports',
            'Enjoy the weather outdoor!'

        ];
    } else if (details.toLowerCase().includes('clouds')) {
        activityRecommendations = [
            'Going for a walk or jog',
            'Visiting a museum or art gallery',
            'Having a picnic outdoors',
            'Playing outdoor sports',
            'Hiking and explore nature!'
        ];
    }

    /*if (speed > 10) {
        clothingRecommendation += ' It\'s quite windy. Secure loose items and be careful if you\'re biking.';
    }*/
    // console.log('Activity Recommendations:', activityRecommendations);

    return { clothingRecommendation, activityRecommendations };
}

export default getRecommendations;

