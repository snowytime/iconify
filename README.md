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

- [bitcoin](https://github.com/snowytime/iconify/blob/master/src/credit/bitcoin.svg)

- [discover](https://github.com/snowytime/iconify/blob/master/src/credit/discover.svg)

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

- [swift](https://github.com/snowytime/iconify/blob/master/src/programming/swift.svg)

- [tailwindcss](https://github.com/snowytime/iconify/blob/master/src/programming/tailwindcss.svg)

- [typescript](https://github.com/snowytime/iconify/blob/master/src/programming/typescript.svg)

- [vue](https://github.com/snowytime/iconify/blob/master/src/programming/vue.svg)

- [webpack](https://github.com/snowytime/iconify/blob/master/src/programming/webpack.svg)

### Ui

#### Animals

- [ant-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ant-filled.svg)

- [ant](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ant.svg)

- [dove-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/dove-filled.svg)

- [dove](https://github.com/snowytime/iconify/blob/master/src/ui/animals/dove.svg)

- [fish-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/fish-filled.svg)

- [fish](https://github.com/snowytime/iconify/blob/master/src/ui/animals/fish.svg)

- [ladybug-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ladybug-filled.svg)

- [ladybug](https://github.com/snowytime/iconify/blob/master/src/ui/animals/ladybug.svg)

- [lizzard-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/lizzard-filled.svg)

- [lizzard](https://github.com/snowytime/iconify/blob/master/src/ui/animals/lizzard.svg)

- [paw-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/paw-filled.svg)

- [paw](https://github.com/snowytime/iconify/blob/master/src/ui/animals/paw.svg)

- [rabbit-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/rabbit-filled.svg)

- [rabbit](https://github.com/snowytime/iconify/blob/master/src/ui/animals/rabbit.svg)

- [turtle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/animals/turtle-filled.svg)

- [turtle](https://github.com/snowytime/iconify/blob/master/src/ui/animals/turtle.svg)

#### Bells

- [bell-filled](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-filled.svg)

- [bell-ringing-filled](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ringing-filled.svg)

- [bell-ringing](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-ringing.svg)

- [bell-slashed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slashed-filled.svg)

- [bell-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell-slashed.svg)

- [bell](https://github.com/snowytime/iconify/blob/master/src/ui/bells/bell.svg)

#### Body

- [brain](https://github.com/snowytime/iconify/blob/master/src/ui/body/brain.svg)

- [ear-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear-filled.svg)

- [ear](https://github.com/snowytime/iconify/blob/master/src/ui/body/ear.svg)

- [eye-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-filled.svg)

- [eye-lash](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-lash.svg)

- [eye-slashed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-slashed-filled.svg)

- [eye-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye-slashed.svg)

- [eye](https://github.com/snowytime/iconify/blob/master/src/ui/body/eye.svg)

- [eyes](https://github.com/snowytime/iconify/blob/master/src/ui/body/eyes.svg)

- [lips-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips-filled.svg)

- [lips](https://github.com/snowytime/iconify/blob/master/src/ui/body/lips.svg)

- [mustache-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache-filled.svg)

- [mustache](https://github.com/snowytime/iconify/blob/master/src/ui/body/mustache.svg)

- [nose-filled](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose-filled.svg)

- [nose](https://github.com/snowytime/iconify/blob/master/src/ui/body/nose.svg)

#### Buildings

- [building-columns](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-columns.svg)

- [building-fill](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building-fill.svg)

- [building](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/building.svg)

- [buildings-fill](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/buildings-fill.svg)

- [buildings](https://github.com/snowytime/iconify/blob/master/src/ui/buildings/buildings.svg)

#### Clock

- [alarm-fill](https://github.com/snowytime/iconify/blob/master/src/ui/clock/alarm-fill.svg)

- [alarm](https://github.com/snowytime/iconify/blob/master/src/ui/clock/alarm.svg)

- [clock-fill](https://github.com/snowytime/iconify/blob/master/src/ui/clock/clock-fill.svg)

- [clock](https://github.com/snowytime/iconify/blob/master/src/ui/clock/clock.svg)

- [reel-fill](https://github.com/snowytime/iconify/blob/master/src/ui/clock/reel-fill.svg)

- [reel](https://github.com/snowytime/iconify/blob/master/src/ui/clock/reel.svg)

- [stopwatch-fill](https://github.com/snowytime/iconify/blob/master/src/ui/clock/stopwatch-fill.svg)

- [stopwatch](https://github.com/snowytime/iconify/blob/master/src/ui/clock/stopwatch.svg)

- [timer](https://github.com/snowytime/iconify/blob/master/src/ui/clock/timer.svg)

#### Clothes

- [shirt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/clothes/shirt-fill.svg)

- [shirt](https://github.com/snowytime/iconify/blob/master/src/ui/clothes/shirt.svg)

#### Clouds

- [cloud-backwards-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-backwards-filled.svg)

- [cloud-backwards](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-backwards.svg)

- [cloud-checkmark-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-checkmark-filled.svg)

- [cloud-checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-checkmark.svg)

- [cloud-download-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-download-filled.svg)

- [cloud-download](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-download.svg)

- [cloud-error-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-error-filled.svg)

- [cloud-error](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-error.svg)

- [cloud-forward-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-forward-filled.svg)

- [cloud-forward](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-forward.svg)

- [cloud-key-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-key-filled.svg)

- [cloud-key](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-key.svg)

- [cloud-locked-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-locked-filled.svg)

- [cloud-locked](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-locked.svg)

- [cloud-off-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-off-filled.svg)

- [cloud-off](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-off.svg)

- [cloud-person-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-person-filled.svg)

- [cloud-person](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-person.svg)

- [cloud-upload-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-upload-filled.svg)

- [cloud-upload](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-upload.svg)

- [cloud-warning-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-warning-filled.svg)

- [cloud-warning](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud-warning.svg)

- [cloud](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/cloud.svg)

- [could-filled](https://github.com/snowytime/iconify/blob/master/src/ui/clouds/could-filled.svg)

#### Connectivity

- [connected](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connected.svg)

- [connection-off](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connection-off.svg)

- [connection](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/connection.svg)

- [transmit-left](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit-left.svg)

- [transmit-right](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit-right.svg)

- [transmit](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/transmit.svg)

- [wifi-error](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi-error.svg)

- [wifi-off](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi-off.svg)

- [wifi](https://github.com/snowytime/iconify/blob/master/src/ui/connectivity/wifi.svg)

#### Cooking

- [cooktop-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/cooktop-fill.svg)

- [cooktop](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/cooktop.svg)

- [microwave-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/microwave-fill.svg)

- [microwave](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/microwave.svg)

- [oven-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/oven-fill.svg)

- [oven](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/oven.svg)

- [pan-fry-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/pan-fry-fill.svg)

- [pan-fry](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/pan-fry.svg)

- [refrigerator-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/refrigerator-fill.svg)

- [refrigerator](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/refrigerator.svg)

- [sink-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/sink-fill.svg)

- [sink](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/sink.svg)

- [stove-fill](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/stove-fill.svg)

- [stove](https://github.com/snowytime/iconify/blob/master/src/ui/cooking/stove.svg)

#### Cosmic

- [horizon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/horizon-filled.svg)

- [horizon](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/horizon.svg)

- [moon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-filled.svg)

- [moon-sparkles-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-sparkles-filled.svg)

- [moon-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon-sparkles.svg)

- [moon](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/moon.svg)

- [sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sparkles.svg)

- [sun-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-filled.svg)

- [sun-rays-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-rays-filled.svg)

- [sun-rays](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun-rays.svg)

- [sun](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sun.svg)

- [sunrise-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunrise-filled.svg)

- [sunrise](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunrise.svg)

- [sunset-filled](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunset-filled.svg)

- [sunset](https://github.com/snowytime/iconify/blob/master/src/ui/cosmic/sunset.svg)

#### Dashboard

- [barometer](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/barometer.svg)

- [gauge](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/gauge.svg)

- [graph-down](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-down.svg)

- [graph-static](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-static.svg)

- [graph-up](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph-up.svg)

- [graph](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/graph.svg)

- [speedometer](https://github.com/snowytime/iconify/blob/master/src/ui/dashboard/speedometer.svg)

#### Devices

- [camera-filled](https://github.com/snowytime/iconify/blob/master/src/ui/devices/camera-filled.svg)

- [camera](https://github.com/snowytime/iconify/blob/master/src/ui/devices/camera.svg)

- [computer](https://github.com/snowytime/iconify/blob/master/src/ui/devices/computer.svg)

- [footprint](https://github.com/snowytime/iconify/blob/master/src/ui/devices/footprint.svg)

- [globe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/globe-fill.svg)

- [globe](https://github.com/snowytime/iconify/blob/master/src/ui/devices/globe.svg)

- [headphones](https://github.com/snowytime/iconify/blob/master/src/ui/devices/headphones.svg)

- [keyboard-filled](https://github.com/snowytime/iconify/blob/master/src/ui/devices/keyboard-filled.svg)

- [keyboard](https://github.com/snowytime/iconify/blob/master/src/ui/devices/keyboard.svg)

- [laptop](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laptop.svg)

- [large-monitor](https://github.com/snowytime/iconify/blob/master/src/ui/devices/large-monitor.svg)

- [laurel-following](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laurel-following.svg)

- [laurel-leading](https://github.com/snowytime/iconify/blob/master/src/ui/devices/laurel-leading.svg)

- [lifepreserver-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/lifepreserver-fill.svg)

- [lifepreserver](https://github.com/snowytime/iconify/blob/master/src/ui/devices/lifepreserver.svg)

- [medium-monitor](https://github.com/snowytime/iconify/blob/master/src/ui/devices/medium-monitor.svg)

- [megaphone-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/megaphone-fill.svg)

- [megaphone](https://github.com/snowytime/iconify/blob/master/src/ui/devices/megaphone.svg)

- [mouse-filled](https://github.com/snowytime/iconify/blob/master/src/ui/devices/mouse-filled.svg)

- [mouse](https://github.com/snowytime/iconify/blob/master/src/ui/devices/mouse.svg)

- [music-mic](https://github.com/snowytime/iconify/blob/master/src/ui/devices/music-mic.svg)

- [printer-filled](https://github.com/snowytime/iconify/blob/master/src/ui/devices/printer-filled.svg)

- [printer](https://github.com/snowytime/iconify/blob/master/src/ui/devices/printer.svg)

- [radio-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/radio-fill.svg)

- [radio](https://github.com/snowytime/iconify/blob/master/src/ui/devices/radio.svg)

- [remote](https://github.com/snowytime/iconify/blob/master/src/ui/devices/remote.svg)

- [scalemass-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/scalemass-fill.svg)

- [scalemass](https://github.com/snowytime/iconify/blob/master/src/ui/devices/scalemass.svg)

- [small-monitor](https://github.com/snowytime/iconify/blob/master/src/ui/devices/small-monitor.svg)

- [smartphone](https://github.com/snowytime/iconify/blob/master/src/ui/devices/smartphone.svg)

- [smartwatch](https://github.com/snowytime/iconify/blob/master/src/ui/devices/smartwatch.svg)

- [tablet-landscape](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet-landscape.svg)

- [tablet](https://github.com/snowytime/iconify/blob/master/src/ui/devices/tablet.svg)

- [video-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-fill.svg)

- [video-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-slash-fill.svg)

- [video-slash](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video-slash.svg)

- [video](https://github.com/snowytime/iconify/blob/master/src/ui/devices/video.svg)

#### Editing

- [aspect-ratio](https://github.com/snowytime/iconify/blob/master/src/ui/editing/aspect-ratio.svg)

- [attachment-alt](https://github.com/snowytime/iconify/blob/master/src/ui/editing/attachment-alt.svg)

- [attachment](https://github.com/snowytime/iconify/blob/master/src/ui/editing/attachment.svg)

- [bandage-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/bandage-filled.svg)

- [bandage](https://github.com/snowytime/iconify/blob/master/src/ui/editing/bandage.svg)

- [brush-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush-filled.svg)

- [brush](https://github.com/snowytime/iconify/blob/master/src/ui/editing/brush.svg)

- [circle-half-left](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-half-left.svg)

- [circle-half-right](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-half-right.svg)

- [circle-horizontal-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-horizontal-line.svg)

- [circle-outline-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-outline-filled.svg)

- [circle-outline](https://github.com/snowytime/iconify/blob/master/src/ui/editing/circle-outline.svg)

- [crop-flip](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop-flip.svg)

- [crop](https://github.com/snowytime/iconify/blob/master/src/ui/editing/crop.svg)

- [eraser-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-filled.svg)

- [eraser-line-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line-filled.svg)

- [eraser-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser-line.svg)

- [eraser](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eraser.svg)

- [eyedropper-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eyedropper-filled.svg)

- [eyedropper](https://github.com/snowytime/iconify/blob/master/src/ui/editing/eyedropper.svg)

- [flip-x-axis-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-x-axis-filled.svg)

- [flip-x-axis](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-x-axis.svg)

- [flip-y-axis-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-y-axis-filled.svg)

- [flip-y-axis](https://github.com/snowytime/iconify/blob/master/src/ui/editing/flip-y-axis.svg)

- [highlighter](https://github.com/snowytime/iconify/blob/master/src/ui/editing/highlighter.svg)

- [horizontal-slider](https://github.com/snowytime/iconify/blob/master/src/ui/editing/horizontal-slider.svg)

- [lasso-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso-sparkles.svg)

- [lasso](https://github.com/snowytime/iconify/blob/master/src/ui/editing/lasso.svg)

- [loupe](https://github.com/snowytime/iconify/blob/master/src/ui/editing/loupe.svg)

- [mode-3d](https://github.com/snowytime/iconify/blob/master/src/ui/editing/mode-3d.svg)

- [paintbrush-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush-filled.svg)

- [paintbrush](https://github.com/snowytime/iconify/blob/master/src/ui/editing/paintbrush.svg)

- [palette-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette-filled.svg)

- [palette](https://github.com/snowytime/iconify/blob/master/src/ui/editing/palette.svg)

- [pen-ruler-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen-ruler-fill.svg)

- [pen-ruler](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen-ruler.svg)

- [pen](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pen.svg)

- [pencil-disabled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-disabled.svg)

- [pencil-field](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-field.svg)

- [pencil-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-line.svg)

- [pencil-outline](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-outline.svg)

- [pencil-square](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil-square.svg)

- [pencil](https://github.com/snowytime/iconify/blob/master/src/ui/editing/pencil.svg)

- [perspective](https://github.com/snowytime/iconify/blob/master/src/ui/editing/perspective.svg)

- [rotate-left-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-left-filled.svg)

- [rotate-left](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-left.svg)

- [rotate-rd](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-rd.svg)

- [rotate-right-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-right-filled.svg)

- [rotate-right](https://github.com/snowytime/iconify/blob/master/src/ui/editing/rotate-right.svg)

- [ruler-fill](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler-fill.svg)

- [ruler](https://github.com/snowytime/iconify/blob/master/src/ui/editing/ruler.svg)

- [scale-3d](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scale-3d.svg)

- [scissors](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scissors.svg)

- [scribble-variable](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble-variable.svg)

- [scribble](https://github.com/snowytime/iconify/blob/master/src/ui/editing/scribble.svg)

- [section-pin](https://github.com/snowytime/iconify/blob/master/src/ui/editing/section-pin.svg)

- [signature](https://github.com/snowytime/iconify/blob/master/src/ui/editing/signature.svg)

- [skew](https://github.com/snowytime/iconify/blob/master/src/ui/editing/skew.svg)

- [square-outline-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline-filled.svg)

- [square-outline](https://github.com/snowytime/iconify/blob/master/src/ui/editing/square-outline.svg)

- [swatch-filled](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch-filled.svg)

- [swatch](https://github.com/snowytime/iconify/blob/master/src/ui/editing/swatch.svg)

- [timeline-section](https://github.com/snowytime/iconify/blob/master/src/ui/editing/timeline-section.svg)

- [trapezoid-horizontal-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-horizontal-line.svg)

- [trapezoid-vertical-line](https://github.com/snowytime/iconify/blob/master/src/ui/editing/trapezoid-vertical-line.svg)

- [vertical-slider](https://github.com/snowytime/iconify/blob/master/src/ui/editing/vertical-slider.svg)

- [wand-rays-inverse](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays-inverse.svg)

- [wand-rays](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-rays.svg)

- [wand-sparkles-inverse](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles-inverse.svg)

- [wand-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/editing/wand-sparkles.svg)

#### Education

- [backpack-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack-fill.svg)

- [backpack](https://github.com/snowytime/iconify/blob/master/src/ui/education/backpack.svg)

- [book-closed-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-closed-fill.svg)

- [book-closed](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-closed.svg)

- [book-letter-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter-fill.svg)

- [book-letter](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-letter.svg)

- [book-lines-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines-fill.svg)

- [book-lines](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-lines.svg)

- [book-open-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open-fill.svg)

- [book-open](https://github.com/snowytime/iconify/blob/master/src/ui/education/book-open.svg)

- [books-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/books-fill.svg)

- [books](https://github.com/snowytime/iconify/blob/master/src/ui/education/books.svg)

- [graduation-cap-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap-fill.svg)

- [graduation-cap](https://github.com/snowytime/iconify/blob/master/src/ui/education/graduation-cap.svg)

- [magazine-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine-fill.svg)

- [magazine](https://github.com/snowytime/iconify/blob/master/src/ui/education/magazine.svg)

- [menu-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu-fill.svg)

- [menu](https://github.com/snowytime/iconify/blob/master/src/ui/education/menu.svg)

- [newspaper-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper-fill.svg)

- [newspaper](https://github.com/snowytime/iconify/blob/master/src/ui/education/newspaper.svg)

- [poles](https://github.com/snowytime/iconify/blob/master/src/ui/education/poles.svg)

- [school-desk](https://github.com/snowytime/iconify/blob/master/src/ui/education/school-desk.svg)

- [tray-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-fill.svg)

- [tray-full-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-full-fill.svg)

- [tray-full](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray-full.svg)

- [tray](https://github.com/snowytime/iconify/blob/master/src/ui/education/tray.svg)

- [trays-stacked-fill](https://github.com/snowytime/iconify/blob/master/src/ui/education/trays-stacked-fill.svg)

- [trays-stacked](https://github.com/snowytime/iconify/blob/master/src/ui/education/trays-stacked.svg)

#### Electronics

- [cpu-filled](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/cpu-filled.svg)

- [cpu](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/cpu.svg)

- [database](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/database.svg)

- [memory](https://github.com/snowytime/iconify/blob/master/src/ui/electronics/memory.svg)

#### Entertainment

- [controller-filled](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/controller-filled.svg)

- [controller](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/controller.svg)

- [disk-filled](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/disk-filled.svg)

- [disk](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/disk.svg)

- [film](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/film.svg)

- [laughing-filled](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/laughing-filled.svg)

- [laughing](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/laughing.svg)

- [ticket-filled](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/ticket-filled.svg)

- [ticket](https://github.com/snowytime/iconify/blob/master/src/ui/entertainment/ticket.svg)

#### Figures

- [figure-archery](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-archery.svg)

- [figure-badminton](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-badminton.svg)

- [figure-barre](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-barre.svg)

- [figure-baseball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-baseball.svg)

- [figure-basketball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-basketball.svg)

- [figure-biking-machine](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-biking-machine.svg)

- [figure-bowling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-bowling.svg)

- [figure-boxing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-boxing.svg)

- [figure-cardio](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cardio.svg)

- [figure-climbing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-climbing.svg)

- [figure-core](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-core.svg)

- [figure-cricket](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cricket.svg)

- [figure-cross-training](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cross-training.svg)

- [figure-curling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-curling.svg)

- [figure-cycling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-cycling.svg)

- [figure-dance](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-dance.svg)

- [figure-disc](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-disc.svg)

- [figure-elliptical](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-elliptical.svg)

- [figure-entering](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-entering.svg)

- [figure-falling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-falling.svg)

- [figure-family](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-family.svg)

- [figure-fencing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-fencing.svg)

- [figure-fishing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-fishing.svg)

- [figure-football](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-football.svg)

- [figure-golf](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-golf.svg)

- [figure-gymnastics](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-gymnastics.svg)

- [figure-hand-cycling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hand-cycling.svg)

- [figure-handball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-handball.svg)

- [figure-hiking](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hiking.svg)

- [figure-hockey](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hockey.svg)

- [figure-horse-riding](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-horse-riding.svg)

- [figure-hunting](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-hunting.svg)

- [figure-jumprope](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-jumprope.svg)

- [figure-kickboxing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-kickboxing.svg)

- [figure-lacrosse](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-lacrosse.svg)

- [figure-leaving](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-leaving.svg)

- [figure-leg-day](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-leg-day.svg)

- [figure-lifting](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-lifting.svg)

- [figure-martial-arts](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-martial-arts.svg)

- [figure-mind-and-body](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-mind-and-body.svg)

- [figure-open](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-open.svg)

- [figure-parent](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-parent.svg)

- [figure-pickleball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-pickleball.svg)

- [figure-play](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-play.svg)

- [figure-raquetball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-raquetball.svg)

- [figure-rolling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rolling.svg)

- [figure-rowing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rowing.svg)

- [figure-rugby-alt](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rugby-alt.svg)

- [figure-rugby](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-rugby.svg)

- [figure-running](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-running.svg)

- [figure-sailing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-sailing.svg)

- [figure-sex-separation](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-sex-separation.svg)

- [figure-skateboarding](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skateboarding.svg)

- [figure-skiing-crosscountry](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skiing-crosscountry.svg)

- [figure-skiing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-skiing.svg)

- [figure-snowboarding](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-snowboarding.svg)

- [figure-soccer](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-soccer.svg)

- [figure-socialdance](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-socialdance.svg)

- [figure-softball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-softball.svg)

- [figure-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-spacing.svg)

- [figure-squash](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-squash.svg)

- [figure-stair-stepper](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stair-stepper.svg)

- [figure-stairs](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stairs.svg)

- [figure-step-training](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-step-training.svg)

- [figure-stepping](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stepping.svg)

- [figure-stretching](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-stretching.svg)

- [figure-surfing](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-surfing.svg)

- [figure-swimming-ocean](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-swimming-ocean.svg)

- [figure-swimming](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-swimming.svg)

- [figure-table-tennis](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-table-tennis.svg)

- [figure-taichi](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-taichi.svg)

- [figure-tennis](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-tennis.svg)

- [figure-together](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-together.svg)

- [figure-track-and-field](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-track-and-field.svg)

- [figure-volleyball](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-volleyball.svg)

- [figure-walking-motion](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-walking-motion.svg)

- [figure-walking](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-walking.svg)

- [figure-water-fitness](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-water-fitness.svg)

- [figure-water-polo](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-water-polo.svg)

- [figure-waving](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-waving.svg)

- [figure-wheelchair-fast](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wheelchair-fast.svg)

- [figure-wheelchair](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wheelchair.svg)

- [figure-wrestling](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-wrestling.svg)

- [figure-yoga](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure-yoga.svg)

- [figure.pilates](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure.pilates.svg)

- [figure](https://github.com/snowytime/iconify/blob/master/src/ui/figures/figure.svg)

- [flexibility](https://github.com/snowytime/iconify/blob/master/src/ui/figures/flexibility.svg)

#### Filesystem

- [clipboard-filled](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard-filled.svg)

- [clipboard](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/clipboard.svg)

- [file-filled](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/file-filled.svg)

- [file](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/file.svg)

- [folder-filled](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder-filled.svg)

- [folder](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/folder.svg)

- [trash-filled](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-filled.svg)

- [trash-slashed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-slashed-filled.svg)

- [trash-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash-slashed.svg)

- [trash](https://github.com/snowytime/iconify/blob/master/src/ui/filesystem/trash.svg)

#### Flags

- [double-flag-checkered](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag-checkered.svg)

- [double-flag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag-fill.svg)

- [double-flag](https://github.com/snowytime/iconify/blob/master/src/ui/flags/double-flag.svg)

- [flag-checkered](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-checkered.svg)

- [flag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-fill.svg)

- [flag-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-slash-fill.svg)

- [flag-slash](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag-slash.svg)

- [flag](https://github.com/snowytime/iconify/blob/master/src/ui/flags/flag.svg)

#### Food

- [cake-filled](https://github.com/snowytime/iconify/blob/master/src/ui/food/cake-filled.svg)

- [cake](https://github.com/snowytime/iconify/blob/master/src/ui/food/cake.svg)

- [carrot-filled](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot-filled.svg)

- [carrot](https://github.com/snowytime/iconify/blob/master/src/ui/food/carrot.svg)

- [coffee-filled](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee-filled.svg)

- [coffee](https://github.com/snowytime/iconify/blob/master/src/ui/food/coffee.svg)

- [cutlery](https://github.com/snowytime/iconify/blob/master/src/ui/food/cutlery.svg)

- [popcorn-fill](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn-fill.svg)

- [popcorn](https://github.com/snowytime/iconify/blob/master/src/ui/food/popcorn.svg)

- [takeout-filled](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout-filled.svg)

- [takeout](https://github.com/snowytime/iconify/blob/master/src/ui/food/takeout.svg)

- [wine-filled](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine-filled.svg)

- [wine](https://github.com/snowytime/iconify/blob/master/src/ui/food/wine.svg)

#### Formatting

- [align-justify](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-justify.svg)

- [align-left](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-left.svg)

- [align-middle](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-middle.svg)

- [align-right](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/align-right.svg)

- [bold](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bold.svg)

- [bullet-list-indent](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bullet-list-indent.svg)

- [bullet-list](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/bullet-list.svg)

- [character-cursor](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-cursor.svg)

- [character-duployan](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-duployan.svg)

- [character-phonetic](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-phonetic.svg)

- [character-sutton](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character-sutton.svg)

- [character](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/character.svg)

- [dash-list](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/dash-list.svg)

- [decrease-indent](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/decrease-indent.svg)

- [decrease-quote-level](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/decrease-quote-level.svg)

- [fleuron-filled](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron-filled.svg)

- [fleuron](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/fleuron.svg)

- [increase-indent](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/increase-indent.svg)

- [increase-quote-level](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/increase-quote-level.svg)

- [italic](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/italic.svg)

- [justify-left](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/justify-left.svg)

- [justify-right](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/justify-right.svg)

- [letter-format-alt](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-format-alt.svg)

- [letter-format](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-format.svg)

- [letter-large](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-large.svg)

- [letter-shadow](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-shadow.svg)

- [letter-small](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letter-small.svg)

- [letters-lowercase](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letters-lowercase.svg)

- [letters-uppercase](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/letters-uppercase.svg)

- [line-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/line-spacing.svg)

- [magnify](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/magnify.svg)

- [number-list](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/number-list.svg)

- [numbers](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbers.svg)

- [numbersign](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/numbersign.svg)

- [paperclip](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paperclip.svg)

- [paragraph](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/paragraph.svg)

- [quote-level](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/quote-level.svg)

- [spellcheck](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/spellcheck.svg)

- [star-list](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/star-list.svg)

- [strikethrough](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/strikethrough.svg)

- [subscript](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/subscript.svg)

- [superscript](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/superscript.svg)

- [table](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/table.svg)

- [text-field](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-field.svg)

- [text-formatting](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-formatting.svg)

- [text-redaction](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-redaction.svg)

- [text-size](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/text-size.svg)

- [triangle-list](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/triangle-list.svg)

- [undeline](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/undeline.svg)

- [word-spacing](https://github.com/snowytime/iconify/blob/master/src/ui/formatting/word-spacing.svg)

#### Gestures

- [clapping-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-filled.svg)

- [clapping-sparkles-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-sparkles-filled.svg)

- [clapping-sparkles](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping-sparkles.svg)

- [clapping](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/clapping.svg)

- [hand-braile-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile-filled.svg)

- [hand-braile](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-braile.svg)

- [hand-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-filled.svg)

- [hand-point-right](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-point-right.svg)

- [hand-pointing-down-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-down-filled.svg)

- [hand-pointing-down](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-down.svg)

- [hand-pointing-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-filled.svg)

- [hand-pointing-left-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-left-filled.svg)

- [hand-pointing-left](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-left.svg)

- [hand-pointing-right-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-right-filled.svg)

- [hand-pointing-slant-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-slant-filled.svg)

- [hand-pointing-slant](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing-slant.svg)

- [hand-pointing](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-pointing.svg)

- [hand-slash](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-slash.svg)

- [hand-slashed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-slashed-filled.svg)

- [hand-spread-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread-filled.svg)

- [hand-spread](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-spread.svg)

- [hand-swipe-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe-filled.svg)

- [hand-swipe](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-swipe.svg)

- [hand-tap-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap-filled.svg)

- [hand-tap](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-tap.svg)

- [hand-wave-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave-filled.svg)

- [hand-wave](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand-wave.svg)

- [hand](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/hand.svg)

- [thumbs-down-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down-filled.svg)

- [thumbs-down](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-down.svg)

- [thumbs-up-filled](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up-filled.svg)

- [thumbs-up](https://github.com/snowytime/iconify/blob/master/src/ui/gestures/thumbs-up.svg)

#### Globe

- [america-fill](https://github.com/snowytime/iconify/blob/master/src/ui/globe/america-fill.svg)

- [america](https://github.com/snowytime/iconify/blob/master/src/ui/globe/america.svg)

- [asia-fill](https://github.com/snowytime/iconify/blob/master/src/ui/globe/asia-fill.svg)

- [asia](https://github.com/snowytime/iconify/blob/master/src/ui/globe/asia.svg)

- [europe-africa-fill](https://github.com/snowytime/iconify/blob/master/src/ui/globe/europe-africa-fill.svg)

- [europe-africa](https://github.com/snowytime/iconify/blob/master/src/ui/globe/europe-africa.svg)

- [oceania-fill](https://github.com/snowytime/iconify/blob/master/src/ui/globe/oceania-fill.svg)

- [oceania](https://github.com/snowytime/iconify/blob/master/src/ui/globe/oceania.svg)

- [world](https://github.com/snowytime/iconify/blob/master/src/ui/globe/world.svg)

#### Health

- [mask-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask-fill.svg)

- [mask](https://github.com/snowytime/iconify/blob/master/src/ui/health/mask.svg)

- [medical-bag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag-fill.svg)

- [medical-bag](https://github.com/snowytime/iconify/blob/master/src/ui/health/medical-bag.svg)

- [medicine-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine-fill.svg)

- [medicine](https://github.com/snowytime/iconify/blob/master/src/ui/health/medicine.svg)

- [pill-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill-fill.svg)

- [pill](https://github.com/snowytime/iconify/blob/master/src/ui/health/pill.svg)

- [stethoscope](https://github.com/snowytime/iconify/blob/master/src/ui/health/stethoscope.svg)

- [syringe-fill](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe-fill.svg)

- [syringe](https://github.com/snowytime/iconify/blob/master/src/ui/health/syringe.svg)

- [test-tubes](https://github.com/snowytime/iconify/blob/master/src/ui/health/test-tubes.svg)

#### Home

- [bath-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/bath-filled.svg)

- [bath](https://github.com/snowytime/iconify/blob/master/src/ui/home/bath.svg)

- [bed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed-filled.svg)

- [bed](https://github.com/snowytime/iconify/blob/master/src/ui/home/bed.svg)

- [chair-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair-filled.svg)

- [chair](https://github.com/snowytime/iconify/blob/master/src/ui/home/chair.svg)

- [closet-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet-filled.svg)

- [closet](https://github.com/snowytime/iconify/blob/master/src/ui/home/closet.svg)

- [couch-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/couch-filled.svg)

- [couch](https://github.com/snowytime/iconify/blob/master/src/ui/home/couch.svg)

- [door-closed](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-closed.svg)

- [door-open](https://github.com/snowytime/iconify/blob/master/src/ui/home/door-open.svg)

- [fan-floor-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor-fill.svg)

- [fan-floor](https://github.com/snowytime/iconify/blob/master/src/ui/home/fan-floor.svg)

- [fanblades-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-fill.svg)

- [fanblades-slash-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash-filled.svg)

- [fanblades-slash](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades-slash.svg)

- [fanblades](https://github.com/snowytime/iconify/blob/master/src/ui/home/fanblades.svg)

- [faucet-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet-filled.svg)

- [faucet](https://github.com/snowytime/iconify/blob/master/src/ui/home/faucet.svg)

- [fireplace-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace-filled.svg)

- [fireplace](https://github.com/snowytime/iconify/blob/master/src/ui/home/fireplace.svg)

- [gift-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/gift-fill.svg)

- [gift](https://github.com/snowytime/iconify/blob/master/src/ui/home/gift.svg)

- [lamp-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp-fill.svg)

- [lamp](https://github.com/snowytime/iconify/blob/master/src/ui/home/lamp.svg)

- [lightbulb-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-filled.svg)

- [lightbulb-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slash-fill.svg)

- [lightbulb-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb-slashed.svg)

- [lightbulb](https://github.com/snowytime/iconify/blob/master/src/ui/home/lightbulb.svg)

- [shower-alt-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-alt-filled.svg)

- [shower-alt](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-alt.svg)

- [shower-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower-filled.svg)

- [shower](https://github.com/snowytime/iconify/blob/master/src/ui/home/shower.svg)

- [sofa-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa-filled.svg)

- [sofa](https://github.com/snowytime/iconify/blob/master/src/ui/home/sofa.svg)

- [toilet-filled](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet-filled.svg)

- [toilet](https://github.com/snowytime/iconify/blob/master/src/ui/home/toilet.svg)

#### Information

- [info-bubble-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-bubble-filled.svg)

- [info-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-bubble.svg)

- [info-circle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-circle-filled.svg)

- [info-circle](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-circle.svg)

- [info-square-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-square-filled.svg)

- [info-square](https://github.com/snowytime/iconify/blob/master/src/ui/information/info-square.svg)

- [question-bubble-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-bubble-filled.svg)

- [question-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-bubble.svg)

- [question-circle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-circle-filled.svg)

- [question-circle](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-circle.svg)

- [question-diamond-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-diamond-filled.svg)

- [question-diamond](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-diamond.svg)

- [question-sqaure-dashed](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-sqaure-dashed.svg)

- [question-square-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-square-filled.svg)

- [question-square](https://github.com/snowytime/iconify/blob/master/src/ui/information/question-square.svg)

- [warning-bubble-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-bubble-filled.svg)

- [warning-bubble](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-bubble.svg)

- [warning-circle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-circle-filled.svg)

- [warning-circle](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-circle.svg)

- [warning-octagon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-octagon-filled.svg)

- [warning-octagon](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-octagon.svg)

- [warning-shield-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-shield-filled.svg)

- [warning-shield](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-shield.svg)

- [warning-square-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-square-filled.svg)

- [warning-square](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-square.svg)

- [warning-triangle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-triangle-filled.svg)

- [warning-triangle](https://github.com/snowytime/iconify/blob/master/src/ui/information/warning-triangle.svg)

#### Lines

- [arrow-down](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-down.svg)

- [arrow-left](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-left.svg)

- [arrow-right](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-right.svg)

- [arrow-up](https://github.com/snowytime/iconify/blob/master/src/ui/lines/arrow-up.svg)

- [checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/lines/checkmark.svg)

- [chevron-left](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-left.svg)

- [chevron-right](https://github.com/snowytime/iconify/blob/master/src/ui/lines/chevron-right.svg)

- [close](https://github.com/snowytime/iconify/blob/master/src/ui/lines/close.svg)

- [crosshairs](https://github.com/snowytime/iconify/blob/master/src/ui/lines/crosshairs.svg)

- [maximize](https://github.com/snowytime/iconify/blob/master/src/ui/lines/maximize.svg)

- [minimize](https://github.com/snowytime/iconify/blob/master/src/ui/lines/minimize.svg)

- [not-allowed](https://github.com/snowytime/iconify/blob/master/src/ui/lines/not-allowed.svg)

#### Location

- [location-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-fill.svg)

- [location-pin-circle](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin-circle.svg)

- [location-pin-slash](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin-slash.svg)

- [location-pin](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-pin.svg)

- [location-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-slash-fill.svg)

- [location-slash](https://github.com/snowytime/iconify/blob/master/src/ui/location/location-slash.svg)

- [location](https://github.com/snowytime/iconify/blob/master/src/ui/location/location.svg)

- [map-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/map-fill.svg)

- [map](https://github.com/snowytime/iconify/blob/master/src/ui/location/map.svg)

- [pin-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-fill.svg)

- [pin-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash-fill.svg)

- [pin-slash](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin-slash.svg)

- [pin](https://github.com/snowytime/iconify/blob/master/src/ui/location/pin.svg)

#### Misc

- [beach-umbrella-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/beach-umbrella-fill.svg)

- [beach-umbrella](https://github.com/snowytime/iconify/blob/master/src/ui/misc/beach-umbrella.svg)

- [bolt-filled](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-filled.svg)

- [bolt-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-slash-fill.svg)

- [bolt-slash](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt-slash.svg)

- [bolt](https://github.com/snowytime/iconify/blob/master/src/ui/misc/bolt.svg)

- [face-ring-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/face-ring-fill.svg)

- [face-ring](https://github.com/snowytime/iconify/blob/master/src/ui/misc/face-ring.svg)

- [glasses](https://github.com/snowytime/iconify/blob/master/src/ui/misc/glasses.svg)

- [hourglass](https://github.com/snowytime/iconify/blob/master/src/ui/misc/hourglass.svg)

- [layers](https://github.com/snowytime/iconify/blob/master/src/ui/misc/layers.svg)

- [mail-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/mail-fill.svg)

- [mail](https://github.com/snowytime/iconify/blob/master/src/ui/misc/mail.svg)

- [message-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/message-fill.svg)

- [message](https://github.com/snowytime/iconify/blob/master/src/ui/misc/message.svg)

- [photos-alt](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos-alt.svg)

- [photos-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos-fill.svg)

- [photos](https://github.com/snowytime/iconify/blob/master/src/ui/misc/photos.svg)

- [piano](https://github.com/snowytime/iconify/blob/master/src/ui/misc/piano.svg)

- [sent-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/sent-fill.svg)

- [sent](https://github.com/snowytime/iconify/blob/master/src/ui/misc/sent.svg)

- [umbrella-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/umbrella-fill.svg)

- [umbrella](https://github.com/snowytime/iconify/blob/master/src/ui/misc/umbrella.svg)

- [user-fill](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user-fill.svg)

- [user-sound](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user-sound.svg)

- [user](https://github.com/snowytime/iconify/blob/master/src/ui/misc/user.svg)

- [voice-slash](https://github.com/snowytime/iconify/blob/master/src/ui/misc/voice-slash.svg)

- [voice](https://github.com/snowytime/iconify/blob/master/src/ui/misc/voice.svg)

#### Nature

- [leaf-filled](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf-filled.svg)

- [leaf](https://github.com/snowytime/iconify/blob/master/src/ui/nature/leaf.svg)

#### Office

- [archive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/archive-fill.svg)

- [archive](https://github.com/snowytime/iconify/blob/master/src/ui/office/archive.svg)

- [bookmark-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-fill.svg)

- [bookmark-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-slash-fill.svg)

- [bookmark-slash](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark-slash.svg)

- [bookmark](https://github.com/snowytime/iconify/blob/master/src/ui/office/bookmark.svg)

- [briefcase-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/briefcase-fill.svg)

- [briefcase](https://github.com/snowytime/iconify/blob/master/src/ui/office/briefcase.svg)

- [calendar](https://github.com/snowytime/iconify/blob/master/src/ui/office/calendar.svg)

- [contact-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/contact-fill.svg)

- [contract](https://github.com/snowytime/iconify/blob/master/src/ui/office/contract.svg)

- [external-drive-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/external-drive-fill.svg)

- [external-drive](https://github.com/snowytime/iconify/blob/master/src/ui/office/external-drive.svg)

- [lanyard-fill](https://github.com/snowytime/iconify/blob/master/src/ui/office/lanyard-fill.svg)

- [lanyard](https://github.com/snowytime/iconify/blob/master/src/ui/office/lanyard.svg)

- [note-lines](https://github.com/snowytime/iconify/blob/master/src/ui/office/note-lines.svg)

- [note](https://github.com/snowytime/iconify/blob/master/src/ui/office/note.svg)

#### Party

- [badge](https://github.com/snowytime/iconify/blob/master/src/ui/party/badge.svg)

- [balloon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon-filled.svg)

- [balloon](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloon.svg)

- [balloons-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons-filled.svg)

- [balloons](https://github.com/snowytime/iconify/blob/master/src/ui/party/balloons.svg)

- [crown-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/crown-filled.svg)

- [crown](https://github.com/snowytime/iconify/blob/master/src/ui/party/crown.svg)

- [medallion-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/medallion-filled.svg)

- [medallion](https://github.com/snowytime/iconify/blob/master/src/ui/party/medallion.svg)

- [party-popper-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/party-popper-filled.svg)

- [party-popper](https://github.com/snowytime/iconify/blob/master/src/ui/party/party-popper.svg)

- [trophy-filled](https://github.com/snowytime/iconify/blob/master/src/ui/party/trophy-filled.svg)

- [trophy](https://github.com/snowytime/iconify/blob/master/src/ui/party/trophy.svg)

#### Phone

- [microphone-filled](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-filled.svg)

- [microphone-slashed-filled](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-slashed-filled.svg)

- [microphone-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone-slashed.svg)

- [microphone](https://github.com/snowytime/iconify/blob/master/src/ui/phone/microphone.svg)

- [phone-filled](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-filled.svg)

- [phone-in-filled](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-in-filled.svg)

- [phone-in](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-in.svg)

- [phone-out-filled](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-out-filled.svg)

- [phone-out](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone-out.svg)

- [phone](https://github.com/snowytime/iconify/blob/master/src/ui/phone/phone.svg)

#### Puzzle

- [puzzle-alt-filled](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-alt-filled.svg)

- [puzzle-alt](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-alt.svg)

- [puzzle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle-filled.svg)

- [puzzle](https://github.com/snowytime/iconify/blob/master/src/ui/puzzle/puzzle.svg)

#### Security

- [fingerprint](https://github.com/snowytime/iconify/blob/master/src/ui/security/fingerprint.svg)

- [key-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/key-filled.svg)

- [key](https://github.com/snowytime/iconify/blob/master/src/ui/security/key.svg)

- [lock-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-filled.svg)

- [lock-open-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open-filled.svg)

- [lock-open](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock-open.svg)

- [lock](https://github.com/snowytime/iconify/blob/master/src/ui/security/lock.svg)

- [shield-checkmark-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-checkmark-filled.svg)

- [shield-checkmark](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-checkmark.svg)

- [shield-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield-filled.svg)

- [shield](https://github.com/snowytime/iconify/blob/master/src/ui/security/shield.svg)

- [unverified-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/unverified-filled.svg)

- [unverified](https://github.com/snowytime/iconify/blob/master/src/ui/security/unverified.svg)

- [verified-filled](https://github.com/snowytime/iconify/blob/master/src/ui/security/verified-filled.svg)

- [verified](https://github.com/snowytime/iconify/blob/master/src/ui/security/verified.svg)

#### Settings

- [gear-alt-filled](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear-alt-filled.svg)

- [gear-alt](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear-alt.svg)

- [gear](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gear.svg)

- [gears-fill](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gears-fill.svg)

- [gears](https://github.com/snowytime/iconify/blob/master/src/ui/settings/gears.svg)

#### Shapes

- [box-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box-fill.svg)

- [box](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/box.svg)

- [circle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle-filled.svg)

- [circle](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/circle.svg)

- [diamond-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond-filled.svg)

- [diamond](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/diamond.svg)

- [heart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-fill.svg)

- [heart-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash-fill.svg)

- [heart-slash](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart-slash.svg)

- [heart](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/heart.svg)

- [hexagon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon-filled.svg)

- [hexagon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/hexagon.svg)

- [octogon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octogon-filled.svg)

- [octogon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/octogon.svg)

- [pentagon-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon-filled.svg)

- [pentagon](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/pentagon.svg)

- [rhombus-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus-filled.svg)

- [rhombus](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/rhombus.svg)

- [seal-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal-filled.svg)

- [seal](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/seal.svg)

- [square-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square-filled.svg)

- [square](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/square.svg)

- [star-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-filled.svg)

- [star-half-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-half-fill.svg)

- [star-slash-fill](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash-fill.svg)

- [star-slash](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star-slash.svg)

- [star](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/star.svg)

- [triangle-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triangle-filled.svg)

- [triangle](https://github.com/snowytime/iconify/blob/master/src/ui/shapes/triangle.svg)

#### Shopping

- [card-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/card-filled.svg)

- [card](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/card.svg)

- [dollar](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/dollar.svg)

- [euro](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/euro.svg)

- [gift-card-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/gift-card-filled.svg)

- [gift-card](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/gift-card.svg)

- [hryvnia](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/hryvnia.svg)

- [pound](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/pound.svg)

- [shopping-bag-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-bag-filled.svg)

- [shopping-bag](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-bag.svg)

- [shopping-basket-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-basket-filled.svg)

- [shopping-basket](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-basket.svg)

- [shopping-cart-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-cart-filled.svg)

- [shopping-cart](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/shopping-cart.svg)

- [tag-filled](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/tag-filled.svg)

- [tag](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/tag.svg)

- [yen](https://github.com/snowytime/iconify/blob/master/src/ui/shopping/yen.svg)

#### Sports

- [oars](https://github.com/snowytime/iconify/blob/master/src/ui/sports/oars.svg)

- [weight-fill](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight-fill.svg)

- [weight](https://github.com/snowytime/iconify/blob/master/src/ui/sports/weight.svg)

#### Thermostat

- [thermostat-low](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-low.svg)

- [thermostat-medium](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-medium.svg)

- [thermostat-slashed](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-slashed.svg)

- [thermostat-sun-filled](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-sun-filled.svg)

- [thermostat-sun](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat-sun.svg)

- [thermostat](https://github.com/snowytime/iconify/blob/master/src/ui/thermostat/thermostat.svg)

#### Tools

- [binoculars-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/binoculars-fill.svg)

- [binoculars](https://github.com/snowytime/iconify/blob/master/src/ui/tools/binoculars.svg)

- [comb-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/comb-fill.svg)

- [comb](https://github.com/snowytime/iconify/blob/master/src/ui/tools/comb.svg)

- [compass](https://github.com/snowytime/iconify/blob/master/src/ui/tools/compass.svg)

- [flashlight-off](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-off.svg)

- [flashlight-on](https://github.com/snowytime/iconify/blob/master/src/ui/tools/flashlight-on.svg)

- [hammer-filled](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer-filled.svg)

- [hammer](https://github.com/snowytime/iconify/blob/master/src/ui/tools/hammer.svg)

- [magnifying-glass](https://github.com/snowytime/iconify/blob/master/src/ui/tools/magnifying-glass.svg)

- [screwdriver-filled](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver-filled.svg)

- [screwdriver](https://github.com/snowytime/iconify/blob/master/src/ui/tools/screwdriver.svg)

- [toolbox-fill](https://github.com/snowytime/iconify/blob/master/src/ui/tools/toolbox-fill.svg)

- [toolbox](https://github.com/snowytime/iconify/blob/master/src/ui/tools/toolbox.svg)

- [tools-filled](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools-filled.svg)

- [tools](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tools.svg)

- [tuning-fork](https://github.com/snowytime/iconify/blob/master/src/ui/tools/tuning-fork.svg)

- [wrench-filled](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench-filled.svg)

- [wrench](https://github.com/snowytime/iconify/blob/master/src/ui/tools/wrench.svg)

- [zoom-in](https://github.com/snowytime/iconify/blob/master/src/ui/tools/zoom-in.svg)

- [zoom-out](https://github.com/snowytime/iconify/blob/master/src/ui/tools/zoom-out.svg)

#### Transportation

- [arrival](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/arrival.svg)

- [bike](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bike.svg)

- [bus-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus-filled.svg)

- [bus](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/bus.svg)

- [car-electric-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric-filled.svg)

- [car-electric](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-electric.svg)

- [car-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car-filled.svg)

- [car](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/car.svg)

- [cars-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars-filled.svg)

- [cars](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/cars.svg)

- [departure](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/departure.svg)

- [double-decker-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/double-decker-filled.svg)

- [double-decker](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/double-decker.svg)

- [ferry-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ferry-filled.svg)

- [ferry](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ferry.svg)

- [gas-pump-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gas-pump-filled.svg)

- [gas-pump](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/gas-pump.svg)

- [plane](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/plane.svg)

- [sailboat-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat-filled.svg)

- [sailboat](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/sailboat.svg)

- [scooter](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/scooter.svg)

- [ship-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship-filled.svg)

- [ship](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/ship.svg)

- [shipping-box](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/shipping-box.svg)

- [shopping-box-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/shopping-box-filled.svg)

- [train-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train-filled.svg)

- [train-tunnel](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train-tunnel.svg)

- [train](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/train.svg)

- [tram-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram-filled.svg)

- [tram](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/tram.svg)

- [van-filled](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/van-filled.svg)

- [van](https://github.com/snowytime/iconify/blob/master/src/ui/transportation/van.svg)

#### Travel

- [bag-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/bag-fill.svg)

- [bag](https://github.com/snowytime/iconify/blob/master/src/ui/travel/bag.svg)

- [suitcase-cart-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart-fill.svg)

- [suitcase-cart](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-cart.svg)

- [suitcase-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase-fill.svg)

- [suitcase](https://github.com/snowytime/iconify/blob/master/src/ui/travel/suitcase.svg)

- [tent-fill](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent-fill.svg)

- [tent](https://github.com/snowytime/iconify/blob/master/src/ui/travel/tent.svg)

#### Weather

- [aqi-high](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-high.svg)

- [aqi-low](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-low.svg)

- [aqi-medium](https://github.com/snowytime/iconify/blob/master/src/ui/weather/aqi-medium.svg)

- [carbon-dioxide-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-dioxide-fill.svg)

- [carbon-dioxide](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-dioxide.svg)

- [carbon-monoxide-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-monoxide-fill.svg)

- [carbon-monoxide](https://github.com/snowytime/iconify/blob/master/src/ui/weather/carbon-monoxide.svg)

- [cloud-bolt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-fill.svg)

- [cloud-bolt-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-rain-fill.svg)

- [cloud-bolt-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-rain.svg)

- [cloud-bolt-sun-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-sun-fill.svg)

- [cloud-bolt-sun](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt-sun.svg)

- [cloud-bolt](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-bolt.svg)

- [cloud-drizzle-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle-fill.svg)

- [cloud-drizzle](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-drizzle.svg)

- [cloud-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fill.svg)

- [cloud-fog-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog-fill.svg)

- [cloud-fog](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-fog.svg)

- [cloud-hail-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail-fill.svg)

- [cloud-hail](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-hail.svg)

- [cloud-heavy-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain-fill.svg)

- [cloud-heavy-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-heavy-rain.svg)

- [cloud-moon-bolt-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-bolt-fill.svg)

- [cloud-moon-bolt](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-bolt.svg)

- [cloud-moon-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-fill.svg)

- [cloud-moon-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain-fill.svg)

- [cloud-moon-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon-rain.svg)

- [cloud-moon](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-moon.svg)

- [cloud-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain-fill.svg)

- [cloud-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-rain.svg)

- [cloud-sleet-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sleet-fill.svg)

- [cloud-sleet](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sleet.svg)

- [cloud-smoke-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke-fill.svg)

- [cloud-smoke](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-smoke.svg)

- [cloud-snow-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow-fill.svg)

- [cloud-snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-snow.svg)

- [cloud-sun-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-fill.svg)

- [cloud-sun-rain-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain-fill.svg)

- [cloud-sun-rain](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun-rain.svg)

- [cloud-sun](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud-sun.svg)

- [cloud](https://github.com/snowytime/iconify/blob/master/src/ui/weather/cloud.svg)

- [drop-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/drop-fill.svg)

- [drop](https://github.com/snowytime/iconify/blob/master/src/ui/weather/drop.svg)

- [humidity-fill](https://github.com/snowytime/iconify/blob/master/src/ui/weather/humidity-fill.svg)

- [humidity](https://github.com/snowytime/iconify/blob/master/src/ui/weather/humidity.svg)

- [snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather/snow.svg)

- [tornado](https://github.com/snowytime/iconify/blob/master/src/ui/weather/tornado.svg)

- [wind-snow](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind-snow.svg)

- [wind](https://github.com/snowytime/iconify/blob/master/src/ui/weather/wind.svg)

