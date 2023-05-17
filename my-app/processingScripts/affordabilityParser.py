import pandas as pd
import json

# Read the Excel file into a pandas DataFrame
df = pd.read_excel("../UKchloropleth/income.xls", sheet_name="All")

# Perform operations on the DataFrame as needed
# For example, you can print the first few rows:
# print(df.head(10))
df2 = df[["Table 8.7a   Annual pay - Gross (£) - For all employee jobsa: United Kingdom, 2022", "Unnamed: 5"]]
df2 = df2.rename(columns={"Table 8.7a   Annual pay - Gross (£) - For all employee jobsa: United Kingdom, 2022": "County", "Unnamed: 5": "Average Income"})

df2 = df2.iloc[9:]
df2 = df2.iloc[:-7]
df2['County'] = df2['County'].str.replace(' UA', '')
df2['County'] = df2['County'].str.strip()
# print(df2.head(8))
# print(df.loc[:,"Table 8.7a   Annual pay - Gross (£) - For all employee jobsa: United Kingdom, 2022", "Unnamed: 5"])
out = []
for k,v in df2.iterrows():
    out.append({"County": v['County'], "Income": v['Average Income']})
    # print(v['County'])
# d = df2.set_index('County')['Average Income'].to_dict()
# print(out)

df3 = pd.read_excel("./housing.xls", sheet_name="2a")
df3 = df3[["Unnamed: 3", "Unnamed: 111"]]
df3 = df3.rename(columns={"Unnamed: 3": "Local Authority", "Unnamed: 111": "Average Price"})
df3 = df3.iloc[6:]

# print(df3.head(10))

