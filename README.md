# AgriGate 🌿
#### A simple ML based website which recommends the best crop to grow, fertilizers to use and the wether forecast information for the selected region.

## DISCLAIMER ⚠️
This is a POC(Proof of concept) kind-of project. The data used here comes up with no guarantee from the creator. So, don't use it for making farming decisions. If you do so, the creator is not responsible for anything. However, this project presents the idea that how we can use ML into precision farming if developed at large scale and with authentic and verified data.

## MOTIVATION 💪
- Farming is one of the major sectors that influences a country’s economic growth. 

- In country like India, majority of the population is dependent on agriculture for their livelihood. Many new technologies, such as Machine Learning are being implemented into agriculture so that it is easier for farmers to grow and maximize their yield. 

- In this project, I present a website in which the following applications are implemented: Crop recommendation, Fertilizer recommendation and Weather Forecast respectively. 

    - In the crop recommendation application, the user can provide the soil data, city and state from their side and the application will predict which crop should the user grow based on the weather and soil parameters. 
    
    - For the fertilizer recommendation application, the user can input the soil data, city, state and the type of crop they are growing, and the application will predict what the soil lacks or has excess of and will recommend improvements. 
    
    - For the last application, the user can select region to get weather forecast information for given region for upcoming four days.

## DATA SOURCE 📊
- [Crop recommendation dataset ](https://www.kaggle.com/atharvaingle/crop-recommendation-dataset) 
- [Fertilizer suggestion dataset ](https://github.com/Gladiator07/Harvestify/blob/master/Data-processed/fertilizer.csv) 

## How to use 💻
- Crop Recommendation system ==> enter the corresponding nutrient values of your soil, select the state and city from the dropdown list. Note that, the N-P-K (Nitrogen-Phosphorous-Pottasium) values to be entered should be the ratio between them. Refer [this website](https://www.gardeningknowhow.com/garden-how-to/soil-fertilizers/fertilizer-numbers-npk.htm) for more information.
Note: When you select the city name and state make sure to select the nearest city name if your city is not listed. Some of regions like remote cities/towns may not be available in the [Weather API](https://openweathermap.org/) from where humidity, temperature data is fetched.

- Fertilizer Recommendation system ==> Enter the nutrient contents of your soil, select state, city appropriately from the dropdown lists and the crop you want to grow. The algorithm will tell which nutrient the soil has excess of or lacks. Accordingly, it will give suggestions for buying fertilizers.

- Weather Forecast module ==> Select the state, then region or city from the dropdown list. The weather forecast information for the selected region or city of the four upcoming days will be shown.

## How to run locally 🛠️
- Download the code from the Github 

- Install all the required packages with
  ```
  pip install -r requirements.txt
  ```
- Goto to app folder and finally run the project with
  ```
  python app.py
  ```
- Open the localhost url provided after running `app.py` and now you can use the project locally in your web browser.

## Usage ⚙️
You can use this project for further developing it and adding your work in it. If you use this project, kindly mention the original source of the project and mention the link of this repo in your report.

## Further Improvements 📈
This was my academic project built during my college so there are lot of things to improve upon

- Frontend can be made more nicer.	
- More data can be collected manually via web scrapping to make the system more accurate :monocle_face:	
- With the modules implemented above, plant diseas recognization can be added.
- For the recommendation more advanced models can be used with furhter more large and latest data with more parameters for better application results.
