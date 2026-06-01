const DATA = {
  sapa_region: [
    {
      Region: "Norteamérica",
      sapa_median: 2157.2,
      sapa_p25: 1463.8,
      sapa_p75: 2896.8,
      comp_median: 137695.5,
      n: 5982,
    },
    {
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1444.9,
      sapa_p25: 915.8,
      sapa_p75: 1934.8,
      comp_median: 82270.0,
      n: 1176,
    },
    {
      Region: "Europa del Este",
      sapa_median: 1403.1,
      sapa_p25: 670.1,
      sapa_p75: 2197.4,
      comp_median: 48726.0,
      n: 2873,
    },
    {
      Region: "Europa Occidental",
      sapa_median: 1379.8,
      sapa_p25: 1000.1,
      sapa_p75: 1800.2,
      comp_median: 81685.0,
      n: 7369,
    },
    {
      Region: "Europa del Sur",
      sapa_median: 1137.4,
      sapa_p25: 788.4,
      sapa_p75: 1746.4,
      comp_median: 54527.0,
      n: 1553,
    },
    {
      Region: "Asia Central",
      sapa_median: 1050.6,
      sapa_p25: 308.6,
      sapa_p75: 1988.2,
      comp_median: 30755.5,
      n: 82,
    },
    {
      Region: "América Latina",
      sapa_median: 1024.0,
      sapa_p25: 438.3,
      sapa_p75: 1882.0,
      comp_median: 30845.0,
      n: 1396,
    },
    {
      Region: "Oriente Medio y África",
      sapa_median: 860.3,
      sapa_p25: 192.1,
      sapa_p75: 2040.5,
      comp_median: 30297.0,
      n: 1030,
    },
    {
      Region: "Asia del Sur y Sureste",
      sapa_median: 625.9,
      sapa_p25: 264.7,
      sapa_p75: 1609.5,
      comp_median: 13949.0,
      n: 1725,
    },
  ],
  sapa_remote: [
    {
      remote_clean: "Presencial",
      sapa_median: 953.7,
      sapa_p25: 500.4,
      sapa_p75: 1598.0,
      n: 3050,
    },
    {
      remote_clean: "Remoto",
      sapa_median: 1802.2,
      sapa_p25: 1108.0,
      sapa_p75: 2619.4,
      n: 6902,
    },
  ],
  bubble: [
    {
      tech: "Docker",
      sapa_median: 1574.5,
      n: 12932,
      category: "cloud",
      pct: 26.3,
    },
    {
      tech: "Amazon Web Services (AWS)",
      sapa_median: 1776.4,
      n: 8030,
      category: "cloud",
      pct: 16.3,
    },
    {
      tech: "Kubernetes",
      sapa_median: 1787.9,
      n: 5433,
      category: "cloud",
      pct: 11.1,
    },
    {
      tech: "Microsoft Azure",
      sapa_median: 1575.5,
      n: 4926,
      category: "cloud",
      pct: 10.0,
    },
    {
      tech: "Google Cloud",
      sapa_median: 1601.2,
      n: 4311,
      category: "cloud",
      pct: 8.8,
    },
    {
      tech: "Terraform",
      sapa_median: 1934.0,
      n: 3504,
      category: "cloud",
      pct: 7.1,
    },
    {
      tech: "Cloudflare",
      sapa_median: 1600.7,
      n: 3499,
      category: "cloud",
      pct: 7.1,
    },
    {
      tech: "Firebase",
      sapa_median: 1341.5,
      n: 2137,
      category: "cloud",
      pct: 4.4,
    },
    {
      tech: "Heroku",
      sapa_median: 1585.7,
      n: 902,
      category: "cloud",
      pct: 1.8,
    },
    {
      tech: "openAI GPT (chatbot models)",
      sapa_median: 1503.9,
      n: 9655,
      category: "ai_model",
      pct: 19.7,
    },
    {
      tech: "Anthropic: Claude Sonnet",
      sapa_median: 1649.1,
      n: 5248,
      category: "ai_model",
      pct: 10.7,
    },
    {
      tech: "openAI Reasoning models",
      sapa_median: 1540.1,
      n: 4086,
      category: "ai_model",
      pct: 8.3,
    },
    {
      tech: "Gemini (Flash general purpose models)",
      sapa_median: 1463.8,
      n: 4008,
      category: "ai_model",
      pct: 8.2,
    },
    {
      tech: "openAI Image generating models",
      sapa_median: 1540.8,
      n: 3128,
      category: "ai_model",
      pct: 6.4,
    },
    {
      tech: "Gemini (Pro Reasoning models)",
      sapa_median: 1540.8,
      n: 2992,
      category: "ai_model",
      pct: 6.1,
    },
    {
      tech: "DeepSeek (R- Reasoning models)",
      sapa_median: 1311.4,
      n: 2502,
      category: "ai_model",
      pct: 5.1,
    },
    {
      tech: "Meta Llama (all models)",
      sapa_median: 1581.9,
      n: 2039,
      category: "ai_model",
      pct: 4.2,
    },
    {
      tech: "DeepSeek (V- General purpose models)",
      sapa_median: 1245.5,
      n: 1485,
      category: "ai_model",
      pct: 3.0,
    },
    {
      tech: "Mistral AI models",
      sapa_median: 1461.8,
      n: 1188,
      category: "ai_model",
      pct: 2.4,
    },
    {
      tech: "X Grok models",
      sapa_median: 1388.3,
      n: 1156,
      category: "ai_model",
      pct: 2.4,
    },
    {
      tech: "Perplexity Sonar models",
      sapa_median: 1347.2,
      n: 808,
      category: "ai_model",
      pct: 1.6,
    },
    {
      tech: "Microsoft Phi-4 models",
      sapa_median: 1589.2,
      n: 571,
      category: "ai_model",
      pct: 1.2,
    },
    {
      tech: "Alibaba Cloud Qwen models",
      sapa_median: 1390.6,
      n: 545,
      category: "ai_model",
      pct: 1.1,
    },
    {
      tech: "Amazon Titan models",
      sapa_median: 1986.6,
      n: 184,
      category: "ai_model",
      pct: 0.4,
    },
    {
      tech: "Cohere: Command A",
      sapa_median: 1232.7,
      n: 77,
      category: "ai_model",
      pct: 0.2,
    },
  ],
  heatmap: [
    {
      Region: "Asia Central",
      ai_agent_label: "Solo copiloto",
      count: 15,
      pct: 13.5,
    },
    { Region: "Asia Central", ai_agent_label: "Diario", count: 18, pct: 16.2 },
    { Region: "Asia Central", ai_agent_label: "Mensual", count: 14, pct: 12.6 },
    {
      Region: "Asia Central",
      ai_agent_label: "Sin planes",
      count: 26,
      pct: 23.4,
    },
    {
      Region: "Asia Central",
      ai_agent_label: "Planea hacerlo",
      count: 28,
      pct: 25.2,
    },
    { Region: "Asia Central", ai_agent_label: "Semanal", count: 10, pct: 9.0 },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Solo copiloto",
      count: 223,
      pct: 13.0,
    },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Diario",
      count: 290,
      pct: 16.9,
    },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Mensual",
      count: 140,
      pct: 8.2,
    },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Sin planes",
      count: 625,
      pct: 36.4,
    },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Planea hacerlo",
      count: 284,
      pct: 16.5,
    },
    {
      Region: "Asia Oriental y Pacífico",
      ai_agent_label: "Semanal",
      count: 155,
      pct: 9.0,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Solo copiloto",
      count: 562,
      pct: 14.7,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Diario",
      count: 536,
      pct: 14.0,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Mensual",
      count: 278,
      pct: 7.3,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Sin planes",
      count: 1356,
      pct: 35.5,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Planea hacerlo",
      count: 726,
      pct: 19.0,
    },
    {
      Region: "Europa del Este",
      ai_agent_label: "Semanal",
      count: 361,
      pct: 9.5,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Solo copiloto",
      count: 281,
      pct: 15.9,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Diario",
      count: 315,
      pct: 17.8,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Mensual",
      count: 157,
      pct: 8.9,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Sin planes",
      count: 476,
      pct: 26.9,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Planea hacerlo",
      count: 361,
      pct: 20.4,
    },
    {
      Region: "América Latina",
      ai_agent_label: "Semanal",
      count: 177,
      pct: 10.0,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Solo copiloto",
      count: 236,
      pct: 14.7,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Diario",
      count: 361,
      pct: 22.5,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Mensual",
      count: 129,
      pct: 8.0,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Sin planes",
      count: 362,
      pct: 22.5,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Planea hacerlo",
      count: 360,
      pct: 22.4,
    },
    {
      Region: "Oriente Medio y África",
      ai_agent_label: "Semanal",
      count: 159,
      pct: 9.9,
    },
    {
      Region: "Norteamérica",
      ai_agent_label: "Solo copiloto",
      count: 999,
      pct: 12.7,
    },
    { Region: "Norteamérica", ai_agent_label: "Diario", count: 895, pct: 11.4 },
    { Region: "Norteamérica", ai_agent_label: "Mensual", count: 611, pct: 7.8 },
    {
      Region: "Norteamérica",
      ai_agent_label: "Sin planes",
      count: 3472,
      pct: 44.1,
    },
    {
      Region: "Norteamérica",
      ai_agent_label: "Planea hacerlo",
      count: 1246,
      pct: 15.8,
    },
    { Region: "Norteamérica", ai_agent_label: "Semanal", count: 651, pct: 8.3 },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Solo copiloto",
      count: 404,
      pct: 13.2,
    },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Diario",
      count: 787,
      pct: 25.6,
    },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Mensual",
      count: 310,
      pct: 10.1,
    },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Sin planes",
      count: 544,
      pct: 17.7,
    },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Planea hacerlo",
      count: 672,
      pct: 21.9,
    },
    {
      Region: "Asia del Sur y Sureste",
      ai_agent_label: "Semanal",
      count: 353,
      pct: 11.5,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Solo copiloto",
      count: 285,
      pct: 14.6,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Diario",
      count: 281,
      pct: 14.4,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Mensual",
      count: 140,
      pct: 7.2,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Sin planes",
      count: 701,
      pct: 36.0,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Planea hacerlo",
      count: 355,
      pct: 18.2,
    },
    {
      Region: "Europa del Sur",
      ai_agent_label: "Semanal",
      count: 186,
      pct: 9.5,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Solo copiloto",
      count: 1339,
      pct: 14.0,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Diario",
      count: 942,
      pct: 9.9,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Mensual",
      count: 683,
      pct: 7.1,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Sin planes",
      count: 4399,
      pct: 46.0,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Planea hacerlo",
      count: 1430,
      pct: 15.0,
    },
    {
      Region: "Europa Occidental",
      ai_agent_label: "Semanal",
      count: 765,
      pct: 8.0,
    },
  ],
  lang_compare: [
    { tech: "JavaScript", global_pct: 66.3, latam_pct: 73.0 },
    { tech: "HTML/CSS", global_pct: 62.2, latam_pct: 67.7 },
    { tech: "SQL", global_pct: 58.8, latam_pct: 65.7 },
    { tech: "Python", global_pct: 58.1, latam_pct: 57.9 },
    { tech: "Bash/Shell (all shells)", global_pct: 48.9, latam_pct: 42.9 },
    { tech: "TypeScript", global_pct: 43.8, latam_pct: 46.9 },
    { tech: "Java", global_pct: 29.5, latam_pct: 29.5 },
    { tech: "C#", global_pct: 28.0, latam_pct: 25.2 },
    { tech: "C++", global_pct: 23.6, latam_pct: 15.9 },
    { tech: "PowerShell", global_pct: 23.3, latam_pct: 18.7 },
  ],
  platform_compare: [
    { tech: "Docker", global_pct: 71.8, latam_pct: 70.8 },
    { tech: "npm", global_pct: 57.3, latam_pct: 60.1 },
    { tech: "Amazon Web Services (AWS)", global_pct: 43.8, latam_pct: 51.8 },
    { tech: "Pip", global_pct: 41.3, latam_pct: 40.3 },
    { tech: "Kubernetes", global_pct: 28.8, latam_pct: 24.4 },
    { tech: "Microsoft Azure", global_pct: 26.6, latam_pct: 23.5 },
    { tech: "Homebrew", global_pct: 25.9, latam_pct: 20.2 },
    { tech: "Vite", global_pct: 25.6, latam_pct: 28.5 },
  ],
  ai_compare: [
    { tech: "openAI GPT (chatbot models)", global_pct: 82.5, latam_pct: 82.5 },
    { tech: "Anthropic: Claude Sonnet", global_pct: 43.4, latam_pct: 40.2 },
    {
      tech: "Gemini (Flash general purpose models)",
      global_pct: 35.8,
      latam_pct: 46.0,
    },
    { tech: "openAI Reasoning models", global_pct: 35.1, latam_pct: 36.8 },
    {
      tech: "openAI Image generating models",
      global_pct: 27.0,
      latam_pct: 27.3,
    },
    {
      tech: "Gemini (Pro Reasoning models)",
      global_pct: 25.9,
      latam_pct: 29.2,
    },
  ],
  scatter: [
    {
      Amplitud_Tech: 1.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1643.92,
      sat_median: 8.23,
      n: 24,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Europa del Este",
      sapa_median: 1636.71,
      sat_median: 8.15,
      n: 81,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "América Latina",
      sapa_median: 1279.96,
      sat_median: 8.23,
      n: 27,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Oriente Medio y África",
      sapa_median: 718.82,
      sat_median: 8.08,
      n: 15,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Norteamérica",
      sapa_median: 2465.33,
      sat_median: 8.31,
      n: 65,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 476.87,
      sat_median: 8.0,
      n: 51,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Europa del Sur",
      sapa_median: 1333.49,
      sat_median: 8.31,
      n: 41,
    },
    {
      Amplitud_Tech: 1.0,
      Region: "Europa Occidental",
      sapa_median: 1489.91,
      sat_median: 8.31,
      n: 139,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Asia Central",
      sapa_median: 408.14,
      sat_median: 8.54,
      n: 6,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1494.47,
      sat_median: 8.31,
      n: 61,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Europa del Este",
      sapa_median: 1463.41,
      sat_median: 8.31,
      n: 177,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "América Latina",
      sapa_median: 1208.32,
      sat_median: 8.23,
      n: 55,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Oriente Medio y África",
      sapa_median: 1236.92,
      sat_median: 8.31,
      n: 59,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Norteamérica",
      sapa_median: 2265.02,
      sat_median: 8.31,
      n: 191,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 715.33,
      sat_median: 8.08,
      n: 66,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Europa del Sur",
      sapa_median: 1228.39,
      sat_median: 8.23,
      n: 89,
    },
    {
      Amplitud_Tech: 2.0,
      Region: "Europa Occidental",
      sapa_median: 1489.91,
      sat_median: 8.31,
      n: 277,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Asia Central",
      sapa_median: 950.42,
      sat_median: 8.3,
      n: 8,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1644.24,
      sat_median: 8.27,
      n: 74,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Europa del Este",
      sapa_median: 1463.41,
      sat_median: 8.31,
      n: 251,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "América Latina",
      sapa_median: 1281.7,
      sat_median: 8.23,
      n: 102,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Oriente Medio y África",
      sapa_median: 1430.82,
      sat_median: 8.15,
      n: 74,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Norteamérica",
      sapa_median: 2265.02,
      sat_median: 8.31,
      n: 359,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 758.26,
      sat_median: 8.15,
      n: 137,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Europa del Sur",
      sapa_median: 1232.99,
      sat_median: 8.31,
      n: 138,
    },
    {
      Amplitud_Tech: 3.0,
      Region: "Europa Occidental",
      sapa_median: 1421.38,
      sat_median: 8.38,
      n: 483,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Asia Central",
      sapa_median: 2032.71,
      sat_median: 8.16,
      n: 8,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1526.4,
      sat_median: 8.31,
      n: 87,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Europa del Este",
      sapa_median: 1526.77,
      sat_median: 8.23,
      n: 334,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "América Latina",
      sapa_median: 938.63,
      sat_median: 8.23,
      n: 119,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Oriente Medio y África",
      sapa_median: 1262.55,
      sat_median: 8.15,
      n: 109,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Norteamérica",
      sapa_median: 2234.21,
      sat_median: 8.31,
      n: 569,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 933.76,
      sat_median: 8.15,
      n: 173,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Europa del Sur",
      sapa_median: 1413.4,
      sat_median: 8.31,
      n: 144,
    },
    {
      Amplitud_Tech: 4.0,
      Region: "Europa Occidental",
      sapa_median: 1390.58,
      sat_median: 8.38,
      n: 723,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Asia Central",
      sapa_median: 1107.96,
      sat_median: 8.23,
      n: 10,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1451.77,
      sat_median: 8.31,
      n: 109,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Europa del Este",
      sapa_median: 1465.45,
      sat_median: 8.31,
      n: 341,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "América Latina",
      sapa_median: 1133.09,
      sat_median: 8.31,
      n: 170,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Oriente Medio y África",
      sapa_median: 943.4,
      sat_median: 8.23,
      n: 90,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Norteamérica",
      sapa_median: 2187.98,
      sat_median: 8.31,
      n: 656,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 715.33,
      sat_median: 8.08,
      n: 189,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Europa del Sur",
      sapa_median: 1154.51,
      sat_median: 8.38,
      n: 185,
    },
    {
      Amplitud_Tech: 5.0,
      Region: "Europa Occidental",
      sapa_median: 1386.1,
      sat_median: 8.31,
      n: 862,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Asia Central",
      sapa_median: 1432.12,
      sat_median: 8.3,
      n: 8,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1470.49,
      sat_median: 8.27,
      n: 140,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Europa del Este",
      sapa_median: 1576.52,
      sat_median: 8.31,
      n: 266,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "América Latina",
      sapa_median: 1097.6,
      sat_median: 8.23,
      n: 152,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Oriente Medio y África",
      sapa_median: 1250.85,
      sat_median: 8.15,
      n: 76,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Norteamérica",
      sapa_median: 2234.21,
      sat_median: 8.31,
      n: 733,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 804.89,
      sat_median: 8.0,
      n: 163,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Europa del Sur",
      sapa_median: 1202.91,
      sat_median: 8.23,
      n: 156,
    },
    {
      Amplitud_Tech: 6.0,
      Region: "Europa Occidental",
      sapa_median: 1390.58,
      sat_median: 8.38,
      n: 865,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Asia Central",
      sapa_median: 1572.11,
      sat_median: 8.38,
      n: 5,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1439.34,
      sat_median: 8.23,
      n: 109,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Europa del Este",
      sapa_median: 1530.96,
      sat_median: 8.15,
      n: 230,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "América Latina",
      sapa_median: 1035.19,
      sat_median: 8.31,
      n: 133,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Oriente Medio y África",
      sapa_median: 1232.26,
      sat_median: 8.23,
      n: 77,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Norteamérica",
      sapa_median: 2214.95,
      sat_median: 8.31,
      n: 604,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 789.82,
      sat_median: 8.08,
      n: 98,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Europa del Sur",
      sapa_median: 1137.39,
      sat_median: 8.31,
      n: 135,
    },
    {
      Amplitud_Tech: 7.0,
      Region: "Europa Occidental",
      sapa_median: 1366.86,
      sat_median: 8.31,
      n: 749,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1510.44,
      sat_median: 8.23,
      n: 74,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Europa del Este",
      sapa_median: 1497.49,
      sat_median: 8.31,
      n: 170,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "América Latina",
      sapa_median: 1103.92,
      sat_median: 8.15,
      n: 86,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Oriente Medio y África",
      sapa_median: 1018.65,
      sat_median: 8.23,
      n: 51,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Norteamérica",
      sapa_median: 2272.72,
      sat_median: 8.31,
      n: 462,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 715.33,
      sat_median: 8.15,
      n: 79,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Europa del Sur",
      sapa_median: 1247.46,
      sat_median: 8.31,
      n: 89,
    },
    {
      Amplitud_Tech: 8.0,
      Region: "Europa Occidental",
      sapa_median: 1353.78,
      sat_median: 8.38,
      n: 503,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Asia Central",
      sapa_median: 95.94,
      sat_median: 8.23,
      n: 5,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1347.4,
      sat_median: 8.23,
      n: 72,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Europa del Este",
      sapa_median: 1403.08,
      sat_median: 8.31,
      n: 89,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "América Latina",
      sapa_median: 797.49,
      sat_median: 8.23,
      n: 47,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Oriente Medio y África",
      sapa_median: 1137.39,
      sat_median: 8.31,
      n: 39,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Norteamérica",
      sapa_median: 2209.37,
      sat_median: 8.31,
      n: 322,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 774.92,
      sat_median: 8.0,
      n: 51,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Europa del Sur",
      sapa_median: 1066.8,
      sat_median: 8.15,
      n: 59,
    },
    {
      Amplitud_Tech: 9.0,
      Region: "Europa Occidental",
      sapa_median: 1386.1,
      sat_median: 8.31,
      n: 340,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1451.77,
      sat_median: 8.23,
      n: 61,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Europa del Este",
      sapa_median: 953.17,
      sat_median: 8.23,
      n: 73,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "América Latina",
      sapa_median: 883.99,
      sat_median: 8.31,
      n: 33,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Oriente Medio y África",
      sapa_median: 298.88,
      sat_median: 8.08,
      n: 24,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Norteamérica",
      sapa_median: 2080.12,
      sat_median: 8.31,
      n: 230,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 596.1,
      sat_median: 8.15,
      n: 39,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Europa del Sur",
      sapa_median: 1137.39,
      sat_median: 8.31,
      n: 35,
    },
    {
      Amplitud_Tech: 10.0,
      Region: "Europa Occidental",
      sapa_median: 1386.1,
      sat_median: 8.31,
      n: 243,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1361.34,
      sat_median: 8.23,
      n: 24,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Europa del Este",
      sapa_median: 1264.23,
      sat_median: 8.31,
      n: 39,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "América Latina",
      sapa_median: 1318.34,
      sat_median: 8.15,
      n: 26,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Oriente Medio y África",
      sapa_median: 1022.17,
      sat_median: 8.3,
      n: 20,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Norteamérica",
      sapa_median: 2080.12,
      sat_median: 8.23,
      n: 123,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 476.87,
      sat_median: 8.15,
      n: 25,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Europa del Sur",
      sapa_median: 1137.39,
      sat_median: 8.31,
      n: 28,
    },
    {
      Amplitud_Tech: 11.0,
      Region: "Europa Occidental",
      sapa_median: 1305.65,
      sat_median: 8.31,
      n: 124,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1606.64,
      sat_median: 8.42,
      n: 22,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Europa del Este",
      sapa_median: 1545.38,
      sat_median: 8.23,
      n: 27,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "América Latina",
      sapa_median: 859.55,
      sat_median: 8.04,
      n: 20,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Oriente Medio y África",
      sapa_median: 2111.33,
      sat_median: 8.23,
      n: 15,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Norteamérica",
      sapa_median: 2003.08,
      sat_median: 8.31,
      n: 94,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 1341.24,
      sat_median: 7.96,
      n: 12,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Europa del Sur",
      sapa_median: 1478.63,
      sat_median: 8.15,
      n: 17,
    },
    {
      Amplitud_Tech: 12.0,
      Region: "Europa Occidental",
      sapa_median: 1420.38,
      sat_median: 8.38,
      n: 105,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 1974.84,
      sat_median: 8.0,
      n: 10,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Europa del Este",
      sapa_median: 678.38,
      sat_median: 8.35,
      n: 18,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "América Latina",
      sapa_median: 564.64,
      sat_median: 8.38,
      n: 10,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Oriente Medio y África",
      sapa_median: 2097.6,
      sat_median: 8.16,
      n: 6,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Norteamérica",
      sapa_median: 1926.04,
      sat_median: 8.23,
      n: 59,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 304.02,
      sat_median: 8.0,
      n: 8,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Europa del Sur",
      sapa_median: 1877.78,
      sat_median: 8.35,
      n: 6,
    },
    {
      Amplitud_Tech: 13.0,
      Region: "Europa Occidental",
      sapa_median: 1387.3,
      sat_median: 8.31,
      n: 60,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Asia Oriental y Pacífico",
      sapa_median: 2466.54,
      sat_median: 8.38,
      n: 6,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Europa del Este",
      sapa_median: 2104.37,
      sat_median: 8.08,
      n: 12,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "América Latina",
      sapa_median: 471.25,
      sat_median: 7.92,
      n: 9,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Norteamérica",
      sapa_median: 2465.33,
      sat_median: 8.23,
      n: 38,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Asia del Sur y Sureste",
      sapa_median: 596.1,
      sat_median: 8.23,
      n: 9,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Europa del Sur",
      sapa_median: 1023.66,
      sat_median: 8.38,
      n: 8,
    },
    {
      Amplitud_Tech: 14.0,
      Region: "Europa Occidental",
      sapa_median: 1362.25,
      sat_median: 8.35,
      n: 30,
    },
    {
      Amplitud_Tech: 15.0,
      Region: "Europa del Este",
      sapa_median: 1017.22,
      sat_median: 8.23,
      n: 9,
    },
    {
      Amplitud_Tech: 15.0,
      Region: "Norteamérica",
      sapa_median: 2041.6,
      sat_median: 8.19,
      n: 14,
    },
    {
      Amplitud_Tech: 15.0,
      Region: "Europa Occidental",
      sapa_median: 1023.08,
      sat_median: 8.38,
      n: 22,
    },
    {
      Amplitud_Tech: 16.0,
      Region: "Norteamérica",
      sapa_median: 2342.06,
      sat_median: 8.42,
      n: 14,
    },
    {
      Amplitud_Tech: 16.0,
      Region: "Europa Occidental",
      sapa_median: 808.46,
      sat_median: 8.58,
      n: 10,
    },
    {
      Amplitud_Tech: 17.0,
      Region: "Norteamérica",
      sapa_median: 2157.16,
      sat_median: 8.15,
      n: 13,
    },
    {
      Amplitud_Tech: 17.0,
      Region: "Europa Occidental",
      sapa_median: 1973.54,
      sat_median: 8.19,
      n: 6,
    },
    {
      Amplitud_Tech: 18.0,
      Region: "Norteamérica",
      sapa_median: 3466.87,
      sat_median: 8.46,
      n: 7,
    },
    {
      Amplitud_Tech: 18.0,
      Region: "Europa Occidental",
      sapa_median: 1180.38,
      sat_median: 8.27,
      n: 6,
    },
    {
      Amplitud_Tech: 19.0,
      Region: "Norteamérica",
      sapa_median: 2357.47,
      sat_median: 8.46,
      n: 7,
    },
  ],
  p4: {
    lang: [
      {
        tech: "Elixir",
        sapa_latam: 1700.4,
        sapa_global: 1855.8,
        pct_latam: 2.7,
        n_latam: 46,
      },
      {
        tech: "Ruby",
        sapa_latam: 1447.3,
        sapa_global: 1879.3,
        pct_latam: 6.1,
        n_latam: 104,
      },
      {
        tech: "Swift",
        sapa_latam: 1397.7,
        sapa_global: 1688.6,
        pct_latam: 2.7,
        n_latam: 46,
      },
      {
        tech: "Kotlin",
        sapa_latam: 1312.2,
        sapa_global: 1540.8,
        pct_latam: 7.7,
        n_latam: 131,
      },
      {
        tech: "Scala",
        sapa_latam: 1295.9,
        sapa_global: 1932.5,
        pct_latam: 1.8,
        n_latam: 31,
      },
      {
        tech: "Go",
        sapa_latam: 1129.1,
        sapa_global: 1698.5,
        pct_latam: 10.5,
        n_latam: 180,
      },
      {
        tech: "Groovy",
        sapa_latam: 1114.9,
        sapa_global: 1680.2,
        pct_latam: 2.6,
        n_latam: 44,
      },
      {
        tech: "Bash/Shell (all shells)",
        sapa_latam: 1087.5,
        sapa_global: 1548.3,
        pct_latam: 31.5,
        n_latam: 539,
      },
      {
        tech: "VBA",
        sapa_latam: 1068.0,
        sapa_global: 1318.5,
        pct_latam: 3.8,
        n_latam: 65,
      },
      {
        tech: "Dart",
        sapa_latam: 1066.6,
        sapa_global: 1146.8,
        pct_latam: 5.8,
        n_latam: 99,
      },
    ],
    platform: [
      {
        tech: "Datadog",
        sapa_latam: 1850.6,
        sapa_global: 2157.2,
        pct_latam: 10.1,
        n_latam: 136,
      },
      {
        tech: "Terraform",
        sapa_latam: 1706.6,
        sapa_global: 1934.0,
        pct_latam: 12.0,
        n_latam: 162,
      },
      {
        tech: "Kubernetes",
        sapa_latam: 1479.0,
        sapa_global: 1787.9,
        pct_latam: 20.1,
        n_latam: 271,
      },
      {
        tech: "Prometheus",
        sapa_latam: 1464.7,
        sapa_global: 1769.4,
        pct_latam: 6.7,
        n_latam: 91,
      },
      {
        tech: "Homebrew",
        sapa_latam: 1422.2,
        sapa_global: 1827.1,
        pct_latam: 15.9,
        n_latam: 215,
      },
      {
        tech: "Poetry",
        sapa_latam: 1414.2,
        sapa_global: 1742.7,
        pct_latam: 5.5,
        n_latam: 74,
      },
      {
        tech: "New Relic",
        sapa_latam: 1315.5,
        sapa_global: 1971.0,
        pct_latam: 5.3,
        n_latam: 71,
      },
      {
        tech: "MSBuild",
        sapa_latam: 1297.1,
        sapa_global: 1655.8,
        pct_latam: 5.6,
        n_latam: 76,
      },
      {
        tech: "Heroku",
        sapa_latam: 1292.8,
        sapa_global: 1585.7,
        pct_latam: 7.1,
        n_latam: 96,
      },
      {
        tech: "Amazon Web Services (AWS)",
        sapa_latam: 1282.9,
        sapa_global: 1776.4,
        pct_latam: 42.2,
        n_latam: 570,
      },
    ],
    ai: [
      {
        tech: "Amazon Titan models",
        sapa_latam: 1422.2,
        sapa_global: 1986.6,
        pct_latam: 1.1,
        n_latam: 11,
      },
      {
        tech: "Microsoft Phi-4 models",
        sapa_latam: 1386.6,
        sapa_global: 1589.2,
        pct_latam: 3.1,
        n_latam: 31,
      },
      {
        tech: "Mistral AI models",
        sapa_latam: 1199.5,
        sapa_global: 1461.8,
        pct_latam: 4.5,
        n_latam: 46,
      },
      {
        tech: "Anthropic: Claude Sonnet",
        sapa_latam: 1194.8,
        sapa_global: 1649.1,
        pct_latam: 31.1,
        n_latam: 315,
      },
      {
        tech: "Meta Llama (all models)",
        sapa_latam: 1194.8,
        sapa_global: 1581.9,
        pct_latam: 12.3,
        n_latam: 125,
      },
      {
        tech: "openAI Reasoning models",
        sapa_latam: 1180.5,
        sapa_global: 1540.1,
        pct_latam: 28.2,
        n_latam: 286,
      },
      {
        tech: "openAI GPT (chatbot models)",
        sapa_latam: 1100.4,
        sapa_global: 1503.9,
        pct_latam: 63.3,
        n_latam: 642,
      },
      {
        tech: "Gemini (Pro Reasoning models)",
        sapa_latam: 1066.6,
        sapa_global: 1540.8,
        pct_latam: 21.9,
        n_latam: 222,
      },
    ],
  },
  meta: {
    total_responses: 49123,
    countries: 177,
    with_salary: 23455,
    with_sapa: 23195,
  },
};
const tip = d3.select("#tooltip");
function showTip(html, event) {
  tip
    .html(html)
    .style("opacity", 1)
    .style("left", event.clientX + 14 + "px")
    .style("top", event.clientY - 10 + "px");
}
function hideTip() {
  tip.style("opacity", 0);
}
document.addEventListener("mousemove", (e) => {
  tip.style("left", e.clientX + 14 + "px").style("top", e.clientY - 10 + "px");
});
function animateCounter(el, target, suffix = "", duration = 1200) {
  const start = performance.now();
  const isFloat = String(target).includes(".");
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val = isFloat
      ? (target * ease).toFixed(1)
      : Math.round(target * ease);
    el.textContent = val.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const m = DATA.meta;
animateCounter(document.getElementById("stat1"), m.total_responses);
animateCounter(document.getElementById("stat2"), m.countries);
animateCounter(document.getElementById("stat3"), 170);
animateCounter(document.getElementById("stat4"), 6);
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
(function () {
  const W = 460,
    H = 340,
    ml = 150,
    mr = 60,
    mt = 10,
    mb = 30;
  const w = W - ml - mr,
    h = H - mt - mb;
  const svg = d3
    .select("#chart-region")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("width", "100%");
  const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
  const data = DATA.sapa_region;
  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.sapa_p75) * 1.05])
    .range([0, w]);
  const y = d3
    .scaleBand()
    .domain(data.map((d) => d.Region))
    .range([0, h])
    .padding(0.35);
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisBottom(x).ticks(5).tickSize(-h).tickFormat(""))
    .attr("transform", `translate(0,${h})`);
  g.selectAll(".range-bar")
    .data(data)
    .join("rect")
    .attr("class", "range-bar")
    .attr("x", (d) => x(d.sapa_p25))
    .attr("y", (d) => y(d.Region) + y.bandwidth() * 0.2)
    .attr("width", (d) => x(d.sapa_p75) - x(d.sapa_p25))
    .attr("height", y.bandwidth() * 0.6)
    .attr("rx", 3)
    .attr("fill", "#aaaaaa")
    .attr("opacity", 0.2);
  g.selectAll(".med-bar")
    .data(data)
    .join("rect")
    .attr("class", "med-bar")
    .attr("x", 0)
    .attr("y", (d) => y(d.Region) + y.bandwidth() * 0.25)
    .attr("width", (d) => x(d.sapa_median))
    .attr("height", y.bandwidth() * 0.5)
    .attr("rx", 3)
    .attr("fill", (d) => {
      if (d.Region === "Norteamérica") return "#e02424";
      if (d.Region === "América Latina") return "#057a55";
      return "#1a56db";
    })
    .attr("opacity", 0.85)
    .on("mouseenter", (event, d) =>
      showTip(
        `
      <strong>${d.Region}</strong>
      <div class="tip-row">SAPA mediano: <span>${d.sapa_median.toLocaleString()}</span></div>
      <div class="tip-row">Rango P25–P75: <span>${d.sapa_p25.toLocaleString()} – ${d.sapa_p75.toLocaleString()}</span></div>
      <div class="tip-row">Salario nominal: <span>$${d.comp_median.toLocaleString()}</span></div>
      <div class="tip-row">n = <span>${d.n.toLocaleString()}</span></div>
    `,
        event,
      ),
    )
    .on("mouseleave", hideTip);
  g.selectAll(".med-label")
    .data(data)
    .join("text")
    .attr("class", "med-label")
    .attr("x", (d) => x(d.sapa_median) + 6)
    .attr("y", (d) => y(d.Region) + y.bandwidth() / 2)
    .attr("dominant-baseline", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 11)
    .text((d) => d.sapa_median.toLocaleString());
  g.append("g")
    .call(d3.axisLeft(y).tickSize(0).tickPadding(10))
    .select(".domain")
    .remove();
  g.selectAll(".tick text").attr("fill", "var(--text)").attr("font-size", 11);
  g.append("g")
    .attr("transform", `translate(0,${h})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(4)
        .tickFormat((d) => d.toLocaleString()),
    )
    .select(".domain")
    .remove();
})();
(function () {
  const W = 320,
    H = 340,
    ml = 90,
    mr = 40,
    mt = 10,
    mb = 30;
  const w = W - ml - mr,
    h = H - mt - mb;
  const svg = d3
    .select("#chart-remote")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("width", "100%");
  const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
  const data = DATA.sapa_remote;
  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.sapa_p75) * 1.1])
    .range([0, w]);
  const y = d3
    .scaleBand()
    .domain(data.map((d) => d.remote_clean))
    .range([0, h])
    .padding(0.45);
  const colors = {
    Remoto: "#057a55",
    Híbrido: "#d97706",
    Presencial: "#e02424",
  };
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisBottom(x).ticks(4).tickSize(-h).tickFormat(""))
    .attr("transform", `translate(0,${h})`);
  g.selectAll(".range-bar")
    .data(data)
    .join("rect")
    .attr("x", (d) => x(d.sapa_p25))
    .attr("y", (d) => y(d.remote_clean) + y.bandwidth() * 0.15)
    .attr("width", (d) => x(d.sapa_p75) - x(d.sapa_p25))
    .attr("height", y.bandwidth() * 0.7)
    .attr("rx", 3)
    .attr("fill", (d) => colors[d.remote_clean])
    .attr("opacity", 0.2);
  g.selectAll(".med-bar")
    .data(data)
    .join("rect")
    .attr("x", 0)
    .attr("y", (d) => y(d.remote_clean) + y.bandwidth() * 0.25)
    .attr("width", (d) => x(d.sapa_median))
    .attr("height", y.bandwidth() * 0.5)
    .attr("rx", 3)
    .attr("fill", (d) => colors[d.remote_clean])
    .attr("opacity", 0.9)
    .on("mouseenter", (event, d) =>
      showTip(
        `
      <strong>${d.remote_clean}</strong>
      <div class="tip-row">SAPA mediano: <span>${d.sapa_median.toLocaleString()}</span></div>
      <div class="tip-row">Rango P25–P75: <span>${d.sapa_p25.toLocaleString()} – ${d.sapa_p75.toLocaleString()}</span></div>
      <div class="tip-row">n = <span>${d.n.toLocaleString()}</span></div>
    `,
        event,
      ),
    )
    .on("mouseleave", hideTip);
  g.selectAll(".med-label")
    .data(data)
    .join("text")
    .attr("x", (d) => x(d.sapa_median) + 6)
    .attr("y", (d) => y(d.remote_clean) + y.bandwidth() / 2)
    .attr("dominant-baseline", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 11)
    .text((d) => d.sapa_median.toLocaleString());
  g.append("g")
    .call(d3.axisLeft(y).tickSize(0).tickPadding(10))
    .select(".domain")
    .remove();
  g.selectAll(".tick text").attr("fill", "var(--text)").attr("font-size", 11);
  g.append("g")
    .attr("transform", `translate(0,${h})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(3)
        .tickFormat((d) => d.toLocaleString()),
    )
    .select(".domain")
    .remove();
})();
(function () {
  const W = 880,
    H = 480,
    ml = 60,
    mr = 40,
    mt = 20,
    mb = 50;
  const w = W - ml - mr,
    h = H - mt - mb;
  const svg = d3
    .select("#chart-bubble")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("width", "100%");
  const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
  let allData = DATA.bubble;
  const nameClean = (name) =>
    name
      .replace("Amazon Web Services (AWS)", "AWS")
      .replace("Microsoft Azure", "Azure")
      .replace("Google Cloud", "GCP")
      .replace("openAI GPT (chatbot models)", "GPT-4o")
      .replace("Anthropic: Claude Sonnet", "Claude")
      .replace("openAI Reasoning models", "o1/o3")
      .replace("Gemini (Flash general purpose models)", "Gemini Flash")
      .replace("Gemini (Pro Reasoning models)", "Gemini Pro")
      .replace("openAI Image generating models", "DALL-E")
      .replace("DeepSeek (R- Reasoning models)", "DeepSeek R")
      .replace("Meta Llama (all models)", "Llama")
      .replace("DeepSeek (V- General purpose models)", "DeepSeek V")
      .replace("Mistral AI models", "Mistral")
      .replace("X Grok models", "Grok")
      .replace("Perplexity Sonar models", "Perplexity")
      .replace("Microsoft Phi-4 models", "Phi-4")
      .replace("Alibaba Cloud Qwen models", "Qwen")
      .replace("Amazon Titan models", "Titan")
      .replace("Cohere: Command A", "Cohere");

  let currentFilter = "all";
  const x = d3.scaleLinear().domain([0, 30]).range([0, w]);
  const y = d3.scaleLinear().domain([900, 2200]).range([h, 0]);
  const r = d3
    .scaleSqrt()
    .domain([0, d3.max(allData, (d) => d.n)])
    .range([6, 36]);
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).ticks(5).tickSize(-w).tickFormat(""));
  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${h})`)
    .call(d3.axisBottom(x).ticks(5).tickSize(-h).tickFormat(""));
  const xAxis = g
    .append("g")
    .attr("transform", `translate(0,${h})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(5)
        .tickFormat((d) => d + "%"),
    );
  xAxis.select(".domain").remove();
  xAxis.selectAll("text").attr("fill", "var(--muted)").attr("font-size", 11);
  const yAxis = g.append("g").call(
    d3
      .axisLeft(y)
      .ticks(5)
      .tickFormat((d) => d.toLocaleString()),
  );
  yAxis.select(".domain").remove();
  yAxis.selectAll("text").attr("fill", "var(--muted)").attr("font-size", 11);
  g.append("text")
    .attr("x", w / 2)
    .attr("y", h + 42)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 12)
    .text("% de desarrolladores que la usan");
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -h / 2)
    .attr("y", -46)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 12)
    .text("SAPA mediano de usuarios");

  function render(filter) {
    const fd =
      filter === "all" ? allData : allData.filter((d) => d.category === filter);
    const circles = g.selectAll(".bubble").data(fd, (d) => d.tech);
    circles
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("cx", (d) => x(d.pct))
      .attr("cy", (d) => y(d.sapa_median))
      .attr("r", 0)
      .attr("opacity", 0.82)
      .attr("fill", (d) => (d.category === "cloud" ? "#1a56db" : "#111111"))
      .attr("stroke", (d) => (d.category === "cloud" ? "#3b82f6" : "#555555"))
      .attr("stroke-width", 1)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${nameClean(d.tech)}</strong>
        <div class="tip-row">Adopción global: <span>${d.pct}%</span></div>
        <div class="tip-row">SAPA mediano usuarios: <span>${d.sapa_median.toLocaleString()}</span></div>
        <div class="tip-row">n respondentes: <span>${d.n.toLocaleString()}</span></div>
        <div class="tip-row">Categoría: <span>${d.category === "cloud" ? "Cloud/DevOps" : "Modelo de IA"}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip)
      .transition()
      .duration(500)
      .attr("r", (d) => r(d.n));
    circles
      .transition()
      .duration(400)
      .attr("cx", (d) => x(d.pct))
      .attr("cy", (d) => y(d.sapa_median))
      .attr("r", (d) => r(d.n));
    circles.exit().transition().duration(300).attr("r", 0).remove();

    const labels = g.selectAll(".blabel").data(fd, (d) => d.tech);
    labels
      .enter()
      .append("text")
      .attr("class", "blabel")
      .attr("x", (d) => x(d.pct))
      .attr("y", (d) => y(d.sapa_median) - r(d.n) - 4)
      .attr("text-anchor", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10)
      .text((d) => nameClean(d.tech))
      .attr("opacity", 0)
      .transition()
      .duration(500)
      .attr("opacity", 1);
    labels
      .transition()
      .duration(400)
      .attr("x", (d) => x(d.pct))
      .attr("y", (d) => y(d.sapa_median) - r(d.n) - 4);
    labels.exit().transition().duration(300).attr("opacity", 0).remove();
  }
  render("all");

  document.querySelectorAll(".filter-btn[data-filter]").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn[data-filter]")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      render(this.dataset.filter);
    });
  });
})();
(function () {
  const regions = [...new Set(DATA.heatmap.map((d) => d.Region))].sort();
  const levels = [
    "Diario",
    "Semanal",
    "Mensual",
    "Planea hacerlo",
    "Solo copiloto",
    "Sin planes",
  ];
  const W = 880,
    ml = 180,
    mr = 20,
    mt = 60,
    mb = 20;
  const cw = 90,
    ch = 36;
  const H = mt + regions.length * ch + mb;
  const svg = d3
    .select("#chart-heatmap")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("width", "100%");
  const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
  const color = d3
    .scaleSequential()
    .domain([0, 40])
    .interpolator(d3.interpolate("#eeeeee", "#1a56db"));
  const dailyColor = d3
    .scaleSequential()
    .domain([0, 40])
    .interpolator(d3.interpolate("#eeeeee", "#057a55"));
  levels.forEach((lvl, i) => {
    svg
      .append("text")
      .attr("x", ml + i * cw + cw / 2)
      .attr("y", mt - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 11)
      .text(lvl);
  });
  regions.forEach((reg, ri) => {
    svg
      .append("text")
      .attr("x", ml - 10)
      .attr("y", mt + ri * ch + ch / 2)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .attr("fill", "var(--text)")
      .attr("font-size", 11)
      .text(reg);
  });
  DATA.heatmap.forEach((d) => {
    const ri = regions.indexOf(d.Region);
    const ci = levels.indexOf(d.ai_agent_label);
    if (ri < 0 || ci < 0) return;
    const cx = ci * cw,
      cy = ri * ch;
    const fillColor =
      d.ai_agent_label === "Diario" ? dailyColor(d.pct) : color(d.pct);
    g.append("rect")
      .attr("x", cx + 2)
      .attr("y", cy + 2)
      .attr("width", cw - 4)
      .attr("height", ch - 4)
      .attr("rx", 4)
      .attr("fill", fillColor)
      .on("mouseenter", (event) =>
        showTip(
          `
        <strong>${d.Region}</strong>
        <div class="tip-row">Nivel: <span>${d.ai_agent_label}</span></div>
        <div class="tip-row">% devs: <span>${d.pct}%</span></div>
        <div class="tip-row">n = <span>${d.count.toLocaleString()}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip);
    g.append("text")
      .attr("x", cx + cw / 2)
      .attr("y", cy + ch / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", d.pct > 20 ? "#ffffff" : "#666666")
      .attr("font-size", 11)
      .text(d.pct + "%");
  });
})();
(function () {
  const nameClean = (n) =>
    n
      .replace("Amazon Web Services (AWS)", "AWS")
      .replace("Microsoft Azure", "Azure")
      .replace("Google Cloud", "GCP")
      .replace("openAI GPT (chatbot models)", "GPT-4o")
      .replace("Anthropic: Claude Sonnet", "Claude")
      .replace("openAI Reasoning models", "o1/o3")
      .replace("Gemini (Flash general purpose models)", "Gemini Flash")
      .replace("Gemini (Pro Reasoning models)", "Gemini Pro")
      .replace("openAI Image generating models", "DALL-E")
      .replace("DeepSeek (R- Reasoning models)", "DeepSeek R")
      .replace("Meta Llama (all models)", "Llama")
      .replace("Mistral AI models", "Mistral")
      .replace("Amazon Titan models", "Titan")
      .replace("Microsoft Phi-4 models", "Phi-4")
      .replace("Bash/Shell (all shells)", "Bash/Shell");

  let currentCat = "lang";

  function renderP4(cat) {
    const data = DATA.p4[cat].slice().reverse();
    const titles = {
      lang: "SAPA mediano por lenguaje — usuarios en LATAM",
      platform: "SAPA mediano por plataforma — usuarios en LATAM",
      ai: "SAPA mediano por modelo de IA — usuarios en LATAM",
    };
    document.getElementById("p4-chart-title").textContent = titles[cat];
    const W = 420,
      ml = 110,
      mr = 80,
      mt = 10,
      mb = 30;
    const H = data.length * 36 + mt + mb;
    const w = W - ml - mr,
      h = H - mt - mb;
    const maxVal =
      Math.max(
        d3.max(data, (d) => d.sapa_latam),
        d3.max(data, (d) => d.sapa_global),
      ) * 1.08;
    const x = d3.scaleLinear().domain([0, maxVal]).range([0, w]);
    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.tech))
      .range([0, h])
      .padding(0.35);

    d3.select("#chart-p4-main").selectAll("*").remove();
    const svg = d3
      .select("#chart-p4-main")
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("width", "100%");
    const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
    g.append("g")
      .attr("class", "grid")
      .call(d3.axisBottom(x).ticks(4).tickSize(-h).tickFormat(""))
      .attr("transform", `translate(0,${h})`);
    g.selectAll(".p4-bar")
      .data(data)
      .join("rect")
      .attr("class", "p4-bar")
      .attr("x", 0)
      .attr("y", (d) => y(d.tech) + y.bandwidth() * 0.15)
      .attr("width", (d) => x(d.sapa_latam))
      .attr("height", y.bandwidth() * 0.7)
      .attr("rx", 3)
      .attr("fill", "#1a56db")
      .attr("opacity", 0.85)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${nameClean(d.tech)}</strong>
        <div class="tip-row">SAPA LATAM: <span>${d.sapa_latam.toLocaleString()}</span></div>
        <div class="tip-row">SAPA Global: <span>${d.sapa_global.toLocaleString()}</span></div>
        <div class="tip-row">Adopción LATAM: <span>${d.pct_latam}%</span></div>
        <div class="tip-row">n LATAM: <span>${d.n_latam}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip);
    g.selectAll(".p4-global")
      .data(data)
      .join("line")
      .attr("class", "p4-global")
      .attr("x1", (d) => x(d.sapa_global))
      .attr("x2", (d) => x(d.sapa_global))
      .attr("y1", (d) => y(d.tech))
      .attr("y2", (d) => y(d.tech) + y.bandwidth())
      .attr("stroke", "#111111")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "4,3")
      .attr("opacity", 0.8);
    g.selectAll(".p4-val")
      .data(data)
      .join("text")
      .attr("class", "p4-val")
      .attr("x", (d) => x(d.sapa_latam) + 5)
      .attr("y", (d) => y(d.tech) + y.bandwidth() / 2)
      .attr("dominant-baseline", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10)
      .text((d) => d.sapa_latam.toLocaleString());
    g.append("g")
      .call(
        d3
          .axisLeft(y)
          .tickSize(0)
          .tickPadding(8)
          .tickFormat((d) => nameClean(d)),
      )
      .select(".domain")
      .remove();
    g.selectAll(".tick text").attr("fill", "var(--text)").attr("font-size", 11);
    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(4)
          .tickFormat((d) => d.toLocaleString()),
      )
      .select(".domain")
      .remove();
    g.selectAll("g:last-of-type .tick text")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10);
    const W2 = 300,
      ml2 = 10,
      mr2 = 50,
      mt2 = 10,
      mb2 = 30;
    const H2 = H,
      w2 = W2 - ml2 - mr2,
      h2 = H2 - mt2 - mb2;
    const maxPct = d3.max(data, (d) => d.pct_latam) * 1.15;
    const x2 = d3.scaleLinear().domain([0, maxPct]).range([0, w2]);
    const y2 = d3
      .scaleBand()
      .domain(data.map((d) => d.tech))
      .range([0, h2])
      .padding(0.35);

    d3.select("#chart-p4-adopt").selectAll("*").remove();
    const svg2 = d3
      .select("#chart-p4-adopt")
      .attr("viewBox", `0 0 ${W2} ${H2}`)
      .attr("width", "100%");
    const g2 = svg2.append("g").attr("transform", `translate(${ml2},${mt2})`);

    g2.append("g")
      .attr("class", "grid")
      .call(d3.axisBottom(x2).ticks(3).tickSize(-h2).tickFormat(""))
      .attr("transform", `translate(0,${h2})`);

    g2.selectAll(".adopt-bar")
      .data(data)
      .join("rect")
      .attr("class", "adopt-bar")
      .attr("x", 0)
      .attr("y", (d) => y2(d.tech) + y2.bandwidth() * 0.15)
      .attr("width", (d) => x2(d.pct_latam))
      .attr("height", y2.bandwidth() * 0.7)
      .attr("rx", 3)
      .attr("fill", "#aaaaaa")
      .attr("opacity", 0.5)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${nameClean(d.tech)}</strong>
        <div class="tip-row">Adopción LATAM: <span>${d.pct_latam}%</span></div>
        <div class="tip-row">n LATAM: <span>${d.n_latam}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip);

    g2.selectAll(".adopt-val")
      .data(data)
      .join("text")
      .attr("class", "adopt-val")
      .attr("x", (d) => x2(d.pct_latam) + 4)
      .attr("y", (d) => y2(d.tech) + y2.bandwidth() / 2)
      .attr("dominant-baseline", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10)
      .text((d) => d.pct_latam + "%");

    g2.append("g")
      .attr("transform", `translate(0,${h2})`)
      .call(
        d3
          .axisBottom(x2)
          .ticks(3)
          .tickFormat((d) => d + "%"),
      )
      .select(".domain")
      .remove();
    g2.selectAll("g:last-of-type .tick text")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10);
  }

  renderP4("lang");

  document.querySelectorAll(".filter-btn-p4").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn-p4")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      renderP4(this.dataset.cat);
    });
  });
})();
(function () {
  const nameClean = (n) =>
    n
      .replace("Amazon Web Services (AWS)", "AWS")
      .replace("openAI GPT (chatbot models)", "GPT-4o")
      .replace("Anthropic: Claude Sonnet", "Claude")
      .replace("openAI Reasoning models", "o1/o3")
      .replace("Gemini (Flash general purpose models)", "Gemini Flash")
      .replace("Gemini (Pro Reasoning models)", "Gemini Pro")
      .replace("Meta Llama (all models)", "Llama")
      .replace("Mistral AI models", "Mistral")
      .replace("Amazon Titan models", "Titan")
      .replace("Microsoft Phi-4 models", "Phi-4")
      .replace("Bash/Shell (all shells)", "Bash/Shell");

  function renderP4(cat) {
    const data = DATA.p4[cat].slice().reverse();
    const titles = {
      lang: "SAPA mediano por lenguaje — usuarios en LATAM",
      platform: "SAPA mediano por plataforma — usuarios en LATAM",
      ai: "SAPA mediano por modelo de IA — usuarios en LATAM",
    };
    document.getElementById("p4-chart-title").textContent = titles[cat];

    const W = 420,
      ml = 110,
      mr = 80,
      mt = 10,
      mb = 30;
    const H = data.length * 36 + mt + mb;
    const w = W - ml - mr,
      h = H - mt - mb;
    const maxVal =
      Math.max(
        d3.max(data, (d) => d.sapa_latam),
        d3.max(data, (d) => d.sapa_global),
      ) * 1.08;
    const x = d3.scaleLinear().domain([0, maxVal]).range([0, w]);
    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.tech))
      .range([0, h])
      .padding(0.35);

    d3.select("#chart-p4-main").selectAll("*").remove();
    const svg = d3
      .select("#chart-p4-main")
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("width", "100%");
    const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);

    g.append("g")
      .attr("class", "grid")
      .call(d3.axisBottom(x).ticks(4).tickSize(-h).tickFormat(""))
      .attr("transform", `translate(0,${h})`);

    g.selectAll(".p4-bar")
      .data(data)
      .join("rect")
      .attr("class", "p4-bar")
      .attr("x", 0)
      .attr("y", (d) => y(d.tech) + y.bandwidth() * 0.15)
      .attr("width", (d) => x(d.sapa_latam))
      .attr("height", y.bandwidth() * 0.7)
      .attr("rx", 3)
      .attr("fill", "#1a56db")
      .attr("opacity", 0.85)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${nameClean(d.tech)}</strong>
        <div class="tip-row">SAPA LATAM: <span>${d.sapa_latam.toLocaleString()}</span></div>
        <div class="tip-row">SAPA Global: <span>${d.sapa_global.toLocaleString()}</span></div>
        <div class="tip-row">Adopción LATAM: <span>${d.pct_latam}%</span></div>
        <div class="tip-row">n LATAM: <span>${d.n_latam}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip);

    g.selectAll(".p4-global")
      .data(data)
      .join("line")
      .attr("class", "p4-global")
      .attr("x1", (d) => x(d.sapa_global))
      .attr("x2", (d) => x(d.sapa_global))
      .attr("y1", (d) => y(d.tech))
      .attr("y2", (d) => y(d.tech) + y.bandwidth())
      .attr("stroke", "#111111")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "4,3")
      .attr("opacity", 0.8);

    g.selectAll(".p4-val")
      .data(data)
      .join("text")
      .attr("class", "p4-val")
      .attr("x", (d) => x(d.sapa_latam) + 5)
      .attr("y", (d) => y(d.tech) + y.bandwidth() / 2)
      .attr("dominant-baseline", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10)
      .text((d) => d.sapa_latam.toLocaleString());

    g.append("g")
      .call(
        d3
          .axisLeft(y)
          .tickSize(0)
          .tickPadding(8)
          .tickFormat((d) => nameClean(d)),
      )
      .select(".domain")
      .remove();
    g.selectAll(".tick text").attr("fill", "var(--text)").attr("font-size", 11);
    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(4)
          .tickFormat((d) => d.toLocaleString()),
      )
      .select(".domain")
      .remove();
    g.selectAll("g:last-of-type .tick text")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10);
    const W2 = 280,
      ml2 = 10,
      mr2 = 50,
      mt2 = 10,
      mb2 = 30;
    const H2 = H,
      w2 = W2 - ml2 - mr2,
      h2 = H2 - mt2 - mb2;
    const maxPct = d3.max(data, (d) => d.pct_latam) * 1.15;
    const x2 = d3.scaleLinear().domain([0, maxPct]).range([0, w2]);
    const y2 = d3
      .scaleBand()
      .domain(data.map((d) => d.tech))
      .range([0, h2])
      .padding(0.35);

    d3.select("#chart-p4-adopt").selectAll("*").remove();
    const svg2 = d3
      .select("#chart-p4-adopt")
      .attr("viewBox", `0 0 ${W2} ${H2}`)
      .attr("width", "100%");
    const g2 = svg2.append("g").attr("transform", `translate(${ml2},${mt2})`);

    g2.append("g")
      .attr("class", "grid")
      .call(d3.axisBottom(x2).ticks(3).tickSize(-h2).tickFormat(""))
      .attr("transform", `translate(0,${h2})`);

    g2.selectAll(".adopt-bar")
      .data(data)
      .join("rect")
      .attr("class", "adopt-bar")
      .attr("x", 0)
      .attr("y", (d) => y2(d.tech) + y2.bandwidth() * 0.15)
      .attr("width", (d) => x2(d.pct_latam))
      .attr("height", y2.bandwidth() * 0.7)
      .attr("rx", 3)
      .attr("fill", "#aaaaaa")
      .attr("opacity", 0.5)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${nameClean(d.tech)}</strong>
        <div class="tip-row">Adopción LATAM: <span>${d.pct_latam}%</span></div>
        <div class="tip-row">n LATAM: <span>${d.n_latam}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip);

    g2.selectAll(".adopt-val")
      .data(data)
      .join("text")
      .attr("class", "adopt-val")
      .attr("x", (d) => x2(d.pct_latam) + 4)
      .attr("y", (d) => y2(d.tech) + y2.bandwidth() / 2)
      .attr("dominant-baseline", "middle")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10)
      .text((d) => d.pct_latam + "%");

    g2.append("g")
      .attr("transform", `translate(0,${h2})`)
      .call(
        d3
          .axisBottom(x2)
          .ticks(3)
          .tickFormat((d) => d + "%"),
      )
      .select(".domain")
      .remove();
    g2.selectAll("g:last-of-type .tick text")
      .attr("fill", "var(--muted)")
      .attr("font-size", 10);
  }

  renderP4("lang");
  document.querySelectorAll(".filter-btn-p4").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn-p4")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      renderP4(this.dataset.cat);
    });
  });
})();
(function () {
  const W = 880,
    H = 440,
    ml = 70,
    mr = 30,
    mt = 20,
    mb = 50;
  const w = W - ml - mr,
    h = H - mt - mb;
  const svg = d3
    .select("#chart-scatter")
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("width", "100%");
  const g = svg.append("g").attr("transform", `translate(${ml},${mt})`);
  const x = d3.scaleLinear().domain([1, 20]).range([0, w]);
  const y = d3.scaleLinear().domain([0, 3500]).range([h, 0]);
  const rScale = d3.scaleSqrt().domain([0, 200]).range([4, 18]);
  const colorSat = d3
    .scaleSequential()
    .domain([7, 9])
    .interpolator(d3.interpolate("#e02424", "#057a55"));
  const regionColor = {
    Norteamérica: "#e02424",
    "Europa Occidental": "#1a56db",
    "Europa del Este": "#3b82f6",
    "América Latina": "#057a55",
    "Asia del Sur y Sureste": "#d97706",
    "Asia Oriental y Pacífico": "#7c3aed",
    "Europa del Sur": "#db2777",
    "Oriente Medio y África": "#b45309",
    "Asia Central": "#0891b2",
  };
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).ticks(5).tickSize(-w).tickFormat(""));
  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${h})`)
    .call(d3.axisBottom(x).ticks(8).tickSize(-h).tickFormat(""));

  const xAxis = g
    .append("g")
    .attr("transform", `translate(0,${h})`)
    .call(d3.axisBottom(x).ticks(8));
  xAxis.select(".domain").remove();
  xAxis.selectAll("text").attr("fill", "var(--muted)").attr("font-size", 11);
  const yAxis = g.append("g").call(
    d3
      .axisLeft(y)
      .ticks(5)
      .tickFormat((d) => d.toLocaleString()),
  );
  yAxis.select(".domain").remove();
  yAxis.selectAll("text").attr("fill", "var(--muted)").attr("font-size", 11);
  g.append("text")
    .attr("x", w / 2)
    .attr("y", h + 42)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 12)
    .text("Amplitud tecnológica (número de lenguajes usados)");
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -h / 2)
    .attr("y", -52)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--muted)")
    .attr("font-size", 12)
    .text("SAPA mediano");
  g.append("rect")
    .attr("x", x(6))
    .attr("y", 0)
    .attr("width", x(11) - x(6))
    .attr("height", h)
    .attr("fill", "#1a56db")
    .attr("opacity", 0.05);
  g.append("text")
    .attr("x", x(8.5))
    .attr("y", 18)
    .attr("text-anchor", "middle")
    .attr("fill", "#1a56db")
    .attr("font-size", 10)
    .text("zona óptima");

  const dotsGroup = g.append("g");
  function renderScatter(region) {
    const fd =
      region === "all"
        ? DATA.scatter
        : DATA.scatter.filter((d) => d.Region === region);
    const dots = dotsGroup
      .selectAll("circle")
      .data(fd, (d) => d.Region + d.Amplitud_Tech);
    dots
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.Amplitud_Tech))
      .attr("cy", (d) => y(d.sapa_median))
      .attr("r", 0)
      .attr("opacity", 0.75)
      .attr("fill", (d) => colorSat(d.sat_median))
      .attr("stroke", (d) => regionColor[d.Region] || "#888")
      .attr("stroke-width", 1)
      .on("mouseenter", (event, d) =>
        showTip(
          `
        <strong>${d.Region}</strong>
        <div class="tip-row">Lenguajes: <span>${d.Amplitud_Tech}</span></div>
        <div class="tip-row">SAPA mediano: <span>${d.sapa_median.toLocaleString()}</span></div>
        <div class="tip-row">Satisfacción: <span>${d.sat_median}/10</span></div>
        <div class="tip-row">n = <span>${d.n}</span></div>
      `,
          event,
        ),
      )
      .on("mouseleave", hideTip)
      .transition()
      .duration(400)
      .attr("r", (d) => rScale(d.n));
    dots
      .transition()
      .duration(300)
      .attr("cx", (d) => x(d.Amplitud_Tech))
      .attr("cy", (d) => y(d.sapa_median))
      .attr("r", (d) => rScale(d.n));
    dots.exit().transition().duration(200).attr("r", 0).remove();
  }
  renderScatter("all");
  document
    .getElementById("scatter-region")
    .addEventListener("change", function () {
      renderScatter(this.value);
    });
})();
