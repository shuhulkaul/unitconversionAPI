# unitconversionAPI
#### REST API for unit conversion

## Usage

***https://unitconversionapi.herokuapp.com/{measure}/{unit}/{number}***
'without the curly brackets'<br>
Example: https://unitconversionapi.herokuapp.com/distance/m/2

For formatting the output result, use 
``` value.toStringLocale('en-IN') ``` or ``` value.toFixed(23) ```
function.

## NPM Package
[NPM Documentation](https://www.npmjs.com/package/unit-conversion-pkg)

## Available Units
<br>
> 1.  **_distance_** Distance

- **_mic_** ----> Micron

- **_mm_** ----> Millimeter

- **_cm_** ----> Centimeter

- **_m_** ----> Meter

- **_km_** ----> Kilometer

- **_mil_** ----> Mils/Thou

- **_in_** ----> Inches

- **_ft_** ----> Feet

- **_yd_** ----> Yards

- **_mi_** ----> Miles

- **_nm_** ----> Nautical Miles

- **_fm_** ----> Fathoms

- **_ch_** ----> Chains

- **_fur_** ----> Furlongs

- **_ly_** ----> Light Years

> 2.  **_area_** Area

- **_sqmm_** ----> Sq. Millimeter

- **_sqcm_** ----> Sq. Centimeter

- **_sqm_** ----> Sq. Meter

- **_ha_** ----> Hectares

- **_sqkm_** ----> Sq. Kilometer

- **_sqin_** ----> Sq. Inches

- **_sqft_** ----> Sq. Feet

- **_sqyd_** ----> Sq. Yards

- **_ac_** ----> Acres

- **_sqmi_** ----> Sq. Miles

> 3.  **_volume_** Volume

- **_ml_** ----> Milliliters (cc)

- **_l_** ----> Liters

- **_cum_** ----> Cu. Meter

- **_cuin_** ----> Cu. Inch

- **_cuft_** ----> Cu. Feet

- **_cuyd_** ----> Cu. Yard

- **_ozimp_** ----> Fluid Ounce (IMPERIAL)

- **_ptimp_** ----> Pint (IMPERIAL)

- **_galimp_** ----> Gallon (IMPERIAL)

- **_ozus_** ----> Fluid Ounce (US)

- **_ptus_** ----> Pint (US)

- **_galus_** ----> Gallon (US)

> 4. **_mass_** Mass

- **_micg_** ----> Micrograms

- **_mg_** ----> Milligrams

- **_g_** ----> Grams

- **_kg_** ----> KG

- **_t_** ----> Ton

- **_oz_** ----> Ounce

- **_lb_** ----> Pound

- **_st_** ----> Stone

- **_cwtus_** ----> Hundredweight (US)

- **_cwtuk_** ----> Hundredweight (UK)

- **_stus_** ----> Short Tons (US)

- **_stuk_** ----> Long Tons (UK)

> 5. **_speed_** Speed

- **_mps_** ----> Meter per sec

- **_kmph_** ----> KMPH

- **_ftps_** ----> Feet per second

- **_mph_** ----> MPH

- **_kt_** ----> Knots

> 6. **_time_** Time

- **_ns_** ----> Nanoseconds

- **_mics_** ----> Microseconds

- **_ms_** ----> Milliseconds

- **_s_** ----> Seconds

- **_min_** ----> Minutes

- **_hr_** ----> Hours

- **_d_** ----> Days

- **_wk_** ----> Weeks

- **_yrg_** ----> Years (Gregorian)

- **_yrj_** ----> Years (Julian)

> 7. **_force_** Force

- **_micn_** ----> Micro-newtons

- **_mn_** ----> Millinewtons

- **_n_** ----> Newtons

- **_kn_** ----> Kilonewtons

- **_kgf_** ----> Kilogram-Force

- **_lbf_** ----> Pound Force

> 8. **_pressure_** Pressure

- **_pa_** ----> Pascal

- **_hpa_** ----> Hectopascal

- **_kpa_** ----> Kilopascal

- **_mpa_** ----> Megapascal

- **_mbar_** ----> Millibar

- **_bar_** ----> Bar

- **_atm_** ----> atm

- **_kgpsqcm_** ----> Kilogram per sq. cm

- **_psi_** ----> psi

- **_hg_** ----> Inches of Mercury

- **_torr_** ----> Torr

> 9. **_energy_** Energy

- **_j_** ----> Joules

- **_kj_** ----> Kilojoules

- **_mj_** ----> Megajoules

- **_kwh_** ----> kWh

- **_cal_** ----> Calories

- **_kcal_** ----> Kilocalories

- **_btu_** ----> BTU

> 10. **_power_** Power

- **_w_** ----> Watts

- **_kw_** ----> Kilowatts

- **_mw_** ----> Megawatts

- **_calps_** ----> Calories per sec

- **_btuph_** ----> BTU/h

- **_hpi_** ----> Horsepower (mech)

- **_hpm_** ----> Horsepower (metric)

> 11.**_temp_** Temperature

- **_c_** ----> Celsius

- **_f_** ----> Fahrenheit

- **_k_** ----> Kelvin

> 12. **_data_** Data Size

- **_b_** ----> B

- **_kib_** ----> KiB

- **_mib_** ----> MiB

- **_gib_** ----> GiB

- **_tib_** ----> TiB

- **_kb_** ----> kB

- **_mb_** ----> MB

- **_gb_** ----> GB

- **_tb_** ----> TB
