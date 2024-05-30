function getRecommendations(weather) {
    const { temp, details, speed } = weather;
    let clothingRecommendation = '';
    let activityRecommendations = [];

    // Clothing recommendations based on temperature
    if (temp <= 0) {
        clothingRecommendation = 'It\'s freezing outside! Wear a heavy coat, gloves, and a hat.';
    } else if (temp > 0 && temp <= 10) {
        clothingRecommendation = 'It\'s quite cold. Wear a warm jacket and consider a hat and gloves.';
    } else if (temp > 10 && temp <= 20) {
        clothingRecommendation = 'The weather is cool. A light jacket or sweater should be fine.';
    } else if (temp > 20 && temp <= 30) {
        clothingRecommendation = 'The weather is warm. Dress in light clothing.';
    } else if (temp > 30) {
        clothingRecommendation = 'It\'s hot outside! Wear shorts and a t-shirt, and stay hydrated.';
    }

    // Activity recommendations based on weather details
    if (details.toLowerCase().includes('rain')) {
        activityRecommendations = [
            'Reading a book',
            'Drinking hot coffee',
            'Watching a movie marathon',
            'Baking some cookies',
            'Playing board games'
        ];
    } else if (details.toLowerCase().includes('snow')) {
        activityRecommendations = [
            'Having a snowball fight',
            'Building a snowman',
            'Snowboarding',
            'Skiing',
            'Drinking hot chocolate by the fireplace'
        ];
    } else if (details.toLowerCase().includes('clear') || details.toLowerCase().includes('sunny')) {
        activityRecommendations = [
            'Going to the beach',
            'Surfing',
            'Having a picnic',
            'Hiking',
            'Playing outdoor sports'
        ];
    } else if (details.toLowerCase().includes('clouds')) {
        activityRecommendations = [
            'Going for a walk',
            'Jogging in the park',
            'Visiting a museum',
            'Taking photos of the scenery',
            'Having a relaxed day outdoors'
        ];
    }

    if (speed > 10) {
        clothingRecommendation += ' It\'s quite windy. Secure loose items and be careful if you\'re biking.';
    }

    return { clothingRecommendation, activityRecommendations };
}

export default getRecommendations;
