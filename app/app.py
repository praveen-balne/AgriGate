from flask import Flask, render_template, request, Markup, redirect, url_for
import numpy as np
import string
import os
import datetime
from dotenv import load_dotenv
import pandas as pd
import requests
import config
import pickle
import io
from PIL import Image
from Data import getCropData, getFertilizerData

from dotenv import load_dotenv
load_dotenv()
# ==============================================================================================

# -------------------------LOADING THE TRAINED MODELS -----------------------------------------------

# Declaring the Endpoints for OpenWeatherAPI 

OWM_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather"
OWM_FORECAST_ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast"
GEOCODING_API_ENDPOINT = "http://api.openweathermap.org/geo/1.0/direct"

# Loading crop recommendation model

crop_recommendation_model_path = 'models/crop_recommendation/rf_pipeline.pkl'
crop_recommendation_model = pickle.load(open(crop_recommendation_model_path, 'rb'))

# Loading Feritilizer recommendation model

fertilizer_recommendation_model_path = 'models/fertilizer_recommendation/svm_pipeline.pkl'
fertilizer_recommendation_model = pickle.load(open(fertilizer_recommendation_model_path, 'rb'))
croptype_dict = {0: 'Barley', 1: 'Cotton', 2: 'Ground Nuts', 3: 'Maize', 4: 'Millets', 5: 'Oil seeds', 6: 'Paddy', 7: 'Pulses', 8: 'Sugarcane', 9: 'Tobacco', 10: 'Wheat'}
soiltype_dict = {0: 'Black', 1: 'Clayey', 2: 'Loamy', 3: 'Red', 4: 'Sandy'}

# =========================================================================================

# Custom functions for calculations

def weather_fetch(city_name):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    api_key = config.weather_api_key
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None

# ===============================================================================================
# ------------------------------------ FLASK APP -------------------------------------------------

app = Flask(__name__)

# render home page

@ app.route('/')
def home():
    title = 'Agrigate - Home'
    return render_template('index.html', title=title)

# render crop recommendation form page

@ app.route('/crop-recommend')
def crop_recommend():
    title = 'Agrigate - Crop Recommendation'
    return render_template('crop.html', title=title)

# render fertilizer recommendation form page

@ app.route('/fertilizer')
def fertilizer_recommendation():
    title = 'Agrigate - Fertilizer Suggestion'

    return render_template('fertilizer.html', title=title)

# render Weather Forecast page

# Display home page and get city name entered into search form
@app.route("/weather-forecast", methods=["GET", "POST"])
def weather_forecast():
    title = 'Agrigate - Weather Forecast'
    if request.method == "POST":
        city = request.form.get("city")
        return redirect(url_for("get_weather", city=city))
    return render_template("weather.html",title=title)

# Display weather forecast for specific city using data from OpenWeather API
@app.route("/<city>", methods=["GET", "POST"])
def get_weather(city):
    # Format city name and get current date to display on page
    api_key = config.owm_api_key
    city_name = string.capwords(city)
    today = datetime.datetime.now()
    current_date = today.strftime("%A, %B %d")

    # Get latitude and longitude for city
    location_params = {
        "q": city_name,
        "appid": api_key,
        "limit": 3,
    }

    location_response = requests.get(GEOCODING_API_ENDPOINT, params=location_params)
    location_data = location_response.json()

    # Prevent IndexError if user entered a city name with no coordinates by redirecting to error page
    if not location_data:
        return redirect(url_for("error"))
    else:
        lat = location_data[0]['lat']
        lon = location_data[0]['lon']

    # Get OpenWeather API data
    weather_params = {
        "lat": lat,
        "lon": lon,
        "appid": api_key,
        "units": "metric",
    }
    weather_response = requests.get(OWM_ENDPOINT, weather_params)
    weather_response.raise_for_status()
    weather_data = weather_response.json()

    # Get current weather data
    current_temp = round(weather_data['main']['temp'])
    current_weather = weather_data['weather'][0]['main']
    min_temp = round(weather_data['main']['temp_min'])
    max_temp = round(weather_data['main']['temp_max'])
    wind_speed = weather_data['wind']['speed']

    # Get five-day weather forecast data
    forecast_response = requests.get(OWM_FORECAST_ENDPOINT, weather_params)
    forecast_data = forecast_response.json()

    # Make lists of temperature and weather description data to show user
    five_day_temp_list = [round(item['main']['temp']) for item in forecast_data['list'] if '12:00:00' in item['dt_txt']]
    five_day_weather_list = [item['weather'][0]['main'] for item in forecast_data['list']
                             if '12:00:00' in item['dt_txt']]

    # Get next four weekdays to show user alongside weather data
    five_day_unformatted = [today, today + datetime.timedelta(days=1), today + datetime.timedelta(days=2),
                            today + datetime.timedelta(days=3), today + datetime.timedelta(days=4)]
    five_day_dates_list = [date.strftime("%a") for date in five_day_unformatted]

    return render_template("city.html", city_name=city_name, current_date=current_date, current_temp=current_temp,
                           current_weather=current_weather, min_temp=min_temp, max_temp=max_temp, wind_speed=wind_speed,
                           five_day_temp_list=five_day_temp_list, five_day_weather_list=five_day_weather_list,
                           five_day_dates_list=five_day_dates_list)


# Display error page for invalid input
@app.route("/error")
def error():
    return render_template("error.html")

# ===============================================================================================

# RENDER PREDICTION PAGES

# render crop recommendation result page

@ app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    title = 'Agrigate - Crop Recommendation'

    if request.method == 'POST':
        N = int(request.form['nitrogen'])
        P = int(request.form['phosphorous'])
        K = int(request.form['pottasium'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])

        # state = request.form.get("stt")
        city = request.form.get("city")

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
            my_prediction = crop_recommendation_model.predict(data)
            final_prediction = getCropData(my_prediction[0])

            return render_template('crop-result.html', prediction=final_prediction, title=title)

        else:

            return render_template('try_again.html', title=title)

# render fertilizer recommendation result page

@ app.route('/fertilizer-predict', methods=['POST'])
def fert_recommend():
    title = 'Agrigate - Fertilizer Suggestion'

    if request.method == 'POST':
        N = int(request.form['nitrogen'])
        P = int(request.form['phosphorous'])
        K = int(request.form['pottasium'])
        soiltype = list(soiltype_dict.keys())[list(soiltype_dict.values()).index(str(request.form['soiltype']))]
        crop_name = list(croptype_dict.keys())[list(croptype_dict.values()).index(str(request.form['cropname']))]

        # state = request.form.get("stt")
        city = request.form.get("city")

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[temperature, humidity, soiltype, crop_name, N, P, K]])
            my_prediction = fertilizer_recommendation_model.predict(data)
            final_prediction = getFertilizerData(my_prediction[0])

            return render_template('fertilizer-result.html', prediction=final_prediction, title=title)

        else:

            return render_template('try_again.html', title=title)


# ===============================================================================================
if __name__ == '__main__':
    app.run(debug=True)