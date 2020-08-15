const animalsData = [
  [
    {
      id: 1,
      name: 'Слон',
      species: 'Loxodonta',
      description: 'Слон — крупное толстокожее хоботное млекопитающее семейства слоновых. Самый крупный наземный обитатель Земли в настоящее время. Ареал обитания — в тропических лесах и саваннах.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/05/%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%BB%D0%BE%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-%D1%81%D0%B0%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BB%D0%BE%D0%BD.jpg',
      audio: 'https://noisefx.ru/noise_base/06/02863.mp3',
      imageFile: 'слон.mp3',
      audioFile: 'слон.jpg'
    },
    {
      id: 2,
      name: 'Лев',
      species: 'Panthera leo',
      description: 'Покажется удивительным, но львы — животные, которые имеют самое маленькое сердце среди крупных хищников. Именно поэтому особой выносливостью они не отличаются, хотя при беге на небольшие расстояния львы развивают скорость до 80 км/ч. В природных условиях львы живут 12-15 лет, в неволе продолжительность жизни увеличивается на 5-7 лет.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/05/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BB%D1%8C%D0%B2%D0%B0.jpg',
      audio: 'https://noisefx.ru/noise_base/06/02860.mp3',
      imageFile: 'лев.mp3',
      audioFile: 'лев.jpg'
    },
    {
      id: 3,
      name: 'Носорог',
      species: 'Rhinocerotidae',
      description: 'У носорогов хорошо развито обоняние: именно на него животные полагаются больше, чем на другие органы чувств. Объем их носовой полости превышает объем головного мозга. Также у носорогов хорошо развит слух: их уши, похожие на трубки, постоянно вращаются, улавливая даже слабые звуки. А вот со зрением у великанов плохо. Носороги видят только подвижные предметы с расстояния не более 30 метров.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2018/01/%D0%9D%D0%BE%D1%81%D0%BE%D1%80%D0%BE%D0%B3-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://zvukipro.com/uploads/files/2019-10/1570454502_952beab5e9ea2a8.mp3',
      imageFile: 'носорог.mp3',
      audioFile: 'носорог.jpg'
    },
    {
      id: 4,
      name: 'Леопард',
      species: 'Panthera pardus',
      description: 'Леопарды – это животные осторожные и скрытные, но при этом очень смелые. Голос леопарда настолько громкий, что его слышно в горах за несколько километров. Рычание барса напоминает звук пилы, вгрызающейся в дерево.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2017/08/%D0%9B%D0%B5%D0%BE%D0%BF%D0%B0%D1%80%D0%B4-%D1%84%D0%BE%D1%82%D0%BE-%D0%BB%D0%B0%D1%82.-Panthera-pardus.jpg',
      audio: 'https://noisefx.ru/noise_base/priroda/givotnie/00957.mp3',
      imageFile: 'леопард.mp3',
      audioFile: 'леопард.jpg'
    },
    {
      id: 5,
      name: 'Жираф',
      species: 'Giraffa camelopardalis',
      description: 'Как спят жирафы? Жираф подгибает длинные ноги под себя, одну из них отводя в сторону, а затем, изгибаясь калачиком, кладет голову себе на круп. Также жирафы могут спать стоя. Сон длится недолго: в течение ночи жираф то и дело поднимается на ноги, чтобы попить или съесть что-нибудь. Млекопитающему не требуется многочасовой сон – жирафу достаточно всего лишь от 10 минут до 2 часов сна в сутки.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/05/%D0%90%D0%BD%D0%B3%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-%D0%B6%D0%B8%D1%80%D0%B0%D1%84.jpg',
      audio: 'https://zvukipro.com/uploads/files/2019-06/1561704378_kak-govorit-zhiraf.mp3',
      imageFile: 'жираф.mp3',
      audioFile: 'жираф.jpg'
    },
    {
      id: 6,
      name: 'Зебра',
      species: 'Hippotigris',
      description: 'Бегают зебры быстро, при необходимости могут развивать скорость до 80 км/ч. В случае преследования зебра использует особую тактику бега зигзагами, что вкупе с особой выносливостью делает животное недосягаемой добычей для многих хищников.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%A1%D0%B0%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B5%D0%B1%D1%80%D0%B0-%D0%B1%D1%83%D1%80%D1%87%D0%B5%D0%BB%D0%BB%D0%BE%D0%B2%D0%B0-%D0%B7%D0%B5%D0%B1%D1%80%D0%B0-%D0%BB%D0%B0%D1%82.-Equus-quagga.jpg',
      audio: 'https://zvukipro.com/uploads/files/2018-12/1544446884_zebra7.mp3',
      imageFile: 'зебра.mp3',
      audioFile: 'зебра.jpg'
    }
  ],
  [
    {
      id: 1,
      name: 'Медведь',
      species: 'Ursus',
      description: 'Медведи не отличаются острым зрением и хорошо развитым слухом. Это компенсируется великолепным обонянием. Иногда животные встают на задние лапы, чтобы при помощи нюха получить информацию об окружающей обстановке.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/03/%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/07/03419.mp3',
      imageFile: 'медведь.mp3',
      audioFile: 'медведь.jpg'
    },
    {
      id: 2,
      name: 'Волк',
      species: 'Canis lupus',
      description: 'Большинство волков — хищники среднего и большого размера, наиболее крупными являются серый и полярный волки: их рост в холке может достигать 85 см, а длина туловища без учета хвоста составляет 150-160 см. Размер и вес хищников полностью соответствуют правилу Бергмана: чем суровее среда обитания — тем крупнее зверь.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/01/%D0%92%D0%BE%D0%BB%D0%BA-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/09/04440.mp3',
      imageFile: 'волк.mp3',
      audioFile: 'волк.jpg'
    },
    {
      id: 3,
      name: 'Рысь',
      species: 'Lynx',
      description: 'Рысь легко опознать по короткому, как будто обрубленному хвостику с чёрным кончиком (у рыжей рыси — с белым кончиком), тёмным кисточкам жёстких волос на больших треугольных ушах, длинной шерсти по бокам круглой морды и пушистому меху в крапинку.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2015/11/%D0%A0%D1%8B%D1%81%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BB%D0%B0%D1%82.-Lynx-rufus.jpg',
      audio: 'https://noisefx.ru/noise_base/priroda/givotnie/00943.mp3',
      imageFile: 'рысь.mp3',
      audioFile: 'рысь.jpg'
    },
    {
      id: 4,
      name: 'Лось',
      species: 'Alces alces',
      description: 'Лось – крупнейший представитель семейства оленевых. Это парнокопытное млекопитающее еще называют сохатым – за роскошные рога, формой напоминающие соху. ',
      image: 'http://imgtube.ru/images/stories/2013/02/913-losj/moose4.jpg',
      audio: 'https://zvukipro.com/uploads/files/2017-08/1504022225_zvuki-losja.mp3',
      imageFile: 'лось.mp3',
      audioFile: 'лось.jpg'
    },
    {
      id: 5,
      name: 'Заяц',
      species: 'Lepus',
      description: 'Цвет зайца зависит от сезона. Летом мех животного имеет рыжевато-серый, бурый или коричневый оттенок. Из-за темного цвета подшерстка окрас получается неравномерный с крупными и мелкими «пестринами». Мех на животе белого цвета. Зайцы меняют окраску зимой, их мех светлеет, но полностью белоснежным становится только заяц-беляк. Кончики ушей у всех представителей рода остаются черными круглый год.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/03/%D0%97%D0%B0%D1%8F%D1%86-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://zvukipro.com/uploads/files/2018-11/1542655490_lyuboznayki_-z_uki-zhi_otnyh-krik-zayca.mp3',
      imageFile: 'заяц.mp3',
      audioFile: 'заяц.jpg'
    },
    {
      id: 6,
      name: 'Лиса',
      species: 'Vulpes',
      description: 'Пушистый хвост лисицы служит своеобразным стабилизатором во время бега, а в зимние холода используется для дополнительной защиты от морозов. Длина хвоста лисы зависит от вида. У фенека она достигает 20-30 см. Длина хвоста лисицы обыкновенной равна 40-60 см.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/08/%D0%9B%D0%B8%D1%81%D0%B0-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://zvukipro.com/uploads/files/2018-10/1539110374_zvuki-izdavaemye-lisoj.mp3',
      imageFile: 'лиса.mp3',
      audioFile: 'лиса.jpg'
    }
  ],
  [
    {
      id: 1,
      name: 'Гиббон',
      species: 'Hylobatidae',
      description: 'Гиббоновые являются бесхвостыми приматами. Особенно заметно то, что их передние конечности значительно длиннее, чем задние. Это обстоятельство позволяет им передвигаться с помощью брахиации — уникального в животном мире способа передвижения, при котором они раскачиваются на руках, перемещаясь прыжками с ветки на ветку. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%D0%9A%D0%B0%D0%BC%D0%BF%D1%83%D1%87%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%B8%D0%B1%D0%B1%D0%BE%D0%BD_%28%D1%81%D0%B0%D0%BC%D0%BA%D0%B0%29.jpg/1024px-%D0%9A%D0%B0%D0%BC%D0%BF%D1%83%D1%87%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%B8%D0%B1%D0%B1%D0%BE%D0%BD_%28%D1%81%D0%B0%D0%BC%D0%BA%D0%B0%29.jpg',
      audio: 'https://zvukipro.com/uploads/files/2020-02/1582038088_751e422db7c0a96.mp3',
      imageFile: 'гиббон.mp3',
      audioFile: 'гиббон.jpg'
    },
    {
      id: 2,
      name: 'Шимпанзе',
      species: 'Pan',
      description: 'Шимпанзе считаются самыми близкими родственниками человека. Исходя из данных имеющихся в наличии на 2018 год, их геном отличается от человеческого на 6,4 %, то есть совпадение человеческого генома и генома шимпанзе составляет 93,6 %',
      image: 'https://cdn25.img.ria.ru/images/149737/92/1497379218_0:0:3088:2003_1440x900_80_0_1_ad5b174ce8e10f2a4a47c6d393e2f808.jpg.webp?source-sid=Fotolia',
      audio: 'https://zvukipro.com/uploads/files/2020-02/1581603844_20efd138c3c21f2.mp3',
      imageFile: 'шимпанзе.mp3',
      audioFile: 'шимпанзе.jpg.webp'
    },
    {
      id: 3,
      name: 'Бабуин',
      species: 'Papio cynocephalus',
      description: 'Бабуин распространён в Средней и Восточной Африке; обитает в степных и гористых местностях. Питается растительной (плоды, луковицы и т. д.) и животной (насекомые, мелкие позвоночные) пищей. Бабуины — приматы с высокоразвитыми социальными взаимоотношениями, которые никогда не живут поодиночке.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Papio_cynocephalus02.jpg?uselang=ru',
      audio: 'https://zvukipro.com/uploads/files/2020-01/1578069775_10d20fbf5799e33.mp3',
      imageFile: 'бабуин.mp3',
      audioFile: 'бабуин.jpg'
    },
    {
      id: 4,
      name: 'Горилла',
      species: 'Gorilla',
      description: 'Гориллы передвигаться по шарнирной ходьбе , хотя они иногда ходить на двух ногах на короткие расстояния, неся пищу или в оборонительных ситуациях, а некоторые из горных горилл использовать другие части рук их , чтобы помочь локомоции.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Male_silverback_Gorilla.JPG',
      audio: 'https://zvukipro.com/uploads/files/2019-07/1562832416_6263186e18ee100.mp3',
      imageFile: 'горилла.mp3',
      audioFile: 'горилла.jpg'
    },
    {
      id: 5,
      name: 'Мартышка',
      species: 'Cercopithecus',
      description: 'Мартышки – это небольшие животные, хорошо развитые физически, достаточно подвижные и весьма интересные. Особый интерес представляет их сообразительность, а также невероятное любопытство. Эти животные всегда были героями цирковых номеров и различных шоу, поскольку они легко дрессируются и без проблем контактируют с человеком.',
      image: 'https://faunistics.com/wp-content/uploads/2020/04/1-8.jpg',
      audio: 'https://zvukipro.com/uploads/files/2018-11/1541411058_monkey-chatter-2_z17aqavo1.mp3',
      imageFile: 'мартышка.mp3',
      audioFile: 'мартышка.jpg'
    },
    {
      id: 6,
      name: 'Колобус',
      species: 'Colobus',
      description: 'Колобусы идеально приспособлены для того, чтобы раскачиваться и прыгать по вершинам деревьев, и не менее проворны, когда дело касается кормёжки — им достаточно пригнуть ветку и оборвать листья губами. Колобусы необыкновенные прыгуны. Они могут изменять направление в полёте и совершать прыжки с 6—10 метров к ветвям нижерастущих деревьев.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Affe_Gueryza_0509012.jpg?uselang=ru',
      audio: 'https://zvukipro.com/uploads/files/2018-11/1541411159_colobus-monkeys-hoot-angry-fast_g1z5l9no.mp3',
      imageFile: 'колобус.mp3',
      audioFile: 'колобус.jpg'
    }
  ],
  [
    {
      id: 1,
      name: 'Петух',
      species: 'Gallus',
      description: 'Петух – это птица, прародителем которой считается банкивская джунглевая курица. Обитательница густых лесов и бамбуковых зарослей умела неплохо летать, отдыхала и ночевала на деревьях. Может, именно с тех времен у современного петуха осталась привычка взбираться как можно выше с целью обозрения окружающей местности и своевременного предупреждения курочек о приближении опасности.',
      image: 'https://fb.ru/misc/i/gallery/24396/1658176.jpg',
      audio: 'https://noisefx.ru/noise_base/04/02036.mp3',
      imageFile: 'петух.mp3',
      audioFile: 'петух.jpg'
    },
    {
      id: 2,
      name: 'Осёл',
      species: 'Equus asinus asinus',
      description: 'Ослы сыграли важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко распространённы в хозяйстве многих развивающихся стран. Осёл использовался в качестве рабочего животного не менее 5000 лет.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg',
      audio: 'https://noisefx.ru/noise_base/06/02856.mp3',
      imageFile: 'осел.mp3',
      audioFile: 'осел.jpg'
    },
    {
      id: 3,
      name: 'Коза',
      species: 'Capra hircus',
      description: 'Коза — одно из первых прирученных животных. Одомашнена на Ближнем Востоке, приблизительно 9 тыс. лет назад. Предком домашней козы был дикий безоаровый козёл.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Goats_Go_Inspecting..jpg?uselang=ru',
      audio: 'https://noisefx.ru/noise_base/08/03912.mp3',
      imageFile: 'коза.mp3',
      audioFile: 'коза.jpg'
    },
    {
      id: 4,
      name: 'Лошадь',
      species: 'Equus',
      description: 'У лошадей отлично развит слух, хорошее зрение и обоняние. Тело лошади покрывает волосяной покров, длина и жесткость которого варьируется в зависимости от расположения: челка, грива и хвост имеют длинные и шелковистые волосы, тогда как туловище защищено более короткой и жесткой шерстью. Цвет покрова определяет масть лошади, с возрастом интенсивность окраса может изменяться.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/02/%D0%9F%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%BB%D0%BE%D1%88%D0%B0%D0%B4%D0%B8-%D0%9F%D0%B0%D1%81%D0%BE-%D0%A4%D0%B8%D0%BD%D0%BE-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/03/01426.mp3',
      imageFile: 'лошадь.mp3',
      audioFile: 'лошадь.jpg'
    },
    {
      id: 5,
      name: 'Гусь',
      species: 'Anser',
      description: 'Наиболее часто встречаются крупные гуси, они лучше других видов приспособлены к разведению в промышленном масштабе. Средние гуси широко распространены в домашнем хозяйстве. А вот мелкие породы разводят редко, преимущественно в декоративных целях.',
      image: 'https://o-prirode.ru/wp-content/uploads/2017/07/opisanie-gusey-e1500645322779.jpg',
      audio: 'https://noisefx.ru/noise_base/04/02019.mp3',
      imageFile: 'гусь.mp3',
      audioFile: 'гусь.jpg'
    },
    {
      id: 6,
      name: 'Свинья',
      species: 'Suidae',
      description: 'Свиньи вовсе не грязные животные и любят валяться в грязи не из-за праздности. Высыхая на коже свиньи, грязь отваливается вместе с паразитами, которые обитали на животном. К тому же грязевые ванны помогают хрюшке охладить организм в жаркую погоду.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/05/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0-%D1%81%D0%B2%D0%B8%D0%BD%D1%8C%D0%B8-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/ferma_derevnya/01007.mp3',
      imageFile: 'свинья.mp3',
      audioFile: 'свинья.jpg'
    }
  ],
  [
    {
      id: 1,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловей - одна их самых распространённых у нас певчих птиц. Все пёрышки его окрашены в однообразный бурый цвет, который на брюшке светлее и переходит в белый. Большие тёмные глаза придают особую прелесть соловушке. Питаясь только насекомыми, соловей на зиму улетает в тёплые страны.',
      image: 'https://o-prirode.ru/wp-content/uploads/2017/06/osobennosti-pitaniya-solovya-e1500469182472.jpg',
      audio: 'https://noisefx.ru/noise_base/04/02028.mp3',
      imageFile: 'соловей.mp3',
      audioFile: 'соловей.jpg'
    },
    {
      id: 2,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Из множества звуков земли - пение птиц, треск кузнечиков, журчание лесного ручья - самый весёлый и радостный звук - пение полевых жаворонков. Ещё ранней весной, когда на полях лежит рыхлый снег, но уже кое-где на припеке образовались первые тёмные проталины, прилетают и начинают петь наши весенние ранние гости - жаворонки.',
      image: 'https://opt-27925.ssl.1c-bitrix-cdn.ru/upload/iblock/aec/foto_javoronok.jpg?1584462672137865',
      audio: 'https://noisefx.ru/noise_base/04/02038.mp3',
      imageFile: 'жаворонок.mp3',
      audioFile: 'жаворонок.jpg'
    },
    {
      id: 3,
      name: 'Канарейка',
      species: '	Serinus canaria',
      description: 'Канарейки – простые птицы, они не перебирают едой и быстро привыкают к человеку. Их поведение очень дружелюбное и мирное. На сегодняшний день канарейка — это домашняя птица. Но предками канареек принято считать канареечных вьюрков – жителей Канарских островов.',
      image: 'https://o-prirode.ru/wp-content/uploads/2017/06/povedenie-i-racion-kanareek-e1499615300307.jpg',
      audio: 'https://noisefx.ru/noise_base/04/02009.mp3',
      imageFile: 'канарейка.mp3',
      audioFile: 'канарейка.jpg'
    },
    {
      id: 4,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушка, единственная из всех птиц, подкладывает свои яйца в чужие гнёзда и никогда сама не выкармливает своих птенцов. Снеся на земле яйцо, кукушка в клюве или лапках переносит и кладет его в чужое гнездо. Для неё не имеет значения, где расположено гнездо, в которое надо положить яйцо, - на открытом месте или в дупле. Главное, найти птицу, у которой окраска яиц похожа на яйцо кукушки.',
      image: 'http://obshe.net/upload/000/u11/e4/6d/bef50264.jpg',
      audio: 'https://noisefx.ru/noise_base/09/04409.mp3',
      imageFile: 'кукушка.mp3',
      audioFile: 'кукушка.jpg'
    },
    {
      id: 5,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Соколы считаются самыми быстрыми птицами. Полет хищника быстрый, маневренный, стремительный. В полете скорость сокола составляет 90-100 километров в час.',
      image: 'https://o-prirode.ru/wp-content/uploads/2019/09/5.jpg',
      audio: 'https://noisefx.ru/noise_base/10/04887.mp3',
      imageFile: 'сокол.mp3',
      audioFile: 'сокол.jpg'
    },
    {
      id: 6,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи по природе драчливые, вредные создания. Защищая территорию, нападают на неугодных птиц и животных целыми стаями. Даже птицы большего размера предпочитают не связываться с маленькими нахалами.',
      image: 'https://o-prirode.ru/wp-content/uploads/2019/07/vorobei.jpg',
      audio: 'https://noisefx.ru/noise_base/10/04862.mp3',
      imageFile: 'воробей.mp3',
      audioFile: 'воробей.jpg'
    }
  ],
  [
    {
      id: 1,
      name: 'Пчела',
      species: 'Anthophila',
      description: 'Взрослые особи и личинки пчел питаются пыльцой и цветочным нектаром. Благодаря строению ротового аппарата, собранный нектар через хоботок поступает в зоб, где перерабатывается в мед.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/02/%D0%9F%D1%87%D0%B5%D0%BB%D0%B0-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/10/04689.mp3',
      imageFile: 'пчела.mp3',
      audioFile: 'пчела.jpg'
    },
    {
      id: 2,
      name: 'Сверчок',
      species: 'Acheta domesticus',
      description: 'Сверчки - это довольно небольшие насекомые. Размер стройного, слегка уплощенного тела, покрытого твердой хитиновой оболочкой, у взрослых особей колеблется от 16 до 26 мм в длину. Цвет сверчка может быть серовато-желтым, соломенно-палевым или различных оттенков коричневого с разводами, крапинками или пятнами неопределенной формы.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/09/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B3%D0%BE-%D1%81%D0%B2%D0%B5%D1%80%D1%87%D0%BA%D0%B0.jpg',
      audio: 'https://noisefx.ru/noise_base/17/08255.mp3',
      imageFile: 'сверчок.mp3',
      audioFile: 'сверчок.jpg'
    },
    {
      id: 3,
      name: 'Муха',
      species: 'Musca',
      description: 'Длина тела мухи может быть от нескольких миллиметров до 2 см. Насекомое имеет пару перепончатых крыльев, довольно крупную голову, наделенную ротовым органом — хоботком, предназначенным для всасывания жидкой еды.',
      image: 'https://nashzelenyimir.ru/wp-content/uploads/2016/05/%D0%9C%D1%83%D1%85%D0%B0-%D1%84%D0%BE%D1%82%D0%BE.jpg',
      audio: 'https://noisefx.ru/noise_base/17/08256.mp3',
      imageFile: 'муха.mp3',
      audioFile: 'муха.jpg'
    },
    {
      id: 4,
      name: 'Оса',
      species: 'Vespula vulgaris',
      description: 'Глаза осы имеют сложное строение. Благодаря большим размерам она может видеть большое пространство вокруг на 180С. Еще 3 небольших глаза находятся на макушке головы. Сразу разглядеть их невозможно. Рядом находятся усики-антенны.',
      image: 'https://animals-wild.ru/uploads/posts/2017-12/1513181182_ukus-osy.jpg',
      audio: 'https://noisefx.ru/noise_base/10/04683.mp3',
      imageFile: 'оса.mp3',
      audioFile: 'оса.jpg'
    },
    {
      id: 5,
      name: 'Цикада',
      species: 'Lyristes plebejus',
      description: 'Цикады используют специальную звуковую мембрану, приводимую в колебание мышцами. Получающийся металлический звук резонирует в специальных полостях внутри тела, достигая большой громкости.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Cicadidae_-_Cicada_orni-2.JPG?uselang=ru',
      audio: 'https://noisefx.ru/noise_base/priroda/nasekomye/00104.mp3',
      imageFile: 'цикада.mp3',
      audioFile: 'цикада.jpg'
    },
    {
      id: 6,
      name: 'Мотылёк',
      species: 'Loxostege sticticalis',
      description: 'Передние крылья окрашены в серовато-коричневые цвета, на них расположены бурые пятна и желтоватая полосой вдоль их наружного края. Окраска задних крыльев серая. У самцов усики пильчатые, у самок — нитевидные.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Loxostege_sticticalis.jpg?uselang=ru',
      audio: 'https://zvukipro.com/uploads/files/2020-07/1593588571_040420499543.mp3',
      imageFile: 'мотылек.mp3',
      audioFile: 'мотылек.jpg'
    }
  ]
];

export default animalsData;
