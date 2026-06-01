# Developer Salary Reality 2025

Visualización de datos desarrollada para la asignatura M2.859 — Visualización de Datos  
Máster en Ciencia de Datos · Universitat Oberta de Catalunya (UOC)  
**Autor:** José Marcelo Avila Fajardo

## Ver online

https://github.com/marceloavila11/practica-dev-salary.git

## Descripción

Análisis multidimensional del Stack Overflow Developer Survey 2025 cruzado
con el Numbeo Cost of Living Index 2025. La métrica central es el **SAPA**
(Salario Ajustado por Poder Adquisitivo): salario anual en USD dividido entre
el índice de costo de vida del país, que permite comparar compensación real
entre regiones sin distorsión nominal.

## Preguntas de investigación

- **P1** ¿Cómo varía el SAPA entre regiones para perfiles tech?
- **P2** ¿Qué plataformas cloud y modelos IA se correlacionan con mayor salario?
- **P3** ¿Quién adopta AI Agents y con qué frecuencia?
- **P4** ¿Qué stack tecnológico caracteriza a los mejor pagados en LATAM?
- **P5** ¿Existe brecha de compensación entre modalidades de trabajo?
- **P6** ¿Cómo se relacionan amplitud tecnológica y satisfacción laboral?

## Datos

| Fuente                                                                                            | Descripción                      | Licencia               |
| ------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------- |
| [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/)                     | 49.123 respuestas, 170 columnas  | ODbL                   |
| [Numbeo Cost of Living Index 2025](https://www.numbeo.com/cost-of-living/rankings_by_country.jsp) | Índice de costo de vida por país | Uso personal/académico |

## Estructura del repositorio

```
dev-salary-2025/
├── index.html          # Estructura HTML
├── index.css           # Estilos
├── index.js            # Visualizaciones D3.js + datos agregados
├── pipeline_final.py   # Pipeline de limpieza y métricas (Python)
└── README.md
```

## Pipeline de datos

```bash
pip install pandas numpy
python pipeline_final.py
```

Requiere el archivo `survey_results_public.csv` descargado desde
https://survey.stackoverflow.co/2025/ en la misma carpeta.

## Stack técnico

- **Python** — pandas, numpy (limpieza, métricas derivadas)
- **D3.js v7** — visualizaciones interactivas
- **GitHub Pages** — publicación estática
