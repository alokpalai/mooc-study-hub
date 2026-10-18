// Consolidated exam revision material (built from all notes + assignment questions).
window.REVISION = {
  hot: [
    { t: "Electromagnetic basics", s: "Notes 1–3 · Assign. 1, 2", p: [
      "c = λν, E = hν = hc/λ. Visible 0.4–0.7 µm (B 0.4–0.5, G 0.5–0.6, R 0.6–0.7); NIR 0.7–1.4; SWIR 1.4–3; MWIR 3–8; TIR 8–14 µm.",
      "Wavelength order (long → short): Radio > Microwave > IR > Visible > UV.",
      "Wien (λmax = 2898/T) → peak wavelength; Stefan–Boltzmann (σT⁴) → total energy; Planck → spectrum. Hotter = more energy at every λ, peak at shorter λ.",
      "Sun peaks in the visible (~0.5 µm); Earth peaks in the thermal IR (~10 µm). Visible–SWIR = reflected sunlight; LWIR = Earth's emission.",
      "Penetration depth = depth where power falls to 1/e. In-phase waves add (3 m + 3 m = 6 m)." ] },
    { t: "Atmosphere", s: "Note 4 · Assign. 1, 3", p: [
      "Rayleigh (size ≪ λ, ∝ 1/λ⁴): blue sky, red sunset, haze. Mie (size ≈ λ): aerosols. Non-selective (size > 10λ): white clouds.",
      "Absorbers: H₂O, O₃, CO₂. Atmospheric windows = transparent bands where sensors operate.",
      "Atmospheric effect grows away from nadir (longer path). Path radiance carries NO target information." ] },
    { t: "Radiometry & reflectance", s: "Note 5–7 · Assign. 2, 3", p: [
      "Sphere = 4π sr. Lambertian: E = πL. Flux density ∝ 1/d²; radiance independent of distance.",
      "ρ + τ + α = 1; Kirchhoff: ε = α; opaque surface: ρ = 1 − ε (reflectance 0.25 → emissivity 0.75).",
      "Black-sky albedo = directional-hemispherical; white-sky = diffuse; reflectance ≠ albedo for non-Lambertian. BRDF unit = sr⁻¹, reflectance unitless.",
      "Rayleigh roughness: rough if phase difference > π/2; roughness is relative to wavelength.",
      "At-sensor radiance = τ·(surface radiance) + path radiance. Above 8 µm, emission dominates even in daytime." ] },
    { t: "DN → reflectance & corrections", s: "Note 8 · Assign. 3, 5", p: [
      "n-bit quantisation → 2ⁿ levels (8-bit = 256, DN 0–255; 4-bit = 0–15). Number of bits = radiometric resolution.",
      "TOA reflectance = π L d² / (Esun cos θs): corrects for the sun, NOT the atmosphere.",
      "Dark Object Subtraction removes path radiance only. Topographic correction: cosine (Lambertian) and C-correction.",
      "Level 0 raw, 1 calibrated, 2 geophysical, 3 aggregated, 4 model-derived." ] },
    { t: "Sensors, scanners & resolution", s: "Note 9 · Assign. 4, 5", p: [
      "Whiskbroom: one/few detectors + mirror, short dwell time, skewed scan lines. Pushbroom: line array, long dwell, pixel size set by detector spacing.",
      "IFOV (detector angle) → GIFOV (ground footprint); FOV → GFOV (swath). Along-track = direction of motion.",
      "GSI < GIFOV = oversampling; GSI > GIFOV = undersampling → aliasing.",
      "Dwell time example: 30 m pixel, 6000 samples, v = 7 km/s: scan time (30/2)/7000 = 2.143 ms → 0.35 µs per pixel (10 detectors → 3.57 µs).",
      "MTF = how object-space contrast is reproduced in the image. Sub-pixel objects can still be detected via contrast/PSF/SNR.",
      "Bandwidth = upper − lower (0.46–0.52 → 0.06 µm). Method of moments / FWHM give spectral characteristics. Landsat-8 revisit = 16 days. Hyperspectral = high spectral resolution." ] },
    { t: "Spectral signatures & indices", s: "Note 10 · Assign. 5, 6", p: [
      "Vegetation: visible = pigment (chlorophyll absorbs B & R), NIR = leaf structure (high ρ, high τ), SWIR = water (bands 1.4, 1.9, 2.7 µm). Red edge = sharp rise at ~0.7 µm.",
      "Soil: moisture ↓ reflectance; organic matter ↓; pure sand brighter than organic sand.",
      "Water: specular when still; absorbs NIR (black) → delineate water in NIR; chlorophyll ↓ blue, ↑ green; shallow water shows bottom features.",
      "Snow: highest visible reflectance; SWIR separates snow from cloud (snow dark in SWIR). Larger/older grains, water, dust → lower reflectance.",
      "NDVI = (NIR−R)/(NIR+R); SAVI reduces soil brightness at low cover; EVI reduces atmosphere, soil & saturation; NDWI (McFeeters) = (G−NIR)/(G+NIR) for open water." ] },
    { t: "Thermal infrared", s: "Note 12 · Assign. 3, 7", p: [
      "Thermal windows 3–5 and 8–14 µm (satellites 10.5–12.5 µm; avoid ozone 9.2–10.2). Radiometric ('skin') temperature ≠ air temperature.",
      "Emissivity: black body 1, grey body constant < 1, selective radiator varies with λ. Depends on colour, roughness, moisture, composition (NOT surface area).",
      "Radiometric = thermodynamic temperature only for homogeneous isothermal surfaces. Mixed pixel: radiance averages, not temperature.",
      "LST retrieval is ill-posed (n channels, n+1 unknowns); RTM gives transmissivity, up- & downwelling radiance (not emissivity). Split-window uses 2 TIR bands.",
      "Dawn minimum: no solar input, Earth keeps emitting all night. LST suffers directional anisotropy. 298 K black body → 447 W/m²." ] },
    { t: "Passive microwave", s: "Note 13 · Assign. 2, 8", p: [
      "Passive microwave measures EMITTANCE (brightness temperature). Range ≈ 1 mm – 1 m. Rayleigh–Jeans: radiance ∝ T·ε.",
      "Microwave emissivity depends on dielectric constant: wet soil (ε_r ~80) → lower emissivity → cooler BT (opposite of TIR).",
      "Resolution limited by diffraction: λ/L (GIFOV = H·λ/L). Subsurface emission is significant in microwave (not in TIR).",
      "BT depends on observation angle and polarization. Roughness ↑ → emissivity ↑ → BT ↑. L band best for soil moisture.",
      "Ocean: salinity ↑ → emissivity ↓; oil slick → emissivity ↑. Dry snow lowest emissivity; wetness ↑ → emissivity ↑." ] },
    { t: "Active microwave (RADAR)", s: "Note 14 · Assign. 8, 9", p: [
      "Polarization: first letter = transmit, second = receive; HV = H transmit, V receive (cross-pol). Azimuth = along-track, range = across-track.",
      "Azimuth resolution (real aperture) = λR/L (4 cm, 30 km, 3 m → 400 m); narrow beam preferred. SAR makes azimuth resolution independent of range.",
      "Distortions: shadow (no illumination, dark), layover, foreshortening, speckle (bright/dark patches).",
      "Radar cross section = scattering ability of target; σ° = backscatter coefficient. Smooth if h < λ/(25 sin γ). Longer λ (L) → soil looks smooth; shorter (X) → rough.",
      "Surface scattering → like-pol; volume scattering → cross-pol. Still water = dark; vegetation + water = double bounce; cardinal effect in cities.",
      "Non-imaging radar: Doppler, PPI. Interferometry → elevation. Incidence ≈ look angle for aircraft over flat land." ] },
    { t: "Platforms & orbits", s: "Note 15 · Assign. 10", p: [
      "Geostationary ≈ 35 786 km (10 000–100 000 km range), equatorial, period 24 h; geosynchronous = same period as Earth.",
      "Gravity ∝ 1/r². At 900 km only gravity and centrifugal force matter. 1° longitude = 4 min.",
      "Sun-synchronous orbit works because the orbital plane precesses (Earth's oblateness, J2). Same local time at each latitude.",
      "Prograde = same direction as Earth's rotation. Inclination = equatorial plane ↔ orbital plane. 5 Lagrange points; L3 behind the Sun (useless for EO); L1 hosts DSCOVR.",
      "Landsat 1–3: 103.34 min, 18-day repeat, 251 orbits. LEO 200–2000 km, MEO 2000–35 780 km, HEO > 35 780 km." ] },
    { t: "LIDAR, data & applications", s: "Notes 16–19", p: [
      "Lidar: active optical, 532 / 1064 nm, time-of-flight ranging (range = c·t/2). Discrete returns (point cloud) vs full waveform (more data).",
      "Spaceborne lidar: ICESat/GLAS, ICESat-2/ATLAS, GEDI. Uses: DEM, canopy height/biomass, bathymetry (green + NIR).",
      "Portals: USGS EarthExplorer, NASA Earthdata, Copernicus Hub (Sentinel), Bhuvan, MOSDAC. Tools: SNAP, Google Earth Engine. Formats: GeoTIFF, HDF, NetCDF.",
      "LULC classification scheme must be mutually exclusive, exhaustive, hierarchical. Land cover = physical type; land use = human use.",
      "Soil moisture: optical (reflectance ↓ as SM ↑, mostly SWIR), thermal (wet soil cooler by day, high inertia), microwave (best). Active MW: wet soil → higher σ°." ] }
  ],

  formulas: [
    ["Wave", "c = λν;  E = hν = hc/λ", "h = 6.626×10⁻³⁴ J s, c ≈ 3×10⁸ m/s"],
    ["Wien's displacement", "λmax = 2898 / T  (µm, K)", "Peak emission wavelength"],
    ["Stefan–Boltzmann", "M = σT⁴", "σ = 5.67×10⁻⁸ W m⁻² K⁻⁴; 298 K → 447 W/m²"],
    ["Planck", "Mλ = 2πhc² / [λ⁵ (e^(hc/λkT) − 1)]", "Spectral exitance, SI units"],
    ["Rayleigh–Jeans", "Lλ ≈ 2ckT / λ⁴", "Valid at microwave wavelengths; radiance ∝ T·ε"],
    ["Solid angle", "Ω = A / r²;  sphere = 4π sr", "Steradian"],
    ["Lambertian surface", "E = πL", "L radiance, E flux density"],
    ["Inverse square (Sun)", "E_earth = E_sun (R_sun / d)²", "Mean solar irradiance ≈ 1370 W/m²"],
    ["Energy balance of surface", "ρ + τ + α = 1;  ε = α;  opaque: ρ = 1 − ε", "Kirchhoff's law"],
    ["Rayleigh scattering", "∝ 1 / λ⁴", "Short λ scatter most"],
    ["Quantisation", "levels = 2ⁿ;  DN range 0 … 2ⁿ − 1", "8-bit → 256"],
    ["DN → radiance", "L = M_L · DN + A_L", "Gain/offset form"],
    ["TOA reflectance", "ρ = π L d² / (E_sun cos θs)", "d in AU; θs solar zenith"],
    ["Bandwidth", "Δλ = λ_upper − λ_lower;  centre = mean", "0.46–0.52 µm → 0.06 µm"],
    ["Whiskbroom dwell time", "scan time = (r/2)·(1/v);  dwell = scan time / n", "30 m, 6000, 7 km/s → 0.35 µs"],
    ["Ground footprint", "GIFOV = H · IFOV;  diffraction IFOV = 1.22 λ / D", "Microwave: β ≈ λ / L"],
    ["Radar azimuth resolution", "Ra = λ R / L", "4 cm, 30 km, 3 m → 400 m"],
    ["Radar range resolution", "Rr(slant) = c τ / 2", "τ pulse length"],
    ["Radar smooth surface", "h < λ / (25 sin γ)", "γ depression angle"],
    ["Brightness temperature", "TB ≈ ε · T", "Microwave, Rayleigh–Jeans"],
    ["Inverse Planck (TIR)", "Ts = K2 / ln(K1 / L + 1)", "Landsat-7: K1 = 666.09, K2 = 1282.71"],
    ["NDVI", "(NIR − Red) / (NIR + Red)", "Vegetation health"],
    ["SAVI", "(1 + L)(NIR − Red) / (NIR + Red + L)", "L = 1, 0.5, 0.25 (low → high cover)"],
    ["EVI", "G (NIR − R) / (NIR + C1·R − C2·Blue + L)", "G = 2.5, C1 = 6, C2 = 7.5, L = 1"],
    ["NDWI (open water)", "(Green − NIR) / (Green + NIR)", "McFeeters; MNDWI uses SWIR instead of NIR"],
    ["NDMI (veg. water)", "(NIR − SWIR) / (NIR + SWIR)", "Gao"],
    ["NDSI (snow)", "(Green − SWIR) / (Green + SWIR)", "Snow vs cloud"],
    ["Gravity", "F = G M m / r²", "Inverse-square"],
    ["Time vs longitude", "1° = 4 minutes", "360° = 24 h"],
    ["Lidar range", "R = c · t / 2", "Time-of-flight"],
    ["Surface energy balance", "LE = Rn − H − G", "Basis of ET from LST"]
  ],

  tables: [
    { title: "Types of atmospheric scattering", head: ["Type", "Particle size", "Wavelength dependence", "Example"], rows: [
      ["Rayleigh", "≪ λ (molecules)", "∝ 1/λ⁴ (blue scatters most)", "Blue sky, red sunset, haze"],
      ["Mie", "≈ λ (0.1–10 λ), aerosols", "Weaker dependence", "Smoke, dust, pollen"],
      ["Non-selective", "> 10 λ, water droplets", "None – all λ equally", "White clouds, fog"] ] },
    { title: "Whiskbroom vs pushbroom", head: ["Feature", "Whiskbroom", "Pushbroom"], rows: [
      ["Detectors", "Single / few + scanning mirror", "Line array (CCD), no moving parts"],
      ["Dwell time", "Short (µs)", "Long (better SNR)"],
      ["Pixel size set by", "Sampling rate along the scan", "Detector spacing"],
      ["Scan lines", "Skewed (platform moves)", "Perpendicular to motion"],
      ["Examples", "Landsat-7 ETM+, MODIS", "SPOT HRV, IRS LISS"],
      ["Drawback", "Moving parts, tangential scale distortion", "Detector calibration, many detectors"] ] },
    { title: "Four types of resolution", head: ["Resolution", "Meaning", "Controlled by", "Example"], rows: [
      ["Spatial", "Smallest feature seen", "GIFOV / GSI", "30 m Landsat"],
      ["Spectral", "Band number, width, position", "Bandwidth, number of bands", "Hyperspectral = narrow bands"],
      ["Radiometric", "Smallest radiance difference", "Quantisation bits, NEΔL/NEΔT", "8-bit = 256 levels"],
      ["Temporal", "Revisit time", "Orbit, FOV", "Landsat-8 = 16 days; geostationary best"] ] },
    { title: "Sampling vs footprint", head: ["Condition", "Result"], rows: [
      ["GSI < GIFOV", "Oversampling – correlated adjacent pixels"],
      ["GSI = GIFOV", "Normal (usual design)"],
      ["GSI > GIFOV", "Undersampling – spatial aliasing"] ] },
    { title: "Thermal IR vs passive microwave", head: ["Aspect", "TIR", "Passive microwave"], rows: [
      ["Quantity of interest", "Actual surface temperature (LST)", "Brightness temperature (emissivity variation)"],
      ["Emissivity", "≈ 0.9+ , small variation", "Large variation (dielectric constant)"],
      ["Moisture ↑", "Emissivity ↑", "Emissivity ↓ (cooler BT)"],
      ["Depth sensed", "Skin (top mm)", "Few cm (deeper at longer λ)"],
      ["Atmosphere", "Needs correction", "Almost transparent < 10 GHz"],
      ["Resolution", "Fine", "Coarse (diffraction λ/L)"] ] },
    { title: "Active vs passive remote sensing", head: ["Aspect", "Passive", "Active"], rows: [
      ["Energy source", "Sun / Earth emission", "Sensor's own signal"],
      ["Night operation", "Only TIR & passive MW", "Yes"],
      ["Examples", "Landsat, MODIS, SMOS radiometer", "Radar, SAR, Lidar"],
      ["Illumination control", "No", "Yes"] ] },
    { title: "Surface vs volume scattering (radar)", head: ["Aspect", "Surface scattering", "Volume scattering"], rows: [
      ["Origin", "Top surface of target", "Multiple scattering inside the medium"],
      ["Polarization", "Like-polarized (HH, VV)", "Depolarized → cross-pol (HV, VH)"],
      ["Penetration", "No", "Yes, increases with λ"],
      ["Shows", "Canopy top / ground roughness", "Below-canopy / biomass structure"] ] },
    { title: "Radar image distortions", head: ["Effect", "Cause", "Appearance"], rows: [
      ["Foreshortening", "Slope facing radar compressed", "Bright, compressed slope"],
      ["Layover", "Top of tall object closer than base", "Top displaced toward sensor"],
      ["Shadow", "Slope facing away – no illumination", "Completely dark, only in range direction"],
      ["Speckle", "Coherent interference", "Grainy bright/dark patches"] ] },
    { title: "Satellite orbit types", head: ["Orbit", "Altitude / feature", "Used for"], rows: [
      ["Low earth orbit", "200–2000 km", "Most EO satellites (Landsat ~705 km)"],
      ["Sun-synchronous (near-polar)", "~600–900 km, ~98° inclination", "Same local time each pass; Landsat, Sentinel-2"],
      ["Geostationary", "35 786 km, equatorial, 24 h", "Weather (INSAT), continuous view"],
      ["Geosynchronous", "Period = 1 sidereal day", "Inclined variants"],
      ["Lagrange point L1", "~1.5 million km", "DSCOVR/EPIC full-Earth images"],
      ["Asynchronous", "Special inclination", "TRMM 35°, ISS 51.64°"] ] },
    { title: "Spectral regions of vegetation / soil / water / snow", head: ["Feature", "Visible", "NIR", "SWIR"], rows: [
      ["Vegetation", "Low (pigment absorption), green peak", "High (leaf structure)", "Water absorption dips 1.4, 1.9, 2.7 µm"],
      ["Soil", "Rises with λ; darker if wet/organic", "Higher", "Moisture & clay absorption"],
      ["Water", "Some blue-green reflectance", "≈ 0 (absorbs)", "≈ 0"],
      ["Snow", "Very high", "Falls (grain size)", "Low – separates snow from cloud"] ] },
    { title: "Lidar returns", head: ["Aspect", "Discrete return", "Full waveform"], rows: [
      ["Output", "3-D point cloud (few returns/pulse)", "Complete backscatter profile"],
      ["Storage", "Small", "Large"],
      ["Best for", "DEM, buildings", "Canopy vertical structure"],
      ["Footprint", "Usually small", "Usually large"] ] },
    { title: "Data processing levels", head: ["Level", "Content", "Example"], rows: [
      ["0", "Raw sensor data", "—"],
      ["1", "Calibrated radiance / geometry", "Landsat L1 (DN), VIIRS radiance"],
      ["2", "Geophysical products", "Surface reflectance, LST, soil moisture swath"],
      ["3", "Gridded / composited", "MODIS 8-day LST CMG"],
      ["4", "Model-derived", "LAI/fPAR, CATDS 1 km soil moisture"] ] }
  ],

  tips: [
    "True/False traps: 'oversampling' = GSI < GIFOV; 'aliasing' = undersampling; radar shadow is dark and only in range direction.",
    "Numerical practice: dwell time, azimuth resolution λR/L, bandwidth, Wien/Stefan–Boltzmann, 2ⁿ levels, 1° = 4 min, Kirchhoff ρ = 1 − ε.",
    "Microwave is opposite to TIR for moisture: wetter soil = LOWER emissivity in microwave, HIGHER emissivity in TIR.",
    "Assignments were multiple choice with 'select all that apply' items — read every option; usually 2–3 are correct.",
    "Remember the sensor families: whiskbroom (Landsat ETM+, MODIS), pushbroom (array), SAR (Sentinel-1 C-band), lidar (GEDI, ICESat-2), microwave radiometer (SMOS, SMAP)."
  ]
};
