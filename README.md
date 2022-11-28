# ⚡️ Iconify

A bunch of random icons, across various categories, designed to be used in React
/ Vue applications. All the icons have no height or width attributes by default
so you'll need to provide either of the two to the icons.

### Notes

1. How do I theme the icons? :: We're gonna use the `<AndroidIcon />` as an
   example. Add `color="rgb(var(--android))` to the component:
   `<AndroidIcon color="rgb(var(--android))" />` Now go to your stylesheet and
   add:

```css
:root {
	--android: #a4c439;
}
[data-theme="dark"] {
	--android: #fff;
}
```

Now when you toggle between the darkmode it will swap the color for the icon. If
you'd just wanna swap white/black (i.e. for mono icons) then you can just create
a `--background: #fff` and `--foreground: #000` variables to the root. Then add
`<GithubIcon color="rgb(var(--foreground))" />` to the component and now it will
swap for darkmode as long as you make sure the following is somewhere in your
css:

```css
:root {
	--background: #fff;
	--foreground: #000;
}
[data-theme="dark"] {
	--background: #000;
	--foreground: #fff;
}
```

### Table of Contents
### Countries

#### Africa

- [algeria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/algeria.svg)

- [angola.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/angola.svg)

- [benin.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/benin.svg)

- [botswana.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/botswana.svg)

- [burkina_faso.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/burkina_faso.svg)

- [burundi.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/burundi.svg)

- [cameroon.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/cameroon.svg)

- [canary_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/canary_islands.svg)

- [cape_verde.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/cape_verde.svg)

- [central_african_republic.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/central_african_republic.svg)

- [chad.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/chad.svg)

- [comoros.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/comoros.svg)

- [congo.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/congo.svg)

- [djibouti.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/djibouti.svg)

- [egypt.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/egypt.svg)

- [equatorial_guinea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/equatorial_guinea.svg)

- [eritrea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/eritrea.svg)

- [eswatini.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/eswatini.svg)

- [ethiopia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ethiopia.svg)

- [gabon.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/gabon.svg)

- [gambia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/gambia.svg)

- [ghana.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ghana.svg)

- [guinea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/guinea.svg)

- [guinea_bissau.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/guinea_bissau.svg)

- [ivory_coast.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ivory_coast.svg)

- [kenya.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/kenya.svg)

- [lesotho.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/lesotho.svg)

- [liberia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/liberia.svg)

- [libya.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/libya.svg)

- [madagascar.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/madagascar.svg)

- [malawi.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/malawi.svg)

- [mali.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mali.svg)

- [mauritania.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mauritania.svg)

- [mauritus.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mauritus.svg)

- [morocco.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/morocco.svg)

- [mozabique.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mozabique.svg)

- [nambia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/nambia.svg)

- [niger.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/niger.svg)

- [nigeria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/nigeria.svg)

- [rwanda.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/rwanda.svg)

- [sahrawi.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sahrawi.svg)

- [sao_tome_and_principe.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sao_tome_and_principe.svg)

- [senegal.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/senegal.svg)

- [seychelles.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/seychelles.svg)

- [sierra_leone.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sierra_leone.svg)

- [somalia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/somalia.svg)

- [south_africa.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/south_africa.svg)

- [south_sudan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/south_sudan.svg)

- [sudan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sudan.svg)

- [suriname.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/suriname.svg)

- [tanzinia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/tanzinia.svg)

- [togo.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/togo.svg)

- [tunesia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/tunesia.svg)

- [uganda.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/uganda.svg)

- [zambia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/zambia.svg)