s = "['Aberdeen<br>val: 29.84', 'Aberdeenshire<br>val: 72.49', 'Anglesey<br>val: 49.77', 'Angus<br>val: 67.2', 'Antrim and Newtownabbey<br>val: 45.4', 'Argyll and Bute<br>val: 57.13', 'Armagh, Banbridge and Craigavon<br>val: 68.41', 'Barnsley<br>val: 36.62', 'Bath and North East Somerset<br>val: 34.14', 'Bedfordshire<br>val: 67.16', 'Belfast<br>val: 66.3', 'Birmingham<br>val: 49.14', 'Blackburn with Darwen<br>val: 62.99', 'Blackpool<br>val: 25.44', 'Blaenau Gwent<br>val: 55.18', 'Bolton<br>val: 73.83', 'Bournemouth<br>val: 22.14', 'Bracknell Forest<br>val: 53.77', 'Bradford<br>val: 35.72', 'Bridgend<br>val: 47.37', 'Brighton and Hove<br>val: 59.83', 'Bristol<br>val: 23.19', 'Buckinghamshire<br>val: 35.49', 'Bury<br>val: 27.48', 'Caerphilly<br>val: 31.11', 'Calderdale<br>val: 60.28', 'Cambridgeshire<br>val: 29.16', 'Cardiff<br>val: 70.95', 'Carmarthenshire<br>val: 54.91', 'Causeway Coast and Glens<br>val: 65.09', 'Central Bedfordshire<br>val: 61.91', 'Ceredigion<br>val: 63.52', 'Cheshire East<br>val: 41.36', 'Cheshire West and Chester<br>val: 74.9', 'Clackmannanshire<br>val: 55.57', 'Conwy<br>val: 31.53', 'Cornwall<br>val: 59.32', 'Coventry<br>val: 70.06', 'Cumbria<br>val: 51.38', 'Darlington<br>val: 53.15', 'Denbighshire<br>val: 36.48', 'Derby<br>val: 72.64', 'Derbyshire<br>val: 32.31', 'Derry and Strabane<br>val: 25.69', 'Devon<br>val: 66.33', 'Doncaster<br>val: 70.75', 'Dorset<br>val: 20.12', 'Dudley<br>val: 30.12', 'Dumfries and Galloway<br>val: 21.47', 'Dundee<br>val: 46.23', 'Durham<br>val: 51.52', 'East Ayrshire<br>val: 30.21', 'East Dunbartonshire<br>val: 64.35', 'East Lothian<br>val: 40.25', 'East Renfrewshire<br>val: 24.07', 'East Riding of Yorkshire<br>val: 31.63', 'East Sussex<br>val: 67.62', 'Edinburgh<br>val: 63.56', 'Eilean Siar<br>val: 41.44', 'Essex<br>val: 31.48', 'Falkirk<br>val: 54.34', 'Fermanagh and Omagh<br>val: 25.77', 'Fife<br>val: 22.55', 'Flintshire<br>val: 49.51', 'Gateshead<br>val: 37.37', 'Glasgow<br>val: 69.73', 'Gloucestershire<br>val: 67.54', 'Greater London<br>val: 51.72', 'Gwynedd<br>val: 64.74', 'Halton<br>val: 67.68', 'Hampshire<br>val: 30.02', 'Hartlepool<br>val: 24.59', 'Herefordshire<br>val: 48.72', 'Hertfordshire<br>val: 66.5', 'Highland<br>val: 58.06', 'Inverclyde<br>val: 72.07', 'Isle of Wight<br>val: 28.68', 'Isles of Scilly<br>val: 34.87', 'Kent<br>val: 32.21', 'Kingston upon Hull<br>val: 25.9', 'Kirklees<br>val: 74.46', 'Knowsley<br>val: 67.51', 'Lancashire<br>val: 46.83', 'Leeds<br>val: 22.16', 'Leicester<br>val: 40.73', 'Leicestershire<br>val: 68.61', 'Lincolnshire<br>val: 51.9', 'Lisburn and Castlereagh<br>val: 36.51', 'Luton<br>val: 72.69', 'Manchester<br>val: 71.57', 'Medway<br>val: 58.2', 'Merthyr Tydfil<br>val: 34.51', 'Mid Ulster<br>val: 24.11', 'Mid and East Antrim<br>val: 62.15', 'Middlesbrough<br>val: 74.75', 'Midlothian<br>val: 23.45', 'Milton Keynes<br>val: 56.01', 'Monmouthshire<br>val: 74.44', 'Moray<br>val: 69.95', 'Neath Port Talbot<br>val: 43.08', 'Newcastle upon Tyne<br>val: 30.17', 'Newport<br>val: 54.49', 'Newry, Mourne and Down<br>val: 26.73', 'Norfolk<br>val: 51.39', 'North Ayrshire<br>val: 23.76', 'North Down and Ards<br>val: 72.75', 'North Lanarkshire<br>val: 58.68', 'North Lincolnshire<br>val: 35.5', 'North Somerset<br>val: 43.66', 'North Tyneside<br>val: 57.47', 'North Yorkshire<br>val: 67.4', 'Northamptonshire<br>val: 69.5', 'Northumberland<br>val: 35.63', 'Nottingham<br>val: 46.69', 'Nottinghamshire<br>val: 64.08', 'Oldham<br>val: 43.61', 'Orkney Islands<br>val: 25.43', 'Oxfordshire<br>val: 52.89', 'Pembrokeshire<br>val: 65.57', 'Perthshire and Kinross<br>val: 37.26', 'Peterborough<br>val: 29.21', 'Plymouth<br>val: 37.16', 'Poole<br>val: 52.12', 'Portsmouth<br>val: 72.62', 'Powys<br>val: 72.43', 'Reading<br>val: 57.47', 'Redcar and Cleveland<br>val: 44.17', 'Renfrewshire<br>val: 33.47', 'Rhondda, Cynon, Taff<br>val: 26.91', 'Rochdale<br>val: 49.6', 'Rotherham<br>val: 56.07', 'Rutland<br>val: 32.74', 'Saint Helens<br>val: 73.31', 'Salford<br>val: 48.37', 'Sandwell<br>val: 30.45', 'Scottish Borders<br>val: 51.17', 'Sefton<br>val: 37.26', 'Sheffield<br>val: 38.43', 'Shetland Islands<br>val: 50.84', 'Shropshire<br>val: 42.57', 'Slough<br>val: 20.63', 'Solihull<br>val: 68.58', 'Somerset<br>val: 53.19', 'South Ayrshire<br>val: 28.11', 'South Gloucestershire<br>val: 70.73', 'South Lanarkshire<br>val: 60.7', 'South Tyneside<br>val: 72.9', 'Southampton<br>val: 65.37', 'Southend-on-Sea<br>val: 69.97', 'Staffordshire<br>val: 62.12', 'Stirling<br>val: 58.26', 'Stockport<br>val: 26.19', 'Stockton-on-Tees<br>val: 28.46', 'Stoke-on-Trent<br>val: 74.07', 'Suffolk<br>val: 46.39', 'Sunderland<br>val: 55.2', 'Surrey<br>val: 38.99', 'Swansea<br>val: 67.33', 'Swindon<br>val: 64.74', 'Tameside<br>val: 50.56', 'Telford and Wrekin<br>val: 71.52', 'Thurrock<br>val: 27.18', 'Torbay<br>val: 40.99', 'Torfaen<br>val: 65.19', 'Trafford<br>val: 74.2', 'Vale of Glamorgan<br>val: 60.22', 'Wakefield<br>val: 68.76', 'Walsall<br>val: 64.39', 'Warrington<br>val: 48.93', 'Warwickshire<br>val: 48.46', 'West Berkshire<br>val: 70.79', 'West Dunbartonshire<br>val: 68.07', 'West Lothian<br>val: 24.01', 'West Sussex<br>val: 21.39', 'Wigan<br>val: 47.64', 'Wiltshire<br>val: 69.65', 'Windsor and Maidenhead<br>val: 22.8', 'Wirral<br>val: 39.85', 'Wokingham<br>val: 46.13', 'Wolverhampton<br>val: 69.07', 'Worcestershire<br>val: 69.42', 'Wrexham<br>val: 51.99', 'York<br>val: 68.74']"
s = s[1:-1]

