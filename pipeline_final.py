import os
import pandas as pd
import numpy as np

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

df = pd.read_csv(os.path.join(BASE_DIR, "data", "survey_results_public.csv"), low_memory=False)
print(f"Carga: {df.shape[0]:,} filas x {df.shape[1]} columnas")

comp = df['ConvertedCompYearly'].dropna()
p01, p99 = comp.quantile(0.01), comp.quantile(0.99)
df['comp_clean'] = df['ConvertedCompYearly'].where(df['ConvertedCompYearly'].between(p01, p99))
print(f"Salario limpio: {df['comp_clean'].notna().sum():,} registros")

country_aliases = {
    "Russian Federation": "Russia",
    "Iran, Islamic Republic of...": "Iran",
    "Viet Nam": "Vietnam",
    "Republic of Korea": "South Korea",
    "Venezuela, Bolivarian Republic of...": "Venezuela",
    "Hong Kong (S.A.R.)": "Hong Kong (China)",
    "Kosovo": "Kosovo (Disputed Territory)",
    "Bosnia and Herzegovina": "Bosnia And Herzegovina",
    "United States of America": "United States",
    "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
}
df['Country_std'] = df['Country'].replace(country_aliases)

numbeo_cli = {
    "Us Virgin Islands": 98.4, "Switzerland": 98.4, "Iceland": 83.4,
    "Bahamas": 81.4, "Singapore": 79.1, "Hong Kong (China)": 73.6,
    "Barbados": 70.0, "Norway": 69.0, "Papua New Guinea": 67.4,
    "Denmark": 66.9, "Guernsey": 66.1, "Israel": 65.2,
    "United States": 64.9, "Luxembourg": 64.8, "Australia": 60.9,
    "Austria": 60.7, "Netherlands": 60.5, "Ireland": 59.8,
    "United Kingdom": 59.2, "Puerto Rico": 58.7, "Finland": 58.7,
    "Canada": 58.7, "Germany": 58.4, "France": 58.0,
    "South Korea": 56.5, "Belgium": 56.5, "New Zealand": 55.3,
    "Sweden": 54.2, "United Arab Emirates": 54.1, "Italy": 51.0,
    "Costa Rica": 50.1, "Cyprus": 49.5, "Estonia": 49.4,
    "Malta": 48.0, "Qatar": 47.5, "Greece": 46.5,
    "Uruguay": 46.3, "Slovenia": 46.2, "Japan": 45.6,
    "Taiwan": 44.4, "Lithuania": 44.0, "Spain": 43.5,
    "Latvia": 43.4, "Croatia": 43.2, "Ethiopia": 43.2,
    "Czech Republic": 42.6, "Slovakia": 42.1, "Saudi Arabia": 41.9,
    "Portugal": 41.2, "Kuwait": 40.4, "Albania": 39.9,
    "Armenia": 39.6, "Poland": 38.9, "Jordan": 37.2,
    "Guatemala": 36.8, "Hungary": 36.6, "Montenegro": 36.3,
    "Serbia": 35.9, "Venezuela": 35.9, "Argentina": 35.7,
    "Bulgaria": 35.4, "Chile": 35.1, "Turkey": 34.7,
    "Mexico": 34.5, "Dominican Republic": 34.3, "Romania": 34.0,
    "Thailand": 33.7, "Sri Lanka": 33.5, "Bosnia And Herzegovina": 31.6,
    "Moldova": 30.8, "China": 30.7, "Ghana": 30.6,
    "Georgia": 30.4, "North Macedonia": 30.3, "Ecuador": 30.0,
    "South Africa": 30.0, "Malaysia": 29.7, "Azerbaijan": 29.5,
    "Peru": 29.4, "Philippines": 28.8, "Kenya": 28.2,
    "Morocco": 27.2, "Vietnam": 26.6, "Kazakhstan": 26.6,
    "Nigeria": 26.4, "Uganda": 26.0, "Colombia": 26.0,
    "Kosovo (Disputed Territory)": 25.7, "Brazil": 25.6,
    "Tunisia": 25.5, "Bolivia": 25.2, "Belarus": 25.0,
    "Indonesia": 24.6, "Ukraine": 24.6, "Algeria": 24.5,
    "Uzbekistan": 24.2, "Iran": 23.6, "Paraguay": 23.0,
    "Nepal": 23.0, "Russia": 22.3, "Bangladesh": 20.9,
    "India": 19.5, "Egypt": 19.0, "Pakistan": 17.8,
}

df_numbeo = pd.DataFrame(list(numbeo_cli.items()), columns=['Country_std', 'Numbeo_CLI'])
df = df.merge(df_numbeo, on='Country_std', how='left')
print(f"Numbeo CLI mapeado: {df['Numbeo_CLI'].notna().sum():,} registros")

df['SAPA'] = (df['comp_clean'] / df['Numbeo_CLI']).round(2)

total_tools = df['ToolCountWork'].fillna(0) + df['ToolCountPersonal'].fillna(0)
df['Indice_Adopcion_IA'] = (df['ToolCountWork'] / total_tools.replace(0, np.nan)).round(3)

df['Amplitud_Tech'] = df['LanguageHaveWorkedWith'].apply(
    lambda x: len(str(x).split(';')) if pd.notna(x) else np.nan
)

ai_map = {
    'Yes, I use AI agents at work daily': 3,
    'Yes, I use AI agents at work weekly': 2,
    'Yes, I use AI agents at work monthly or infrequently': 1,
    'No, but I plan to': 0,
    "No, and I don't plan to": 0,
    'No, I use AI exclusively in copilot/autocomplete mode': 0,
}
df['Score_AI_Agent'] = df['AIAgents'].map(ai_map)

