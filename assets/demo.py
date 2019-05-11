import json 
import pandas as pd 
from pandas.io.json import json_normalize

with open('1281867775213393.json', encoding='utf-8-sig') as f:
	data = json.load(f) 

df = json_normalize(data)

df.to_csv('1281867775213393.csv', encoding='utf-8', index=False)




