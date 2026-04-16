window.TRIP_DATA = {
  meta: {
    title: "Париж для двоих",
    dateRange: "23 апреля – 1 мая 2026",
    hotel: "Numa Paris Champs-Élysées, 37 Rue Marbeuf, 75008 Paris",
    hotelMapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris",
    weather: {
      latitude: 48.8696,
      longitude: 2.3032,
      timezone: "Europe/Paris"
    },
    arrival: "Заселение: Wed, Apr 22 около 20:00",
    departure: "Выселение: Fri, May 01 до 13:00, вылет из ORY в 19:15",
    travelStyle: "без гонки, с хорошим кофе, прогулками и осмысленным шопингом",
    editNote:
      "Чтобы менять программу позже, правь только trip-data.js: даты, тайминги, тексты и ссылки лежат там, а обе страницы перестраиваются автоматически.",
    intro:
      "Это компактный красивый гид по поездке: с маршрутом по дням, полезными ссылками, запасными сценариями и спокойными вечерними опциями, когда хочется просто вернуться в номер и никуда больше не идти.",
    principles: [
      "Лувр здесь живёт во второй половине среды: у музея есть вечернее окно до 21:00, и такой ритм обычно ощущается мягче, чем дневная суета.",
      "Версаль собран как отдельный выездной день: дворец, сады, Trianon и спокойное возвращение в Париж.",
      "Воскресенье сохранено лёгким и прогулочным, чтобы в поездке было место не только слотам, но и воздуху.",
      "Маршрут держится на ваших реальных интересах: Dior, Лувр, speciality-кофе, парки, предметный шопинг, Маре и красивый Париж без обязательных модных галочек."
    ],
    gallery: [
      {
        title: "Лувр вечером",
        image:
          "https://images.unsplash.com/photo-1751634851652-646db47de447?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1400",
        credit: "Matthew Pearce / Unsplash",
        creditUrl: "https://unsplash.com/photos/the-louvre-museum-and-pyramid-in-paris-i2jTcCpDBfM"
      },
      {
        title: "Монмартр утром",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&fm=jpg&q=80&w=1400",
        credit: "Sung Jin Cho / Unsplash",
        creditUrl: "https://unsplash.com/photos/the-sacre-coeur-basilica-in-paris-KIvp_ZwY7ys"
      },
      {
        title: "Версаль",
        image:
          "https://images.unsplash.com/photo-1722718136570-b0ad04a9ad12?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1400",
        credit: "Bo Zhang / Unsplash",
        creditUrl: "https://unsplash.com/photos/a-large-garden-with-a-pond-surrounded-by-trees-HoJ-93jyIsg"
      }
    ],
    roomFood: {
      title: "Тихий вечер в номере",
      intro:
        "На таких вечерах не нужен ещё один ресторан. Лучше заранее собрать спокойный сценарий: продукты рядом с отелем или понятная доставка прямо в номер.",
      stores: [
        {
          name: "Franprix Marbeuf",
          note:
            "Самый близкий сценарий буквально у адреса отеля: хорошо для воды, йогуртов, фруктов, сыра, снеков и базового завтрака на следующее утро. Часы на праздники стоит проверить ближе к дате.",
          official: null,
          mapsQuery: "Franprix 33 Rue Marbeuf 75008 Paris"
        },
        {
          name: "Monoprix Champs-Élysées",
          note:
            "Самый удобный универсальный супермаркет поблизости: еда, бытовые мелочи, косметика и хорошие late-night покупки. Официальный сайт показывает длинные часы работы и центральную локацию.",
          official: "https://www.monoprix.fr/39.html",
          mapsQuery: "Monoprix 109 Rue de la Boétie 75008 Paris"
        },
        {
          name: "Picard Marceau",
          note:
            "Если хочется собрать именно «умный запас в номер»: готовые замороженные блюда, супы и десерты. Хорошо подходит на вечер после Версаля или на утро вылета.",
          official: "https://magasins.picard.fr/552-picard-marceau",
          mapsQuery: "Picard 6 Avenue Marceau 75008 Paris"
        }
      ],
      deliveryApps: [
        {
          name: "Deliveroo",
          note:
            "Самый понятный сценарий для ужина без сил: в Париже через него удобно заказывать еду и даже базовые groceries.",
          official: "https://deliveroo.fr/en/",
          mapsQuery: "37 Rue Marbeuf 75008 Paris"
        },
        {
          name: "Uber Eats",
          note:
            "Хорош как второй понятный вариант, если в конкретный вечер у Deliveroo будет слабый выбор рядом с адресом.",
          official: "https://www.uber.com/fr/blog/eat/",
          mapsQuery: "37 Rue Marbeuf 75008 Paris"
        }
      ],
      suggestions: [
        "На один из первых вечеров купить в Monoprix воду, фрукты, сыр, йогурты, хлеб и что-то сладкое к чаю.",
        "Перед 1 мая взять в номер завтрак-запас: круассаны, сок, кофе cold brew, фрукты или йогурты. На День труда часть городских точек может быть закрыта."
      ]
    },
    bookingChecklist: [
      "La Galerie Dior",
      "Лувр",
      "Версаль",
      "Palais Garnier — только если захотите идти внутрь",
      "Кораблик по Сене — по погоде, если нужен конкретный слот"
    ]
  },
  days: [
    {
      id: "day-23",
      dateLabel: "23 апреля",
      weekday: "четверг",
      shortLabel: "23 апр",
      title: "Нотр-Дам, остров Сите и левый берег",
      summary:
        "Первый полный день без перегруза: мягкий старт после дороги, красивый пешеходный маршрут и один из самых атмосферных районов Парижа.",
      vibe: "Спокойный, пешеходный день с красивым светом, кофе и книжными.",
      bestWindow: "Нотр-Дам лучше брать утром: в четверг собор работает допоздна, но комфортнее идти до плотного потока.",
      transit: "Метро до левого берега, дальше почти весь день пешком.",
      booking: "Проверить формат входа и слоты ближе к поездке.",
      mustVisit: [
        "Notre-Dame утром и короткий блок на острове Сите.",
        "Shakespeare & Company и прогулка к Люксембургскому саду."
      ],
      returnPlan:
        "Лучший финал этого дня — пешком через Saint-Sulpice и Rue Bonaparte, с возможной паузой в Marin Montagut, затем метро 1 от Concorde или прогулка по 8-му округу к отелю.",
      detours: [
        {
          name: "Odette",
          note: "Небольшой сладкий стоп сразу после острова Сите, если захочется не обеда, а красивого и очень парижского десертного жеста.",
          official: "https://www.odette-paris.com/en",
          mapsQuery: "Odette 77 Rue Galande 75005 Paris"
        },
        {
          name: "Marin Montagut",
          note: "Идеальный тихий сворот по пути от Люксембургского сада: один из самых точных адресов под красивые подарки и маленькие вещи с парижским характером.",
          official: "https://www.marinmontagut.com/en/pages/notre-boutique",
          mapsQuery: "Marin Montagut 48 Rue Madame 75006 Paris"
        },
        {
          name: "Saint-Sulpice",
          note: "Бесплатная и очень красивая остановка на обратном пути: большая церковь, спокойная площадь и хороший свет к вечеру.",
          official: null,
          mapsQuery: "Saint-Sulpice Paris"
        }
      ],
      notes: [
        "Shakespeare & Company остаётся в маршруте как реально приятная точка, а не просто открыточная остановка.",
        "Люксембургский сад добавляет воздух и не заставляет гнаться за музеями в первый день."
      ],
      schedule: [
        {
          time: "09:15",
          label: "Кофе и легкий завтрак в Сен-Жермене",
          description: "Стартуйте мягко: specialty-кофе и что-то небольшое перед собором.",
          transit: "Метро от отеля, затем пешком",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Café du Clown",
            official: null,
            mapsQuery: "Café du Clown 6 Rue Lobineau 75006 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой кофе / завтрак",
              items: [
                {
                  name: "Noir Coffee Saint-Germain",
                  note: "Надёжный specialty-вариант без лишней сценовости, хорошо ложится на ваш ритм.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Saint-Germain 9 Rue de Luynes 75007 Paris"
                },
                {
                  name: "Wani",
                  note: "Более тонкий, камерный японский вариант, если захочется матча и спокойного утра.",
                  official: null,
                  mapsQuery: "wani 7 ter Rue Saint-Placide 75006 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "10:30",
          label: "Notre-Dame de Paris",
          description: "Идите к собору утром, пока подходы и внутренняя навигация не стали плотнее.",
          transit: "Пешком от станции",
          duration: "1–1.5 ч",
          booking: "Проверить слот",
          place: {
            name: "Notre-Dame de Paris",
            official: "https://www.notredamedeparis.fr/en/visit/individual-visitors-and-families/",
            mapsQuery: "Cathédrale Notre-Dame de Paris 6 Parvis Notre-Dame 75004 Paris"
          },
          alternatives: [
            {
              title: "Если хочется другой исторический блок",
              items: [
                {
                  name: "Sainte-Chapelle",
                  note: "Сильная альтернатива, если захочется больше витражей и более короткий визит.",
                  official: null,
                  mapsQuery: "Sainte-Chapelle 10 Boulevard du Palais 75001 Paris"
                },
                {
                  name: "Conciergerie",
                  note: "Подходит, если захочется добавить средневековый и более музейный слой вместо длинной прогулки.",
                  official: null,
                  mapsQuery: "Conciergerie 2 Boulevard du Palais 75001 Paris"
                }
              ]
            },
            {
              title: "Кофе и пауза рядом",
              items: [
                {
                  name: "Noir Coffee Cardinal Lemoine",
                  note: "Если нужен быстрый specialty-кофе без долгой посадки.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Cardinal Lemoine 29 bis Rue Monge 75005 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "12:00",
          label: "Île de la Cité и Shakespeare & Company",
          description: "Пройдитесь через остров и перейдите к книжному на левом берегу.",
          transit: "Пешком",
          duration: "1–1.25 ч",
          booking: "Нет",
          place: {
            name: "Shakespeare & Company",
            official: "https://shakespeareandcompany.com/",
            mapsQuery: "Shakespeare and Company 37 Rue de la Bûcherie 75005 Paris"
          }
        },
        {
          time: "13:30",
          label: "Обед или длинная пауза в районе Saint-Germain",
          description: "Без обязательного списка: важнее не спешить и не строить день вокруг ресторанной галочки.",
          transit: "Пешком",
          duration: "1–1.5 ч",
          booking: "Опционально",
          place: {
            name: "Saint-Germain-des-Prés",
            official: null,
            mapsQuery: "Saint-Germain-des-Prés Paris"
          }
        },
        {
          time: "15:30",
          label: "Jardin du Luxembourg",
          description: "Неспешная прогулка по саду и финальный спокойный блок без лишних решений.",
          transit: "Пешком",
          duration: "1.5–2 ч",
          booking: "Нет",
          place: {
            name: "Jardin du Luxembourg",
            official: "https://jardin.senat.fr/",
            mapsQuery: "Jardin du Luxembourg Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой прогулочный финал",
              items: [
                {
                  name: "Panthéon",
                  note: "Если к вечеру будет больше ресурса на архитектуру, чем на сад.",
                  official: null,
                  mapsQuery: "Panthéon Paris"
                },
                {
                  name: "Jardin des Plantes",
                  note: "Более просторная зелёная альтернатива, если захочется продолжить именно прогулочный день.",
                  official: null,
                  mapsQuery: "Jardin des Plantes Paris"
                }
              ]
            }
          ]
        },
        {
          time: "18:00",
          label: "Возвращение в отель через Saint-Sulpice и Rue Bonaparte",
          description: "Не обрывайте день в 17:30. Красивый финал здесь — пройтись через квартал, при желании зайти в Marin Montagut и уже потом спокойно ехать или идти в сторону отеля.",
          transit: "Пешком + метро 1 / такси по самочувствию",
          duration: "1–1.5 ч",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-24",
      dateLabel: "24 апреля",
      weekday: "пятница",
      shortLabel: "24 апр",
      title: "Dior, Avenue Montaigne, Opéra и шопинг",
      summary:
        "Правый берег без перегруза: музей Dior, красивый фэшн-квартал, затем практичный шопинг-блок в районе Opéra и Madeleine.",
      vibe: "Собранный городской день, где luxury идёт фоном, а не превращается в обязательную программу.",
      bestWindow: "La Galerie Dior официально работает с 11:00 до 19:00, кроме вторника; пятница отлично подходит.",
      transit: "Отель рядом с Dior, затем пешие переходы и короткие переезды.",
      booking: "Dior бронировать заранее. В Garnier слот нужен только если идёте внутрь.",
      mustVisit: [
        "La Galerie Dior как главный фокус дня.",
        "Шопинг-блок Opéra + Zara Home без разбрасывания по городу."
      ],
      returnPlan:
        "После Madeleine красиво возвращаться через Place de la Concorde, Grand Palais или Pont Alexandre III и выйти к вашему району с вечерним светом на 8-й округ.",
      detours: [
        {
          name: "Place Vendôme",
          note: "Короткий красивый сворот между Opéra и Madeleine: сильная архитектурная пауза без отдельной логистики.",
          official: null,
          mapsQuery: "Place Vendôme Paris"
        },
        {
          name: "Librairie Galignani",
          note: "Если захочется спокойной культурной остановки по пути обратно, это старейший англоязычный книжный Парижа и очень приятный интерьерный адрес.",
          official: "https://www.galignani.fr/",
          mapsQuery: "Librairie Galignani 224 Rue de Rivoli 75001 Paris"
        },
        {
          name: "Petit Palais",
          note: "Хороший бесплатный культурный стоп по пути назад в сторону вашего района, если останется ресурс на короткий визуальный блок.",
          official: "https://www.petitpalais.paris.fr/",
          mapsQuery: "Petit Palais Avenue Winston Churchill 75008 Paris"
        }
      ],
      notes: [
        "Утро здесь собранное и красивое: один fashion-блок, немного архитектуры и практичный шопинг без рассыпания по городу.",
        "Uniqlo и Zara Home стоят на одном маршруте и поэтому не крадут отдельный день у прогулок и кофе."
      ],
      schedule: [
        {
          time: "09:00",
          label: "Кофе рядом с базой",
          description: "Начать рядом с отелем и не тратить утро на лишний крюк.",
          transit: "Пешком",
          duration: "30–45 мин",
          booking: "Нет",
          place: {
            name: "Café Fino",
            official: null,
            mapsQuery: "Café Fino 59 Rue des Mathurins 75008 Paris"
          },
          alternatives: [
            {
              title: "Если хочется другой утренний вариант рядом",
              items: [
                {
                  name: "Noir Coffee Saint-Augustin",
                  note: "В гастрогиде Noir названа любимой specialty-сетью: это самый спокойный и надёжный утренний вариант рядом с вашим районом.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Saint-Augustin 120 Boulevard Haussmann 75008 Paris"
                },
                {
                  name: "Maison Landemaine",
                  note: "В гастрогиде сеть отмечена как safe choice для хорошей классической выпечки, если утром важнее булка, чем долгий завтрак.",
                  official: null,
                  mapsQuery: "Maison Landemaine Paris 8"
                }
              ]
            }
          ]
        },
        {
          time: "11:00",
          label: "La Galerie Dior",
          description: "Главный приоритет дня. Закладывайте 1.5–2 часа без спешки.",
          transit: "Пешком",
          duration: "1.5–2 ч",
          booking: "Да",
          place: {
            name: "La Galerie Dior",
            official: "https://www.galeriedior.com/en",
            mapsQuery: "La Galerie Dior 11 Rue François 1er 75008 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой fashion-блок",
              items: [
                {
                  name: "Palais Galliera",
                  note: "Подходит, если захочется больше fashion history и меньше house-museum настроения.",
                  official: null,
                  mapsQuery: "Palais Galliera Paris"
                },
                {
                  name: "Fondation Azzedine Alaïa",
                  note: "Хороша именно своей камерностью: в ваших заметках она как раз ценится за ощущение atelier и близость к ткани, телу и силуэту.",
                  official: "https://fondationazzedinealaia.org/en/fondation/lafondation/",
                  mapsQuery: "Fondation Azzedine Alaïa 18 Rue de la Verrerie 75004 Paris"
                }
              ]
            },
            {
              title: "Где сделать паузу после Dior",
              items: [
                {
                  name: "Noir Coffee Saint-Augustin",
                  note: "Если хочется закрепить день хорошим кофе, а не шумным бранчем, Noir здесь работает точнее всего.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Saint-Augustin 120 Boulevard Haussmann 75008 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "13:15",
          label: "Avenue Montaigne",
          description: "Пройтись красиво, но не превращать этот блок в марафон по бутикам.",
          transit: "Пешком",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Avenue Montaigne",
            official: null,
            mapsQuery: "Avenue Montaigne Paris"
          }
        },
        {
          time: "14:30",
          label: "Palais Garnier",
          description: "Если хочется зайти внутрь, ставьте этот блок после Dior; если нет, оставьте фасад и бутик.",
          transit: "Метро или 25–30 мин пешком",
          duration: "1–1.25 ч",
          booking: "Лучше да",
          place: {
            name: "Palais Garnier",
            official: "https://www.operadeparis.fr/en/visits/palais-garnier",
            mapsQuery: "Palais Garnier Place de l'Opéra 75009 Paris"
          }
        },
        {
          time: "15:45",
          label: "Uniqlo Opéra и Zara Home Madeleine",
          description: "Практичный шопинг-блок без лишней романтизации: закрыть нужные покупки одним проходом.",
          transit: "Пешком",
          duration: "2–2.5 ч",
          booking: "Нет",
          place: {
            name: "Uniqlo Opéra",
            official: null,
            mapsQuery: "UNIQLO Opéra Paris"
          },
          alternatives: [
            {
              title: "Если захочется заменить шопинг-блок",
              items: [
                {
                  name: "Galeries Lafayette Haussmann",
                  note: "Более широкий универмаг, если захочется смотреть всё в одном месте.",
                  official: "https://haussmann.galerieslafayette.com/en/",
                  mapsQuery: "Galeries Lafayette Haussmann 40 Boulevard Haussmann 75009 Paris"
                },
                {
                  name: "Merci #2",
                  note: "В шопинг-гайде Merci описан как место с сильной кураторской подачей и вещами с характером, а не просто как магазин.",
                  official: "https://merci-merci.com/en/pages/service-client",
                  mapsQuery: "Merci #2 19 Rue de Richelieu 75001 Paris"
                }
              ]
            },
            {
              title: "Кофе рядом с Opéra",
              items: [
                {
                  name: "CULT",
                  note: "Из гайда как удобная кофе-пауза рядом с шопингом у Galeries Lafayette.",
                  official: null,
                  mapsQuery: "CULT Paris 75009"
                }
              ]
            }
          ]
        },
        {
          time: "15:50",
          label: "Zara Home Madeleine",
          description: "Если нужен именно домашний блок, его удобнее брать здесь же, а не размазывать по неделе.",
          transit: "Пешком",
          duration: "30–45 мин",
          booking: "Нет",
          place: {
            name: "Zara Home Madeleine",
            official: "https://www.zarahome.com/fr/store-locator.html",
            mapsQuery: "Zara Home Madeleine Paris"
          }
        },
        {
          time: "17:15",
          label: "Возвращение в отель через Concorde и Grand Palais",
          description: "Если силы есть, это один из самых красивых обратных маршрутов в ваш район: площадь, мосты, фасады и мягкий вечерний свет без отдельного аттракциона.",
          transit: "Пешком или метро по самочувствию",
          duration: "45–75 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-25",
      dateLabel: "25 апреля",
      weekday: "суббота",
      shortLabel: "25 апр",
      title: "Ранний Монмартр и 11-й округ",
      summary:
        "Монмартр имеет смысл только ранним утром, а после него лучше быстро уходить в более локальный и спокойный район.",
      vibe: "Сначала открыточный Париж без толпы, потом более живой и неочевидный ритм.",
      bestWindow: "На субботний Монмартр лучше быть к 08:00–08:30. AXS Design работает со вторника по субботу.",
      transit: "Метро до Монмартра, потом метро в 11-й округ.",
      booking: "Ничего обязательного, день гибкий.",
      mustVisit: [
        "Монмартр только ранним утром.",
        "AXS Design как одна из лучших интерьерных находок поездки."
      ],
      returnPlan:
        "После 11-го удобно возвращаться через Canal Saint-Martin или площадь République, а затем ехать на метро 8/9 в ваш район без лишних крюков.",
      detours: [
        {
          name: "Musée de la Vie Romantique",
          note: "Мягкий культурный сворот после Монмартра, если захочется не только улиц, но и короткой романтической интерьерной остановки.",
          official: "https://museevieromantique.paris.fr/en",
          mapsQuery: "Musée de la Vie Romantique Paris"
        },
        {
          name: "Canal Saint-Martin",
          note: "Красивый и бесплатный маршрут на обратной дороге из 11-го: хороший способ завершить субботу без магазинов и без ещё одной посадки.",
          official: null,
          mapsQuery: "Canal Saint-Martin Paris"
        }
      ],
      notes: [
        "Вы отдельно отмечали любовь к Монмартру, поэтому день строится вокруг правильного тайминга, а не вокруг списка мест.",
        "AXS Design оставлен как сильная находка из гайдов и ваших заметок."
      ],
      schedule: [
        {
          time: "08:15",
          label: "Montmartre и Sacré-Cœur",
          description: "Поднимайтесь рано, пока площадь и главные видовые точки ещё не забиты.",
          transit: "Метро",
          duration: "2–2.5 ч",
          booking: "Нет",
          place: {
            name: "Basilique du Sacré-Cœur",
            official: "https://www.sacre-coeur-montmartre.com/english/",
            mapsQuery: "Sacré-Cœur Basilica 35 Rue du Chevalier de la Barre 75018 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой Монмартр",
              items: [
                {
                  name: "Musée de Montmartre",
                  note: "Подойдёт, если захочется чуть больше истории района и меньше просто ходить по открыткам.",
                  official: null,
                  mapsQuery: "Musée de Montmartre 12 Rue Cortot 75018 Paris"
                }
              ]
            },
            {
              title: "Кофе и выпечка в районе",
              items: [
                {
                  name: "Boulangerie Miettes",
                  note: "В гастрогиде эту пекарню хвалят за уважение к ремеслу и сильные круассаны; хороший вариант после раннего Монмартра.",
                  official: null,
                  mapsQuery: "Boulangerie Miettes Paris 75018"
                },
                {
                  name: "Noir Coffee Abbesses",
                  note: "Если в этот слот главным остаётся кофе, а не витрина с десертами, Noir держит более ровный specialty-уровень.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Abbesses 6 Rue des Trois Frères 75018 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "10:45",
          label: "Кофе и выпечка после спуска",
          description: "Лучше взять паузу уже после основной прогулки, а не пытаться сидеть в самой плотной части района.",
          transit: "Пешком",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Noir Coffee Abbesses",
            official: "https://noircoffeeshop.com/",
            mapsQuery: "Noir Coffee Abbesses 6 Rue des Trois Frères 75018 Paris"
          }
        },
        {
          time: "13:30",
          label: "Переезд в 11-й округ",
          description: "После Монмартра лучше резко сменить сцену и уйти из туристической плотности.",
          transit: "Метро",
          duration: "35–45 мин",
          booking: "Нет",
          place: {
            name: "11-й округ",
            official: null,
            mapsQuery: "11th arrondissement Paris"
          }
        },
        {
          time: "14:15",
          label: "AXS Design",
          description: "Один из лучших интерьерных и антикварных блоков маршрута, реально попадающий в ваши интересы.",
          transit: "Пешком от метро",
          duration: "45–75 мин",
          booking: "Нет",
          place: {
            name: "AXS Design",
            official: "https://www.axsdesign.fr/",
            mapsQuery: "AXS Design Paris 75011"
          },
          alternatives: [
            {
              title: "Если захочется другой интерьерный / предметный блок",
              items: [
                {
                  name: "Merci",
                  note: "Менее антикварно, но сильнее в curated-objects и lifestyle, если захочется мягче по формату.",
                  official: "https://merci-merci.com/en/pages/service-client",
                  mapsQuery: "Merci 111 Boulevard Beaumarchais 75003 Paris"
                },
                {
                  name: "Fleux",
                  note: "Хорошо подходит, если захочется больше подарков и декора, а не винтажных предметов.",
                  official: "https://www.fleux.com/en",
                  mapsQuery: "Fleux 39 Rue Sainte-Croix de la Bretonnerie 75004 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "15:45",
          label: "Extraction Coffee",
          description: "Сильный specialty-стоп рядом с дальнейшей логикой дня.",
          transit: "Пешком или короткий переезд",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Extraction Coffee",
            official: "https://www.extractioncoffee.fr/en/",
            mapsQuery: "Extraction Coffee 29 Rue Amelot 75011 Paris"
          }
        },
        {
          time: "17:15",
          label: "Возвращение в отель через Canal Saint-Martin",
          description: "Если день сложился легко, приятно дойти до канала, немного пройтись вдоль воды и уже потом сесть на метро обратно в 8-й округ.",
          transit: "Пешком + метро",
          duration: "1–1.25 ч",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-26",
      dateLabel: "26 апреля",
      weekday: "воскресенье",
      shortLabel: "26 апр",
      title: "Парки, набережные и прогулочный Париж",
      summary:
        "Воскресенье специально оставлено лёгким. Вместо точечного шопинга — красивый городской воздух, мосты и парки.",
      vibe: "Тихий ритм, чтобы поездка не превратилась в музейный конвейер.",
      bestWindow: "Это резервный и дышащий день: удобно подстраивать его под погоду или общее состояние.",
      transit: "Можно сочетать пешие участки и короткие поездки на метро.",
      booking: "Нет.",
      mustVisit: [
        "Pont Alexandre III для фотографий и красивого визуального Парижа.",
        "Набережные и Tuileries без жёсткого тайминга."
      ],
      returnPlan:
        "Лучше всего завершать день пешком через Pont Alexandre III, Grand Palais и Avenue Montaigne: это как раз тот красивый путь назад в ваш район, который не требует брони и усилий.",
      detours: [
        {
          name: "Petit Palais",
          note: "Бесплатный и очень удачный культурный стоп рядом с мостом, если в этот день захочется добавить немного искусства без тяжёлого музея.",
          official: "https://www.petitpalais.paris.fr/",
          mapsQuery: "Petit Palais Avenue Winston Churchill 75008 Paris"
        },
        {
          name: "Place de la Concorde",
          note: "Короткий архитектурный сворот между Tuileries и обратной дорогой к вашему району.",
          official: null,
          mapsQuery: "Place de la Concorde Paris"
        }
      ],
      notes: [
        "Marin Montagut не стоит ставить на воскресенье: по официальному сайту он работает с понедельника по субботу.",
        "Этот день удобно использовать как буфер, если позже захочется усилить что-то ещё."
      ],
      schedule: [
        {
          time: "10:00",
          label: "Parc Monceau",
          description: "Утро лучше начинать рядом с вашей базой и без длинного переезда.",
          transit: "Метро или прогулка",
          duration: "1–1.5 ч",
          booking: "Нет",
          place: {
            name: "Parc Monceau",
            official: null,
            mapsQuery: "Parc Monceau Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой прогулочный старт",
              items: [
                {
                  name: "Jardin du Luxembourg",
                  note: "Более классический левобережный вариант, если в это утро потянет туда.",
                  official: "https://jardin.senat.fr/",
                  mapsQuery: "Jardin du Luxembourg Paris"
                },
                {
                  name: "Palais Royal Garden",
                  note: "Если захочется более компактной городской прогулки с красивой архитектурной рамкой.",
                  official: null,
                  mapsQuery: "Jardin du Palais Royal Paris"
                }
              ]
            }
          ]
        },
        {
          time: "12:00",
          label: "Pont Alexandre III",
          description: "Один из самых красивых мостов для воскресной прогулки и визуального Парижа без суеты.",
          transit: "Метро или пешком частями",
          duration: "30–45 мин",
          booking: "Нет",
          place: {
            name: "Pont Alexandre III",
            official: null,
            mapsQuery: "Pont Alexandre III Paris"
          }
        },
        {
          time: "13:00",
          label: "Набережные Сены и Tuileries",
          description: "Просто гулять, садиться на лавки, пить кофе и не загонять себя таймингом.",
          transit: "Пешком",
          duration: "2–3 ч",
          booking: "Нет",
          place: {
            name: "Jardin des Tuileries",
            official: null,
            mapsQuery: "Jardin des Tuileries Paris"
          }
        },
        {
          time: "16:30",
          label: "Свободная кофе-пауза",
          description: "Оставлен свободный слот на погоду, силы и спонтанность.",
          transit: "По месту",
          duration: "30–60 мин",
          booking: "Нет",
          place: {
            name: "Noir Coffee Concorde",
            official: "https://noircoffeeshop.com/",
            mapsQuery: "Noir Coffee Concorde 8 Rue Saint-Florentin 75001 Paris"
          }
        },
        {
          time: "18:00",
          label: "Возвращение в отель через Pont Alexandre III",
          description: "Один из самых красивых и самых естественных обратных маршрутов в ваш район: мост, фасады, Grand Palais и мягкий финал без гонки.",
          transit: "Пешком",
          duration: "45–75 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-27",
      dateLabel: "27 апреля",
      weekday: "понедельник",
      shortLabel: "27 апр",
      title: "Маре, Fondation Alaïa, Merci и кораблик",
      summary:
        "Локальный и очень цельный день: мода, предметы, книжные и вечерняя Сена, если погода даст.",
      vibe: "Маре в его приятной версии: не для толпы, а для вещей, которые реально хочется рассматривать.",
      bestWindow: "Fondation Alaïa официально открыта ежедневно с 11:00 до 19:00; Merci в понедельник работает.",
      transit: "Метро до Маре, дальше почти весь день пешком.",
      booking: "Кораблик можно брать по факту погоды, если не нужен строго определённый час.",
      mustVisit: [
        "Fondation Azzedine Alaïa как камерный fashion-блок.",
        "Merci и Fleux как самые точные магазины этого дня."
      ],
      returnPlan:
        "Если кораблик случится, после него удобно возвращаться через Pont Neuf и линию 1; если нет — сделать длинную вечернюю прогулку по набережным и мостам до вашего района.",
      detours: [
        {
          name: "Used Book Café at Merci",
          note: "Хороший короткий стоп внутри дня, если нужен спокойный книжный и кофейный карман, а не ещё один маршрут по Маре.",
          official: "https://merci-merci.com/en/pages/le-111-boulevard-beaumarchais",
          mapsQuery: "Merci Used Book Café Paris"
        },
        {
          name: "Place des Vosges",
          note: "Красивый бесплатный сворот между точками в Маре: одна из лучших площадей для короткой паузы и фотографий.",
          official: null,
          mapsQuery: "Place des Vosges Paris"
        }
      ],
      notes: [
        "Маре хорошо работает в будний день: можно спокойно собрать fashion, предметы, книги и кофе без ощущения толпы.",
        "Merci и Fleux напрямую опираются на ваш шопинг-гайд, а Alaïa закрывает камерный fashion-блок."
      ],
      schedule: [
        {
          time: "10:00",
          label: "Кофе в Маре",
          description: "Хороший старт прямо в нужном районе, без отдельного кружения по городу.",
          transit: "Метро",
          duration: "35–45 мин",
          booking: "Нет",
          place: {
            name: "Partisan Café Artisanal",
            official: null,
            mapsQuery: "Partisan Café Artisanal Paris 75003"
          },
          alternatives: [
            {
              title: "Если захочется другой кофе в Маре",
              items: [
                {
                  name: "Recto Verso",
                  note: "В гастрогиде это место идёт как аккуратное окно в парижский завтрак: кофе, свежая выпечка и спокойная посадка.",
                  official: null,
                  mapsQuery: "Recto Verso Paris 75003"
                },
                {
                  name: "Sevenly Heart",
                  note: "В гастрогиде у него более артистичная и живая энергия Маре, если утром захочется не тишины, а лёгкого движения.",
                  official: null,
                  mapsQuery: "Sevenly Heart Paris 75003"
                }
              ]
            }
          ]
        },
        {
          time: "11:00",
          label: "Fondation Azzedine Alaïa",
          description: "Один из самых точных музеев под ваш запрос: камерно, fashion, без музейного перегруза.",
          transit: "Пешком",
          duration: "1–1.5 ч",
          booking: "Необязательно",
          place: {
            name: "Fondation Azzedine Alaïa",
            official: "https://fondationazzedinealaia.org/en/fondation/lafondation/",
            mapsQuery: "Fondation Azzedine Alaïa 18 Rue de la Verrerie 75004 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой культурный блок в Маре",
              items: [
                {
                  name: "Musée Carnavalet",
                  note: "Если в этот день потянет больше к истории Парижа, чем к моде.",
                  official: null,
                  mapsQuery: "Musée Carnavalet Paris"
                }
              ]
            },
            {
              title: "Где поесть или сделать паузу рядом",
              items: [
                {
                  name: "Merci Used Book Café",
                  note: "Хороший вариант остаться в том же ритме района и не разрывать день отдельной гастро-логистикой.",
                  official: "https://merci-merci.com/en/pages/le-111-boulevard-beaumarchais",
                  mapsQuery: "Merci Used Book Café Paris"
                }
              ]
            }
          ]
        },
        {
          time: "13:00",
          label: "Merci",
          description: "Сильный концепт-стор из гайда, который действительно имеет смысл в вашем маршруте.",
          transit: "Пешком",
          duration: "1–1.5 ч",
          booking: "Нет",
          place: {
            name: "Merci",
            official: "https://merci-merci.com/en/pages/service-client",
            mapsQuery: "Merci 111 Boulevard Beaumarchais 75003 Paris"
          }
        },
        {
          time: "14:30",
          label: "Fleux",
          description: "Хороший подарок-сувенирный блок без туристической банальности.",
          transit: "Пешком",
          duration: "1–1.5 ч",
          booking: "Нет",
          place: {
            name: "Fleux",
            official: "https://www.fleux.com/en",
            mapsQuery: "Fleux 39 Rue Sainte-Croix de la Bretonnerie 75004 Paris"
          }
        },
        {
          time: "18:45",
          label: "Кораблик по Сене",
          description: "Ставьте только если будет хороший свет и нормальная погода; этот слот держится как красивый опциональный финал дня.",
          transit: "Метро или пешком к причалу",
          duration: "1 ч",
          booking: "По погоде",
          place: {
            name: "Vedettes du Pont Neuf",
            official: "https://www.vedettesdupontneuf.com/cruises/",
            mapsQuery: "Vedettes du Pont Neuf Square du Vert-Galant 75001 Paris"
          },
          alternatives: [
            {
              title: "Если на Сене будет холодно или ветрено",
              items: [
                {
                  name: "Прогулка по Pont Neuf и набережным",
                  note: "Самая лёгкая замена круизу, если хочется сохранить вечерний Париж без посадки на лодку.",
                  official: null,
                  mapsQuery: "Pont Neuf Paris"
                },
                {
                  name: "Palais Royal на закате",
                  note: "Более камерный и сухой вариант вечернего финала.",
                  official: null,
                  mapsQuery: "Palais Royal Paris"
                }
              ]
            }
          ]
        },
        {
          time: "20:15",
          label: "Возвращение в отель через Pont Neuf или линию 1",
          description: "После вечерней Сены не нужен ещё один блок: либо короткая прогулка по мостам, либо прямой и спокойный возврат в ваш район.",
          transit: "Пешком + метро 1 / такси",
          duration: "35–55 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-28",
      dateLabel: "28 апреля",
      weekday: "вторник",
      shortLabel: "28 апр",
      title: "Левый берег, Le Bon Marché, Buly и подарки",
      summary:
        "Тот самый день, где шопинг не выглядит утомительным: хороший завтрак, красивый район, один департмент-стор и точечные покупки.",
      vibe: "Собранный левобережный день без музейного давления.",
      bestWindow: "Marin Montagut работает по официальному сайту с понедельника по субботу 11:00–19:00.",
      transit: "Метро до 6–7 округов, затем всё очень компактно.",
      booking: "Нет.",
      mustVisit: [
        "Le Bon Marché как главный шопинг-блок дня.",
        "Marin Montagut как лучший адрес для не банальных подарков."
      ],
      returnPlan:
        "Самый красивый обратный ход — через Saint-Sulpice, Rue Bonaparte и, если хочется, короткий стоп у Buly flagship, после чего спокойно ехать или идти в сторону отеля.",
      detours: [
        {
          name: "Église Saint-Sulpice",
          note: "Красивая бесплатная остановка прямо в логике района: не требует времени, но хорошо собирает настроение левого берега.",
          official: null,
          mapsQuery: "Saint-Sulpice Paris"
        },
        {
          name: "Officine Universelle Buly rue Bonaparte",
          note: "Если захочется ещё одного красивого парижского адреса по пути назад, этот флагман сильнее ощущается как место, чем как просто магазин.",
          official: "https://buly1803.com/",
          mapsQuery: "Officine Universelle Buly 27 Rue Bonaparte 75006 Paris"
        }
      ],
      notes: [
        "Этот день держится на красивом левом берегу, а не на музейной нагрузке: завтрак, Bon Marché, гастро-пауза и подарки.",
        "Buly в Le Bon Marché остаётся как более спокойная и комфортная точка, что совпадает с вашими заметками."
      ],
      schedule: [
        {
          time: "09:30",
          label: "Завтрак на левом берегу",
          description: "Выберите более японский и тонкий вариант или просто хороший завтрак без лишней сцены.",
          transit: "Метро",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Saint Pearl",
            official: null,
            mapsQuery: "Saint Pearl Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой утренний тон",
              items: [
                {
                  name: "Wani",
                  note: "В гастрогиде Wani отмечен как фаворит: японские корни, живая карта и очень точная работа с кофе и матча.",
                  official: null,
                  mapsQuery: "wani 7 ter Rue Saint-Placide 75006 Paris"
                },
                {
                  name: "Café du Clown",
                  note: "Если нужен чистый specialty-старт без бранчевой тяжести, это один из самых удачных вариантов из гастрогида.",
                  official: null,
                  mapsQuery: "Café du Clown 6 Rue Lobineau 75006 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "11:00",
          label: "Le Bon Marché",
          description: "Главный шопинг-блок дня: спокойно и без попытки охватить все магазины Парижа сразу.",
          transit: "Пешком",
          duration: "1.5–2 ч",
          booking: "Нет",
          place: {
            name: "Le Bon Marché",
            official: "https://www.lebonmarche.com/en",
            mapsQuery: "Le Bon Marché 24 Rue de Sèvres 75007 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой шопинг на тот же слот",
              items: [
                {
                  name: "Merci #2",
                  note: "Если захочется более интимного и кураторского шопинга с характером, а не большого универмага.",
                  official: "https://merci-merci.com/en/pages/service-client",
                  mapsQuery: "Merci #2 19 Rue de Richelieu 75001 Paris"
                },
                {
                  name: "Officine Universelle Buly flagship",
                  note: "Когда хочется не просто покупки, а красивого ritual shopping: ароматы, упаковка, каллиграфия и ощущение старого Парижа.",
                  official: "https://buly1803.com/",
                  mapsQuery: "Officine Universelle Buly 27 Rue Bonaparte 75006 Paris"
                }
              ]
            },
            {
              title: "Кофе и сладкое рядом",
              items: [
                {
                  name: "La Meringaie Cherche-Midi",
                  note: "В гастрогиде La Meringaie описана как haute couture среди сладостей: хороший десертный жест прямо в этот день.",
                  official: "https://www.lameringaie.com/gb/",
                  mapsQuery: "La Meringaie 41 Rue du Cherche-Midi 75006 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "13:00",
          label: "La Grande Épicerie de Paris",
          description: "Гастроблок, который реально продлевает Париж и хорошо ложится на ваш гайд.",
          transit: "Пешком",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "La Grande Épicerie de Paris",
            official: "https://www.lagrandeepicerie.com/fr/",
            mapsQuery: "La Grande Épicerie de Paris 38 Rue de Sèvres 75007 Paris"
          }
        },
        {
          time: "14:30",
          label: "Officine Universelle Buly",
          description: "Зайти именно здесь, а не тратить отдельное окно на другой филиал.",
          transit: "Пешком",
          duration: "30–45 мин",
          booking: "Нет",
          place: {
            name: "Officine Universelle Buly в Le Bon Marché",
            official: "https://www.lebonmarche.com/en/marques/officine-universelle-buly",
            mapsQuery: "Officine Universelle Buly Le Bon Marché Paris"
          }
        },
        {
          time: "16:00",
          label: "Marin Montagut",
          description: "Лучший адрес под не банальные, действительно парижские сувениры.",
          transit: "Метро или пешком частями",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Marin Montagut",
            official: "https://www.marinmontagut.com/en/pages/notre-boutique",
            mapsQuery: "Marin Montagut 48 Rue Madame 75006 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой подарок-сувенирный блок",
              items: [
                {
                  name: "Jimmy Fairly",
                  note: "В шопинг-гайде бренд отмечен как локальная французская находка, про которую часто не знают туристы.",
                  official: null,
                  mapsQuery: "Jimmy Fairly Paris 75006"
                },
                {
                  name: "Officine Universelle Buly rue Bonaparte",
                  note: "Хорошо работает, если захочется заменить “сувениры” на более атмосферный, чувственный и парижский сценарий.",
                  official: "https://buly1803.com/",
                  mapsQuery: "Officine Universelle Buly 27 Rue Bonaparte 75006 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "17:20",
          label: "Возвращение в отель через Saint-Sulpice и Bonaparte",
          description: "Хороший спокойный финал для этого дня: ещё немного красивого левого берега, короткий сворот в Buly при желании и потом возврат без спешки.",
          transit: "Пешком + метро / такси",
          duration: "45–75 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-29",
      dateLabel: "29 апреля",
      weekday: "среда",
      shortLabel: "29 апр",
      title: "Лувр в вечерний слот",
      summary:
        "Самый важный музейный день поездки. Лувр поставлен туда, где он логичнее всего по официальному графику и по ощущению города.",
      vibe: "Сфокусированный день: не пытаться увидеть всё, а собрать свой Лувр аккуратно и без суеты.",
      bestWindow: "Лувр официально открыт по средам до 21:00 и закрыт по вторникам.",
      transit: "Метро к Palais Royal – Musée du Louvre, дальше пешком.",
      booking: "Да, брать поздний слот заранее.",
      mustVisit: [
        "Лувр в вечерний слот.",
        "Комнаты Наполеона как главный внутренний приоритет."
      ],
      returnPlan:
        "После музея и десерта лучше всего возвращаться без нового большого блока: либо через Rue du Bac и линию 12/13, либо на такси прямо в отель.",
      detours: [
        {
          name: "Galerie Vivienne",
          note: "Очень сильный короткий архитектурный сворот перед музеем или вместо лишней кофе-паузы, если захочется красивого крытого пассажа.",
          official: null,
          mapsQuery: "Galerie Vivienne Paris"
        },
        {
          name: "Jardin du Palais Royal",
          note: "Бесплатный и очень фотогеничный внешний блок рядом с музеем, если захочется добавить воздух до или после Лувра.",
          official: null,
          mapsQuery: "Palais Royal Paris"
        }
      ],
      notes: [
        "Приоритет внутри: комнаты Наполеона и ещё 2–3 выбранных блока, не больше.",
        "После музея оставлен короткий внешний маршрут и десерт, а не ещё один тяжёлый музей."
      ],
      schedule: [
        {
          time: "10:00",
          label: "Медленное утро без перегруза",
          description: "Не вставляйте сюда большой музей или дальний шопинг: энергия нужна на вторую половину дня.",
          transit: "Рядом с базой",
          duration: "свободно",
          booking: "Нет",
          place: {
            name: "Noir Coffee Saint-Augustin",
            official: "https://noircoffeeshop.com/",
            mapsQuery: "Noir Coffee Saint-Augustin 120 Boulevard Haussmann 75008 Paris"
          }
        },
        {
          time: "14:30",
          label: "Кофе по пути",
          description: "Хорошо поставить короткую паузу перед музеем, а не ехать туда с усталостью.",
          transit: "Метро",
          duration: "30–40 мин",
          booking: "Нет",
          place: {
            name: "Télescope Café",
            official: null,
            mapsQuery: "Télescope Café 5 Rue Villédo 75001 Paris"
          },
          alternatives: [
            {
              title: "Если захочется другой кофе перед музеем",
              items: [
                {
                  name: "Noir Coffee Concorde",
                  note: "Noir в гастрогиде — любимая сеть: это спокойный предмузейный вариант, если не хочется длинной посадки.",
                  official: "https://noircoffeeshop.com/",
                  mapsQuery: "Noir Coffee Concorde 8 Rue Saint-Florentin 75001 Paris"
                },
                {
                  name: "Café Nuances",
                  note: "Если захочется более модного кофе-пит-стопа и матчи.",
                  official: null,
                  mapsQuery: "Café Nuances Paris 75001"
                }
              ]
            }
          ]
        },
        {
          time: "16:00",
          label: "Лувр",
          description: "Основной слот дня. Сразу идите к важным для вас залам и не пытайтесь закрыть музей целиком.",
          transit: "Пешком от станции",
          duration: "3–3.5 ч",
          booking: "Да",
          place: {
            name: "Musée du Louvre",
            official: "https://www.louvre.fr/en/visit/hours-admission",
            mapsQuery: "Louvre Museum Rue de Rivoli 75001 Paris"
          },
          alternatives: [
            {
              title: "Если музейный фокус захочется смягчить",
              items: [
                {
                  name: "Palais Royal + Galerie Vivienne",
                  note: "Если в этот день захочется красоты и архитектуры, но без большой музейной концентрации.",
                  official: null,
                  mapsQuery: "Galerie Vivienne Paris"
                },
                {
                  name: "Musée des Arts Décoratifs",
                  note: "Если захочется эстетики и дизайна, но без масштаба Лувра.",
                  official: null,
                  mapsQuery: "Musée des Arts Décoratifs Paris"
                }
              ]
            },
            {
              title: "Где поесть / сделать паузу рядом",
              items: [
                {
                  name: "Café Marly",
                  note: "Вариант на случай, если после музея захочется сесть прямо рядом и не думать о логистике.",
                  official: null,
                  mapsQuery: "Café Marly Paris"
                }
              ]
            }
          ]
        },
        {
          time: "19:20",
          label: "Tuileries и Palais Royal",
          description: "Короткий внешний финал после музея, если ещё есть ресурс на прогулку.",
          transit: "Пешком",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Palais Royal",
            official: null,
            mapsQuery: "Palais Royal Paris"
          }
        },
        {
          time: "20:30",
          label: "La Meringaie",
          description: "Павлова как мягкое завершение музейного дня.",
          transit: "Метро или по пути в ваш район",
          duration: "20–30 мин",
          booking: "Нет",
          place: {
            name: "La Meringaie Cherche-Midi",
            official: "https://www.lameringaie.com/gb/",
            mapsQuery: "La Meringaie 41 Rue du Cherche-Midi 75006 Paris"
          }
        },
        {
          time: "21:00",
          label: "Возвращение в отель",
          description: "После Лувра лучше не придумывать второй вечер: десерт, короткая дорога назад и спокойный финал дня.",
          transit: "Метро / такси",
          duration: "20–35 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-30",
      dateLabel: "30 апреля",
      weekday: "четверг",
      shortLabel: "30 апр",
      title: "Версаль целиком",
      summary:
        "День для Версаля целиком: дворец, сады, Trianon и спокойное возвращение в город без спешки.",
      vibe: "Структурный выездной день: ранний старт, один большой объект, спокойное возвращение.",
      bestWindow:
        "Официальный совет Версаля — приезжать к открытию. Дворец открыт с 09:00, Trianon — с 12:00; четверг обычно мягче, чем пятница и выходные.",
      transit: "RER / пригородная электричка до Versailles Château Rive Gauche.",
      booking: "Да, билет и тайм-слот заранее.",
      mustVisit: [
        "Дворец утром к открытию.",
        "Сады как обязательная часть дня, даже если Trianon решите сократить."
      ],
      returnPlan:
        "После возвращения в Париж лучше брать мягкий финал: короткий заход в Monoprix или Picard у вашей базы и спокойный вечер в номере.",
      detours: [
        {
          name: "Monoprix Champs-Élysées",
          note: "Практичный и очень уместный стоп по дороге к отелю после большого выездного дня: взять ужин, воду и завтрак-запас на 1 мая.",
          official: "https://www.monoprix.fr/39.html",
          mapsQuery: "Monoprix 109 Rue de la Boétie 75008 Paris"
        },
        {
          name: "Picard Marceau",
          note: "Если вечером нужен самый спокойный сценарий, Picard отлично работает как короткая техническая остановка без ресторанной логистики.",
          official: "https://magasins.picard.fr/552-picard-marceau",
          mapsQuery: "Picard 6 Avenue Marceau 75008 Paris"
        }
      ],
      notes: [
        "Это красивый выездной день, который лучше прожить как отдельное маленькое путешествие.",
        "После возвращения в Париж хорошо оставить вечер свободным или тихим — номер, доставка, сыр и чай."
      ],
      schedule: [
        {
          time: "08:00",
          label: "Выезд из Парижа",
          description: "Заложите ранний выезд, чтобы быть у входа ближе к открытию дворца.",
          transit: "RER / поезд",
          duration: "1–1.25 ч",
          booking: "Нет",
          place: {
            name: "Versailles Château Rive Gauche",
            official: null,
            mapsQuery: "Versailles Château Rive Gauche station"
          }
        },
        {
          time: "09:15",
          label: "Palace of Versailles",
          description: "Начинайте с дворца, пока основной поток ещё не разросся.",
          transit: "Пешком от станции",
          duration: "2.5–3 ч",
          booking: "Да",
          place: {
            name: "Palace of Versailles",
            official: "https://en.chateauversailles.fr/plan-your-visit/practical-information",
            mapsQuery: "Palace of Versailles Place d'Armes 78000 Versailles"
          },
          alternatives: [
            {
              title: "Если захочется сократить нагрузку",
              items: [
                {
                  name: "Только дворец + короткая прогулка по садам",
                  note: "Лучший способ не перегрузить день, если по факту захочется меньше ходить.",
                  official: "https://en.chateauversailles.fr/plan-your-visit/practical-information",
                  mapsQuery: "Palace of Versailles Place d'Armes 78000 Versailles"
                },
                {
                  name: "Только Trianon",
                  note: "Если интерес сместится к более спокойной и менее парадной части Версаля.",
                  official: "https://en.chateauversailles.fr/discover/estate/estate-trianon",
                  mapsQuery: "Grand Trianon Versailles"
                }
              ]
            }
          ]
        },
        {
          time: "12:45",
          label: "Сады и пауза на обед",
          description: "После дворца не спешить: лучше спокойно дать себе прогулку и короткий обед.",
          transit: "Пешком",
          duration: "1.5–2 ч",
          booking: "Нет",
          place: {
            name: "Gardens of Versailles",
            official: "https://en.chateauversailles.fr/gardens-and-fountains",
            mapsQuery: "Gardens of Versailles"
          },
          alternatives: [
            {
              title: "Где поесть на месте",
              items: [
                {
                  name: "Ore - Ducasse au Château de Versailles",
                  note: "Если захочется более собранного обеда внутри комплекса.",
                  official: null,
                  mapsQuery: "Ore Ducasse Versailles"
                }
              ]
            }
          ]
        },
        {
          time: "15:00",
          label: "Estate of Trianon",
          description: "Идти только если ещё есть ресурс; это хороший, но не обязательный блок.",
          transit: "Пешком или паровозик",
          duration: "1.5–2 ч",
          booking: "В составе билета",
          place: {
            name: "Estate of Trianon",
            official: "https://en.chateauversailles.fr/discover/estate/estate-trianon",
            mapsQuery: "Grand Trianon Versailles"
          }
        },
        {
          time: "18:15",
          label: "Возвращение в Париж",
          description: "Не планируйте на вечер второй крупный блок. Смысл этого дня именно в одном большом выезде.",
          transit: "RER / поезд",
          duration: "1–1.25 ч",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          }
        }
      ]
    },
    {
      id: "day-01",
      dateLabel: "1 мая",
      weekday: "пятница",
      shortLabel: "1 мая",
      title: "День вылета: спокойное утро, ORY и еда в аэропорту",
      summary:
        "Финальное утро лучше собрать максимально спокойно: без лишних поисков открытого кафе на День труда и без сложной логистики перед рейсом.",
      vibe: "Тихий, собранный финал поездки.",
      bestWindow:
        "Париж 1 мая живёт по особому графику, поэтому лучший сценарий — либо завтрак-запас в номере, либо еда уже в аэропорту после контроля.",
      transit: "До Orly удобнее всего такси; из общественного транспорта — метро 9 до Madeleine и линия 14 до Aéroport d'Orly.",
      booking: "Ничего не бронировать, кроме возможного lounge, если он вам действительно нужен.",
      notes: [
        "По билету рекомендуемое время прибытия в аэропорт — не позже 16:15.",
        "До ORY Terminal 4 из вашего района на такси обычно проще всего ехать с багажом; маршрут на метро более предсказуем по времени, но требует пересадки."
      ],
      schedule: [
        {
          time: "09:30",
          label: "Завтрак без риска",
          description: "Самый спокойный сценарий на праздничное утро — завтрак в номере из покупок, сделанных вечером 30 апреля.",
          transit: "Без переезда",
          duration: "45–60 мин",
          booking: "Нет",
          place: {
            name: "Numa Paris Champs-Élysées",
            official: null,
            mapsQuery: "Numa Paris Champs-Élysées 37 Rue Marbeuf 75008 Paris"
          },
          alternatives: [
            {
              title: "Если захочется купить что-то утром",
              items: [
                {
                  name: "Franprix Marbeuf",
                  note: "Ближайший базовый сценарий у адреса отеля, но часы 1 мая обязательно проверять за день до вылета.",
                  official: null,
                  mapsQuery: "Franprix 33 Rue Marbeuf 75008 Paris"
                },
                {
                  name: "Monoprix Champs-Élysées",
                  note: "Если нужен более широкий выбор и длинные часы, этот супермаркет самый надёжный в районе по официальному сайту.",
                  official: "https://www.monoprix.fr/39.html",
                  mapsQuery: "Monoprix 109 Rue de la Boétie 75008 Paris"
                }
              ]
            }
          ]
        },
        {
          time: "14:45",
          label: "Выезд в Orly",
          description: "С учётом выселения до 13:00 и вылета в 19:15 комфортно закладывать ранний выезд, чтобы приехать без стресса.",
          transit: "Такси или метро 9 + линия 14",
          duration: "45–70 мин",
          booking: "Нет",
          place: {
            name: "Paris Orly Airport Terminal 4",
            official: "https://www.parisaeroport.fr/en/passengers/orly-airport",
            mapsQuery: "Paris Orly Airport Terminal 4"
          },
          alternatives: [
            {
              title: "Как добраться",
              items: [
                {
                  name: "Такси",
                  note: "Самый простой вариант с багажом и после выезда из отеля: меньше переходов и решений.",
                  official: "https://www.parisaeroport.fr/en/passengers/orly-airport",
                  mapsQuery: "Paris Orly Airport Terminal 4"
                },
                {
                  name: "Метро 9 -> Madeleine -> линия 14",
                  note: "Почти самый предсказуемый общественный транспорт: Paris Aéroport прямо указывает линию 14 как один из самых быстрых способов добраться до ORY.",
                  official: "https://www.parisaeroport.fr/en/passengers/orly-airport",
                  mapsQuery: "Madeleine Paris"
                }
              ]
            }
          ]
        },
        {
          time: "16:45",
          label: "Перекус или ранний ужин в аэропорту",
          description: "После контроля оставьте себе время спокойно поесть, а не рассчитывать только на кофе у гейта.",
          transit: "Уже в терминале",
          duration: "45–75 мин",
          booking: "Нет",
          place: {
            name: "Rue Parisienne, Orly 4",
            official: "https://www.extime.com/en/paris/guide-and-tips/orly-airport-terminal-4",
            mapsQuery: "Orly 4 Rue Parisienne"
          },
          alternatives: [
            {
              title: "Где поесть в ORY 4",
              items: [
                {
                  name: "Rue Parisienne",
                  note: "Это официальный food-stop, который сам Extime выделяет как место для паузы перед посадкой в Orly 4.",
                  official: "https://www.extime.com/en/paris/guide-and-tips/orly-airport-terminal-4",
                  mapsQuery: "Orly 4 Rue Parisienne"
                },
                {
                  name: "Extime Lounge Orly 4",
                  note: "Если хочется максимально спокойного финала: буфет, тишина, Wi‑Fi и меньше суеты перед вылетом.",
                  official: "https://www.extime.com/en/paris/services/extime-lounge/orly4-paris-orly",
                  mapsQuery: "Extime Lounge Orly 4"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