- [zimbabwe.svg](https://github.com/snowytime/iconify/blob/master/src/countries/africa/zimbabwe.svg)

#### Americas

- [anguilla.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/anguilla.svg)

- [antigua_and_barbuda.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/antigua_and_barbuda.svg)

- [argentina.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/argentina.svg)

- [aruba.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/aruba.svg)

- [bahamas.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bahamas.svg)

- [barabados.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/barabados.svg)

- [belize.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/belize.svg)

- [bermuda.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bermuda.svg)

- [boinaire.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/boinaire.svg)

- [bolivia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bolivia.svg)

- [brazil.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/brazil.svg)

- [british_virgin_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/british_virgin_islands.svg)

- [canada.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/canada.svg)

- [cayman_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/cayman_islands.svg)

- [chile.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/chile.svg)

- [colombia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/colombia.svg)

- [costa_rica.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/costa_rica.svg)

- [cuba.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/cuba.svg)

- [curaco.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/curaco.svg)

- [dominica.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/dominica.svg)

- [dominican_republic.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/dominican_republic.svg)

- [el_salvador.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/el_salvador.svg)

- [equador.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/equador.svg)

- [falkland_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/falkland_islands.svg)

- [grenada.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/grenada.svg)

- [guatemala.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/guatemala.svg)

- [haiti.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/haiti.svg)

- [hawaii.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/hawaii.svg)

- [honduras.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/honduras.svg)

- [jamaica.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/jamaica.svg)

- [martinique.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/martinique.svg)

- [mexico.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/mexico.svg)

- [montserrat.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/montserrat.svg)

- [nicaragua.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/nicaragua.svg)

- [panama.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/panama.svg)

- [paraguay.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/paraguay.svg)

- [peru.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/peru.svg)

- [puerto_rico.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/puerto_rico.svg)

- [saba_island.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/saba_island.svg)

- [saint_kitts.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/saint_kitts.svg)

- [sint_eustatius.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/sint_eustatius.svg)

- [sint_maarten.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/sint_maarten.svg)

- [st_barts.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_barts.svg)

- [st_lucia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_lucia.svg)

- [st_vincents.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_vincents.svg)

- [trinidad.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/trinidad.svg)

- [turks_and_caikos.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/turks_and_caikos.svg)

- [united_states.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/united_states.svg)

- [uruguay.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/uruguay.svg)

- [us_virgin_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/us_virgin_islands.svg)

- [venezuela.svg](https://github.com/snowytime/iconify/blob/master/src/countries/americas/venezuela.svg)

#### Asia

- [abkhazia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/abkhazia.svg)

- [armenia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/armenia.svg)

- [azerbaijan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/azerbaijan.svg)

- [bangladesh.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/bangladesh.svg)

- [bhutan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/bhutan.svg)

- [brunei.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/brunei.svg)

- [cambodia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/cambodia.svg)

- [china.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/china.svg)

- [east_timor.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/east_timor.svg)

- [hong_kong.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/hong_kong.svg)

- [india.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/india.svg)

- [indonesia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/indonesia.svg)

- [japan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/japan.svg)

- [kazakhstan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/kazakhstan.svg)

- [kyrgistan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/kyrgistan.svg)

- [laos.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/laos.svg)

- [macao.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/macao.svg)

- [malaysia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/malaysia.svg)

- [maldives-1.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/maldives-1.svg)

- [maldives.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/maldives.svg)

- [mongolia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/mongolia.svg)

- [myanmar.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/myanmar.svg)

- [nepal.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/nepal.svg)

- [north_korea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/north_korea.svg)

- [pakistan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/pakistan.svg)

- [philippines.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/philippines.svg)

- [singapore.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/singapore.svg)

- [south_korea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/south_korea.svg)

- [sri_lanka.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/sri_lanka.svg)

- [taiwan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/taiwan.svg)

- [tajikistan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/tajikistan.svg)

- [thailand.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/thailand.svg)

- [tibet.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/tibet.svg)

- [turkey.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/turkey.svg)

- [turkministan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/turkministan.svg)

- [uzbekistan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/uzbekistan.svg)

- [vietnam.svg](https://github.com/snowytime/iconify/blob/master/src/countries/asia/vietnam.svg)

#### Europe

- [aaland_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/aaland_islands.svg)

- [albania.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/albania.svg)

- [andorra.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/andorra.svg)

- [austria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/austria.svg)

- [azores_island.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/azores_island.svg)

- [balearic_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/balearic_islands.svg)

- [base.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/base.svg)

- [basque.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/basque.svg)

- [belarus.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/belarus.svg)

- [belgium.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/belgium.svg)

- [bosnia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/bosnia.svg)

- [bulgaria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/bulgaria.svg)

- [ceuta.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ceuta.svg)

- [corsica.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/corsica.svg)

- [croatia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/croatia.svg)

- [cyprus.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/cyprus.svg)

- [czech_republic.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/czech_republic.svg)

- [denmark.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/denmark.svg)

- [england.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/england.svg)

- [estonia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/estonia.svg)

- [european_union.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/european_union.svg)

- [faroe_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/faroe_islands.svg)

- [finland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/finland.svg)

- [france.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/france.svg)

- [georgia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/georgia.svg)

- [germany.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/germany.svg)

- [gibraltar.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/gibraltar.svg)

- [greece.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/greece.svg)

- [greenland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/greenland.svg)

- [gurnsey.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/gurnsey.svg)

- [hungary.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/hungary.svg)

- [iceland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/iceland.svg)

- [ireland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ireland.svg)

- [isle_of_man.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/isle_of_man.svg)

- [italy.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/italy.svg)

- [jersey.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/jersey.svg)

- [kosovo.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/kosovo.svg)

- [latvia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/latvia.svg)

- [liechtenstein.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/liechtenstein.svg)

- [lithuania.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/lithuania.svg)

- [luxembourg.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/luxembourg.svg)

- [madeira.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/madeira.svg)

- [malta.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/malta.svg)

- [melilla.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/melilla.svg)

- [moldova.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/moldova.svg)

- [monaco.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/monaco.svg)

- [montenegro.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/montenegro.svg)

- [nato.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/nato.svg)

- [netherlands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/netherlands.svg)

- [north_cyprus.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/north_cyprus.svg)

- [north_macedonia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/north_macedonia.svg)

- [norway.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/norway.svg)

- [ossetia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ossetia.svg)

- [poland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/poland.svg)

- [portugal.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/portugal.svg)

- [romania.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/romania.svg)

- [russia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/russia.svg)

- [san_marino.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/san_marino.svg)

- [sardinia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sardinia.svg)

- [scotland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/scotland.svg)

- [serbia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/serbia.svg)

- [sicily.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sicily.svg)

- [slovakia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/slovakia.svg)

- [slovenia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/slovenia.svg)

- [spain.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/spain.svg)

- [sweden.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sweden.svg)

- [switzerland.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/switzerland.svg)

- [transnistria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/transnistria.svg)

- [ukraine.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ukraine.svg)

- [united_kingdom.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/united_kingdom.svg)

- [vatican_city.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/vatican_city.svg)

- [wales.svg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/wales.svg)

#### Middle_east

- [afghanistan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/afghanistan.svg)

- [bahrain.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/bahrain.svg)

- [iran.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/iran.svg)

- [iraq.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/iraq.svg)

- [israel.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/israel.svg)

- [jordan.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/jordan.svg)

- [kuwait.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/kuwait.svg)

- [lebanon.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/lebanon.svg)

- [oman.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/oman.svg)

- [palestine.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/palestine.svg)

- [qatar.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/qatar.svg)

- [saudi_arabia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/saudi_arabia.svg)

- [syria.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/syria.svg)

- [united_arab_emirates.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/united_arab_emirates.svg)

- [yemen.svg](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/yemen.svg)

#### Oceania

- [american_samoa.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/american_samoa.svg)

- [australia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/australia.svg)

- [british_indian_ocean_territory.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/british_indian_ocean_territory.svg)

- [christmas_island.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/christmas_island.svg)

- [cook_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/cook_islands.svg)

- [fiji.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/fiji.svg)

- [french_polynesia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/french_polynesia.svg)

- [guam.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/guam.svg)

- [kiribati.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/kiribati.svg)

- [marshall_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/marshall_islands.svg)

- [micronesia.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/micronesia.svg)

- [naru.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/naru.svg)

- [new_zealand.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/new_zealand.svg)

- [niue.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/niue.svg)

- [northern_mariana_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/northern_mariana_islands.svg)

- [palau.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/palau.svg)

- [papa_new_guinea.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/papa_new_guinea.svg)

- [picairn_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/picairn_islands.svg)

- [solomon_islands.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/solomon_islands.svg)

- [tokelau.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tokelau.svg)

- [tonga.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tonga.svg)

- [tuvalu.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tuvalu.svg)

- [vanuatu.svg](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/vanuatu.svg)

### Credit

- [affirm.svg](https://github.com/snowytime/iconify/blob/master/src/credit/affirm.svg)

- [amex.svg](https://github.com/snowytime/iconify/blob/master/src/credit/amex.svg)

- [apple-pay.svg](https://github.com/snowytime/iconify/blob/master/src/credit/apple-pay.svg)

- [bitcoin.svg](https://github.com/snowytime/iconify/blob/master/src/credit/bitcoin.svg)

- [discover.svg](https://github.com/snowytime/iconify/blob/master/src/credit/discover.svg)

- [interac.svg](https://github.com/snowytime/iconify/blob/master/src/credit/interac.svg)

- [maestro.svg](https://github.com/snowytime/iconify/blob/master/src/credit/maestro.svg)

- [mastercard.svg](https://github.com/snowytime/iconify/blob/master/src/credit/mastercard.svg)

- [paypal.svg](https://github.com/snowytime/iconify/blob/master/src/credit/paypal.svg)

- [visa.svg](https://github.com/snowytime/iconify/blob/master/src/credit/visa.svg)

### Programming

- [android.svg](https://github.com/snowytime/iconify/blob/master/src/programming/android.svg)

- [apple.svg](https://github.com/snowytime/iconify/blob/master/src/programming/apple.svg)

- [babel.svg](https://github.com/snowytime/iconify/blob/master/src/programming/babel.svg)

- [c.svg](https://github.com/snowytime/iconify/blob/master/src/programming/c.svg)

- [c_plus_plus.svg](https://github.com/snowytime/iconify/blob/master/src/programming/c_plus_plus.svg)

- [code_sandbox.svg](https://github.com/snowytime/iconify/blob/master/src/programming/code_sandbox.svg)

- [codepen.svg](https://github.com/snowytime/iconify/blob/master/src/programming/codepen.svg)

- [csharp.svg](https://github.com/snowytime/iconify/blob/master/src/programming/csharp.svg)

- [docker.svg](https://github.com/snowytime/iconify/blob/master/src/programming/docker.svg)

- [eslint.svg](https://github.com/snowytime/iconify/blob/master/src/programming/eslint.svg)

- [express.svg](https://github.com/snowytime/iconify/blob/master/src/programming/express.svg)

- [git.svg](https://github.com/snowytime/iconify/blob/master/src/programming/git.svg)

- [github.svg](https://github.com/snowytime/iconify/blob/master/src/programming/github.svg)

- [golang.svg](https://github.com/snowytime/iconify/blob/master/src/programming/golang.svg)

- [google_cloud.svg](https://github.com/snowytime/iconify/blob/master/src/programming/google_cloud.svg)

- [graphql.svg](https://github.com/snowytime/iconify/blob/master/src/programming/graphql.svg)

- [haskell.svg](https://github.com/snowytime/iconify/blob/master/src/programming/haskell.svg)

- [html.svg](https://github.com/snowytime/iconify/blob/master/src/programming/html.svg)

- [hugo.svg](https://github.com/snowytime/iconify/blob/master/src/programming/hugo.svg)

- [illustrator.svg](https://github.com/snowytime/iconify/blob/master/src/programming/illustrator.svg)

- [jamstack.svg](https://github.com/snowytime/iconify/blob/master/src/programming/jamstack.svg)

- [java.svg](https://github.com/snowytime/iconify/blob/master/src/programming/java.svg)

- [javascript.svg](https://github.com/snowytime/iconify/blob/master/src/programming/javascript.svg)

- [jest.svg](https://github.com/snowytime/iconify/blob/master/src/programming/jest.svg)

- [julia.svg](https://github.com/snowytime/iconify/blob/master/src/programming/julia.svg)

- [kotlin.svg](https://github.com/snowytime/iconify/blob/master/src/programming/kotlin.svg)

- [latex.svg](https://github.com/snowytime/iconify/blob/master/src/programming/latex.svg)

- [markdown.svg](https://github.com/snowytime/iconify/blob/master/src/programming/markdown.svg)

- [mongodb.svg](https://github.com/snowytime/iconify/blob/master/src/programming/mongodb.svg)

- [nestjs.svg](https://github.com/snowytime/iconify/blob/master/src/programming/nestjs.svg)

- [nextjs.svg](https://github.com/snowytime/iconify/blob/master/src/programming/nextjs.svg)

- [nodejs.svg](https://github.com/snowytime/iconify/blob/master/src/programming/nodejs.svg)

- [npm.svg](https://github.com/snowytime/iconify/blob/master/src/programming/npm.svg)

- [nuxt.svg](https://github.com/snowytime/iconify/blob/master/src/programming/nuxt.svg)

- [photoshop.svg](https://github.com/snowytime/iconify/blob/master/src/programming/photoshop.svg)

- [postgres.svg](https://github.com/snowytime/iconify/blob/master/src/programming/postgres.svg)

- [r.svg](https://github.com/snowytime/iconify/blob/master/src/programming/r.svg)

- [reactjs.svg](https://github.com/snowytime/iconify/blob/master/src/programming/reactjs.svg)

- [redis.svg](https://github.com/snowytime/iconify/blob/master/src/programming/redis.svg)

- [redux.svg](https://github.com/snowytime/iconify/blob/master/src/programming/redux.svg)

- [rust.svg](https://github.com/snowytime/iconify/blob/master/src/programming/rust.svg)

- [sass.svg](https://github.com/snowytime/iconify/blob/master/src/programming/sass.svg)

- [socketio.svg](https://github.com/snowytime/iconify/blob/master/src/programming/socketio.svg)

- [svelte.svg](https://github.com/snowytime/iconify/blob/master/src/programming/svelte.svg)

- [swift.svg](https://github.com/snowytime/iconify/blob/master/src/programming/swift.svg)

- [tailwindcss.svg](https://github.com/snowytime/iconify/blob/master/src/programming/tailwindcss.svg)

- [typescript.svg](https://github.com/snowytime/iconify/blob/master/src/programming/typescript.svg)

- [vue.svg](https://github.com/snowytime/iconify/blob/master/src/programming/vue.svg)

- [webpack.svg](https://github.com/snowytime/iconify/blob/master/src/programming/webpack.svg)

### Ui

#### Animals

- [ant-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ant-filled.svg)

- [ant.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ant.svg)

- [dove-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/dove-filled.svg)

- [dove.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/dove.svg)

- [fish-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/fish-filled.svg)

- [fish.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/fish.svg)

- [ladybug-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ladybug-filled.svg)

- [ladybug.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ladybug.svg)

- [lizzard-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/lizzard-filled.svg)

- [lizzard.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/lizzard.svg)

- [paw-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/paw-filled.svg)

- [paw.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/paw.svg)

- [rabbit-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/rabbit-filled.svg)

- [rabbit.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/rabbit.svg)

- [turtle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/turtle-filled.svg)

- [turtle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/animals/turtle.svg)

#### Bells

- [bell-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-filled.svg)

- [bell-ringing-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ringing-filled.svg)

- [bell-ringing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ringing.svg)

- [bell-slashed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slashed-filled.svg)

- [bell-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slashed.svg)

- [bell.svg](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell.svg)

#### Body

- [brain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/brain.svg)

- [ear-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear-filled.svg)

- [ear.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear.svg)

- [eye-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-filled.svg)

- [eye-lash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-lash.svg)

- [eye-slashed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-slashed-filled.svg)

- [eye-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-slashed.svg)

- [eye.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye.svg)

- [eyes.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/eyes.svg)

- [lips-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips-filled.svg)

- [lips.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips.svg)

- [mustache-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache-filled.svg)

- [mustache.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache.svg)

- [nose-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose-filled.svg)

- [nose.svg](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose.svg)

#### Buildings

- [building-columns.svg](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-columns.svg)

- [building-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-fill.svg)

- [building.svg](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building.svg)

- [buildings-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/buildings-fill.svg)

- [buildings.svg](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/buildings.svg)

#### Clock

- [alarm-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/alarm-fill.svg)

- [alarm.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/alarm.svg)

- [clock-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/clock-fill.svg)

- [clock.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/clock.svg)

- [reel-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/reel-fill.svg)

- [reel.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/reel.svg)

- [stopwatch-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/stopwatch-fill.svg)

- [stopwatch.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/stopwatch.svg)

- [timer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clock/timer.svg)

#### Clothes

- [shirt-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clothes/shirt-fill.svg)

- [shirt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clothes/shirt.svg)

#### Clouds

- [cloud-backwards-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-backwards-filled.svg)

- [cloud-backwards.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-backwards.svg)

- [cloud-checkmark-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-checkmark-filled.svg)

- [cloud-checkmark.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-checkmark.svg)

- [cloud-download-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-download-filled.svg)

- [cloud-download.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-download.svg)

- [cloud-error-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-error-filled.svg)

- [cloud-error.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-error.svg)

- [cloud-forward-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-forward-filled.svg)

- [cloud-forward.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-forward.svg)

- [cloud-key-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-key-filled.svg)

- [cloud-key.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-key.svg)

- [cloud-locked-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-locked-filled.svg)

- [cloud-locked.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-locked.svg)

- [cloud-off-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-off-filled.svg)

- [cloud-off.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-off.svg)

- [cloud-person-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-person-filled.svg)

- [cloud-person.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-person.svg)

- [cloud-upload-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-upload-filled.svg)

- [cloud-upload.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-upload.svg)

- [cloud-warning-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-warning-filled.svg)

- [cloud-warning.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-warning.svg)

- [cloud.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud.svg)

- [could-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/could-filled.svg)

#### Connectivity

- [connected.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connected.svg)

- [connection-off.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connection-off.svg)

- [connection.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connection.svg)

- [transmit-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit-left.svg)

- [transmit-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit-right.svg)

- [transmit.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit.svg)

- [wifi-error.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi-error.svg)

- [wifi-off.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi-off.svg)

- [wifi.svg](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi.svg)

#### Cooking

- [cooktop-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/cooktop-fill.svg)

- [cooktop.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/cooktop.svg)

- [microwave-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/microwave-fill.svg)

- [microwave.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/microwave.svg)

- [oven-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/oven-fill.svg)

- [oven.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/oven.svg)

- [pan-fry-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/pan-fry-fill.svg)

- [pan-fry.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/pan-fry.svg)

- [refrigerator-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/refrigerator-fill.svg)

- [refrigerator.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/refrigerator.svg)

- [sink-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/sink-fill.svg)

- [sink.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/sink.svg)

- [stove-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/stove-fill.svg)

- [stove.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/stove.svg)

#### Cosmic

- [horizon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/horizon-filled.svg)

- [horizon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/horizon.svg)

- [moon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-filled.svg)

- [moon-sparkles-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-sparkles-filled.svg)

- [moon-sparkles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-sparkles.svg)

- [moon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon.svg)

- [sparkles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sparkles.svg)

- [sun-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-filled.svg)

- [sun-rays-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-rays-filled.svg)

- [sun-rays.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-rays.svg)

- [sun.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun.svg)

- [sunrise-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunrise-filled.svg)

- [sunrise.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunrise.svg)

- [sunset-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunset-filled.svg)

- [sunset.svg](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunset.svg)

#### Dashboard

- [barometer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/barometer.svg)

- [gauge.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/gauge.svg)

- [graph-down.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-down.svg)

- [graph-static.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-static.svg)

- [graph-up.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-up.svg)

- [graph.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph.svg)

- [speedometer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/speedometer.svg)

#### Devices

- [camera-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/camera-filled.svg)

- [camera.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/camera.svg)

- [computer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/computer.svg)

- [footprint.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/footprint.svg)

- [globe-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/globe-fill.svg)

- [globe.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/globe.svg)

- [headphones.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/headphones.svg)

- [keyboard-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/keyboard-filled.svg)

- [keyboard.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/keyboard.svg)

- [laptop.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laptop.svg)

- [large-monitor.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/large-monitor.svg)

- [laurel-following.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laurel-following.svg)

- [laurel-leading.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laurel-leading.svg)

- [lifepreserver-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/lifepreserver-fill.svg)

- [lifepreserver.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/lifepreserver.svg)

- [medium-monitor.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/medium-monitor.svg)

- [megaphone-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/megaphone-fill.svg)

- [megaphone.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/megaphone.svg)

- [mouse-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/mouse-filled.svg)

- [mouse.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/mouse.svg)

- [music-mic.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/music-mic.svg)

- [printer-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/printer-filled.svg)

- [printer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/printer.svg)

- [radio-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/radio-fill.svg)

- [radio.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/radio.svg)

- [remote.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/remote.svg)

- [scalemass-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/scalemass-fill.svg)

- [scalemass.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/scalemass.svg)

- [small-monitor.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/small-monitor.svg)

- [smartphone.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/smartphone.svg)

- [smartwatch.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/smartwatch.svg)

- [tablet-landscape.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet-landscape.svg)

- [tablet.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet.svg)

- [video-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-fill.svg)

- [video-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-slash-fill.svg)

- [video-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-slash.svg)

- [video.svg](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video.svg)

#### Editing

- [aspect-ratio.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/aspect-ratio.svg)

- [attachment-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/attachment-alt.svg)

- [attachment.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/attachment.svg)

- [bandage-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/bandage-filled.svg)

- [bandage.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/bandage.svg)

- [brush-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush-filled.svg)

- [brush.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush.svg)

- [circle-half-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-half-left.svg)

- [circle-half-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-half-right.svg)

- [circle-horizontal-line.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-horizontal-line.svg)

- [circle-outline-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-outline-filled.svg)

- [circle-outline.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-outline.svg)

- [crop-flip.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop-flip.svg)

- [crop.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop.svg)

- [eraser-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-filled.svg)

- [eraser-line-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line-filled.svg)

- [eraser-line.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line.svg)

- [eraser.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser.svg)

- [eyedropper-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eyedropper-filled.svg)

- [eyedropper.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eyedropper.svg)

- [flip-x-axis-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-x-axis-filled.svg)

- [flip-x-axis.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-x-axis.svg)

- [flip-y-axis-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-y-axis-filled.svg)

- [flip-y-axis.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-y-axis.svg)

- [highlighter.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/highlighter.svg)

- [horizontal-slider.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/horizontal-slider.svg)

- [lasso-sparkles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso-sparkles.svg)

- [lasso.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso.svg)

- [loupe.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/loupe.svg)

- [mode-3d.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/mode-3d.svg)

- [paintbrush-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush-filled.svg)

- [paintbrush.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush.svg)

- [palette-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette-filled.svg)

- [palette.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette.svg)

- [pen-ruler-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen-ruler-fill.svg)

- [pen-ruler.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen-ruler.svg)

- [pen.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen.svg)

- [pencil-disabled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-disabled.svg)

- [pencil-field.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-field.svg)

- [pencil-line.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-line.svg)

- [pencil-outline.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-outline.svg)

- [pencil-square.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-square.svg)

- [pencil.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil.svg)

- [perspective.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/perspective.svg)

- [rotate-left-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-left-filled.svg)

- [rotate-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-left.svg)

- [rotate-rd.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-rd.svg)

- [rotate-right-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-right-filled.svg)

- [rotate-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-right.svg)

- [ruler-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler-fill.svg)

- [ruler.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler.svg)

- [scale-3d.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scale-3d.svg)

- [scissors.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scissors.svg)

- [scribble-variable.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble-variable.svg)

- [scribble.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble.svg)

- [section-pin.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/section-pin.svg)

- [signature.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/signature.svg)

- [skew.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/skew.svg)

- [square-outline-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline-filled.svg)

- [square-outline.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline.svg)

- [swatch-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch-filled.svg)

- [swatch.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch.svg)

- [timeline-section.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/timeline-section.svg)

- [trapezoid-horizontal-line.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-horizontal-line.svg)

- [trapezoid-vertical-line.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-vertical-line.svg)

- [vertical-slider.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/vertical-slider.svg)

- [wand-rays-inverse.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays-inverse.svg)

- [wand-rays.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays.svg)

- [wand-sparkles-inverse.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles-inverse.svg)

- [wand-sparkles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles.svg)

#### Education

- [backpack-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack-fill.svg)

- [backpack.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack.svg)

- [book-closed-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-closed-fill.svg)

- [book-closed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-closed.svg)

- [book-letter-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter-fill.svg)

- [book-letter.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter.svg)

- [book-lines-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines-fill.svg)

- [book-lines.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines.svg)

- [book-open-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open-fill.svg)

- [book-open.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open.svg)

- [books-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/books-fill.svg)

- [books.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/books.svg)

- [graduation-cap-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap-fill.svg)

- [graduation-cap.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap.svg)

- [magazine-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine-fill.svg)

- [magazine.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine.svg)

- [menu-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu-fill.svg)

- [menu.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu.svg)

- [newspaper-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper-fill.svg)

- [newspaper.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper.svg)

- [poles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/poles.svg)

- [school-desk.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/school-desk.svg)

- [tray-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-fill.svg)

- [tray-full-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-full-fill.svg)

- [tray-full.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-full.svg)

- [tray.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray.svg)

- [trays-stacked-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/trays-stacked-fill.svg)

- [trays-stacked.svg](https://github.com/snowytime/iconify/blob/master/src/ui/education/trays-stacked.svg)

#### Electronics

- [cpu-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/cpu-filled.svg)

- [cpu.svg](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/cpu.svg)

- [database.svg](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/database.svg)

- [memory.svg](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/memory.svg)

#### Entertainment

- [controller-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/controller-filled.svg)

- [controller.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/controller.svg)

- [disk-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/disk-filled.svg)

- [disk.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/disk.svg)

- [film.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/film.svg)

- [laughing-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/laughing-filled.svg)

- [laughing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/laughing.svg)

- [ticket-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/ticket-filled.svg)

- [ticket.svg](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/ticket.svg)

#### Figures

- [figure-archery.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-archery.svg)

- [figure-badminton.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-badminton.svg)

- [figure-barre.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-barre.svg)

- [figure-baseball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-baseball.svg)

- [figure-basketball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-basketball.svg)

- [figure-biking-machine.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-biking-machine.svg)

- [figure-bowling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-bowling.svg)

- [figure-boxing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-boxing.svg)

- [figure-cardio.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cardio.svg)

- [figure-climbing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-climbing.svg)

- [figure-core.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-core.svg)

- [figure-cricket.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cricket.svg)

- [figure-cross-training.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cross-training.svg)

- [figure-curling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-curling.svg)

- [figure-cycling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cycling.svg)

- [figure-dance.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-dance.svg)

- [figure-disc.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-disc.svg)

- [figure-elliptical.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-elliptical.svg)

- [figure-entering.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-entering.svg)

- [figure-falling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-falling.svg)

- [figure-family.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-family.svg)

- [figure-fencing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-fencing.svg)

- [figure-fishing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-fishing.svg)

- [figure-football.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-football.svg)

- [figure-golf.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-golf.svg)

- [figure-gymnastics.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-gymnastics.svg)

- [figure-hand-cycling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hand-cycling.svg)

- [figure-handball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-handball.svg)

- [figure-hiking.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hiking.svg)

- [figure-hockey.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hockey.svg)

- [figure-horse-riding.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-horse-riding.svg)

- [figure-hunting.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hunting.svg)

- [figure-jumprope.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-jumprope.svg)

- [figure-kickboxing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-kickboxing.svg)

- [figure-lacrosse.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-lacrosse.svg)

- [figure-leaving.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-leaving.svg)

- [figure-leg-day.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-leg-day.svg)

- [figure-lifting.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-lifting.svg)

- [figure-martial-arts.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-martial-arts.svg)

- [figure-mind-and-body.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-mind-and-body.svg)

- [figure-open.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-open.svg)

- [figure-parent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-parent.svg)

- [figure-pickleball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-pickleball.svg)

- [figure-play.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-play.svg)

- [figure-raquetball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-raquetball.svg)

- [figure-rolling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rolling.svg)

- [figure-rowing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rowing.svg)

- [figure-rugby-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rugby-alt.svg)

- [figure-rugby.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rugby.svg)

- [figure-running.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-running.svg)

- [figure-sailing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-sailing.svg)

- [figure-sex-separation.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-sex-separation.svg)

- [figure-skateboarding.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skateboarding.svg)

- [figure-skiing-crosscountry.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skiing-crosscountry.svg)

- [figure-skiing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skiing.svg)

- [figure-snowboarding.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-snowboarding.svg)

- [figure-soccer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-soccer.svg)

- [figure-socialdance.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-socialdance.svg)

- [figure-softball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-softball.svg)

- [figure-spacing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-spacing.svg)

- [figure-squash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-squash.svg)

- [figure-stair-stepper.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stair-stepper.svg)

- [figure-stairs.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stairs.svg)

- [figure-step-training.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-step-training.svg)

- [figure-stepping.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stepping.svg)

- [figure-stretching.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stretching.svg)

- [figure-surfing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-surfing.svg)

- [figure-swimming-ocean.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-swimming-ocean.svg)

- [figure-swimming.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-swimming.svg)

- [figure-table-tennis.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-table-tennis.svg)

- [figure-taichi.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-taichi.svg)

- [figure-tennis.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-tennis.svg)

- [figure-together.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-together.svg)

- [figure-track-and-field.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-track-and-field.svg)

- [figure-volleyball.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-volleyball.svg)

- [figure-walking-motion.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-walking-motion.svg)

- [figure-walking.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-walking.svg)

- [figure-water-fitness.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-water-fitness.svg)

- [figure-water-polo.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-water-polo.svg)

- [figure-waving.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-waving.svg)

- [figure-wheelchair-fast.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wheelchair-fast.svg)

- [figure-wheelchair.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wheelchair.svg)

- [figure-wrestling.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wrestling.svg)

- [figure-yoga.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-yoga.svg)

- [figure.pilates.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure.pilates.svg)

- [figure.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure.svg)

- [flexibility.svg](https://github.com/snowytime/iconify/blob/master/src/ui/figures/flexibility.svg)

#### Filesystem

- [clipboard-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard-filled.svg)

- [clipboard.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard.svg)

- [file-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/file-filled.svg)

- [file.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/file.svg)

- [folder-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder-filled.svg)

- [folder.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder.svg)

- [trash-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-filled.svg)

- [trash-slashed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-slashed-filled.svg)

- [trash-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-slashed.svg)

- [trash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash.svg)

#### Flags

- [double-flag-checkered.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag-checkered.svg)

- [double-flag-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag-fill.svg)

- [double-flag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag.svg)

- [flag-checkered.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-checkered.svg)

- [flag-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-fill.svg)

- [flag-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-slash-fill.svg)

- [flag-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-slash.svg)

- [flag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag.svg)

#### Food

- [cake-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/cake-filled.svg)

- [cake.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/cake.svg)

- [carrot-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot-filled.svg)

- [carrot.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot.svg)

- [coffee-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee-filled.svg)

- [coffee.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee.svg)

- [cutlery.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/cutlery.svg)

- [popcorn-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn-fill.svg)

- [popcorn.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn.svg)

- [takeout-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout-filled.svg)

- [takeout.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout.svg)

- [wine-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine-filled.svg)

- [wine.svg](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine.svg)

#### Formatting

- [align-justify.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-justify.svg)

- [align-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-left.svg)

- [align-middle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-middle.svg)

- [align-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-right.svg)

- [bold.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bold.svg)

- [bullet-list-indent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bullet-list-indent.svg)

- [bullet-list.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bullet-list.svg)

- [character-cursor.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-cursor.svg)

- [character-duployan.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-duployan.svg)

- [character-phonetic.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-phonetic.svg)

- [character-sutton.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-sutton.svg)

- [character.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character.svg)

- [dash-list.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/dash-list.svg)

- [decrease-indent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/decrease-indent.svg)

- [decrease-quote-level.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/decrease-quote-level.svg)

- [fleuron-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron-filled.svg)

- [fleuron.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron.svg)

- [increase-indent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/increase-indent.svg)

- [increase-quote-level.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/increase-quote-level.svg)

- [italic.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/italic.svg)

- [justify-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/justify-left.svg)

- [justify-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/justify-right.svg)

- [letter-format-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-format-alt.svg)

- [letter-format.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-format.svg)

- [letter-large.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-large.svg)

- [letter-shadow.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-shadow.svg)

- [letter-small.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-small.svg)

- [letters-lowercase.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letters-lowercase.svg)

- [letters-uppercase.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letters-uppercase.svg)

- [line-spacing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/line-spacing.svg)

- [magnify.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/magnify.svg)

- [number-list.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/number-list.svg)

- [numbers.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbers.svg)

- [numbersign.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbersign.svg)

- [paperclip.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paperclip.svg)

- [paragraph.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paragraph.svg)

- [quote-level.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quote-level.svg)

- [spellcheck.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/spellcheck.svg)

- [star-list.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/star-list.svg)

- [strikethrough.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/strikethrough.svg)

- [subscript.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/subscript.svg)

- [superscript.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/superscript.svg)

- [table.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/table.svg)

- [text-field.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-field.svg)

- [text-formatting.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-formatting.svg)

- [text-redaction.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-redaction.svg)

- [text-size.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-size.svg)

- [triangle-list.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/triangle-list.svg)

- [undeline.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/undeline.svg)

- [word-spacing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/word-spacing.svg)

#### Gestures

- [clapping-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-filled.svg)

- [clapping-sparkles-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-sparkles-filled.svg)

- [clapping-sparkles.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-sparkles.svg)

- [clapping.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping.svg)

- [hand-braile-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile-filled.svg)

- [hand-braile.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile.svg)

- [hand-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-filled.svg)

- [hand-point-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-point-right.svg)

- [hand-pointing-down-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-down-filled.svg)

- [hand-pointing-down.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-down.svg)

- [hand-pointing-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-filled.svg)

- [hand-pointing-left-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-left-filled.svg)

- [hand-pointing-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-left.svg)

- [hand-pointing-right-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-right-filled.svg)

- [hand-pointing-slant-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-slant-filled.svg)

- [hand-pointing-slant.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-slant.svg)

- [hand-pointing.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing.svg)

- [hand-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-slash.svg)

- [hand-slashed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-slashed-filled.svg)

- [hand-spread-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread-filled.svg)

- [hand-spread.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread.svg)

- [hand-swipe-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe-filled.svg)

- [hand-swipe.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe.svg)

- [hand-tap-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap-filled.svg)

- [hand-tap.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap.svg)

- [hand-wave-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave-filled.svg)

- [hand-wave.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave.svg)

- [hand.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand.svg)

- [thumbs-down-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down-filled.svg)

- [thumbs-down.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down.svg)

- [thumbs-up-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up-filled.svg)

- [thumbs-up.svg](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up.svg)

#### Globe

- [america-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/america-fill.svg)

- [america.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/america.svg)

- [asia-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/asia-fill.svg)

- [asia.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/asia.svg)

- [europe-africa-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/europe-africa-fill.svg)

- [europe-africa.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/europe-africa.svg)

- [oceania-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/oceania-fill.svg)

- [oceania.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/oceania.svg)

- [world.svg](https://github.com/snowytime/iconify/blob/master/src/ui/globe/world.svg)

#### Health

- [mask-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask-fill.svg)

- [mask.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask.svg)

- [medical-bag-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag-fill.svg)

- [medical-bag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag.svg)

- [medicine-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine-fill.svg)

- [medicine.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine.svg)

- [pill-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill-fill.svg)

- [pill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill.svg)

- [stethoscope.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/stethoscope.svg)

- [syringe-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe-fill.svg)

- [syringe.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe.svg)

- [test-tubes.svg](https://github.com/snowytime/iconify/blob/master/src/ui/health/test-tubes.svg)

#### Home

- [bath-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/bath-filled.svg)

- [bath.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/bath.svg)

- [bed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed-filled.svg)

- [bed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed.svg)

- [chair-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair-filled.svg)

- [chair.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair.svg)

- [closet-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet-filled.svg)

- [closet.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet.svg)

- [couch-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/couch-filled.svg)

- [couch.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/couch.svg)

- [door-closed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-closed.svg)

- [door-open.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-open.svg)

- [fan-floor-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor-fill.svg)

- [fan-floor.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor.svg)

- [fanblades-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-fill.svg)

- [fanblades-slash-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash-filled.svg)

- [fanblades-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash.svg)

- [fanblades.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades.svg)

- [faucet-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet-filled.svg)

- [faucet.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet.svg)

- [fireplace-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace-filled.svg)

- [fireplace.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace.svg)

- [gift-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/gift-fill.svg)

- [gift.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/gift.svg)

- [lamp-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-fill.svg)

- [lamp.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp.svg)

- [lightbulb-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-filled.svg)

- [lightbulb-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slash-fill.svg)

- [lightbulb-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slashed.svg)

- [lightbulb.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb.svg)

- [shower-alt-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-alt-filled.svg)

- [shower-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-alt.svg)

- [shower-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-filled.svg)

- [shower.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower.svg)

- [sofa-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa-filled.svg)

- [sofa.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa.svg)

- [toilet-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet-filled.svg)

- [toilet.svg](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet.svg)

#### Information

- [info-bubble-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-bubble-filled.svg)

- [info-bubble.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-bubble.svg)

- [info-circle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-circle-filled.svg)

- [info-circle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-circle.svg)

- [info-square-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-square-filled.svg)

- [info-square.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-square.svg)

- [question-bubble-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-bubble-filled.svg)

- [question-bubble.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-bubble.svg)

- [question-circle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-circle-filled.svg)

- [question-circle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-circle.svg)

- [question-diamond-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-diamond-filled.svg)

- [question-diamond.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-diamond.svg)

- [question-sqaure-dashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-sqaure-dashed.svg)

- [question-square-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-square-filled.svg)

- [question-square.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-square.svg)

- [warning-bubble-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-bubble-filled.svg)

- [warning-bubble.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-bubble.svg)

- [warning-circle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-circle-filled.svg)

- [warning-circle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-circle.svg)

- [warning-octagon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-octagon-filled.svg)

- [warning-octagon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-octagon.svg)

- [warning-shield-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-shield-filled.svg)

- [warning-shield.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-shield.svg)

- [warning-square-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-square-filled.svg)

- [warning-square.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-square.svg)

- [warning-triangle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-triangle-filled.svg)

- [warning-triangle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-triangle.svg)

#### Lines

- [arrow-down.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-down.svg)

- [arrow-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-left.svg)

- [arrow-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-right.svg)

- [arrow-up.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-up.svg)

- [checkmark.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/checkmark.svg)

- [chevron-left.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-left.svg)

- [chevron-right.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-right.svg)

- [close.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/close.svg)

- [crosshairs.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/crosshairs.svg)

- [maximize.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/maximize.svg)

- [minimize.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/minimize.svg)

- [not-allowed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/lines/not-allowed.svg)

#### Location

- [location-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-fill.svg)

- [location-pin-circle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin-circle.svg)

- [location-pin-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin-slash.svg)

- [location-pin.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin.svg)

- [location-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-slash-fill.svg)

- [location-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-slash.svg)

- [location.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/location.svg)

- [map-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-fill.svg)

- [map.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/map.svg)

- [pin-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-fill.svg)

- [pin-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash-fill.svg)

- [pin-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash.svg)

- [pin.svg](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin.svg)

#### Misc

- [beach-umbrella-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/beach-umbrella-fill.svg)

- [beach-umbrella.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/beach-umbrella.svg)

- [bolt-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-filled.svg)

- [bolt-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-slash-fill.svg)

- [bolt-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-slash.svg)

- [bolt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt.svg)

- [face-ring-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/face-ring-fill.svg)

- [face-ring.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/face-ring.svg)

- [glasses.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/glasses.svg)

- [hourglass.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/hourglass.svg)

- [layers.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/layers.svg)

- [mail-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/mail-fill.svg)

- [mail.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/mail.svg)

- [message-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/message-fill.svg)

- [message.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/message.svg)

- [photos-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos-alt.svg)

- [photos-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos-fill.svg)

- [photos.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos.svg)

- [piano.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/piano.svg)

- [sent-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/sent-fill.svg)

- [sent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/sent.svg)

- [umbrella-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/umbrella-fill.svg)

- [umbrella.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/umbrella.svg)

- [user-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user-fill.svg)

- [user-sound.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user-sound.svg)

- [user.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user.svg)

- [voice-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/voice-slash.svg)

- [voice.svg](https://github.com/snowytime/iconify/blob/master/src/ui/misc/voice.svg)

#### Nature

- [leaf-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf-filled.svg)

- [leaf.svg](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf.svg)

#### Office

- [archive-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/archive-fill.svg)

- [archive.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/archive.svg)

- [bookmark-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-fill.svg)

- [bookmark-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-slash-fill.svg)

- [bookmark-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-slash.svg)

- [bookmark.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark.svg)

- [briefcase-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/briefcase-fill.svg)

- [briefcase.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/briefcase.svg)

- [calendar.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/calendar.svg)

- [contact-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/contact-fill.svg)

- [contract.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/contract.svg)

- [external-drive-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/external-drive-fill.svg)

- [external-drive.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/external-drive.svg)

- [lanyard-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/lanyard-fill.svg)

- [lanyard.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/lanyard.svg)

- [note-lines.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/note-lines.svg)

- [note.svg](https://github.com/snowytime/iconify/blob/master/src/ui/office/note.svg)

#### Party

- [badge.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/badge.svg)

- [balloon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon-filled.svg)

- [balloon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon.svg)

- [balloons-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons-filled.svg)

- [balloons.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons.svg)

- [crown-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/crown-filled.svg)

- [crown.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/crown.svg)

- [medallion-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/medallion-filled.svg)

- [medallion.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/medallion.svg)

- [party-popper-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/party-popper-filled.svg)

- [party-popper.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/party-popper.svg)

- [trophy-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/trophy-filled.svg)

- [trophy.svg](https://github.com/snowytime/iconify/blob/master/src/ui/party/trophy.svg)

#### Phone

- [microphone-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-filled.svg)

- [microphone-slashed-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-slashed-filled.svg)

- [microphone-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-slashed.svg)

- [microphone.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone.svg)

- [phone-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-filled.svg)

- [phone-in-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-in-filled.svg)

- [phone-in.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-in.svg)

- [phone-out-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-out-filled.svg)

- [phone-out.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-out.svg)

- [phone.svg](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone.svg)

#### Puzzle

- [puzzle-alt-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-alt-filled.svg)

- [puzzle-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-alt.svg)

- [puzzle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-filled.svg)

- [puzzle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle.svg)

#### Security

- [fingerprint.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/fingerprint.svg)

- [key-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/key-filled.svg)

- [key.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/key.svg)

- [lock-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-filled.svg)

- [lock-open-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open-filled.svg)

- [lock-open.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open.svg)

- [lock.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock.svg)

- [shield-checkmark-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-checkmark-filled.svg)

- [shield-checkmark.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-checkmark.svg)

- [shield-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-filled.svg)

- [shield.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield.svg)

- [unverified-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/unverified-filled.svg)

- [unverified.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/unverified.svg)

- [verified-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/verified-filled.svg)

- [verified.svg](https://github.com/snowytime/iconify/blob/master/src/ui/security/verified.svg)

#### Settings

- [gear-alt-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear-alt-filled.svg)

- [gear-alt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear-alt.svg)

- [gear.svg](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear.svg)

- [gears-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gears-fill.svg)

- [gears.svg](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gears.svg)

#### Shapes

- [box-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box-fill.svg)

- [box.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box.svg)

- [circle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle-filled.svg)

- [circle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle.svg)

- [diamond-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond-filled.svg)

- [diamond.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond.svg)

- [heart-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-fill.svg)

- [heart-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash-fill.svg)

- [heart-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash.svg)

- [heart.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart.svg)

- [hexagon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon-filled.svg)

- [hexagon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon.svg)

- [octogon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octogon-filled.svg)

- [octogon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octogon.svg)

- [pentagon-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon-filled.svg)

- [pentagon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon.svg)

- [rhombus-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus-filled.svg)

- [rhombus.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus.svg)

- [seal-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal-filled.svg)

- [seal.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal.svg)

- [square-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square-filled.svg)

- [square.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square.svg)

- [star-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-filled.svg)

- [star-half-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-half-fill.svg)

- [star-slash-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash-fill.svg)

- [star-slash.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash.svg)

- [star.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star.svg)

- [triangle-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triangle-filled.svg)

- [triangle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triangle.svg)

#### Shopping

- [card-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/card-filled.svg)

- [card.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/card.svg)

- [dollar.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/dollar.svg)

- [euro.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/euro.svg)

- [gift-card-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/gift-card-filled.svg)

- [gift-card.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/gift-card.svg)

- [hryvnia.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/hryvnia.svg)

- [pound.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/pound.svg)

- [shopping-bag-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-bag-filled.svg)

- [shopping-bag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-bag.svg)

- [shopping-basket-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-basket-filled.svg)

- [shopping-basket.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-basket.svg)

- [shopping-cart-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-cart-filled.svg)

- [shopping-cart.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-cart.svg)

- [tag-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/tag-filled.svg)

- [tag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/tag.svg)

- [yen.svg](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/yen.svg)

#### Sports

- [oars.svg](https://github.com/snowytime/iconify/blob/master/src/ui/sports/oars.svg)

- [weight-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight-fill.svg)

- [weight.svg](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight.svg)

#### Thermostat

- [thermostat-low.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-low.svg)

- [thermostat-medium.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-medium.svg)

- [thermostat-slashed.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-slashed.svg)

- [thermostat-sun-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-sun-filled.svg)

- [thermostat-sun.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-sun.svg)

- [thermostat.svg](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat.svg)

#### Tools

- [binoculars-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/binoculars-fill.svg)

- [binoculars.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/binoculars.svg)

- [comb-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/comb-fill.svg)

- [comb.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/comb.svg)

- [compass.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/compass.svg)

- [flashlight-off.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-off.svg)

- [flashlight-on.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-on.svg)

- [hammer-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer-filled.svg)

- [hammer.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer.svg)

- [magnifying-glass.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/magnifying-glass.svg)

- [screwdriver-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver-filled.svg)

- [screwdriver.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver.svg)

- [toolbox-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/toolbox-fill.svg)

- [toolbox.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/toolbox.svg)

- [tools-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools-filled.svg)

- [tools.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools.svg)

- [tuning-fork.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tuning-fork.svg)

- [wrench-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench-filled.svg)

- [wrench.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench.svg)

- [zoom-in.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/zoom-in.svg)

- [zoom-out.svg](https://github.com/snowytime/iconify/blob/master/src/ui/tools/zoom-out.svg)

#### Transportation

- [arrival.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/arrival.svg)

- [bike.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bike.svg)

- [bus-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus-filled.svg)

- [bus.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus.svg)

- [car-electric-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric-filled.svg)

- [car-electric.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric.svg)

- [car-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-filled.svg)

- [car.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car.svg)

- [cars-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars-filled.svg)

- [cars.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars.svg)

- [departure.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/departure.svg)

- [double-decker-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/double-decker-filled.svg)

- [double-decker.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/double-decker.svg)

- [ferry-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ferry-filled.svg)

- [ferry.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ferry.svg)

- [gas-pump-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gas-pump-filled.svg)

- [gas-pump.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gas-pump.svg)

- [plane.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/plane.svg)

- [sailboat-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat-filled.svg)

- [sailboat.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat.svg)

- [scooter.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/scooter.svg)

- [ship-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship-filled.svg)

- [ship.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship.svg)

- [shipping-box.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/shipping-box.svg)

- [shopping-box-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/shopping-box-filled.svg)

- [train-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train-filled.svg)

- [train-tunnel.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train-tunnel.svg)

- [train.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train.svg)

- [tram-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram-filled.svg)

- [tram.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram.svg)

- [van-filled.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/van-filled.svg)

- [van.svg](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/van.svg)

#### Travel

- [bag-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/bag-fill.svg)

- [bag.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/bag.svg)

- [suitcase-cart-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart-fill.svg)

- [suitcase-cart.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart.svg)

- [suitcase-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-fill.svg)

- [suitcase.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase.svg)

- [tent-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent-fill.svg)

- [tent.svg](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent.svg)

#### Weather

- [aqi-high.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-high.svg)

- [aqi-low.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-low.svg)

- [aqi-medium.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-medium.svg)

- [carbon-dioxide-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-dioxide-fill.svg)

- [carbon-dioxide.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-dioxide.svg)

- [carbon-monoxide-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-monoxide-fill.svg)

- [carbon-monoxide.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-monoxide.svg)

- [cloud-bolt-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-fill.svg)

- [cloud-bolt-rain-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-rain-fill.svg)

- [cloud-bolt-rain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-rain.svg)

- [cloud-bolt-sun-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-sun-fill.svg)

- [cloud-bolt-sun.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-sun.svg)

- [cloud-bolt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt.svg)

- [cloud-drizzle-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle-fill.svg)

- [cloud-drizzle.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle.svg)

- [cloud-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fill.svg)

- [cloud-fog-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog-fill.svg)

- [cloud-fog.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog.svg)

- [cloud-hail-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail-fill.svg)

- [cloud-hail.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail.svg)

- [cloud-heavy-rain-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain-fill.svg)

- [cloud-heavy-rain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain.svg)

- [cloud-moon-bolt-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-bolt-fill.svg)

- [cloud-moon-bolt.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-bolt.svg)

- [cloud-moon-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-fill.svg)

- [cloud-moon-rain-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain-fill.svg)

- [cloud-moon-rain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain.svg)

- [cloud-moon.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon.svg)

- [cloud-rain-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain-fill.svg)

- [cloud-rain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain.svg)

- [cloud-sleet-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sleet-fill.svg)

- [cloud-sleet.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sleet.svg)

- [cloud-smoke-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke-fill.svg)

- [cloud-smoke.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke.svg)

- [cloud-snow-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow-fill.svg)

- [cloud-snow.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow.svg)

- [cloud-sun-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-fill.svg)

- [cloud-sun-rain-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain-fill.svg)

- [cloud-sun-rain.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain.svg)

- [cloud-sun.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun.svg)

- [cloud.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud.svg)

- [drop-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/drop-fill.svg)

- [drop.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/drop.svg)

- [humidity-fill.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/humidity-fill.svg)

- [humidity.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/humidity.svg)

- [snow.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/snow.svg)

- [tornado.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/tornado.svg)

- [wind-snow.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind-snow.svg)

- [wind.svg](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind.svg)

