function getRecommendations(weather, forecastData, units) {
    const { temp, details } = weather;
    // console.log('Temperature:', temp, 'Details:', details, 'Chance of Rain:', forecastData);
    let clothingRecommendation = '';
    let activityRecommendations = [];

    if (units === 'imperial') {
        // Recommendations for Fahrenheit
        if (temp <= 32) {
            clothingRecommendation = 'Bundle up! It\'s freezing outside.';
        } else if (temp > 32 && temp <= 50) {
            clothingRecommendation = 'Feeling a bit chilly? A warm jacket and maybe a hat and gloves would be perfect.';
        } else if (temp > 50 && temp <= 68) {
            clothingRecommendation = 'Cool weather is here! Enjoy it with a light jacket or sweater.';
        } else if (temp > 68 && temp <= 86) {
            clothingRecommendation = 'Warm weather is here! Time to break out those light, breezy clothes.';
        } else if (temp > 86) {
            clothingRecommendation = 'Whew, it\'s hot! Stay cool with shorts, a t-shirt, and plenty of water.';
        }
    } else if (units === 'metric') {
        // Recommendations for Celsius
        if (temp <= 0) {
            clothingRecommendation = 'Bundle up! It\'s freezing outside.';
        } else if (temp > 0 && temp <= 10) {
            clothingRecommendation = 'Feeling a bit chilly? A warm jacket and maybe a hat and gloves would be perfect.';
        } else if (temp > 10 && temp <= 20) {
            clothingRecommendation = 'Cool weather is here! Enjoy it with a light jacket or sweater.';
        } else if (temp > 20 && temp <= 30) {
            clothingRecommendation = 'Warm weather is here! ️Time to break out those light, breezy clothes.';
        } else if (temp > 30) {
            clothingRecommendation = 'Whew, it\'s hot! Stay cool with shorts, a t-shirt, and plenty of water.';
        }
    }
    // Clothing recommendations based on weather details and chance of rain
    if (details.toLowerCase().includes('rain') || details.toLowerCase().includes('drizzle') || forecastData[0].chanceOfPrecipitation > 0.5) {
        clothingRecommendation += ' Don\'t forget an umbrella or raincoat, there\'s a high chance of rain';
    } else if (details.toLowerCase().includes('snow')) {
        clothingRecommendation += ' Winter wonderland! Dress warmly with layers, a heavy coat, and insulated boots';
    } else if (details.toLowerCase().includes('clear') || details.toLowerCase().includes('sunny')) {
        clothingRecommendation += ' Sunglasses and sunscreen recommended, it\'s a clear or sunny day!';
    } else if (details.toLowerCase().includes('clouds')) {
        clothingRecommendation += ' Don\'t let the clouds fool you, it might get chilly later. Pack a light jacket or sweater.';
    } else if (details.toLowerCase().includes('haze')) {
        clothingRecommendation += ' But it\'s hazy today, consider wearing a mask and If the haze is severe, try to limit outdoor activities.';
    }
    // console.log('Updated Clothing Recommendation:', clothingRecommendation);
    // Activity recommendations based on weather details
    if (details.toLowerCase().includes('rain') || details.toLowerCase().includes('drizzle') || details.toLowerCase().includes('haze') || forecastData[0].chanceOfPrecipitation > 0.5) {
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