jsat_cols = [c for c in df.columns if c.startswith('JobSatPoints_') and '_TEXT' not in c]
df['Score_Satisfaccion'] = df[jsat_cols].mean(axis=1).round(2)

region_map = {
    "United States": "North America", "Canada": "North America",
    "Mexico": "Latin America", "Brazil": "Latin America",
    "Argentina": "Latin America", "Colombia": "Latin America",
    "Chile": "Latin America", "Peru": "Latin America",
    "Ecuador": "Latin America", "Bolivia": "Latin America",
    "Uruguay": "Latin America", "Venezuela": "Latin America",
    "Guatemala": "Latin America", "Dominican Republic": "Latin America",
    "Costa Rica": "Latin America", "Paraguay": "Latin America",
    "Germany": "Western Europe", "France": "Western Europe",
    "Netherlands": "Western Europe", "Belgium": "Western Europe",
    "Austria": "Western Europe", "Switzerland": "Western Europe",
    "Sweden": "Western Europe", "Norway": "Western Europe",
    "Denmark": "Western Europe", "Finland": "Western Europe",
    "Ireland": "Western Europe", "Luxembourg": "Western Europe",
    "United Kingdom": "Western Europe",
    "Spain": "Southern Europe", "Italy": "Southern Europe",
    "Portugal": "Southern Europe", "Greece": "Southern Europe",
    "Malta": "Southern Europe", "Cyprus": "Southern Europe",
    "Poland": "Eastern Europe", "Czech Republic": "Eastern Europe",
    "Hungary": "Eastern Europe", "Romania": "Eastern Europe",
    "Bulgaria": "Eastern Europe", "Slovakia": "Eastern Europe",
    "Croatia": "Eastern Europe", "Slovenia": "Eastern Europe",
    "Lithuania": "Eastern Europe", "Latvia": "Eastern Europe",
    "Estonia": "Eastern Europe", "Ukraine": "Eastern Europe",
    "Serbia": "Eastern Europe", "Russia": "Eastern Europe",
    "Belarus": "Eastern Europe", "Moldova": "Eastern Europe",
    "Bosnia And Herzegovina": "Eastern Europe",
    "Montenegro": "Eastern Europe", "North Macedonia": "Eastern Europe",
    "Albania": "Eastern Europe", "Kosovo (Disputed Territory)": "Eastern Europe",
    "Turkey": "Middle East & Africa", "Israel": "Middle East & Africa",
    "United Arab Emirates": "Middle East & Africa",
    "Saudi Arabia": "Middle East & Africa", "Qatar": "Middle East & Africa",
    "Kuwait": "Middle East & Africa", "Iran": "Middle East & Africa",
    "Egypt": "Middle East & Africa", "Morocco": "Middle East & Africa",
    "Nigeria": "Middle East & Africa", "Kenya": "Middle East & Africa",
    "South Africa": "Middle East & Africa", "Ethiopia": "Middle East & Africa",
    "Ghana": "Middle East & Africa", "Algeria": "Middle East & Africa",
    "Tunisia": "Middle East & Africa", "Jordan": "Middle East & Africa",
    "Uganda": "Middle East & Africa",
    "India": "South & Southeast Asia", "Pakistan": "South & Southeast Asia",
    "Bangladesh": "South & Southeast Asia", "Sri Lanka": "South & Southeast Asia",
    "Nepal": "South & Southeast Asia", "Indonesia": "South & Southeast Asia",
    "Malaysia": "South & Southeast Asia", "Thailand": "South & Southeast Asia",
    "Vietnam": "South & Southeast Asia", "Philippines": "South & Southeast Asia",
    "China": "East Asia & Pacific", "Japan": "East Asia & Pacific",
    "South Korea": "East Asia & Pacific", "Taiwan": "East Asia & Pacific",
    "Hong Kong (China)": "East Asia & Pacific", "Singapore": "East Asia & Pacific",
    "Australia": "East Asia & Pacific", "New Zealand": "East Asia & Pacific",
    "Kazakhstan": "Central Asia", "Uzbekistan": "Central Asia",
    "Georgia": "Central Asia", "Armenia": "Central Asia",
    "Azerbaijan": "Central Asia",
}
df['Region'] = df['Country_std'].map(region_map).fillna('Other')

export_cols = [
    'ResponseId', 'Country', 'Country_std', 'Region', 'Currency',
    'DevType', 'Age', 'EdLevel', 'Employment',
    'YearsCode', 'WorkExp', 'RemoteWork', 'OrgSize',
    'Industry', 'ICorPM', 'NewRole', 'MainBranch',
    'comp_clean', 'Numbeo_CLI', 'SAPA',
    'ToolCountWork', 'ToolCountPersonal', 'Indice_Adopcion_IA',
    'LanguageHaveWorkedWith', 'Amplitud_Tech',
    'PlatformHaveWorkedWith', 'DatabaseHaveWorkedWith',
    'AIModelsHaveWorkedWith',
    'AIAgents', 'AIAgentChange', 'AIAgentKnowledge',
    'AIThreat', 'AIHuman', 'AIFrustration',
    'Score_AI_Agent', 'JobSat', 'Score_Satisfaccion',
]

df_out = df[export_cols].copy()
df_out.to_csv(os.path.join(BASE_DIR, "survey_processed.csv"), index=False)

print(f"\nPIPELINE COMPLETADO")
print(f"Shape: {df_out.shape[0]:,} x {df_out.shape[1]}")
for col in ['comp_clean', 'SAPA', 'Indice_Adopcion_IA', 'Amplitud_Tech', 'Score_AI_Agent', 'Score_Satisfaccion']:
    n = df_out[col].notna().sum()
    s = df_out[col].dropna()
    print(f"  {col:<25} {n:>6,} ({n/len(df_out)*100:.1f}%)  median={s.median():.2f}")