substrings = s.split("', '")

locations = []
for substring in substrings:
    location = substring.split("<br>")[0]
    locations.append(location)

print(len(locations))
print("")
temp = sorted(list(df2["County"]))
temp = [i.strip() for i in temp]
for i in range(len(temp)):
    if temp[i].endswith(' UA'):
        temp[i] = temp[i][:-3]
# print(temp)
print("")
# print(sorted(list(df3["Local Authority"])))

common = list(set(temp) & set(sorted(list(df3["Local Authority"]))))
# print(sorted(common))
# print(len(common))
print("")
c2 = list(set(common) & set(locations))
# print(sorted(c2))
# print(len(c2))
# final_out = {}
# for i in locations:
#     final_out[i] = {"income": 123, "price": 123}



# with open('incomeData.json', 'w') as f:
#     json.dump(out, f)
common_dict = {} # county: [income, price]
# print(df2.loc[df2["County"] == "Darlington UA"]["Average Income"])

finaldf = pd.DataFrame()
finaldf['County'] = []
finaldf['Affordability Index'] = []
# finaldf['avg price'] = []

income_dict = {k: v for k, v in zip(df2['County'], df2['Average Income'])}
price_dict = {k: v for k, v in zip(df3['Local Authority'], df3['Average Price'])}

for i in locations:
    print(i, i in income_dict and i in price_dict)
    if i in income_dict and i in price_dict:
        temp = income_dict[i]
        if temp == 'x':
            temp = 27000
        finaldf.loc[len(finaldf)] = [i, round(price_dict[i]/float(temp), 3)]

# print(finaldf.head(15))

final_dict = {k: v for k, v in zip(finaldf['County'], finaldf['Affordability Index'])}

#turn into string
final_s = "["
for k, v in final_dict.items():
    final_s += "'{}<br>AffordabilityIndex: {}', ".format(k, v)
final_s += "]"
# print(len(finaldf))

import colorsys

def map_value_to_rgb(value):
    # Determine the percentage of the range from 0 to 12 that the input value represents
    percentage = value / 12.0
    
    # Use linear interpolation to calculate the red, green, and blue components of the color
    r = int((255 * percentage))
    g = int(255 * (1 - percentage))
    b = 0
    
    print((value, percentage,r,g,b))
    return (r, g, b)
# print(final_dict)
counter = 0
with open('../src/components/ChoroplethMap.js', 'r') as infile, open('../src/components/test.js', 'w') as outfile:
    for line in infile:
        if line.strip().startswith("fillcolor"):
            #get index
            idx = final_dict[locations[counter]]
            print(locations[counter], end="")
            outfile.write("  fillcolor: 'rgb{}',\n".format(map_value_to_rgb(idx)))
            counter += 1
        else:
            outfile.write(line)
print(len(locations))
# gradient_size = 11

# # Define the RGB values for green and red
# green = (0, 255, 0)
# red = (255, 0, 0)

# # Calculate the RGB values for the gradient
# gradient = [((i / (gradient_size - 1)) * red[0] + ((gradient_size - i - 1) / (gradient_size - 1)) * green[0],
#              (i / (gradient_size - 1)) * red[1] + ((gradient_size - i - 1) / (gradient_size - 1)) * green[1],
#              (i / (gradient_size - 1)) * red[2] + ((gradient_size - i - 1) / (gradient_size - 1)) * green[2]) for i in range(gradient_size)]

# # Print the RGB values
# for color in gradient:
#     print("rgb({}, {}, {})".format(int(color[0]), int(color[1]), int(color[2])))