# PerCiLokGotcha

PerCiLokGotcha adalah proyek UTS untuk mata kuliah Intro to Internet Technology (IF231).<br />
PerCiLokGotcha adalah program game yang mensimulasikan mempelihara hewan peliharaan.<br />
Game ini memiliki beberapa fitur yang akan dijabarkan di poin berikut.

## Key Features

* Pilihan Avatar yang banyak.
  - Terdapat 3 avatar yang berbeda yaitu: anjing, kucing dan panda.
* Avatar yang akan berubah setiap level berubah.
  - Terdapat 3 level yang berbeda yaitu: Baby, Child dan Adult.
* Bar yang responsive tergantung dari input user.
  - Terdapat 4 bar yang bertindak sebagai status hewan peliharaan yaitu: Hunger, Hygiene, Sleep, dan Happiness.
* Fitur Difficulty yang akan memberi pemain tantangan yang berbeda.
  - Terdapat 3 tingkat kesulitan yaitu: Easy, Normal dan Hard.
* Fitur Bar yang akan berubah warna jika value bar sudah mencapai threshold tertentu.
* Fitur jam yang berdetak seiring berjalannya game.
* Background yang responsive terhadap simulasi waktu di dalam game tersebut.

## Flow of the Game

* Status pada bar Hunger, Hygiene, Sleep, dan Happiness akan menjadi 50% di saat awal mula game.
* Ketika user memilih untuk bermain dengan peliharaannya, bar Hygiene, Sleep akan menurun, serta bar Hunger akan meningkat.
  - Dan akan berlaku juga peningkatan atau penurunan bar tertenty saat dilakukan aksi lainnya seperti: mandi, tidur dan makan.
* Setiap meningkatnya level, kuantitas berkurangnya value pada bar akan lebih besar per tick.
* Di setiap difficulty akan dibedakan dengan seberapa cepat value pada bar berkurang (misal 1 per detik, atau 1 per 0,5 detik).

## Built with 

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]


## Contributors

* [Muhammad Lutfi Salinggih](https://www.instagram.com/salinggih_/)	`00000073400`
* [Aditya Stephen Hung](https://www.instagram.com/adityastpn_/)		`00000072563`
* [Hafizh Kumara Widyadhana](https://www.instagram.com/haaa_kw/)	`00000073191`
* [Vincent Marlino](https://www.instagram.com/marli.no/)		`00000072738`


<!-- MARKDOWN LINKS & IMAGES -->
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 