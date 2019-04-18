# bidibidi

### Title : Bidi Bidi Refugee Settlement Camp

### Group Members:
 Paul, Owen and Ashley

### The Motivation:
Bidi Bidi is a refugee camp is located in northern Uganda mostly made up of South Sudanese seeking refugee from the South Sudanese civil war which began in 2013. The peak of the war occured in 2016 and this is when the greatest amount of refugees migrated to the camp. For a brief time in 2017 it is the largest refugee settlement in the world. This project will focus on the technique of story-maping to share some of the experience within the camp.

### The Description :
 First the project will give some background on the situation and how it arised, placing it into an historical context.
Next we will move into some of the geospatial data available on the settlement to model and convey some of the issues faced by the settlement.
Thirdly, we will have a section dedicated to the current social media indicators people are using to share stories with in the camp. This indicators will included Instagram data such as #bidibidi (this tag will need to be parsed with other tags to correctly identify the camp), #bidibidirefugeesettlement, and the location ID tag : 1281867775213393. From this data we can create wordclouds to express an idea of place and highlight photos with large engagement (likes and Comments).  Also, I would like to explore the API of twitter to see how to incorporate some of other social media platforms.

### The Data:
#### Historical Context:
When introducing the project we will use historical data. Currently focusing on UNHCR likes to JSON but will update with more as data is found:
[Population Growth of Entire Region ](https://data2.unhcr.org/api/population/get/timeseries?widget_id=84726&geo_id=220&sv_id=5&population_group=5071&frequency=day&fromDate=1900-01-01)

#### Current Data:
For our second portion of our story we will use current data from UNHCR and link the JSON urls so the map can be updated in real time.
URL’s such as :
[Population Breakdown by District](https://data2.unhcr.org/api/population/get/sublocation?widget_id=84724&geo_id=220&sv_id=5&population_collection=5&forcesublocation=0&fromDate=1900-01-01)

#### Social Media:
I already scrapped Instagram JSON  data given in assets folder:

 #bidibidirefugeesettlement \
 #bidibidi \
1281867775213393

Working on locating surrounding Instagram locations IDs.

Twitter API

### Interface Design:
The current direction is a story-map visualization which will follow the structure layer as :
The Setup, - Historical
Confrontation and - Current Data
The Resolution - Current Social Media Involvement.
Examples :
[#StandingRock](https://winkyt.github.io/standwithstandingrock/)
