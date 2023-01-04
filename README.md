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

- [algeria](https://github.com/snowytime/iconify/blob/master/src/countries/africa/algeria.svg)

- [angola](https://github.com/snowytime/iconify/blob/master/src/countries/africa/angola.svg)

- [benin](https://github.com/snowytime/iconify/blob/master/src/countries/africa/benin.svg)

- [botswana](https://github.com/snowytime/iconify/blob/master/src/countries/africa/botswana.svg)

- [burkina_faso](https://github.com/snowytime/iconify/blob/master/src/countries/africa/burkina_faso.svg)

- [burundi](https://github.com/snowytime/iconify/blob/master/src/countries/africa/burundi.svg)

- [cameroon](https://github.com/snowytime/iconify/blob/master/src/countries/africa/cameroon.svg)

- [canary_islands](https://github.com/snowytime/iconify/blob/master/src/countries/africa/canary_islands.svg)

- [cape_verde](https://github.com/snowytime/iconify/blob/master/src/countries/africa/cape_verde.svg)

- [central_african_republic](https://github.com/snowytime/iconify/blob/master/src/countries/africa/central_african_republic.svg)

- [chad](https://github.com/snowytime/iconify/blob/master/src/countries/africa/chad.svg)

- [comoros](https://github.com/snowytime/iconify/blob/master/src/countries/africa/comoros.svg)

- [congo](https://github.com/snowytime/iconify/blob/master/src/countries/africa/congo.svg)

- [djibouti](https://github.com/snowytime/iconify/blob/master/src/countries/africa/djibouti.svg)

- [egypt](https://github.com/snowytime/iconify/blob/master/src/countries/africa/egypt.svg)

- [equatorial_guinea](https://github.com/snowytime/iconify/blob/master/src/countries/africa/equatorial_guinea.svg)

- [eritrea](https://github.com/snowytime/iconify/blob/master/src/countries/africa/eritrea.svg)

- [eswatini](https://github.com/snowytime/iconify/blob/master/src/countries/africa/eswatini.svg)

- [ethiopia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ethiopia.svg)

- [gabon](https://github.com/snowytime/iconify/blob/master/src/countries/africa/gabon.svg)

- [gambia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/gambia.svg)

- [ghana](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ghana.svg)

- [guinea](https://github.com/snowytime/iconify/blob/master/src/countries/africa/guinea.svg)

- [guinea_bissau](https://github.com/snowytime/iconify/blob/master/src/countries/africa/guinea_bissau.svg)

- [ivory_coast](https://github.com/snowytime/iconify/blob/master/src/countries/africa/ivory_coast.svg)

- [kenya](https://github.com/snowytime/iconify/blob/master/src/countries/africa/kenya.svg)

- [lesotho](https://github.com/snowytime/iconify/blob/master/src/countries/africa/lesotho.svg)

- [liberia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/liberia.svg)

- [libya](https://github.com/snowytime/iconify/blob/master/src/countries/africa/libya.svg)

- [madagascar](https://github.com/snowytime/iconify/blob/master/src/countries/africa/madagascar.svg)

- [malawi](https://github.com/snowytime/iconify/blob/master/src/countries/africa/malawi.svg)

- [mali](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mali.svg)

- [mauritania](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mauritania.svg)

- [mauritus](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mauritus.svg)

- [morocco](https://github.com/snowytime/iconify/blob/master/src/countries/africa/morocco.svg)

- [mozabique](https://github.com/snowytime/iconify/blob/master/src/countries/africa/mozabique.svg)

- [nambia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/nambia.svg)

- [niger](https://github.com/snowytime/iconify/blob/master/src/countries/africa/niger.svg)

- [nigeria](https://github.com/snowytime/iconify/blob/master/src/countries/africa/nigeria.svg)

- [rwanda](https://github.com/snowytime/iconify/blob/master/src/countries/africa/rwanda.svg)

- [sahrawi](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sahrawi.svg)

- [sao_tome_and_principe](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sao_tome_and_principe.svg)

- [senegal](https://github.com/snowytime/iconify/blob/master/src/countries/africa/senegal.svg)

- [seychelles](https://github.com/snowytime/iconify/blob/master/src/countries/africa/seychelles.svg)

- [sierra_leone](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sierra_leone.svg)

- [somalia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/somalia.svg)

- [south_africa](https://github.com/snowytime/iconify/blob/master/src/countries/africa/south_africa.svg)

- [south_sudan](https://github.com/snowytime/iconify/blob/master/src/countries/africa/south_sudan.svg)

- [sudan](https://github.com/snowytime/iconify/blob/master/src/countries/africa/sudan.svg)

- [suriname](https://github.com/snowytime/iconify/blob/master/src/countries/africa/suriname.svg)

- [tanzinia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/tanzinia.svg)

- [togo](https://github.com/snowytime/iconify/blob/master/src/countries/africa/togo.svg)

- [tunesia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/tunesia.svg)

- [uganda](https://github.com/snowytime/iconify/blob/master/src/countries/africa/uganda.svg)

- [zambia](https://github.com/snowytime/iconify/blob/master/src/countries/africa/zambia.svg)

- [zimbabwe](https://github.com/snowytime/iconify/blob/master/src/countries/africa/zimbabwe.svg)

#### Americas

- [anguilla](https://github.com/snowytime/iconify/blob/master/src/countries/americas/anguilla.svg)

- [antigua_and_barbuda](https://github.com/snowytime/iconify/blob/master/src/countries/americas/antigua_and_barbuda.svg)

- [argentina](https://github.com/snowytime/iconify/blob/master/src/countries/americas/argentina.svg)

- [aruba](https://github.com/snowytime/iconify/blob/master/src/countries/americas/aruba.svg)

- [bahamas](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bahamas.svg)

- [barabados](https://github.com/snowytime/iconify/blob/master/src/countries/americas/barabados.svg)

- [belize](https://github.com/snowytime/iconify/blob/master/src/countries/americas/belize.svg)

- [bermuda](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bermuda.svg)

- [boinaire](https://github.com/snowytime/iconify/blob/master/src/countries/americas/boinaire.svg)

- [bolivia](https://github.com/snowytime/iconify/blob/master/src/countries/americas/bolivia.svg)

- [brazil](https://github.com/snowytime/iconify/blob/master/src/countries/americas/brazil.svg)

- [british_virgin_islands](https://github.com/snowytime/iconify/blob/master/src/countries/americas/british_virgin_islands.svg)

- [canada](https://github.com/snowytime/iconify/blob/master/src/countries/americas/canada.svg)

- [cayman_islands](https://github.com/snowytime/iconify/blob/master/src/countries/americas/cayman_islands.svg)

- [chile](https://github.com/snowytime/iconify/blob/master/src/countries/americas/chile.svg)

- [colombia](https://github.com/snowytime/iconify/blob/master/src/countries/americas/colombia.svg)

- [costa_rica](https://github.com/snowytime/iconify/blob/master/src/countries/americas/costa_rica.svg)

- [cuba](https://github.com/snowytime/iconify/blob/master/src/countries/americas/cuba.svg)

- [curaco](https://github.com/snowytime/iconify/blob/master/src/countries/americas/curaco.svg)

- [dominica](https://github.com/snowytime/iconify/blob/master/src/countries/americas/dominica.svg)

- [dominican_republic](https://github.com/snowytime/iconify/blob/master/src/countries/americas/dominican_republic.svg)

- [el_salvador](https://github.com/snowytime/iconify/blob/master/src/countries/americas/el_salvador.svg)

- [equador](https://github.com/snowytime/iconify/blob/master/src/countries/americas/equador.svg)

- [falkland_islands](https://github.com/snowytime/iconify/blob/master/src/countries/americas/falkland_islands.svg)

- [grenada](https://github.com/snowytime/iconify/blob/master/src/countries/americas/grenada.svg)

- [guatemala](https://github.com/snowytime/iconify/blob/master/src/countries/americas/guatemala.svg)

- [haiti](https://github.com/snowytime/iconify/blob/master/src/countries/americas/haiti.svg)

- [hawaii](https://github.com/snowytime/iconify/blob/master/src/countries/americas/hawaii.svg)

- [honduras](https://github.com/snowytime/iconify/blob/master/src/countries/americas/honduras.svg)

- [jamaica](https://github.com/snowytime/iconify/blob/master/src/countries/americas/jamaica.svg)

- [martinique](https://github.com/snowytime/iconify/blob/master/src/countries/americas/martinique.svg)

- [mexico](https://github.com/snowytime/iconify/blob/master/src/countries/americas/mexico.svg)

- [montserrat](https://github.com/snowytime/iconify/blob/master/src/countries/americas/montserrat.svg)

- [nicaragua](https://github.com/snowytime/iconify/blob/master/src/countries/americas/nicaragua.svg)

- [panama](https://github.com/snowytime/iconify/blob/master/src/countries/americas/panama.svg)

- [paraguay](https://github.com/snowytime/iconify/blob/master/src/countries/americas/paraguay.svg)

- [peru](https://github.com/snowytime/iconify/blob/master/src/countries/americas/peru.svg)

- [puerto_rico](https://github.com/snowytime/iconify/blob/master/src/countries/americas/puerto_rico.svg)

- [saba_island](https://github.com/snowytime/iconify/blob/master/src/countries/americas/saba_island.svg)

- [saint_kitts](https://github.com/snowytime/iconify/blob/master/src/countries/americas/saint_kitts.svg)

- [sint_eustatius](https://github.com/snowytime/iconify/blob/master/src/countries/americas/sint_eustatius.svg)

- [sint_maarten](https://github.com/snowytime/iconify/blob/master/src/countries/americas/sint_maarten.svg)

- [st_barts](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_barts.svg)

- [st_lucia](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_lucia.svg)

- [st_vincents](https://github.com/snowytime/iconify/blob/master/src/countries/americas/st_vincents.svg)

- [trinidad](https://github.com/snowytime/iconify/blob/master/src/countries/americas/trinidad.svg)

- [turks_and_caikos](https://github.com/snowytime/iconify/blob/master/src/countries/americas/turks_and_caikos.svg)

- [united_states](https://github.com/snowytime/iconify/blob/master/src/countries/americas/united_states.svg)

- [uruguay](https://github.com/snowytime/iconify/blob/master/src/countries/americas/uruguay.svg)

- [us_virgin_islands](https://github.com/snowytime/iconify/blob/master/src/countries/americas/us_virgin_islands.svg)

- [venezuela](https://github.com/snowytime/iconify/blob/master/src/countries/americas/venezuela.svg)

#### Asia

- [abkhazia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/abkhazia.svg)

- [armenia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/armenia.svg)

- [azerbaijan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/azerbaijan.svg)

- [bangladesh](https://github.com/snowytime/iconify/blob/master/src/countries/asia/bangladesh.svg)

- [bhutan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/bhutan.svg)

- [brunei](https://github.com/snowytime/iconify/blob/master/src/countries/asia/brunei.svg)

- [cambodia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/cambodia.svg)

- [china](https://github.com/snowytime/iconify/blob/master/src/countries/asia/china.svg)

- [east_timor](https://github.com/snowytime/iconify/blob/master/src/countries/asia/east_timor.svg)

- [hong_kong](https://github.com/snowytime/iconify/blob/master/src/countries/asia/hong_kong.svg)

- [india](https://github.com/snowytime/iconify/blob/master/src/countries/asia/india.svg)

- [indonesia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/indonesia.svg)

- [japan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/japan.svg)

- [kazakhstan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/kazakhstan.svg)

- [kyrgistan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/kyrgistan.svg)

- [laos](https://github.com/snowytime/iconify/blob/master/src/countries/asia/laos.svg)

- [macao](https://github.com/snowytime/iconify/blob/master/src/countries/asia/macao.svg)

- [malaysia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/malaysia.svg)

- [maldives-1](https://github.com/snowytime/iconify/blob/master/src/countries/asia/maldives-1.svg)

- [maldives](https://github.com/snowytime/iconify/blob/master/src/countries/asia/maldives.svg)

- [mongolia](https://github.com/snowytime/iconify/blob/master/src/countries/asia/mongolia.svg)

- [myanmar](https://github.com/snowytime/iconify/blob/master/src/countries/asia/myanmar.svg)

- [nepal](https://github.com/snowytime/iconify/blob/master/src/countries/asia/nepal.svg)

- [north_korea](https://github.com/snowytime/iconify/blob/master/src/countries/asia/north_korea.svg)

- [pakistan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/pakistan.svg)

- [philippines](https://github.com/snowytime/iconify/blob/master/src/countries/asia/philippines.svg)

- [singapore](https://github.com/snowytime/iconify/blob/master/src/countries/asia/singapore.svg)

- [south_korea](https://github.com/snowytime/iconify/blob/master/src/countries/asia/south_korea.svg)

- [sri_lanka](https://github.com/snowytime/iconify/blob/master/src/countries/asia/sri_lanka.svg)

- [taiwan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/taiwan.svg)

- [tajikistan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/tajikistan.svg)

- [thailand](https://github.com/snowytime/iconify/blob/master/src/countries/asia/thailand.svg)

- [tibet](https://github.com/snowytime/iconify/blob/master/src/countries/asia/tibet.svg)

- [turkey](https://github.com/snowytime/iconify/blob/master/src/countries/asia/turkey.svg)

- [turkministan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/turkministan.svg)

- [uzbekistan](https://github.com/snowytime/iconify/blob/master/src/countries/asia/uzbekistan.svg)

- [vietnam](https://github.com/snowytime/iconify/blob/master/src/countries/asia/vietnam.svg)

#### Europe

- [aaland_islands](https://github.com/snowytime/iconify/blob/master/src/countries/europe/aaland_islands.svg)

- [albania](https://github.com/snowytime/iconify/blob/master/src/countries/europe/albania.svg)

- [andorra](https://github.com/snowytime/iconify/blob/master/src/countries/europe/andorra.svg)

- [austria](https://github.com/snowytime/iconify/blob/master/src/countries/europe/austria.svg)

- [azores_island](https://github.com/snowytime/iconify/blob/master/src/countries/europe/azores_island.svg)

- [balearic_islands](https://github.com/snowytime/iconify/blob/master/src/countries/europe/balearic_islands.svg)

- [base](https://github.com/snowytime/iconify/blob/master/src/countries/europe/base.svg)

- [basque](https://github.com/snowytime/iconify/blob/master/src/countries/europe/basque.svg)

- [belarus](https://github.com/snowytime/iconify/blob/master/src/countries/europe/belarus.svg)

- [belgium](https://github.com/snowytime/iconify/blob/master/src/countries/europe/belgium.svg)

- [bosnia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/bosnia.svg)

- [bulgaria](https://github.com/snowytime/iconify/blob/master/src/countries/europe/bulgaria.svg)

- [ceuta](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ceuta.svg)

- [corsica](https://github.com/snowytime/iconify/blob/master/src/countries/europe/corsica.svg)

- [croatia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/croatia.svg)

- [cyprus](https://github.com/snowytime/iconify/blob/master/src/countries/europe/cyprus.svg)

- [czech_republic](https://github.com/snowytime/iconify/blob/master/src/countries/europe/czech_republic.svg)

- [denmark](https://github.com/snowytime/iconify/blob/master/src/countries/europe/denmark.svg)

- [england](https://github.com/snowytime/iconify/blob/master/src/countries/europe/england.svg)

- [estonia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/estonia.svg)

- [european_union](https://github.com/snowytime/iconify/blob/master/src/countries/europe/european_union.svg)

- [faroe_islands](https://github.com/snowytime/iconify/blob/master/src/countries/europe/faroe_islands.svg)

- [finland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/finland.svg)

- [france](https://github.com/snowytime/iconify/blob/master/src/countries/europe/france.svg)

- [georgia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/georgia.svg)

- [germany](https://github.com/snowytime/iconify/blob/master/src/countries/europe/germany.svg)

- [gibraltar](https://github.com/snowytime/iconify/blob/master/src/countries/europe/gibraltar.svg)

- [greece](https://github.com/snowytime/iconify/blob/master/src/countries/europe/greece.svg)

- [greenland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/greenland.svg)

- [gurnsey](https://github.com/snowytime/iconify/blob/master/src/countries/europe/gurnsey.svg)

- [hungary](https://github.com/snowytime/iconify/blob/master/src/countries/europe/hungary.svg)

- [iceland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/iceland.svg)

- [ireland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ireland.svg)

- [isle_of_man](https://github.com/snowytime/iconify/blob/master/src/countries/europe/isle_of_man.svg)

- [italy](https://github.com/snowytime/iconify/blob/master/src/countries/europe/italy.svg)

- [jersey](https://github.com/snowytime/iconify/blob/master/src/countries/europe/jersey.svg)

- [kosovo](https://github.com/snowytime/iconify/blob/master/src/countries/europe/kosovo.svg)

- [latvia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/latvia.svg)

- [liechtenstein](https://github.com/snowytime/iconify/blob/master/src/countries/europe/liechtenstein.svg)

- [lithuania](https://github.com/snowytime/iconify/blob/master/src/countries/europe/lithuania.svg)

- [luxembourg](https://github.com/snowytime/iconify/blob/master/src/countries/europe/luxembourg.svg)

- [madeira](https://github.com/snowytime/iconify/blob/master/src/countries/europe/madeira.svg)

- [malta](https://github.com/snowytime/iconify/blob/master/src/countries/europe/malta.svg)

- [melilla](https://github.com/snowytime/iconify/blob/master/src/countries/europe/melilla.svg)

- [moldova](https://github.com/snowytime/iconify/blob/master/src/countries/europe/moldova.svg)

- [monaco](https://github.com/snowytime/iconify/blob/master/src/countries/europe/monaco.svg)

- [montenegro](https://github.com/snowytime/iconify/blob/master/src/countries/europe/montenegro.svg)

- [nato](https://github.com/snowytime/iconify/blob/master/src/countries/europe/nato.svg)

- [netherlands](https://github.com/snowytime/iconify/blob/master/src/countries/europe/netherlands.svg)

- [north_cyprus](https://github.com/snowytime/iconify/blob/master/src/countries/europe/north_cyprus.svg)

- [north_macedonia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/north_macedonia.svg)

- [norway](https://github.com/snowytime/iconify/blob/master/src/countries/europe/norway.svg)

- [ossetia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ossetia.svg)

- [poland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/poland.svg)

- [portugal](https://github.com/snowytime/iconify/blob/master/src/countries/europe/portugal.svg)

- [romania](https://github.com/snowytime/iconify/blob/master/src/countries/europe/romania.svg)

- [russia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/russia.svg)

- [san_marino](https://github.com/snowytime/iconify/blob/master/src/countries/europe/san_marino.svg)

- [sardinia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sardinia.svg)

- [scotland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/scotland.svg)

- [serbia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/serbia.svg)

- [sicily](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sicily.svg)

- [slovakia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/slovakia.svg)

- [slovenia](https://github.com/snowytime/iconify/blob/master/src/countries/europe/slovenia.svg)

- [spain](https://github.com/snowytime/iconify/blob/master/src/countries/europe/spain.svg)

- [sweden](https://github.com/snowytime/iconify/blob/master/src/countries/europe/sweden.svg)

- [switzerland](https://github.com/snowytime/iconify/blob/master/src/countries/europe/switzerland.svg)

- [transnistria](https://github.com/snowytime/iconify/blob/master/src/countries/europe/transnistria.svg)

- [ukraine](https://github.com/snowytime/iconify/blob/master/src/countries/europe/ukraine.svg)

- [united_kingdom](https://github.com/snowytime/iconify/blob/master/src/countries/europe/united_kingdom.svg)

- [vatican_city](https://github.com/snowytime/iconify/blob/master/src/countries/europe/vatican_city.svg)

- [wales](https://github.com/snowytime/iconify/blob/master/src/countries/europe/wales.svg)

#### Middle_east

- [afghanistan](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/afghanistan.svg)

- [bahrain](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/bahrain.svg)

- [iran](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/iran.svg)

- [iraq](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/iraq.svg)

- [israel](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/israel.svg)

- [jordan](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/jordan.svg)

- [kuwait](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/kuwait.svg)

- [lebanon](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/lebanon.svg)

- [oman](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/oman.svg)

- [palestine](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/palestine.svg)

- [qatar](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/qatar.svg)

- [saudi_arabia](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/saudi_arabia.svg)

- [syria](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/syria.svg)

- [united_arab_emirates](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/united_arab_emirates.svg)

- [yemen](https://github.com/snowytime/iconify/blob/master/src/countries/middle_east/yemen.svg)

#### Oceania

- [american_samoa](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/american_samoa.svg)

- [australia](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/australia.svg)

- [british_indian_ocean_territory](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/british_indian_ocean_territory.svg)

- [christmas_island](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/christmas_island.svg)

- [cook_islands](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/cook_islands.svg)

- [fiji](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/fiji.svg)

- [french_polynesia](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/french_polynesia.svg)

- [guam](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/guam.svg)

- [kiribati](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/kiribati.svg)

- [marshall_islands](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/marshall_islands.svg)

- [micronesia](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/micronesia.svg)

- [naru](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/naru.svg)

- [new_zealand](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/new_zealand.svg)

- [niue](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/niue.svg)

- [northern_mariana_islands](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/northern_mariana_islands.svg)

- [palau](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/palau.svg)

- [papa_new_guinea](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/papa_new_guinea.svg)

- [picairn_islands](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/picairn_islands.svg)

- [solomon_islands](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/solomon_islands.svg)

- [tokelau](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tokelau.svg)

- [tonga](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tonga.svg)

- [tuvalu](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/tuvalu.svg)

- [vanuatu](https://github.com/snowytime/iconify/blob/master/src/countries/oceania/vanuatu.svg)

### Credit

- [affirm](https://github.com/snowytime/iconify/blob/master/src/credit/affirm.svg)

- [amex](https://github.com/snowytime/iconify/blob/master/src/credit/amex.svg)

- [apple-pay](https://github.com/snowytime/iconify/blob/master/src/credit/apple-pay.svg)

- [bank](https://github.com/snowytime/iconify/blob/master/src/credit/bank.svg)

- [bitcoin](https://github.com/snowytime/iconify/blob/master/src/credit/bitcoin.svg)

- [discover](https://github.com/snowytime/iconify/blob/master/src/credit/discover.svg)

- [elective](https://github.com/snowytime/iconify/blob/master/src/credit/elective.svg)

- [interac](https://github.com/snowytime/iconify/blob/master/src/credit/interac.svg)

- [maestro](https://github.com/snowytime/iconify/blob/master/src/credit/maestro.svg)

- [mastercard](https://github.com/snowytime/iconify/blob/master/src/credit/mastercard.svg)

- [paypal](https://github.com/snowytime/iconify/blob/master/src/credit/paypal.svg)

- [visa](https://github.com/snowytime/iconify/blob/master/src/credit/visa.svg)

### Programming

- [android](https://github.com/snowytime/iconify/blob/master/src/programming/android.svg)

- [apple](https://github.com/snowytime/iconify/blob/master/src/programming/apple.svg)

- [babel](https://github.com/snowytime/iconify/blob/master/src/programming/babel.svg)

- [c](https://github.com/snowytime/iconify/blob/master/src/programming/c.svg)

- [c_plus_plus](https://github.com/snowytime/iconify/blob/master/src/programming/c_plus_plus.svg)

- [code_sandbox](https://github.com/snowytime/iconify/blob/master/src/programming/code_sandbox.svg)

- [codepen](https://github.com/snowytime/iconify/blob/master/src/programming/codepen.svg)

- [csharp](https://github.com/snowytime/iconify/blob/master/src/programming/csharp.svg)

- [docker](https://github.com/snowytime/iconify/blob/master/src/programming/docker.svg)

- [eslint](https://github.com/snowytime/iconify/blob/master/src/programming/eslint.svg)

- [express](https://github.com/snowytime/iconify/blob/master/src/programming/express.svg)

- [git](https://github.com/snowytime/iconify/blob/master/src/programming/git.svg)

- [github](https://github.com/snowytime/iconify/blob/master/src/programming/github.svg)

- [golang](https://github.com/snowytime/iconify/blob/master/src/programming/golang.svg)

- [google_cloud](https://github.com/snowytime/iconify/blob/master/src/programming/google_cloud.svg)

- [graphql](https://github.com/snowytime/iconify/blob/master/src/programming/graphql.svg)

- [haskell](https://github.com/snowytime/iconify/blob/master/src/programming/haskell.svg)

- [html](https://github.com/snowytime/iconify/blob/master/src/programming/html.svg)

- [hugo](https://github.com/snowytime/iconify/blob/master/src/programming/hugo.svg)

- [illustrator](https://github.com/snowytime/iconify/blob/master/src/programming/illustrator.svg)

- [jamstack](https://github.com/snowytime/iconify/blob/master/src/programming/jamstack.svg)

- [java](https://github.com/snowytime/iconify/blob/master/src/programming/java.svg)

- [javascript](https://github.com/snowytime/iconify/blob/master/src/programming/javascript.svg)

- [jest](https://github.com/snowytime/iconify/blob/master/src/programming/jest.svg)

- [julia](https://github.com/snowytime/iconify/blob/master/src/programming/julia.svg)

- [kotlin](https://github.com/snowytime/iconify/blob/master/src/programming/kotlin.svg)

- [latex](https://github.com/snowytime/iconify/blob/master/src/programming/latex.svg)

- [markdown](https://github.com/snowytime/iconify/blob/master/src/programming/markdown.svg)

- [mongodb](https://github.com/snowytime/iconify/blob/master/src/programming/mongodb.svg)

- [nestjs](https://github.com/snowytime/iconify/blob/master/src/programming/nestjs.svg)

- [nextjs](https://github.com/snowytime/iconify/blob/master/src/programming/nextjs.svg)

- [nodejs](https://github.com/snowytime/iconify/blob/master/src/programming/nodejs.svg)

- [npm](https://github.com/snowytime/iconify/blob/master/src/programming/npm.svg)

- [nuxt](https://github.com/snowytime/iconify/blob/master/src/programming/nuxt.svg)

- [photoshop](https://github.com/snowytime/iconify/blob/master/src/programming/photoshop.svg)

- [postgres](https://github.com/snowytime/iconify/blob/master/src/programming/postgres.svg)

- [r](https://github.com/snowytime/iconify/blob/master/src/programming/r.svg)

- [reactjs](https://github.com/snowytime/iconify/blob/master/src/programming/reactjs.svg)

- [redis](https://github.com/snowytime/iconify/blob/master/src/programming/redis.svg)

- [redux](https://github.com/snowytime/iconify/blob/master/src/programming/redux.svg)

- [rust](https://github.com/snowytime/iconify/blob/master/src/programming/rust.svg)

- [sass](https://github.com/snowytime/iconify/blob/master/src/programming/sass.svg)

- [socketio](https://github.com/snowytime/iconify/blob/master/src/programming/socketio.svg)

- [svelte](https://github.com/snowytime/iconify/blob/master/src/programming/svelte.svg)

- [swc](https://github.com/snowytime/iconify/blob/master/src/programming/swc.svg)

- [swift](https://github.com/snowytime/iconify/blob/master/src/programming/swift.svg)

- [tailwindcss](https://github.com/snowytime/iconify/blob/master/src/programming/tailwindcss.svg)

- [typescript](https://github.com/snowytime/iconify/blob/master/src/programming/typescript.svg)

- [vue](https://github.com/snowytime/iconify/blob/master/src/programming/vue.svg)

- [webpack](https://github.com/snowytime/iconify/blob/master/src/programming/webpack.svg)

### Ui

#### Activity

- [figure-american-football](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-american-football.svg)

- [figure-archery](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-archery.svg)

- [figure-australian-football](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-australian-football.svg)

- [figure-badminton](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-badminton.svg)

- [figure-balance](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-balance.svg)

- [figure-barre](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-barre.svg)

- [figure-baseball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-baseball.svg)

- [figure-basketball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-basketball.svg)

- [figure-bowling](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-bowling.svg)

- [figure-boxing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-boxing.svg)

- [figure-climbing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-climbing.svg)

- [figure-cooldown](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-cooldown.svg)

- [figure-core](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-core.svg)

- [figure-cricket](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-cricket.svg)

- [figure-cross-training](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-cross-training.svg)

- [figure-crosscountry-ski](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-crosscountry-ski.svg)

- [figure-curling](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-curling.svg)

- [figure-cycling](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-cycling.svg)

- [figure-dancing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-dancing.svg)

- [figure-disc-sports](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-disc-sports.svg)

- [figure-downhill-ski](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-downhill-ski.svg)

- [figure-elliptical](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-elliptical.svg)

- [figure-equestrian-sports](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-equestrian-sports.svg)

- [figure-fencing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-fencing.svg)

- [figure-fishing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-fishing.svg)

- [figure-flexibility](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-flexibility.svg)

- [figure-golf](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-golf.svg)

- [figure-gymnastics](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-gymnastics.svg)

- [figure-hand-cycling](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-hand-cycling.svg)

- [figure-handball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-handball.svg)

- [figure-hiking](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-hiking.svg)

- [figure-hockey](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-hockey.svg)

- [figure-indoor-cycle](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-indoor-cycle.svg)

- [figure-intensity-training](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-intensity-training.svg)

- [figure-jumprope](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-jumprope.svg)

- [figure-kickboxing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-kickboxing.svg)

- [figure-lacrosse](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-lacrosse.svg)

- [figure-martial-arts](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-martial-arts.svg)

- [figure-meditation](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-meditation.svg)

- [figure-mixed-cardio](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-mixed-cardio.svg)

- [figure-monkeying](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-monkeying.svg)

- [figure-outdoor-swim](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-outdoor-swim.svg)

- [figure-pickleball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-pickleball.svg)

- [figure-pilates](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-pilates.svg)

- [figure-raquet-ball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-raquet-ball.svg)

- [figure-roller](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-roller.svg)

- [figure-rowing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-rowing.svg)

- [figure-rugby](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-rugby.svg)

- [figure-running](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-running.svg)

- [figure-sailing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-sailing.svg)

- [figure-shooting](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-shooting.svg)

- [figure-skateboard](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-skateboard.svg)

- [figure-snowboarding](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-snowboarding.svg)

- [figure-soccer](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-soccer.svg)

- [figure-softball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-softball.svg)

- [figure-squash](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-squash.svg)

- [figure-stairs](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-stairs.svg)

- [figure-step-training](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-step-training.svg)

- [figure-stepper](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-stepper.svg)

- [figure-strength-training](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-strength-training.svg)

- [figure-surfing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-surfing.svg)

- [figure-swim](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-swim.svg)

- [figure-tabletennis](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-tabletennis.svg)

- [figure-tango](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-tango.svg)

- [figure-tennis](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-tennis.svg)

- [figure-track-field](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-track-field.svg)

- [figure-volleyball](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-volleyball.svg)

- [figure-walking](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-walking.svg)

- [figure-water-fitness](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-water-fitness.svg)

- [figure-water-polo](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-water-polo.svg)

- [figure-weightlifting](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-weightlifting.svg)

- [figure-wheelchair-racing](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-wheelchair-racing.svg)

- [figure-wheelchair](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-wheelchair.svg)

- [figure-wrestling](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-wrestling.svg)

- [figure-yoga](https://github.com/snowytime/iconify/blob/master/src/ui/activity/figure-yoga.svg)

#### Alerts

- [exclamation-bubble-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-bubble-fill.svg)

- [exclamation-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-bubble.svg)

- [exclamation-circle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-circle-fill.svg)

- [exclamation-circle](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-circle.svg)

- [exclamation-octagon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-octagon-fill.svg)

- [exclamation-octagon](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-octagon.svg)

- [exclamation-shield-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-shield-fill.svg)

- [exclamation-shield](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-shield.svg)

- [exclamation-square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-square-fill.svg)

- [exclamation-square](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-square.svg)

- [exclamation-triangle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-triangle-fill.svg)

- [exclamation-triangle](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/exclamation-triangle.svg)

- [info-bubble-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-bubble-fill.svg)

- [info-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-bubble.svg)

- [info-circle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-circle-fill.svg)

- [info-circle](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-circle.svg)

- [info-square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-square-fill.svg)

- [info-square](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/info-square.svg)

- [question-bubble-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-bubble-fill.svg)

- [question-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-bubble.svg)

- [question-circle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-circle-fill.svg)

- [question-circle](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-circle.svg)

- [question-diamond-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-diamond-fill.svg)

- [question-diamond](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-diamond.svg)

- [question-square-dashed](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-square-dashed.svg)

- [question-square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-square-fill.svg)

- [question-square](https://github.com/snowytime/iconify/blob/master/src/ui/alerts/question-square.svg)

#### Alignment

- [horizontal-align-center-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-center-fill.svg)

- [horizontal-align-center](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-center.svg)

- [horizontal-align-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-left-fill.svg)

- [horizontal-align-left](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-left.svg)

- [horizontal-align-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-right-fill.svg)

- [horizontal-align-right](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/horizontal-align-right.svg)

- [vertical-align-top-center-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top-center-fill.svg)

- [vertical-align-top-center](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top-center.svg)

- [vertical-align-top-end-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top-end-fill.svg)

- [vertical-align-top-end](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top-end.svg)

- [vertical-align-top-fill](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top-fill.svg)

- [vertical-align-top](https://github.com/snowytime/iconify/blob/master/src/ui/alignment/vertical-align-top.svg)

#### Appliances

- [cooktop-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/cooktop-fill.svg)

- [cooktop](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/cooktop.svg)

- [dishwasher-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/dishwasher-fill.svg)

- [dishwasher](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/dishwasher.svg)

- [dryer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/dryer-fill.svg)

- [dryer](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/dryer.svg)

- [microwave-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/microwave-fill.svg)

- [microwave](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/microwave.svg)

- [oven-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/oven-fill.svg)

- [oven](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/oven.svg)

- [pan-fry-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/pan-fry-fill.svg)

- [pan-fry](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/pan-fry.svg)

- [refrigerator-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/refrigerator-fill.svg)

- [refrigerator](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/refrigerator.svg)

- [sink-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/sink-fill.svg)

- [sink](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/sink.svg)

- [stove-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/stove-fill.svg)

- [stove](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/stove.svg)

- [washer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/washer-fill.svg)

- [washer](https://github.com/snowytime/iconify/blob/master/src/ui/appliances/washer.svg)

#### Bells

- [bell-fill](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-fill.svg)

- [bell-ring-fill](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ring-fill.svg)

- [bell-ring](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ring.svg)

- [bell-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slash-fill.svg)

- [bell-slash](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slash.svg)

- [bell](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell.svg)

#### Body

- [brain](https://github.com/snowytime/iconify/blob/master/src/ui/body/brain.svg)

- [comb-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/comb-fill.svg)

- [comb](https://github.com/snowytime/iconify/blob/master/src/ui/body/comb.svg)

- [ear-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear-fill.svg)

- [ear](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear.svg)

- [eyebrow](https://github.com/snowytime/iconify/blob/master/src/ui/body/eyebrow.svg)

- [eyes](https://github.com/snowytime/iconify/blob/master/src/ui/body/eyes.svg)

- [head-brain](https://github.com/snowytime/iconify/blob/master/src/ui/body/head-brain.svg)

- [hearing-aid-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/hearing-aid-fill.svg)

- [hearing-aid](https://github.com/snowytime/iconify/blob/master/src/ui/body/hearing-aid.svg)

- [lips-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips-fill.svg)

- [lips](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips.svg)

- [lungs-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/lungs-fill.svg)

- [lungs](https://github.com/snowytime/iconify/blob/master/src/ui/body/lungs.svg)

- [mustache-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache-fill.svg)

- [mustache](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache.svg)

- [nose-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose-fill.svg)

- [nose](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose.svg)

- [shirt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/body/shirt-fill.svg)

- [shirt](https://github.com/snowytime/iconify/blob/master/src/ui/body/shirt.svg)

- [steps](https://github.com/snowytime/iconify/blob/master/src/ui/body/steps.svg)

#### Buildings

- [building-column-fill](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-column-fill.svg)

- [building-column](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-column.svg)

- [building-fill](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-fill.svg)

- [building-large-fill](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-large-fill.svg)

- [building-large](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-large.svg)

- [building](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building.svg)

#### Camera

- [camera-fill](https://github.com/snowytime/iconify/blob/master/src/ui/camera/camera-fill.svg)

- [camera-flip-fill](https://github.com/snowytime/iconify/blob/master/src/ui/camera/camera-flip-fill.svg)

- [camera-flip](https://github.com/snowytime/iconify/blob/master/src/ui/camera/camera-flip.svg)

- [camera](https://github.com/snowytime/iconify/blob/master/src/ui/camera/camera.svg)

- [videocamera-fill](https://github.com/snowytime/iconify/blob/master/src/ui/camera/videocamera-fill.svg)

- [videocamera-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/camera/videocamera-slash-fill.svg)

- [videocamera-slash](https://github.com/snowytime/iconify/blob/master/src/ui/camera/videocamera-slash.svg)

- [videocamera](https://github.com/snowytime/iconify/blob/master/src/ui/camera/videocamera.svg)

#### Commerce

- [cash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/cash-fill.svg)

- [cash](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/cash.svg)

- [credit-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/credit-card-fill.svg)

- [credit-card](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/credit-card.svg)

- [gift-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/gift-card-fill.svg)

- [gift-card](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/gift-card.svg)

- [pass-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/pass-fill.svg)

- [pass](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/pass.svg)

- [shopping-bag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-bag-fill.svg)

- [shopping-bag](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-bag.svg)

- [shopping-basket-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-basket-fill.svg)

- [shopping-basket](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-basket.svg)

- [shopping-cart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-cart-fill.svg)

- [shopping-cart](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/shopping-cart.svg)

- [tag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/tag-fill.svg)

- [tag-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/tag-slash-fill.svg)

- [tag-slash](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/tag-slash.svg)

- [tag](https://github.com/snowytime/iconify/blob/master/src/ui/commerce/tag.svg)

#### Competition

- [crown-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/crown-fill.svg)

- [crown](https://github.com/snowytime/iconify/blob/master/src/ui/competition/crown.svg)

- [flag-checkered](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flag-checkered.svg)

- [flag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flag-fill.svg)

- [flag-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flag-slash-fill.svg)

- [flag-slash](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flag-slash.svg)

- [flag](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flag.svg)

- [flags-checkered](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flags-checkered.svg)

- [flags-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flags-fill.svg)

- [flags-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flags-left-fill.svg)

- [flags-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flags-right-fill.svg)

- [flags](https://github.com/snowytime/iconify/blob/master/src/ui/competition/flags.svg)

- [medal-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/medal-fill.svg)

- [medal](https://github.com/snowytime/iconify/blob/master/src/ui/competition/medal.svg)

- [medallion](https://github.com/snowytime/iconify/blob/master/src/ui/competition/medallion.svg)

- [trophy-fill](https://github.com/snowytime/iconify/blob/master/src/ui/competition/trophy-fill.svg)

- [trophy](https://github.com/snowytime/iconify/blob/master/src/ui/competition/trophy.svg)

#### Components

- [cd-drive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/cd-drive-fill.svg)

- [cd-drive](https://github.com/snowytime/iconify/blob/master/src/ui/components/cd-drive.svg)

- [cpu-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/cpu-fill.svg)

- [cpu](https://github.com/snowytime/iconify/blob/master/src/ui/components/cpu.svg)

- [database-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/database-fill.svg)

- [database](https://github.com/snowytime/iconify/blob/master/src/ui/components/database.svg)

- [disc-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/disc-fill.svg)

- [disc](https://github.com/snowytime/iconify/blob/master/src/ui/components/disc.svg)

- [esim-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/esim-fill.svg)

- [esim](https://github.com/snowytime/iconify/blob/master/src/ui/components/esim.svg)

- [external-drive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/external-drive-fill.svg)

- [external-drive](https://github.com/snowytime/iconify/blob/master/src/ui/components/external-drive.svg)

- [internal-drive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/internal-drive-fill.svg)

- [internal-drive](https://github.com/snowytime/iconify/blob/master/src/ui/components/internal-drive.svg)

- [memory-chip-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/memory-chip-fill.svg)

- [memory-chip](https://github.com/snowytime/iconify/blob/master/src/ui/components/memory-chip.svg)

- [sd-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/sd-card-fill.svg)

- [sd-card](https://github.com/snowytime/iconify/blob/master/src/ui/components/sd-card.svg)

- [sim-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/components/sim-card-fill.svg)

- [sim-card](https://github.com/snowytime/iconify/blob/master/src/ui/components/sim-card.svg)

#### Connectivity

- [ecloud-checkmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-checkmark-fill.svg)

- [ecloud-checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-checkmark.svg)

- [ecloud-download-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-download-fill.svg)

- [ecloud-download](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-download.svg)

- [ecloud-exclamation-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-exclamation-fill.svg)

- [ecloud-exclamation](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-exclamation.svg)

- [ecloud-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-fill.svg)

- [ecloud-key-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-key-fill.svg)

- [ecloud-key](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-key.svg)

- [ecloud-lock-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-lock-fill.svg)

- [ecloud-lock](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-lock.svg)

- [ecloud-refresh-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-refresh-left-fill.svg)

- [ecloud-refresh-left](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-refresh-left.svg)

- [ecloud-refresh-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-refresh-right-fill.svg)

- [ecloud-refresh-right](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-refresh-right.svg)

- [ecloud-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-slash-fill.svg)

- [ecloud-slash](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-slash.svg)

- [ecloud-upload-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-upload-fill.svg)

- [ecloud-upload](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-upload.svg)

- [ecloud-user-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-user-fill.svg)

- [ecloud-user](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-user.svg)

- [ecloud-x-fill](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-x-fill.svg)

- [ecloud-x](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud-x.svg)

- [ecloud](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/ecloud.svg)

- [internet](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/internet.svg)

#### Content

- [caption-fill](https://github.com/snowytime/iconify/blob/master/src/ui/content/caption-fill.svg)

- [caption](https://github.com/snowytime/iconify/blob/master/src/ui/content/caption.svg)

- [frame-landscape](https://github.com/snowytime/iconify/blob/master/src/ui/content/frame-landscape.svg)

- [frame-portrait](https://github.com/snowytime/iconify/blob/master/src/ui/content/frame-portrait.svg)

- [picture-fill](https://github.com/snowytime/iconify/blob/master/src/ui/content/picture-fill.svg)

- [picture](https://github.com/snowytime/iconify/blob/master/src/ui/content/picture.svg)

- [pictures-fill](https://github.com/snowytime/iconify/blob/master/src/ui/content/pictures-fill.svg)

- [pictures](https://github.com/snowytime/iconify/blob/master/src/ui/content/pictures.svg)

- [ticket-fill](https://github.com/snowytime/iconify/blob/master/src/ui/content/ticket-fill.svg)

- [ticket](https://github.com/snowytime/iconify/blob/master/src/ui/content/ticket.svg)

- [video-fill](https://github.com/snowytime/iconify/blob/master/src/ui/content/video-fill.svg)

- [video](https://github.com/snowytime/iconify/blob/master/src/ui/content/video.svg)

#### Controls

- [arrow-rectangle](https://github.com/snowytime/iconify/blob/master/src/ui/controls/arrow-rectangle.svg)

- [backward-end-alt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-end-alt-fill.svg)

- [backward-end-alt](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-end-alt.svg)

- [backward-end-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-end-fill.svg)

- [backward-end](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-end.svg)

- [backward-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-fill.svg)

- [backward-frame-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-frame-fill.svg)

- [backward-frame](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward-frame.svg)

- [backward](https://github.com/snowytime/iconify/blob/master/src/ui/controls/backward.svg)

- [forward-end-alt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-end-alt-fill.svg)

- [forward-end-alt](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-end-alt.svg)

- [forward-end-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-end-fill.svg)

- [forward-end](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-end.svg)

- [forward-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-fill.svg)

- [forward-frame-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-frame-fill.svg)

- [forward-frame](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward-frame.svg)

- [forward](https://github.com/snowytime/iconify/blob/master/src/ui/controls/forward.svg)

- [go-backward-10](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-10.svg)

- [go-backward-15](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-15.svg)

- [go-backward-30](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-30.svg)

- [go-backward-45](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-45.svg)

- [go-backward-5](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-5.svg)

- [go-backward-60](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-60.svg)

- [go-backward-75](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-75.svg)

- [go-backward-90](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-90.svg)

- [go-backward-minus](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward-minus.svg)

- [go-backward](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-backward.svg)

- [go-forward-10](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-10.svg)

- [go-forward-15](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-15.svg)

- [go-forward-30](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-30.svg)

- [go-forward-45](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-45.svg)

- [go-forward-5](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-5.svg)

- [go-forward-60](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-60.svg)

- [go-forward-75](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-75.svg)

- [go-forward-90](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-90.svg)

- [go-forward-plus](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward-plus.svg)

- [go-forward](https://github.com/snowytime/iconify/blob/master/src/ui/controls/go-forward.svg)

- [infinity](https://github.com/snowytime/iconify/blob/master/src/ui/controls/infinity.svg)

- [pause-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/pause-fill.svg)

- [pause](https://github.com/snowytime/iconify/blob/master/src/ui/controls/pause.svg)

- [play-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/play-fill.svg)

- [play-pause-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/play-pause-fill.svg)

- [play-pause](https://github.com/snowytime/iconify/blob/master/src/ui/controls/play-pause.svg)

- [play](https://github.com/snowytime/iconify/blob/master/src/ui/controls/play.svg)

- [repeat-1](https://github.com/snowytime/iconify/blob/master/src/ui/controls/repeat-1.svg)

- [repeat](https://github.com/snowytime/iconify/blob/master/src/ui/controls/repeat.svg)

- [shuffle](https://github.com/snowytime/iconify/blob/master/src/ui/controls/shuffle.svg)

- [stop-fill](https://github.com/snowytime/iconify/blob/master/src/ui/controls/stop-fill.svg)

- [stop](https://github.com/snowytime/iconify/blob/master/src/ui/controls/stop.svg)

#### Dashboard

- [barometer](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/barometer.svg)

- [gauge-high](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/gauge-high.svg)

- [gauge-low](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/gauge-low.svg)

- [gauge-medium](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/gauge-medium.svg)

- [spedometer](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/spedometer.svg)

#### Data

- [bar-chart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/data/bar-chart-fill.svg)

- [chart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/data/chart-fill.svg)

- [chart-thick-fill](https://github.com/snowytime/iconify/blob/master/src/ui/data/chart-thick-fill.svg)

- [chart-thick](https://github.com/snowytime/iconify/blob/master/src/ui/data/chart-thick.svg)

- [graph-down](https://github.com/snowytime/iconify/blob/master/src/ui/data/graph-down.svg)

- [graph-steady](https://github.com/snowytime/iconify/blob/master/src/ui/data/graph-steady.svg)

- [graph-up](https://github.com/snowytime/iconify/blob/master/src/ui/data/graph-up.svg)

- [graph](https://github.com/snowytime/iconify/blob/master/src/ui/data/graph.svg)

- [pie-chart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/data/pie-chart-fill.svg)

- [pie-chart](https://github.com/snowytime/iconify/blob/master/src/ui/data/pie-chart.svg)

#### Devices

- [cell-phone](https://github.com/snowytime/iconify/blob/master/src/ui/devices/cell-phone.svg)

- [laptop](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laptop.svg)

- [monitor-large](https://github.com/snowytime/iconify/blob/master/src/ui/devices/monitor-large.svg)

- [monitor-medium](https://github.com/snowytime/iconify/blob/master/src/ui/devices/monitor-medium.svg)

- [monitor-small](https://github.com/snowytime/iconify/blob/master/src/ui/devices/monitor-small.svg)

- [monitor](https://github.com/snowytime/iconify/blob/master/src/ui/devices/monitor.svg)

- [tablet-landscape](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet-landscape.svg)

- [tablet-portrait](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet-portrait.svg)

- [tv-4k](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tv-4k.svg)

- [tv-sparkle](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tv-sparkle.svg)

- [tv](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tv.svg)

#### Editing

- [angle](https://github.com/snowytime/iconify/blob/master/src/ui/editing/angle.svg)

- [aperture](https://github.com/snowytime/iconify/blob/master/src/ui/editing/aperture.svg)

- [aspectratio](https://github.com/snowytime/iconify/blob/master/src/ui/editing/aspectratio.svg)

- [brush-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush-fill.svg)

- [brush](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush.svg)

- [circle-dotted-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-dotted-fill.svg)

- [circle-dotted](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-dotted.svg)

- [circle-horizontal-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-horizontal-line.svg)

- [circle-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-left-fill.svg)

- [circle-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-right-fill.svg)

- [cone-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/cone-fill.svg)

- [cone](https://github.com/snowytime/iconify/blob/master/src/ui/editing/cone.svg)

- [crop-flip](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop-flip.svg)

- [crop](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop.svg)

- [dial-high-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-high-fill.svg)

- [dial-high](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-high.svg)

- [dial-low-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-low-fill.svg)

- [dial-low](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-low.svg)

- [dial-medium-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-medium-fill.svg)

- [dial-medium](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dial-medium.svg)

- [drawing](https://github.com/snowytime/iconify/blob/master/src/ui/editing/drawing.svg)

- [dropper-high](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dropper-high.svg)

- [dropper-low](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dropper-low.svg)

- [dropper-medium](https://github.com/snowytime/iconify/blob/master/src/ui/editing/dropper-medium.svg)

- [eraser-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-fill.svg)

- [eraser-line-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line-fill.svg)

- [eraser-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line.svg)

- [eraser](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser.svg)

- [flip-horizontal-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-horizontal-fill.svg)

- [flip-horizontal](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-horizontal.svg)

- [flip-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-left-fill.svg)

- [flip-left](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-left.svg)

- [flip-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-right-fill.svg)

- [flip-right](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-right.svg)

- [flip-vertical-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-vertical-fill.svg)

- [flip-vertical](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-vertical.svg)

- [highlighter](https://github.com/snowytime/iconify/blob/master/src/ui/editing/highlighter.svg)

- [horizontal-sliders](https://github.com/snowytime/iconify/blob/master/src/ui/editing/horizontal-sliders.svg)

- [lasso-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso-sparkles.svg)

- [lasso](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso.svg)

- [lifepreserver](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lifepreserver.svg)

- [line-dots-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/line-dots-fill.svg)

- [line-dots](https://github.com/snowytime/iconify/blob/master/src/ui/editing/line-dots.svg)

- [line-weight](https://github.com/snowytime/iconify/blob/master/src/ui/editing/line-weight.svg)

- [loupe](https://github.com/snowytime/iconify/blob/master/src/ui/editing/loupe.svg)

- [mask-paintbrush-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/mask-paintbrush-fill.svg)

- [mask-paintbrush](https://github.com/snowytime/iconify/blob/master/src/ui/editing/mask-paintbrush.svg)

- [move-3d](https://github.com/snowytime/iconify/blob/master/src/ui/editing/move-3d.svg)

- [move-slant](https://github.com/snowytime/iconify/blob/master/src/ui/editing/move-slant.svg)

- [move](https://github.com/snowytime/iconify/blob/master/src/ui/editing/move.svg)

- [paintbrush-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush-fill.svg)

- [paintbrush](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush.svg)

- [palette-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette-fill.svg)

- [palette](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette.svg)

- [pen](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen.svg)

- [pencil-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-line.svg)

- [pencil-ruler-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-ruler-fill.svg)

- [pencil-ruler](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-ruler.svg)

- [pencil-sign](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-sign.svg)

- [pencil-slash](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-slash.svg)

- [pencil-square](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-square.svg)

- [pencil](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil.svg)

- [perspective](https://github.com/snowytime/iconify/blob/master/src/ui/editing/perspective.svg)

- [pyramid-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pyramid-fill.svg)

- [pyramid](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pyramid.svg)

- [rectangle-dotted](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rectangle-dotted.svg)

- [rotate](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate.svg)

- [ruler-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler-fill.svg)

- [ruler](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler.svg)

- [scale-3d](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scale-3d.svg)

- [scissors](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scissors.svg)

- [scribble-variable](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble-variable.svg)

- [scribble](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble.svg)

- [selection-pin](https://github.com/snowytime/iconify/blob/master/src/ui/editing/selection-pin.svg)

- [skew](https://github.com/snowytime/iconify/blob/master/src/ui/editing/skew.svg)

- [square-dotted-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-dotted-fill.svg)

- [square-dotted](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-dotted.svg)

- [square-edge](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-edge.svg)

- [square-outline-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline-fill.svg)

- [square-outline](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline.svg)

- [sticker](https://github.com/snowytime/iconify/blob/master/src/ui/editing/sticker.svg)

- [swatch-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch-fill.svg)

- [swatch](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch.svg)

- [timeline-selection](https://github.com/snowytime/iconify/blob/master/src/ui/editing/timeline-selection.svg)

- [trapezoid-horizontal-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-horizontal-line.svg)

- [trapezoid-vertical-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-vertical-line.svg)

- [vertical-sliders](https://github.com/snowytime/iconify/blob/master/src/ui/editing/vertical-sliders.svg)

- [wand-rays-inverse](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays-inverse.svg)

- [wand-rays](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays.svg)

- [wand-sparkles-inverse](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles-inverse.svg)

- [wand-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles.svg)

#### Education

- [backpack-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack-fill.svg)

- [backpack](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack.svg)

- [book-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-fill.svg)

- [book-letter-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter-fill.svg)

- [book-letter](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter.svg)

- [book-lines-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines-fill.svg)

- [book-lines](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines.svg)

- [book-open-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open-fill.svg)

- [book-open](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open.svg)

- [book](https://github.com/snowytime/iconify/blob/master/src/ui/education/book.svg)

- [bookmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/bookmark-fill.svg)

- [bookmark-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/bookmark-slash-fill.svg)

- [bookmark-slash](https://github.com/snowytime/iconify/blob/master/src/ui/education/bookmark-slash.svg)

- [bookmark](https://github.com/snowytime/iconify/blob/master/src/ui/education/bookmark.svg)

- [books-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/books-fill.svg)

- [books](https://github.com/snowytime/iconify/blob/master/src/ui/education/books.svg)

- [glasses](https://github.com/snowytime/iconify/blob/master/src/ui/education/glasses.svg)

- [graduation-cap-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap-fill.svg)

- [graduation-cap](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap.svg)

- [greeting-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/greeting-card-fill.svg)

- [greeting-card](https://github.com/snowytime/iconify/blob/master/src/ui/education/greeting-card.svg)

- [lanyard-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/lanyard-fill.svg)

- [lanyard](https://github.com/snowytime/iconify/blob/master/src/ui/education/lanyard.svg)

- [magazine-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine-fill.svg)

- [magazine](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine.svg)

- [menu-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu-fill.svg)

- [menu](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu.svg)

- [newspaper-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper-fill.svg)

- [newspaper](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper.svg)

- [paper-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/paper-fill.svg)

- [paper](https://github.com/snowytime/iconify/blob/master/src/ui/education/paper.svg)

- [school-seat](https://github.com/snowytime/iconify/blob/master/src/ui/education/school-seat.svg)

- [user-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/user-card-fill.svg)

- [user-card](https://github.com/snowytime/iconify/blob/master/src/ui/education/user-card.svg)

- [username-card-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/username-card-fill.svg)

- [username-card](https://github.com/snowytime/iconify/blob/master/src/ui/education/username-card.svg)

#### Elements

- [fire-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/fire-fill.svg)

- [fire](https://github.com/snowytime/iconify/blob/master/src/ui/elements/fire.svg)

- [horizon-dust-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon-dust-fill.svg)

- [horizon-dust](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon-dust.svg)

- [horizon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon-fill.svg)

- [horizon-haze-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon-haze-fill.svg)

- [horizon-haze](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon-haze.svg)

- [horizon](https://github.com/snowytime/iconify/blob/master/src/ui/elements/horizon.svg)

- [lightning-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/lightning-fill.svg)

- [lightning-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/lightning-slash-fill.svg)

- [lightning-slash](https://github.com/snowytime/iconify/blob/master/src/ui/elements/lightning-slash.svg)

- [lightning](https://github.com/snowytime/iconify/blob/master/src/ui/elements/lightning.svg)

- [moon-sparkles-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/moon-sparkles-fill.svg)

- [moon-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/elements/moon-sparkles.svg)

- [moon](https://github.com/snowytime/iconify/blob/master/src/ui/elements/moon.svg)

- [moun-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/moun-fill.svg)

- [run-rays](https://github.com/snowytime/iconify/blob/master/src/ui/elements/run-rays.svg)

- [sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sparkles.svg)

- [sun-circles-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sun-circles-fill.svg)

- [sun-circles](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sun-circles.svg)

- [sun-rays-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sun-rays-fill.svg)

- [sunrise-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sunrise-fill.svg)

- [sunrise](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sunrise.svg)

- [sunset-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sunset-fill.svg)

- [sunset](https://github.com/snowytime/iconify/blob/master/src/ui/elements/sunset.svg)

- [water-drop-degree-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-degree-fill.svg)

- [water-drop-degree-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-degree-slash-fill.svg)

- [water-drop-degree-slash](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-degree-slash.svg)

- [water-drop-degree](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-degree.svg)

- [water-drop-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-fill.svg)

- [water-drop-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-slash-fill.svg)

- [water-drop-slash](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop-slash.svg)

- [water-drop](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-drop.svg)

- [water-waves-down](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-waves-down.svg)

- [water-waves-slash](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-waves-slash.svg)

- [water-waves-up](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-waves-up.svg)

- [water-waves](https://github.com/snowytime/iconify/blob/master/src/ui/elements/water-waves.svg)

- [world-americas-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-americas-fill.svg)

- [world-americas](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-americas.svg)

- [world-asia-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-asia-fill.svg)

- [world-asia](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-asia.svg)

- [world-europe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-europe-fill.svg)

- [world-europe](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-europe.svg)

- [world-oceania-fill](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-oceania-fill.svg)

- [world-oceania](https://github.com/snowytime/iconify/blob/master/src/ui/elements/world-oceania.svg)

#### Energy

- [battery-charge](https://github.com/snowytime/iconify/blob/master/src/ui/energy/battery-charge.svg)

- [battery-fill](https://github.com/snowytime/iconify/blob/master/src/ui/energy/battery-fill.svg)

- [battery](https://github.com/snowytime/iconify/blob/master/src/ui/energy/battery.svg)

- [batterybox-charge-fill](https://github.com/snowytime/iconify/blob/master/src/ui/energy/batterybox-charge-fill.svg)

- [batterybox-charge](https://github.com/snowytime/iconify/blob/master/src/ui/energy/batterybox-charge.svg)

- [batterybox-fill](https://github.com/snowytime/iconify/blob/master/src/ui/energy/batterybox-fill.svg)

- [batterybox](https://github.com/snowytime/iconify/blob/master/src/ui/energy/batterybox.svg)

#### Figures

- [background](https://github.com/snowytime/iconify/blob/master/src/ui/figures/background.svg)

- [changeroom](https://github.com/snowytime/iconify/blob/master/src/ui/figures/changeroom.svg)

- [couple](https://github.com/snowytime/iconify/blob/master/src/ui/figures/couple.svg)

- [family](https://github.com/snowytime/iconify/blob/master/src/ui/figures/family.svg)

- [parent](https://github.com/snowytime/iconify/blob/master/src/ui/figures/parent.svg)

- [person-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/person-spacing.svg)

- [person-spread](https://github.com/snowytime/iconify/blob/master/src/ui/figures/person-spread.svg)

- [person](https://github.com/snowytime/iconify/blob/master/src/ui/figures/person.svg)

#### Filesystem

- [archive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/archive-fill.svg)

- [archive](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/archive.svg)

- [bin-junk-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/bin-junk-fill.svg)

- [bin-junk](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/bin-junk.svg)

- [calendar](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/calendar.svg)

- [clipboard-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard-fill.svg)

- [clipboard](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard.svg)

- [document-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/document-fill.svg)

- [document-lines-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/document-lines-fill.svg)

- [document-lines](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/document-lines.svg)

- [document-search](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/document-search.svg)

- [document](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/document.svg)

- [documents-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/documents-fill.svg)

- [documents](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/documents.svg)

- [folder-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder-fill.svg)

- [folder](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder.svg)

- [note-lines](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/note-lines.svg)

- [note](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/note.svg)

- [tray-contents-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/tray-contents-fill.svg)

- [tray-contents](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/tray-contents.svg)

- [tray-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/tray-fill.svg)

- [tray](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/tray.svg)

- [trays-fill](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trays-fill.svg)

- [trays](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trays.svg)

#### Food

- [birthday-cake-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/birthday-cake-fill.svg)

- [birthday-cake](https://github.com/snowytime/iconify/blob/master/src/ui/food/birthday-cake.svg)

- [carrot-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot-fill.svg)

- [carrot](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot.svg)

- [coffee-mug-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee-mug-fill.svg)

- [coffee-mug](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee-mug.svg)

- [cutlery-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/cutlery-fill.svg)

- [popcorn-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn-fill.svg)

- [popcorn](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn.svg)

- [takeout-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout-fill.svg)

- [takeout](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout.svg)

- [wine-glass-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine-glass-fill.svg)

- [wine-glass](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine-glass.svg)

#### Formatting

- [bold-italic-underline](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bold-italic-underline.svg)

- [bold-underline](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bold-underline.svg)

- [bold](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bold.svg)

- [character-duployan](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-duployan.svg)

- [character-large](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-large.svg)

- [character-magnify](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-magnify.svg)

- [character-phonetic](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-phonetic.svg)

- [character-size](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-size.svg)

- [character-small](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-small.svg)

- [character-sutton](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-sutton.svg)

- [character-variation-alt](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-variation-alt.svg)

- [character-variation](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-variation.svg)

- [characters-lowercase](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/characters-lowercase.svg)

- [characters-uppercase](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/characters-uppercase.svg)

- [checklist-filled](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/checklist-filled.svg)

- [checklist-half-filled](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/checklist-half-filled.svg)

- [checklist](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/checklist.svg)

- [decrease-indent](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/decrease-indent.svg)

- [effects-fill](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/effects-fill.svg)

- [effects](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/effects.svg)

- [fleuron-fill](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron-fill.svg)

- [fleuron](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron.svg)

- [increase-indent](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/increase-indent.svg)

- [insert-block-after](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/insert-block-after.svg)

- [insert-block-before](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/insert-block-before.svg)

- [insert-inline-after](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/insert-inline-after.svg)

- [insert-inline-before](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/insert-inline-before.svg)

- [italic](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/italic.svg)

- [letter-cursor](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-cursor.svg)

- [letter-shadow](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-shadow.svg)

- [letters-underline-dotted](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letters-underline-dotted.svg)

- [line-height-angle](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/line-height-angle.svg)

- [line-height](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/line-height.svg)

- [link](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/link.svg)

- [list-bullet-nested](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-bullet-nested.svg)

- [list-bullet](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-bullet.svg)

- [list-dash](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-dash.svg)

- [list-edge](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-edge.svg)

- [list-number](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-number.svg)

- [list-star](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/list-star.svg)

- [math](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/math.svg)

- [numbers](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbers.svg)

- [numbersign](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbersign.svg)

- [outline-all](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/outline-all.svg)

- [outline-outer](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/outline-outer.svg)

- [outline](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/outline.svg)

- [paperclip](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paperclip.svg)

- [paragraph](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paragraph.svg)

- [quote-end](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quote-end.svg)

- [quote-start](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quote-start.svg)

- [quotelevel-decrease](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quotelevel-decrease.svg)

- [quotelevel-increase](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quotelevel-increase.svg)

- [quotelevel](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quotelevel.svg)

- [signature](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/signature.svg)

- [strikethrough](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/strikethrough.svg)

- [subscript](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/subscript.svg)

- [superscript](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/superscript.svg)

- [text-align-center](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-align-center.svg)

- [text-align-justify](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-align-justify.svg)

- [text-align-left](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-align-left.svg)

- [text-align-right](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-align-right.svg)

- [text-field](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-field.svg)

- [text-justify-left](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-justify-left.svg)

- [text-justify-right](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-justify-right.svg)

- [text-redacted](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-redacted.svg)

- [underline](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/underline.svg)

- [voicenote](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/voicenote.svg)

- [word-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/word-spacing.svg)

#### Gadgets

- [controller-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/controller-fill.svg)

- [controller](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/controller.svg)

- [headphones](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/headphones.svg)

- [keyboard-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/keyboard-fill.svg)

- [keyboard](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/keyboard.svg)

- [mouse-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/mouse-fill.svg)

- [mouse](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/mouse.svg)

- [printer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/printer-fill.svg)

- [printer](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/printer.svg)

- [projector-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/projector-fill.svg)

- [projector](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/projector.svg)

- [radio-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/radio-fill.svg)

- [radio](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/radio.svg)

- [remote-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/remote-fill.svg)

- [remote](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/remote.svg)

- [scanner](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/scanner.svg)

- [speaker-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/speaker-fill.svg)

- [speaker](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/speaker.svg)

- [watch](https://github.com/snowytime/iconify/blob/master/src/ui/gadgets/watch.svg)

#### Games

- [checkerboard](https://github.com/snowytime/iconify/blob/master/src/ui/games/checkerboard.svg)

- [dice-fill](https://github.com/snowytime/iconify/blob/master/src/ui/games/dice-fill.svg)

- [dice](https://github.com/snowytime/iconify/blob/master/src/ui/games/dice.svg)

- [puzzle-alt](https://github.com/snowytime/iconify/blob/master/src/ui/games/puzzle-alt.svg)

- [puzzle-fill-alt](https://github.com/snowytime/iconify/blob/master/src/ui/games/puzzle-fill-alt.svg)

- [puzzle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/games/puzzle-fill.svg)

- [puzzle](https://github.com/snowytime/iconify/blob/master/src/ui/games/puzzle.svg)

#### Gestures

- [hand-braile-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile-fill.svg)

- [hand-braile](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile.svg)

- [hand-clapping-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-clapping-fill.svg)

- [hand-clapping](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-clapping.svg)

- [hand-point-top-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-point-top-left-fill.svg)

- [hand-point-top-left](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-point-top-left.svg)

- [hand-raise-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-raise-fill.svg)

- [hand-raise-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-raise-slash-fill.svg)

- [hand-raise-slash](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-raise-slash.svg)

- [hand-raise](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-raise.svg)

- [hand-sparkles-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-sparkles-fill.svg)

- [hand-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-sparkles.svg)

- [hand-spread-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread-fill.svg)

- [hand-spread](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread.svg)

- [hand-swipe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe-fill.svg)

- [hand-swipe](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe.svg)

- [hand-tap-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap-fill.svg)

- [hand-tap](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap.svg)

- [hand-wave-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave-fill.svg)

- [hand-wave](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave.svg)

- [point-down-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-down-fill.svg)

- [point-down](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-down.svg)

- [point-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-left-fill.svg)

- [point-left](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-left.svg)

- [point-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-right-fill.svg)

- [point-right](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-right.svg)

- [point-up-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-up-fill.svg)

- [point-up](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/point-up.svg)

- [thumbs-down-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down-fill.svg)

- [thumbs-down](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down.svg)

- [thumbs-up-fill](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up-fill.svg)

- [thumbs-up](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up.svg)

#### Health

- [bandage-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/bandage-fill.svg)

- [bandage](https://github.com/snowytime/iconify/blob/master/src/ui/health/bandage.svg)

- [ecg-rapid](https://github.com/snowytime/iconify/blob/master/src/ui/health/ecg-rapid.svg)

- [ecg](https://github.com/snowytime/iconify/blob/master/src/ui/health/ecg.svg)

- [iv-bag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/iv-bag-fill.svg)

- [iv-bag](https://github.com/snowytime/iconify/blob/master/src/ui/health/iv-bag.svg)

- [mask-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask-fill.svg)

- [mask](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask.svg)

- [medical-bag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag-fill.svg)

- [medical-bag](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag.svg)

- [medical-cross-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-cross-fill.svg)

- [medical-cross](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-cross.svg)

- [medical-pass-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-pass-fill.svg)

- [medical-pass](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-pass.svg)

- [medicine-bottle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine-bottle-fill.svg)

- [medicine-bottle](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine-bottle.svg)

- [pill-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill-fill.svg)

- [pill](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill.svg)

- [pills-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/pills-fill.svg)

- [pills](https://github.com/snowytime/iconify/blob/master/src/ui/health/pills.svg)

- [stethoscope](https://github.com/snowytime/iconify/blob/master/src/ui/health/stethoscope.svg)

- [syringe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe-fill.svg)

- [syringe](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe.svg)

- [thermometer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/thermometer-fill.svg)

- [thermometer](https://github.com/snowytime/iconify/blob/master/src/ui/health/thermometer.svg)

#### Home

- [bathtub-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/bathtub-fill.svg)

- [bathtub](https://github.com/snowytime/iconify/blob/master/src/ui/home/bathtub.svg)

- [bed-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed-fill.svg)

- [bed](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed.svg)

- [button-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/button-fill.svg)

- [button](https://github.com/snowytime/iconify/blob/master/src/ui/home/button.svg)

- [chair-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair-fill.svg)

- [chair](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair.svg)

- [chandeleir-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/chandeleir-fill.svg)

- [chandeleir](https://github.com/snowytime/iconify/blob/master/src/ui/home/chandeleir.svg)

- [closet-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet-fill.svg)

- [closet](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet.svg)

- [door-closed-left](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-closed-left.svg)

- [door-closed-right](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-closed-right.svg)

- [door-open-left](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-open-left.svg)

- [door-open-right](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-open-right.svg)

- [fan-desk-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-desk-fill.svg)

- [fan-desk](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-desk.svg)

- [fan-floor-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor-fill.svg)

- [fan-floor](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor.svg)

- [fanblades-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-fill.svg)

- [fanblades-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash-fill.svg)

- [fanblades-slash](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash.svg)

- [fanblades](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades.svg)

- [faucet-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet-fill.svg)

- [faucet](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet.svg)

- [fireplace-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace-fill.svg)

- [fireplace](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace.svg)

- [house-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/house-fill.svg)

- [house](https://github.com/snowytime/iconify/blob/master/src/ui/home/house.svg)

- [humidifier-off-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/humidifier-off-fill.svg)

- [humidifier-off](https://github.com/snowytime/iconify/blob/master/src/ui/home/humidifier-off.svg)

- [humidifier-on-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/humidifier-on-fill.svg)

- [humidifier-on](https://github.com/snowytime/iconify/blob/master/src/ui/home/humidifier-on.svg)

- [lamp-ceiling-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-ceiling-fill.svg)

- [lamp-ceiling](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-ceiling.svg)

- [lamp-desk-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-desk-fill.svg)

- [lamp-desk](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-desk.svg)

- [lamp-floor-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-floor-fill.svg)

- [lamp-floor](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-floor.svg)

- [lamp-table-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-table-fill.svg)

- [lamp-table](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-table.svg)

- [light-ribbon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/light-ribbon-fill.svg)

- [light-ribbon](https://github.com/snowytime/iconify/blob/master/src/ui/home/light-ribbon.svg)

- [light-strip-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/light-strip-fill.svg)

- [light-strip](https://github.com/snowytime/iconify/blob/master/src/ui/home/light-strip.svg)

- [lightbulb-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-fill.svg)

- [lightbulb-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slash-fill.svg)

- [lightbulb-slash](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slash.svg)

- [lightbulb](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb.svg)

- [lounge-chair-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lounge-chair-fill.svg)

- [lounge-chair](https://github.com/snowytime/iconify/blob/master/src/ui/home/lounge-chair.svg)

- [outlet-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/outlet-fill.svg)

- [outlet](https://github.com/snowytime/iconify/blob/master/src/ui/home/outlet.svg)

- [power-strip-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/power-strip-fill.svg)

- [power-strip](https://github.com/snowytime/iconify/blob/master/src/ui/home/power-strip.svg)

- [shower-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-fill.svg)

- [shower-head-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-head-fill.svg)

- [shower-head](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-head.svg)

- [shower](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower.svg)

- [sofa-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa-fill.svg)

- [sofa](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa.svg)

- [stairs](https://github.com/snowytime/iconify/blob/master/src/ui/home/stairs.svg)

- [toilet-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet-fill.svg)

- [toilet](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet.svg)

- [web-camera-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/web-camera-fill.svg)

- [web-camera](https://github.com/snowytime/iconify/blob/master/src/ui/home/web-camera.svg)

- [window-blinds-closed](https://github.com/snowytime/iconify/blob/master/src/ui/home/window-blinds-closed.svg)

- [window-blinds-open](https://github.com/snowytime/iconify/blob/master/src/ui/home/window-blinds-open.svg)

#### Internet

- [antenna-slash](https://github.com/snowytime/iconify/blob/master/src/ui/internet/antenna-slash.svg)

- [antenna](https://github.com/snowytime/iconify/blob/master/src/ui/internet/antenna.svg)

- [bolt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/internet/bolt-fill.svg)

- [bolt](https://github.com/snowytime/iconify/blob/master/src/ui/internet/bolt.svg)

- [emit-left](https://github.com/snowytime/iconify/blob/master/src/ui/internet/emit-left.svg)

- [emit-right](https://github.com/snowytime/iconify/blob/master/src/ui/internet/emit-right.svg)

- [house-connect](https://github.com/snowytime/iconify/blob/master/src/ui/internet/house-connect.svg)

- [radiowave-right](https://github.com/snowytime/iconify/blob/master/src/ui/internet/radiowave-right.svg)

- [radiowave](https://github.com/snowytime/iconify/blob/master/src/ui/internet/radiowave.svg)

- [router-fill](https://github.com/snowytime/iconify/blob/master/src/ui/internet/router-fill.svg)

- [router](https://github.com/snowytime/iconify/blob/master/src/ui/internet/router.svg)

- [rss](https://github.com/snowytime/iconify/blob/master/src/ui/internet/rss.svg)

- [sensor-fill](https://github.com/snowytime/iconify/blob/master/src/ui/internet/sensor-fill.svg)

- [sensor](https://github.com/snowytime/iconify/blob/master/src/ui/internet/sensor.svg)

- [transmitter-fill](https://github.com/snowytime/iconify/blob/master/src/ui/internet/transmitter-fill.svg)

- [transmitter](https://github.com/snowytime/iconify/blob/master/src/ui/internet/transmitter.svg)

- [web-link](https://github.com/snowytime/iconify/blob/master/src/ui/internet/web-link.svg)

- [wifi-exclamation](https://github.com/snowytime/iconify/blob/master/src/ui/internet/wifi-exclamation.svg)

- [wifi-slash](https://github.com/snowytime/iconify/blob/master/src/ui/internet/wifi-slash.svg)

- [wifi](https://github.com/snowytime/iconify/blob/master/src/ui/internet/wifi.svg)

- [world-web](https://github.com/snowytime/iconify/blob/master/src/ui/internet/world-web.svg)

#### Layers

- [ellipsis-horizontal](https://github.com/snowytime/iconify/blob/master/src/ui/layers/ellipsis-horizontal.svg)

- [ellipsis-vertical](https://github.com/snowytime/iconify/blob/master/src/ui/layers/ellipsis-vertical.svg)

- [layers-horizontal-dotted-fill](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-horizontal-dotted-fill.svg)

- [layers-horizontal-dotted](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-horizontal-dotted.svg)

- [layers-horizontal-fill](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-horizontal-fill.svg)

- [layers-horizontal](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-horizontal.svg)

- [layers-vertical-fill](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-vertical-fill.svg)

- [layers-vertical](https://github.com/snowytime/iconify/blob/master/src/ui/layers/layers-vertical.svg)

#### Layouts

- [apps-fill](https://github.com/snowytime/iconify/blob/master/src/ui/layouts/apps-fill.svg)

- [apps](https://github.com/snowytime/iconify/blob/master/src/ui/layouts/apps.svg)

- [layout-alt](https://github.com/snowytime/iconify/blob/master/src/ui/layouts/layout-alt.svg)

- [layout-fill](https://github.com/snowytime/iconify/blob/master/src/ui/layouts/layout-fill.svg)

- [layout](https://github.com/snowytime/iconify/blob/master/src/ui/layouts/layout.svg)

#### Lines

- [arrow-back](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-back.svg)

- [arrow-circle-exclamation](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-circle-exclamation.svg)

- [arrow-circle](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-circle.svg)

- [arrow-diverge](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-diverge.svg)

- [arrow-down](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-down.svg)

- [arrow-forward](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-forward.svg)

- [arrow-horizontal](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-horizontal.svg)

- [arrow-left-right](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-left-right.svg)

- [arrow-left](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-left.svg)

- [arrow-merge-alt](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-merge-alt.svg)

- [arrow-merge](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-merge.svg)

- [arrow-recycle](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-recycle.svg)

- [arrow-right](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-right.svg)

- [arrow-squiggle](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-squiggle.svg)

- [arrow-up-down](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-up-down.svg)

- [arrow-up](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-up.svg)

- [arrow-vertical](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-vertical.svg)

- [asterix](https://github.com/snowytime/iconify/blob/master/src/ui/lines/asterix.svg)

- [chevron-down](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-down.svg)

- [chevron-left](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-left.svg)

- [chevron-right](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-right.svg)

- [chevron-up-down](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-up-down.svg)

- [chevron-up](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-up.svg)

- [code](https://github.com/snowytime/iconify/blob/master/src/ui/lines/code.svg)

- [compress](https://github.com/snowytime/iconify/blob/master/src/ui/lines/compress.svg)

- [expand](https://github.com/snowytime/iconify/blob/master/src/ui/lines/expand.svg)

- [horizontal-compress](https://github.com/snowytime/iconify/blob/master/src/ui/lines/horizontal-compress.svg)

- [horizontal-expand](https://github.com/snowytime/iconify/blob/master/src/ui/lines/horizontal-expand.svg)

- [minus-square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/lines/minus-square-fill.svg)

- [minus-square](https://github.com/snowytime/iconify/blob/master/src/ui/lines/minus-square.svg)

- [plus-square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/lines/plus-square-fill.svg)

- [plus-square](https://github.com/snowytime/iconify/blob/master/src/ui/lines/plus-square.svg)

- [refresh-back](https://github.com/snowytime/iconify/blob/master/src/ui/lines/refresh-back.svg)

- [refresh-forward](https://github.com/snowytime/iconify/blob/master/src/ui/lines/refresh-forward.svg)

- [vertical-compress](https://github.com/snowytime/iconify/blob/master/src/ui/lines/vertical-compress.svg)

- [vertical-expand](https://github.com/snowytime/iconify/blob/master/src/ui/lines/vertical-expand.svg)

#### Loaders

- [hourglass](https://github.com/snowytime/iconify/blob/master/src/ui/loaders/hourglass.svg)

- [loader-high](https://github.com/snowytime/iconify/blob/master/src/ui/loaders/loader-high.svg)

- [loader-low](https://github.com/snowytime/iconify/blob/master/src/ui/loaders/loader-low.svg)

- [loader-medium](https://github.com/snowytime/iconify/blob/master/src/ui/loaders/loader-medium.svg)

- [power](https://github.com/snowytime/iconify/blob/master/src/ui/loaders/power.svg)

#### Location

- [binocular-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/binocular-fill.svg)

- [binocular](https://github.com/snowytime/iconify/blob/master/src/ui/location/binocular.svg)

- [direction-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/direction-left-fill.svg)

- [direction-left](https://github.com/snowytime/iconify/blob/master/src/ui/location/direction-left.svg)

- [direction-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/direction-right-fill.svg)

- [direction-right](https://github.com/snowytime/iconify/blob/master/src/ui/location/direction-right.svg)

- [globe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/globe-fill.svg)

- [globe](https://github.com/snowytime/iconify/blob/master/src/ui/location/globe.svg)

- [map-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-fill.svg)

- [map-pin-circle](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-pin-circle.svg)

- [map-pin-slash](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-pin-slash.svg)

- [map-pin](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-pin.svg)

- [map](https://github.com/snowytime/iconify/blob/master/src/ui/location/map.svg)

- [path-bottom-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/path-bottom-fill.svg)

- [path-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/path-fill.svg)

- [path-sqaure-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/path-sqaure-fill.svg)

- [path-top-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/path-top-fill.svg)

- [path](https://github.com/snowytime/iconify/blob/master/src/ui/location/path.svg)

- [pin-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-fill.svg)

- [pin-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash-fill.svg)

- [pin-slash](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash.svg)

- [pin](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin.svg)

#### Mail

- [letter-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/letter-fill.svg)

- [letter-open-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/letter-open-fill.svg)

- [letter-open](https://github.com/snowytime/iconify/blob/master/src/ui/mail/letter-open.svg)

- [letter](https://github.com/snowytime/iconify/blob/master/src/ui/mail/letter.svg)

- [mail-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/mail-fill.svg)

- [mail-stack-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/mail-stack-fill.svg)

- [mail-stack](https://github.com/snowytime/iconify/blob/master/src/ui/mail/mail-stack.svg)

- [mail](https://github.com/snowytime/iconify/blob/master/src/ui/mail/mail.svg)

- [send-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/send-fill.svg)

- [send](https://github.com/snowytime/iconify/blob/master/src/ui/mail/send.svg)

- [shipping-box-fill](https://github.com/snowytime/iconify/blob/master/src/ui/mail/shipping-box-fill.svg)

- [shipping-box](https://github.com/snowytime/iconify/blob/master/src/ui/mail/shipping-box.svg)

#### Messages

- [comment-fill](https://github.com/snowytime/iconify/blob/master/src/ui/messages/comment-fill.svg)

- [comment](https://github.com/snowytime/iconify/blob/master/src/ui/messages/comment.svg)

- [message-checkmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/messages/message-checkmark-fill.svg)

- [message-checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/messages/message-checkmark.svg)

- [message-fill](https://github.com/snowytime/iconify/blob/master/src/ui/messages/message-fill.svg)

- [message](https://github.com/snowytime/iconify/blob/master/src/ui/messages/message.svg)

#### Miniscreens

- [banner-bottom](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/banner-bottom.svg)

- [banner-left](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/banner-left.svg)

- [banner-right](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/banner-right.svg)

- [banner-top](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/banner-top.svg)

- [move-left](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/move-left.svg)

- [move-right](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/move-right.svg)

- [popup-end](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/popup-end.svg)

- [popup-move-end](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/popup-move-end.svg)

- [popup-move-start](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/popup-move-start.svg)

- [popup-start](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/popup-start.svg)

- [window-end-left](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/window-end-left.svg)

- [window-end-right](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/window-end-right.svg)

- [window-start-left](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/window-start-left.svg)

- [window-start-right](https://github.com/snowytime/iconify/blob/master/src/ui/miniscreens/window-start-right.svg)

#### Misc

- [checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/misc/checkmark.svg)

- [click](https://github.com/snowytime/iconify/blob/master/src/ui/misc/click.svg)

- [close](https://github.com/snowytime/iconify/blob/master/src/ui/misc/close.svg)

- [crosshairs](https://github.com/snowytime/iconify/blob/master/src/ui/misc/crosshairs.svg)

- [helm](https://github.com/snowytime/iconify/blob/master/src/ui/misc/helm.svg)

- [sleep](https://github.com/snowytime/iconify/blob/master/src/ui/misc/sleep.svg)

- [target](https://github.com/snowytime/iconify/blob/master/src/ui/misc/target.svg)

- [trash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/trash-fill.svg)

- [trash-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/trash-slash-fill.svg)

- [trash-slash](https://github.com/snowytime/iconify/blob/master/src/ui/misc/trash-slash.svg)

- [trash](https://github.com/snowytime/iconify/blob/master/src/ui/misc/trash.svg)

#### Music

- [instruments-fill](https://github.com/snowytime/iconify/blob/master/src/ui/music/instruments-fill.svg)

- [instruments](https://github.com/snowytime/iconify/blob/master/src/ui/music/instruments.svg)

- [metronome-fill](https://github.com/snowytime/iconify/blob/master/src/ui/music/metronome-fill.svg)

- [metronome](https://github.com/snowytime/iconify/blob/master/src/ui/music/metronome.svg)

- [music-house](https://github.com/snowytime/iconify/blob/master/src/ui/music/music-house.svg)

- [music-mic-1](https://github.com/snowytime/iconify/blob/master/src/ui/music/music-mic-1.svg)

- [music-mic](https://github.com/snowytime/iconify/blob/master/src/ui/music/music-mic.svg)

- [music-note-house-fill](https://github.com/snowytime/iconify/blob/master/src/ui/music/music-note-house-fill.svg)

- [musical-note-list](https://github.com/snowytime/iconify/blob/master/src/ui/music/musical-note-list.svg)

- [musical-note](https://github.com/snowytime/iconify/blob/master/src/ui/music/musical-note.svg)

- [piano-keys-fill](https://github.com/snowytime/iconify/blob/master/src/ui/music/piano-keys-fill.svg)

- [piano-keys](https://github.com/snowytime/iconify/blob/master/src/ui/music/piano-keys.svg)

- [quarternote](https://github.com/snowytime/iconify/blob/master/src/ui/music/quarternote.svg)

- [theater-masks-fill](https://github.com/snowytime/iconify/blob/master/src/ui/music/theater-masks-fill.svg)

- [theater-masks](https://github.com/snowytime/iconify/blob/master/src/ui/music/theater-masks.svg)

- [tuning-fork](https://github.com/snowytime/iconify/blob/master/src/ui/music/tuning-fork.svg)

#### Nature

- [ant-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/ant-fill.svg)

- [ant](https://github.com/snowytime/iconify/blob/master/src/ui/nature/ant.svg)

- [bear-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/bear-fill.svg)

- [bear](https://github.com/snowytime/iconify/blob/master/src/ui/nature/bear.svg)

- [dove-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/dove-fill.svg)

- [dove](https://github.com/snowytime/iconify/blob/master/src/ui/nature/dove.svg)

- [fish-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/fish-fill.svg)

- [fish](https://github.com/snowytime/iconify/blob/master/src/ui/nature/fish.svg)

- [flower](https://github.com/snowytime/iconify/blob/master/src/ui/nature/flower.svg)

- [ladybug-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/ladybug-fill.svg)

- [ladybug](https://github.com/snowytime/iconify/blob/master/src/ui/nature/ladybug.svg)

- [laurel-left](https://github.com/snowytime/iconify/blob/master/src/ui/nature/laurel-left.svg)

- [laurel-right](https://github.com/snowytime/iconify/blob/master/src/ui/nature/laurel-right.svg)

- [leaf-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf-fill.svg)

- [leaf](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf.svg)

- [lizzard-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/lizzard-fill.svg)

- [lizzard](https://github.com/snowytime/iconify/blob/master/src/ui/nature/lizzard.svg)

- [paw-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/paw-fill.svg)

- [paw](https://github.com/snowytime/iconify/blob/master/src/ui/nature/paw.svg)

- [rabbit-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/rabbit-fill.svg)

- [rabbit](https://github.com/snowytime/iconify/blob/master/src/ui/nature/rabbit.svg)

- [snail-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/snail-fill.svg)

- [snail](https://github.com/snowytime/iconify/blob/master/src/ui/nature/snail.svg)

- [turtoise-fill](https://github.com/snowytime/iconify/blob/master/src/ui/nature/turtoise-fill.svg)

- [turtoise](https://github.com/snowytime/iconify/blob/master/src/ui/nature/turtoise.svg)

#### Party

- [balloon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon-fill.svg)

- [balloon](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon.svg)

- [balloons-fill](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons-fill.svg)

- [balloons](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons.svg)

- [gift-fill](https://github.com/snowytime/iconify/blob/master/src/ui/party/gift-fill.svg)

- [gift](https://github.com/snowytime/iconify/blob/master/src/ui/party/gift.svg)

- [streamer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/party/streamer-fill.svg)

- [streamer](https://github.com/snowytime/iconify/blob/master/src/ui/party/streamer.svg)

- [browser](https://github.com/snowytime/iconify/blob/master/src/ui/programming/browser.svg)

- [code-alt](https://github.com/snowytime/iconify/blob/master/src/ui/programming/code-alt.svg)

- [git-branch](https://github.com/snowytime/iconify/blob/master/src/ui/programming/git-branch.svg)

- [git-commit](https://github.com/snowytime/iconify/blob/master/src/ui/programming/git-commit.svg)

- [git-diff](https://github.com/snowytime/iconify/blob/master/src/ui/programming/git-diff.svg)

- [git-merge-request](https://github.com/snowytime/iconify/blob/master/src/ui/programming/git-merge-request.svg)

- [git-merged](https://github.com/snowytime/iconify/blob/master/src/ui/programming/git-merged.svg)

- [script-fill](https://github.com/snowytime/iconify/blob/master/src/ui/programming/script-fill.svg)

- [script](https://github.com/snowytime/iconify/blob/master/src/ui/programming/script.svg)

- [terminal-fill](https://github.com/snowytime/iconify/blob/master/src/ui/programming/terminal-fill.svg)

- [terminal](https://github.com/snowytime/iconify/blob/master/src/ui/programming/terminal.svg)

#### Scan

- [barcode](https://github.com/snowytime/iconify/blob/master/src/ui/scan/barcode.svg)

- [qr-code](https://github.com/snowytime/iconify/blob/master/src/ui/scan/qr-code.svg)

- [scan-barcode](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan-barcode.svg)

- [scan-card](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan-card.svg)

- [scan-key](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan-key.svg)

- [scan-qr-code](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan-qr-code.svg)

- [scan-user](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan-user.svg)

- [scan](https://github.com/snowytime/iconify/blob/master/src/ui/scan/scan.svg)

#### Science

- [atom](https://github.com/snowytime/iconify/blob/master/src/ui/science/atom.svg)

- [globe-poles](https://github.com/snowytime/iconify/blob/master/src/ui/science/globe-poles.svg)

- [nuclear](https://github.com/snowytime/iconify/blob/master/src/ui/science/nuclear.svg)

- [test-tubes](https://github.com/snowytime/iconify/blob/master/src/ui/science/test-tubes.svg)

#### Security

- [eye-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/eye-fill.svg)

- [eye-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/eye-slash-fill.svg)

- [eye-slash](https://github.com/snowytime/iconify/blob/master/src/ui/security/eye-slash.svg)

- [eye](https://github.com/snowytime/iconify/blob/master/src/ui/security/eye.svg)

- [key-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/key-fill.svg)

- [key](https://github.com/snowytime/iconify/blob/master/src/ui/security/key.svg)

- [lock-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-fill.svg)

- [lock-open-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open-fill.svg)

- [lock-open](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open.svg)

- [lock-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-slash-fill.svg)

- [lock-slash](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-slash.svg)

- [lock](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock.svg)

- [not-allowed](https://github.com/snowytime/iconify/blob/master/src/ui/security/not-allowed.svg)

- [not-verified-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/not-verified-fill.svg)

- [not-verified](https://github.com/snowytime/iconify/blob/master/src/ui/security/not-verified.svg)

- [shield-checkered](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-checkered.svg)

- [shield-left-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-left-fill.svg)

- [shield-right-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-right-fill.svg)

- [shield-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-slash-fill.svg)

- [shield-slash-half-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-slash-half-fill.svg)

- [shield-slash](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-slash.svg)

- [verfied](https://github.com/snowytime/iconify/blob/master/src/ui/security/verfied.svg)

- [verified-fill](https://github.com/snowytime/iconify/blob/master/src/ui/security/verified-fill.svg)

#### Settings

- [cog-fill](https://github.com/snowytime/iconify/blob/master/src/ui/settings/cog-fill.svg)

- [cog](https://github.com/snowytime/iconify/blob/master/src/ui/settings/cog.svg)

- [cogs-fill](https://github.com/snowytime/iconify/blob/master/src/ui/settings/cogs-fill.svg)

- [cogs](https://github.com/snowytime/iconify/blob/master/src/ui/settings/cogs.svg)

- [gear](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear.svg)

#### Shapes

- [box-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box-fill.svg)

- [box](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box.svg)

- [circle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle-fill.svg)

- [circle](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle.svg)

- [cylinder-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/cylinder-fill.svg)

- [cylinder](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/cylinder.svg)

- [diamond-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond-fill.svg)

- [diamond](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond.svg)

- [explosion-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/explosion-fill.svg)

- [explosion](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/explosion.svg)

- [heart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-fill.svg)

- [heart-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash-fill.svg)

- [heart-slash](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash.svg)

- [heart](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart.svg)

- [hexagon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon-fill.svg)

- [hexagon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon.svg)

- [octagon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octagon-fill.svg)

- [octagon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octagon.svg)

- [pentagon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon-fill.svg)

- [pentagon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon.svg)

- [pointer-up-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pointer-up-fill.svg)

- [pointer-up](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pointer-up.svg)

- [rectangle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rectangle-fill.svg)

- [rectangle](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rectangle.svg)

- [rhombus-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus-fill.svg)

- [rhombus](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus.svg)

- [seal-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal-fill.svg)

- [seal](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal.svg)

- [shield-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/shield-fill.svg)

- [shield](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/shield.svg)

- [square-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square-fill.svg)

- [square](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square.svg)

- [star-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-fill.svg)

- [star-half-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-half-fill.svg)

- [star-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash-fill.svg)

- [star-slash](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash.svg)

- [star](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star.svg)

- [suit-club-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/suit-club-fill.svg)

- [suit-club](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/suit-club.svg)

- [suit-spade-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/suit-spade-fill.svg)

- [suit-spade](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/suit-spade.svg)

- [triange-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triange-fill.svg)

- [triangle](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triangle.svg)

#### Sports

- [baseball-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/baseball-fill.svg)

- [baseball](https://github.com/snowytime/iconify/blob/master/src/ui/sports/baseball.svg)

- [basketball-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/basketball-fill.svg)

- [basketball](https://github.com/snowytime/iconify/blob/master/src/ui/sports/basketball.svg)

- [cricket-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/cricket-fill.svg)

- [cricket](https://github.com/snowytime/iconify/blob/master/src/ui/sports/cricket.svg)

- [football-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/football-fill.svg)

- [football](https://github.com/snowytime/iconify/blob/master/src/ui/sports/football.svg)

- [hockeypuck-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/hockeypuck-fill.svg)

- [hockeypuck](https://github.com/snowytime/iconify/blob/master/src/ui/sports/hockeypuck.svg)

- [paddles](https://github.com/snowytime/iconify/blob/master/src/ui/sports/paddles.svg)

- [playing-field-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/playing-field-fill.svg)

- [playing-field](https://github.com/snowytime/iconify/blob/master/src/ui/sports/playing-field.svg)

- [raquet](https://github.com/snowytime/iconify/blob/master/src/ui/sports/raquet.svg)

- [soccerball](https://github.com/snowytime/iconify/blob/master/src/ui/sports/soccerball.svg)

- [tennisball-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/tennisball-fill.svg)

- [tennisball](https://github.com/snowytime/iconify/blob/master/src/ui/sports/tennisball.svg)

- [volleyball-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/volleyball-fill.svg)

- [volleyball](https://github.com/snowytime/iconify/blob/master/src/ui/sports/volleyball.svg)

- [weight-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight-fill.svg)

- [weight](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight.svg)

#### Time

- [alarm-fill](https://github.com/snowytime/iconify/blob/master/src/ui/time/alarm-fill.svg)

- [alarm](https://github.com/snowytime/iconify/blob/master/src/ui/time/alarm.svg)

- [clock-fill](https://github.com/snowytime/iconify/blob/master/src/ui/time/clock-fill.svg)

- [clock](https://github.com/snowytime/iconify/blob/master/src/ui/time/clock.svg)

- [stopwatch-fill](https://github.com/snowytime/iconify/blob/master/src/ui/time/stopwatch-fill.svg)

- [stopwatch](https://github.com/snowytime/iconify/blob/master/src/ui/time/stopwatch.svg)

- [timer](https://github.com/snowytime/iconify/blob/master/src/ui/time/timer.svg)

#### Tools

- [drawing-compass](https://github.com/snowytime/iconify/blob/master/src/ui/tools/drawing-compass.svg)

- [flashlight-off](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-off.svg)

- [flashlight-on](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-on.svg)

- [hammer-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer-fill.svg)

- [hammer](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer.svg)

- [level-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/level-fill.svg)

- [level](https://github.com/snowytime/iconify/blob/master/src/ui/tools/level.svg)

- [megaphone-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/megaphone-fill.svg)

- [megaphone](https://github.com/snowytime/iconify/blob/master/src/ui/tools/megaphone.svg)

- [scalemass-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/scalemass-fill.svg)

- [scalemass](https://github.com/snowytime/iconify/blob/master/src/ui/tools/scalemass.svg)

- [screwdriver-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver-fill.svg)

- [screwdriver](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver.svg)

- [tools-fills](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools-fills.svg)

- [tools](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools.svg)

- [wrench-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench-fill.svg)

- [wrench](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench.svg)

#### Transportation

- [airplane-departing](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/airplane-departing.svg)

- [airplane-landing](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/airplane-landing.svg)

- [airplane](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/airplane.svg)

- [bicycle](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bicycle.svg)

- [bus-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus-fill.svg)

- [bus](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus.svg)

- [cablecar-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cablecar-fill.svg)

- [cablecar](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cablecar.svg)

- [car-electric-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric-fill.svg)

- [car-electric](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric.svg)

- [car-ferry-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-ferry-fill.svg)

- [car-ferry](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-ferry.svg)

- [car-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-fill.svg)

- [car](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car.svg)

- [cars-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars-fill.svg)

- [cars](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars.svg)

- [doubledecker-bus-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/doubledecker-bus-fill.svg)

- [doubledecker-bus](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/doubledecker-bus.svg)

- [gaspump-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gaspump-fill.svg)

- [gaspump](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gaspump.svg)

- [sailboat-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat-fill.svg)

- [sailboat](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat.svg)

- [scooter](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/scooter.svg)

- [ship-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship-fill.svg)

- [ship](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship.svg)

- [tram-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram-fill.svg)

- [tram-tunnel](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram-tunnel.svg)

- [tram](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram.svg)

- [truck-fill](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/truck-fill.svg)

- [truck](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/truck.svg)

#### Travel

- [briefcase-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/briefcase-fill.svg)

- [briefcase](https://github.com/snowytime/iconify/blob/master/src/ui/travel/briefcase.svg)

- [case-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/case-fill.svg)

- [case](https://github.com/snowytime/iconify/blob/master/src/ui/travel/case.svg)

- [suitcase-cart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart-fill.svg)

- [suitcase-cart](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart.svg)

- [suitcase-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-fill.svg)

- [suitcase](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase.svg)

- [tent-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent-fill.svg)

- [tent](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent.svg)

- [toolbox-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/toolbox-fill.svg)

- [toolbox](https://github.com/snowytime/iconify/blob/master/src/ui/travel/toolbox.svg)

#### User

- [user-checkmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-checkmark-fill.svg)

- [user-checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-checkmark.svg)

- [user-cross-fill](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-cross-fill.svg)

- [user-cross](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-cross.svg)

- [user-fill](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-fill.svg)

- [user-questionmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-questionmark-fill.svg)

- [user-questionmark](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-questionmark.svg)

- [user-spacing-fill](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-spacing-fill.svg)

- [user-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/user/user-spacing.svg)

- [user](https://github.com/snowytime/iconify/blob/master/src/ui/user/user.svg)

#### Voice

- [microphone-fill](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone-fill.svg)

- [microphone-level-fill](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone-level-fill.svg)

- [microphone-level](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone-level.svg)

- [microphone-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone-slash-fill.svg)

- [microphone-slash](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone-slash.svg)

- [microphone](https://github.com/snowytime/iconify/blob/master/src/ui/voice/microphone.svg)

- [phone-down-fill](https://github.com/snowytime/iconify/blob/master/src/ui/voice/phone-down-fill.svg)

- [phone-down-ringing](https://github.com/snowytime/iconify/blob/master/src/ui/voice/phone-down-ringing.svg)

- [phone-down](https://github.com/snowytime/iconify/blob/master/src/ui/voice/phone-down.svg)

- [phone-fill](https://github.com/snowytime/iconify/blob/master/src/ui/voice/phone-fill.svg)

- [phone](https://github.com/snowytime/iconify/blob/master/src/ui/voice/phone.svg)

- [voicemail](https://github.com/snowytime/iconify/blob/master/src/ui/voice/voicemail.svg)

- [waveform-slash](https://github.com/snowytime/iconify/blob/master/src/ui/voice/waveform-slash.svg)

- [waveform](https://github.com/snowytime/iconify/blob/master/src/ui/voice/waveform.svg)

#### Volume

- [volume-down-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-down-fill.svg)

- [volume-down](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-down.svg)

- [volume-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-fill.svg)

- [volume-high-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-high-fill.svg)

- [volume-high](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-high.svg)

- [volume-low-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-low-fill.svg)

- [volume-low](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-low.svg)

- [volume-medium-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-medium-fill.svg)

- [volume-medium](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-medium.svg)

- [volume-off-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-off-fill.svg)

- [volume-off](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-off.svg)

- [volume-up-fill](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-up-fill.svg)

- [volume-up](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume-up.svg)

- [volume](https://github.com/snowytime/iconify/blob/master/src/ui/volume/volume.svg)

#### Weather

- [beach-umbrella-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/beach-umbrella-fill.svg)

- [beach-umbrella](https://github.com/snowytime/iconify/blob/master/src/ui/weather/beach-umbrella.svg)

- [cloud-drizzle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle-fill.svg)

- [cloud-drizzle](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle.svg)

- [cloud-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fill.svg)

- [cloud-fog-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog-fill.svg)

- [cloud-fog](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog.svg)

- [cloud-hail-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail-fill.svg)

- [cloud-hail](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail.svg)

- [cloud-heavy-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain-fill.svg)

- [cloud-heavy-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain.svg)

- [cloud-lightning-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-lightning-fill.svg)

- [cloud-lightning](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-lightning.svg)

- [cloud-moon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-fill.svg)

- [cloud-moon-lightning-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-lightning-fill.svg)

- [cloud-moon-lightning](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-lightning.svg)

- [cloud-moon-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain-fill.svg)

- [cloud-moon-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain.svg)

- [cloud-moon](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon.svg)

- [cloud-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain-fill.svg)

- [cloud-rain-lightning-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain-lightning-fill.svg)

- [cloud-rain-lightning](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain-lightning.svg)

- [cloud-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain.svg)

- [cloud-slush-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-slush-fill.svg)

- [cloud-slush](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-slush.svg)

- [cloud-smoke-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke-fill.svg)

- [cloud-smoke](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke.svg)

- [cloud-snow-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow-fill.svg)

- [cloud-snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow.svg)

- [cloud-sun-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-fill.svg)

- [cloud-sun-lightning-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-lightning-fill.svg)

- [cloud-sun-lightning](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-lightning.svg)

- [cloud-sun-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain-fill.svg)

- [cloud-sun-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain.svg)

- [cloud-sun](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun.svg)

- [cloud](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud.svg)

- [hurricane-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/hurricane-fill.svg)

- [hurricane](https://github.com/snowytime/iconify/blob/master/src/ui/weather/hurricane.svg)

- [snowflake](https://github.com/snowytime/iconify/blob/master/src/ui/weather/snowflake.svg)

- [tornado](https://github.com/snowytime/iconify/blob/master/src/ui/weather/tornado.svg)

- [umbrella-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/umbrella-fill.svg)

- [umbrella](https://github.com/snowytime/iconify/blob/master/src/ui/weather/umbrella.svg)

- [wind-snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind-snow.svg)

- [wind](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind.svg)

#### Weather-metrics

- [allergen-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/allergen-fill.svg)

- [allergen](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/allergen.svg)

- [aqi-high](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/aqi-high.svg)

- [aqi-low](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/aqi-low.svg)

- [cloud-co-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/cloud-co-fill.svg)

- [cloud-co](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/cloud-co.svg)

- [cloud-co2-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/cloud-co2-fill.svg)

- [cloud-co2](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/cloud-co2.svg)

- [humidity-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/humidity-fill.svg)

- [humidity](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/humidity.svg)

- [microbe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/microbe-fill.svg)

- [microbe](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/microbe.svg)

- [thermometer-high](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-high.svg)

- [thermometer-low](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-low.svg)

- [thermometer-medium](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-medium.svg)

- [thermometer-slash](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-slash.svg)

- [thermometer-snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-snow.svg)

- [thermometer-sun-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-sun-fill.svg)

- [thermometer-sun](https://github.com/snowytime/iconify/blob/master/src/ui/weather-metrics/thermometer-sun.svg)

#### Zoom

- [magnifying-glass](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/magnifying-glass.svg)

- [zoom-arrow](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-arrow.svg)

- [zoom-in](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-in.svg)

- [zoom-lines](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-lines.svg)

- [zoom-location](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-location.svg)

- [zoom-out](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-out.svg)

- [zoom-sparkle](https://github.com/snowytime/iconify/blob/master/src/ui/zoom/zoom-sparkle.svg)

