# unitconversionAPI
REST API for unit conversion<br>

Usage: 
***https://unitconversionapi.herokuapp.com/{measure}/{unit}/{number}***
'without the curly brackets'<br>
Example: https://unitconversionapi.herokuapp.com/distance/m/2

For formatting the output result, use ***toStringLocale('en-IN')*** or ***toFixed(23)*** function.

Available Units<br> 
<br>
***Without the curly brackets***
1. ***distance*** Distance <br>
***mic*** ----> Micron<br>
***mm*** ----> Millimeter<br>
***cm*** ----> Centimeter<br>
***m*** ----> Meter<br>
***km*** ----> Kilometer<br>
***mil*** ----> Mils/Thou<br>
***in*** ----> Inches<br>
***ft*** ----> Feet<br>
***yd*** ----> Yards<br>
***mi*** ----> Miles<br>
***nm*** ----> Nautical Miles<br>
***fm*** ----> Fathoms<br>
***ch*** ----> Chains<br>
***fur*** ----> Furlongs<br>
***ly*** ----> Light Years<br>
<br>
2. ***area*** Area<br>
***sqmm*** ----> Sq. Millimeter<br>
***sqcm*** ----> Sq. Centimeter<br>
***sqm*** ----> Sq. Meter<br>
***ha*** ----> Hectares<br>
***sqkm*** ----> Sq. Kilometer<br>
***sqin*** ----> Sq. Inches<br>
***sqyd*** ----> Sq. Yards<br>
***ac*** ----> Acres<br>
***sqmi*** ----> Sq. Miles<br>
<br>
3. ***volume*** Volume<br>
***ml*** ----> Milliliters (cc)<br>
***l*** ----> Liters<br>
***cum*** ----> Cu. Meter<br>
***cuin*** ----> Cu. Inch<br>
***cuft*** ----> Cu. Feet<br>
***cuyd*** ----> Cu. Yard<br>
***ozimp*** ----> Fluid Ounce (IMPERIAL)<br>
***ptimp*** ----> Pint (IMPERIAL)<br>
***galimp*** ----> Gallon (IMPERIAL)<br>
***ozus*** ----> Fluid Ounce (US)<br>
***ptus*** ----> Pint (US)<br>
***galus*** ----> Gallon (US)<br>
<br>
4. ***mass*** Mass<br>
***micg*** ----> Micrograms<br>
***mg*** ----> Milligrams<br>
***g*** ----> Grams<br>
***kg*** ----> KG<br>
***t*** ----> Ton<br>
***oz*** ----> Ounce<br>
***lb*** ----> Pound<br>
***st*** ----> Stone<br>
***cwtus*** ----> Hundredweight (US)<br>
***cwtuk*** ----> Hundredweight (UK)<br>
***stus*** ----> Short Tons (US)<br>
***stuk*** ----> Long Tons (UK)<br>
<br>
5. ***speed*** Speed<br>
***mps*** ----> Meter per sec<br>
***kmph*** ----> KMPH<br>
***ftps*** ----> Feet per second<br>
***mph*** ----> MPH<br>
***kt*** ----> Knots<br>
<br>
6. ***time*** Time<br>
***ns*** ----> Nanoseconds<br>
***mics*** ----> Microseconds<br>
***ms*** ----> Milliseconds<br>
***s*** ----> Seconds<br>
***min*** ----> Minutes<br>
***hr*** ----> Hours<br>
***d*** ----> Days<br>
***wk*** ----> Weeks<br>
***yrg*** ----> Years (Gregorian)<br>
***yrj*** ----> Years (Julian)<br>
<br>
7. ***force*** Force<br>
***micn*** ----> Micro-newtons<br>
***mn*** ----> Millinewtons<br>
***n*** ----> Newtons<br>
***kn*** ----> Kilonewtons<br>
***kgf*** ----> Kilogram-Force<br>
***lbf*** ----> Pound Force<br>
<br>
8. ***pressure*** Pressure<br>
***pa*** ----> Pascal<br>
***hpa*** ----> Hectopascal<br>
***kpa*** ----> Kilopascal<br>
***mpa*** ----> Megapascal<br>
***mbar*** ----> Millibar<br>
***bar*** ----> Bar<br>
***atm*** ----> atm<br>
***kgpsqcm*** ----> Kilogram per sq. cm<br>
***psi*** ----> psi<br>
***hg*** ----> Inches of Mercury<br>
***torr*** ----> Torr<br>
<br>
9. ***energy*** Energy<br>
***j*** ----> Joules<br>
***kj*** ----> Kilojoules<br>
***mj*** ----> Megajoules<br>
***kwh*** ----> kWh<br>
***cal*** ----> Calories<br>
***kcal*** ----> Kilocalories<br>
***btu*** ----> BTU<br>
<br>
10. ***power*** Power<br>
***w*** ----> Watts<br>
***kw*** ----> Kilowatts<br>
***mw*** ----> Megawatts<br>
***calps*** ----> Calories per sec<br>
***btuph*** ----> BTU/h<br>
***hpi*** ----> Horsepower (mech)<br>
***hpm*** ----> Horsepower (metric)<br>
<br>
11.***temp*** Temperature<br>
***c*** ----> Celsius<br>
***f*** ----> Fahrenheit<br>
***k*** ----> Kelvin<br>
<br>
12. ***data*** Data Size<br>
***b*** ----> B<br>
***kib*** ----> KiB<br>
***mib*** ----> MiB<br>
***gib*** ----> GiB<br>
***tib*** ----> TiB<br>
***kb*** ----> kB<br>
***mb*** ----> MB<br>
***gb*** ----> GB<br>
***tb*** ----> TB<br><br>
