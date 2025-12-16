/**
 * Централизованное хранилище всех переводов проекта
 * Структура: объект с ключами страниц, внутри - ключи элементов и переводы для каждого языка
 */

export const translations = {
    // Общие переводы, используемые на всех страницах
    common: {
        contactUs: {
            ukrainian: "Зв'язатися з нами",
            american: "Contact us"
        },
        watchUs: {
            ukrainian: "Слідкуйте за нами:",
            american: "Watch us:"
        },
        location: {
            ukrainian: "Україна, Київ",
            american: "Ukraine, Kyiv"
        },
        address: {
            ukrainian: "АДРЕСА",
            american: "ADRESS"
        },
        addressFull: {
            ukrainian: "Україна, Київ\nвул. Радищева, 3\nофіс Б-306, а/с 25",
            american: "Ukraine, Kiyv\nst. Radishcheva, 3\noffice B-306, PO box 25"
        },
        callUs: {
            ukrainian: "ТЕЛЕФОНУЙТЕ",
            american: "CALL US"
        },
        email: {
            ukrainian: "EMAIL",
            american: "EMAIL"
        },
        needHelp: {
            ukrainian: "Потрібна допомога?",
            american: "Need help?"
        },
        yourName: {
            ukrainian: "Ваше ім'я",
            american: "Your name:"
        },
        yourPhone: {
            ukrainian: "Ваш номер телефону:",
            american: "Your phone number:"
        },
        yourEmail: {
            ukrainian: "Ваш email:",
            american: "Your email:"
        },
        sendMessage: {
            ukrainian: "Відправити повідомлення",
            american: "Send message"
        },
        weWillTakeCare: {
            ukrainian: "Ми подбаємо про транспортування для вашого бізнесу",
            american: "We will take care of transportation for your business"
        }
    },

    // Главная страница (index.html)
    home: {
        meta: {
            title: {
                ukrainian: "Найкраща міжнародна логістична компанія AS-Trans Київ, Україна",
                american: "Best International Logistics Company AS-Trans Kyiv, Ukraine"
            }
        },
        hero: {
            slide1: {
                title: {
                    ukrainian: "Міжнародні",
                    american: "International"
                },
                subtitle: {
                    ukrainian: "транспортні рішення",
                    american: "transportation solutions"
                }
            },
            slide2: {
                title: {
                    ukrainian: "Послуги",
                    american: "Customs"
                },
                subtitle: {
                    ukrainian: "з митного оформлення",
                    american: "clearance services"
                }
            },
            slide3: {
                title: {
                    ukrainian: "Аутсорсинг",
                    american: "Foreign economic"
                },
                subtitle: {
                    ukrainian: "зовнішньоекономічної діяльності",
                    american: "activity outsourcing"
                }
            },
            slide4: {
                title: {
                    ukrainian: "Перевезення вантажів",
                    american: "Transportation of goods"
                },
                subtitle: {
                    ukrainian: "по Україні",
                    american: "in Ukraine"
                }
            }
        },
        companyInfo: {
            title1: {
                ukrainian: "ТРАНСПОРТНО-ЛОГІСТИЧНА КОМПАНІЯ",
                american: "TRANSPORT AND LOGISTICS COMPANY"
            },
            title2: {
                ukrainian: "AS-TRANS, МІСТО КИЇВ",
                american: "AS-TRANS, KYIV"
            },
            paragraph1: {
                ukrainian: "Транспортно-логістична компанія AS-TRANS, місто Київ, надає комплексні логістичні та митно-брокерські послуги.",
                american: "Transport and logistics company AS-TRANS, Kyiv, provides a full range of logistics and customs brokerage services. Your business will be able to take advantage of the many opportunities that exist in this market with our help."
            },
            paragraph2: {
                ukrainian: "Ми працюємо на ринку України вже понад 20 років, що дозволяє нам швидко, якісно та за доступною вартістю, організовувати міжнародні вантажоперевезення, вести експедиційну діяльність у всьому світі, а також надавати митні послуги нашим клієнтам.",
                american: "The AS-TRANS company has been working in Ukraine for more than two decades. This allows us to organize international cargo transportation, conduct forwarding activities around the world quickly, efficiently and at an affordable cost. Our business also provides customs services to our clients."
            },
            paragraph3: {
                ukrainian: "Логістична компанія AS-TRANS гарантує повну конфіденційність послуг. На сьогоднішній день ми готові здійснити перевезення будь-якого вантажу – звичайного, небезпечного, що вимагає особливих умов транспортування, у тому числі й температурних режимів, гарантуючи при цьому безпеку та збереження вантажу.",
                american: "Our transport and logistics company's main goal is to provide complete confidentiality of the services. Today we are ready to carry out the transportation of any type of cargo. AS-TRANS can deliver ordinary, dangerous cargoes, the ones requiring special transportation conditions, including temperature conditions, while guaranteeing safety and security."
            }
        },
        services: {
            title1: {
                ukrainian: "МІЖНАРОДНІ ПЕРЕВЕЗЕННЯ, ЩО",
                american: "INTERNATIONAL TRANSPORTATION"
            },
            title2: {
                ukrainian: "ЗДІЙСНЮЮТЬСЯ <span class=\"blue-text-color\">AS-TRANS</span>",
                american: "CARRIED OUT BY <span class=\"blue-text-color\">AS-TRANS</span>"
            },
            description: {
                ukrainian: "Транспортно-логістична компанія AS-TRANS здійснює міжнародні вантажоперевезення під ключ (Door to Door – доставка товару \"від дверей до дверей\") на найкращих умовах для клієнта.",
                american: "The AS-TRANS transport and logistics company provides international cargo transportation on a turnkey basis (door-to-door delivery of goods, pickup/dropoff at an agreed location etc.) on the best terms for the client."
            },
            service1: {
                title: {
                    ukrainian: "МІЖНАРОДНІ ПЕРЕВЕЗЕННЯ",
                    american: "INTERNATIONAL CARGO"
                },
                description: {
                    ukrainian: "Перевезення вантажів власним автомобільним транспортом (ліцензія Міністерства транспорту та зв'язку України серія АТ №062250). Ми здійснюємо вантажні перевезення комплектних, збірних та небезпечних вантажів власним автомобільним транспортом з будь-якої точки ЄС та України із застосуванням книжок ЕКМТ/ЕСМТ",
                    american: "Transportation using our own trucks (license of the Ministry of Transport and Communication of Ukraine AD No.062250). We offer cargo transportation of complete, groupage and dangerous goods by our own transport from anywhere in the EU and Ukraine using ECMT books"
                }
            },
            service2: {
                title: {
                    ukrainian: "МУЛЬТИМОДАЛЬНІ ПЕРЕВЕЗЕННЯ",
                    american: "MULTIMODAL TRANSPORTATION"
                },
                description: {
                    ukrainian: "Морські контейнерні перевезення, авіа доставка дрібних вантажів. Можемо організувати будь-які схеми експортних та імпортних перевезень",
                    american: "We offer a wide range of shipping methods – sea container transportation, air delivery of small cargoes, etc. We can organize any schemes of export and import shipments"
                }
            },
            service3: {
                title: {
                    ukrainian: "ПОСЛУГИ З КОНСОЛІДАЦІЇ",
                    american: "CARGO CONSOLIDATION"
                },
                description: {
                    ukrainian: "Послуги з консолідації вантажів до терміналів країн ЄС – Польща (оформлення/склад), Словаччина (оформлення/склад). Експедиційні перевезення здійснюються виключно ліцензійним транспортом. Місцезнаходження вантажу контролюється по всьому шляху прямування.",
                    american: "Services to the terminals of the EU countries – Poland (clearance/warehouse), Slovakia (clearance/warehouse). Forwarding transportation is carried out exclusively by licensed transport. The location of the cargo is controlled along the entire route."
                }
            },
            service4: {
                title: {
                    ukrainian: "МИТНЕ ОФОРМЛЕННЯ",
                    american: "CUSTOMS CLEARANCE"
                },
                description: {
                    ukrainian: "Експорту/імпорт та транзит територією України (ліцензія Державної митної служби України серія АВ № 542705 / дозвіл на провадження митно-брокерської діяльності)",
                    american: "Of export/import and transit through the territory of Ukraine (license of the State Customs Service of Ukraine AB No. 542705 / permission to conduct customs brokerage activities)"
                }
            }
        },
        advantages: {
            title: {
                ukrainian: "<i>ЧОМУ</i> <span class=\"text-warning\">AS-TRANS</span> <i>НАЙКРАЩА ЛОГІСТИЧНА КОМПАНІЯ В УКРАЇНІ</i>",
                american: "<i>WHY</i> <span class=\"text-warning\">AS-TRANS</span> <i>IS THE BEST LOGISTICS COMPANY IN UKRAINE</i>"
            },
            paragraph1: {
                ukrainian: "Логістична компанія AS-TRANS здатна приємно здивувати навіть найвибагливіших клієнтів.",
                american: "The logistics company AS-TRANS is able to satisfy even the most demanding customers. AS -TRANS is a carrier, freight forwarder and customs broker all rolled into one, that fulfills each client's requirements."
            },
            paragraph2: {
                ukrainian: "AS-TRANS – це перевізник, експедитор та митний брокер в одній особі, що реалізує кожну вимогу клієнта. Усі домовленості виконуються точно за графіком, відповідно до завдань замовника.",
                american: "All agreements are carried out exactly on schedule, in accordance with the customer's tasks."
            },
            paragraph3: {
                ukrainian: "Звернувшись до нашої транспортно-логістичної компанії, Ви зможете оцінити не лише професіоналізм та високий стандарт обслуговування.",
                american: "By partnering with our transport and logistics company you will be able to appreciate not only professionalism and a high standard of service. We are always striving for new ways of providing services that exceed expectations while maintaining professionalism among staff members at all times!"
            },
            advantage1: {
                ukrainian: "МАКСИМУМ ЧАСУ ДЛЯ ВЕДЕННЯ БІЗНЕСУ",
                american: "MAXIMUM BUSINESS PRODUCTIVITY"
            },
            advantage2: {
                ukrainian: "ЗНИЖЕННЯ СОБІВАРТОСТІ ТОВАРУ",
                american: "REDUCTION IN THE COST OF GOODS"
            },
            advantage3: {
                ukrainian: "ПІДВИЩЕННЯ ЕФЕКТИВНОСТІ ПІДПРИЄМСТВА",
                american: "IMPROVING THE EFFICIENCY OF THE COMPANY"
            }
        },
        statistics: {
            partners: {
                ukrainian: "НАДІЙНІ ПАРТНЕРИ",
                american: "RELIABLE PARTNERS"
            },
            years: {
                ukrainian: "РОКІВ НА РИНКУ",
                american: "YEARS ON THE MARKET"
            },
            cargo: {
                ukrainian: "ДОСТАВЛЕНО ВАНТАЖІВ",
                american: "CARGO DELIVERED"
            },
            clients: {
                ukrainian: "ЗАДОВОЛЕНІ КЛІЄНТИ",
                american: "SATISFIED CLIENTS"
            }
        },
        geography: {
            title: {
                ukrainian: "ГЕОГРАФІЯ <span class=\"blue-text-color\">ПЕРЕВЕЗЕННЯ</span>",
                american: "GEOGRAPHY <span class=\"blue-text-color\">TRANSPORTATION</span>"
            }
        }
    },

    // Header (elements/header.html)
    header: {
        nav: {
            home: {
                ukrainian: "Головна",
                american: "Home"
            },
            cargoTransportation: {
                ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ",
                american: "CARGO TRANSPORTATION"
            },
            customsClearance: {
                ukrainian: "МИТНЕ ОФОРМЛЕННЯ",
                american: "CUSTOMS CLEARANCE"
            },
            customsBroker: {
                ukrainian: "МИТНИЙ БРОКЕР",
                american: "CUSTOMS BROKER"
            },
            forwarding: {
                ukrainian: "ЕКСПЕДИЦІЯ",
                american: "FORWARDING SERVICES"
            },
            aboutUs: {
                ukrainian: "ПРО НАС",
                american: "ABOUT US"
            },
            contact: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        dropdown: {
            ukraineEstonia: {
                ukrainian: "УКРАЇНА-ЕСТОНІЯ",
                american: "UKRAINE–ESTONIA"
            },
            ukraineLatvia: {
                ukrainian: "УКРАЇНА-ЛАТВІЯ",
                american: "UKRAINE–LATVIA"
            },
            ukraineLithuania: {
                ukrainian: "УКРАЇНА-ЛИТВА",
                american: "UKRAINE-LITHUANIA"
            },
            ukraineNorway: {
                ukrainian: "УКРАЇНА-НОРВЕГІЯ",
                american: "UKRAINE-NORWAY"
            },
            ukraineSweden: {
                ukrainian: "УКРАЇНА-ШВЕЦІЯ",
                american: "UKRAINE-SWEDEN"
            },
            ukraineFinland: {
                ukrainian: "УКРАЇНА-ФІНЛЯНДІЯ",
                american: "UKRAINE-FINLAND"
            },
            deliveryFromChina: {
                ukrainian: "ДОСТАВКА З КИТАЮ",
                american: "DELIVERY FROM CHINA"
            },
            finlandEu: {
                ukrainian: "ФІНЛЯНДІЯ-ЄС",
                american: "FINLAND-EU"
            },
            swedenEu: {
                ukrainian: "ШВЕЦІЯ-ЄС",
                american: "SWEDEN-EU"
            }
        }
    },

    // Footer (elements/footer.html)
    footer: {
        description: {
            ukrainian: "Понад 20 років досвіду та знання міжнародних стандартів, технологічних змін та промислових систем, ми прагнемо надавати найкращі та економічні рішення для наших шановних клієнтів.",
            american: "With over 20 years of experience and knowledge of international standards, technological changes and industrial systems, we strive to provide the best and most cost-effective solutions for our valued customers."
        },
        directions: {
            ukrainian: "Напрями",
            american: "Directions"
        },
        contacts: {
            ukrainian: "Контакти",
            american: "Contacts"
        },
        routes: {
            ukraineLatvia: {
                ukrainian: "Україна-Латвія",
                american: "Ukraine-Latvia"
            },
            ukraineFinland: {
                ukrainian: "Україна-Фінляндія",
                american: "Ukraine-Finland"
            },
            ukraineNorway: {
                ukrainian: "Україна-Норвегія",
                american: "Ukraine-Norway"
            },
            ukraineChina: {
                ukrainian: "Україна-Китай",
                american: "Ukraine-China"
            },
            finlandEu: {
                ukrainian: "З Фінляндії в ЄС",
                american: "From Finland to the EU"
            },
            ukraineEstonia: {
                ukrainian: "Україна-Естонія",
                american: "Ukraine-Estonia"
            },
            ukraineSweden: {
                ukrainian: "Україна-Швеція",
                american: "Ukraine-Sweden"
            },
            ukraineLithuania: {
                ukrainian: "Україна-Литва",
                american: "Ukraine-Lithuania"
            },
            swedenEu: {
                ukrainian: "Зі Швеції в ЄС",
                american: "From Sweden to the EU"
            }
        }
    },

    // Contact Widget (elements/contact-widget.html)
    contactWidget: {
        text: {
            ukrainian: "Зв'язатися з нами",
            american: "Contact us"
        }
    },

    // Страница "О нас" (pages/about-us.html)
    aboutUs: {
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            aboutUs: {
                ukrainian: "Про нас",
                american: "About Us"
            }
        },
        meta: {
            title: {
                ukrainian: "Про компанію AS-Trans",
                american: "About AS-Trans"
            },
            description: {
                ukrainian: "Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Ukraine"
            },
            ogTitle: {
                ukrainian: "Про компанію AS-Trans",
                american: "About AS-Trans"
            },
            ogDescription: {
                ukrainian: "Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            twitterTitle: {
                ukrainian: "Про компанію AS-Trans",
                american: "About AS-Trans"
            },
            twitterDescription: {
                ukrainian: "Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            }
        },
        title: {
            ukrainian: "ПРО КОМПАНІЮ AS-TRANS",
            american: "ABOUT THE AS-TRANS COMPANY"
        },
        paragraph1: {
            ukrainian: "Протягом майже 20 років ми робимо все можливе, щоб міжнародні перевезення вимагали від наших клієнтів мінімум зусиль та сприяли максимальному результату.",
            american: "For almost 20 years, we have been doing everything possible to ensure that international transportation requires a minimum of effort from our customers and contributes to the maximum result."
        },
        paragraph2: {
            ukrainian: "AS-Trans є зареєстрованою торговою маркою, що можна перевірити, перейшовши за посиланням",
            american: "AS-Trans is a registered trademark, which can be verified by following the link"
        },
        trademarkLink: {
            ukrainian: "ТУТ.",
            american: "HERE."
        },
        paragraph3: {
            ukrainian: "Разом з нами Ви зможете звільнити свій час для вирішення пріоритетних завдань розвитку Вашої компанії!",
            american: "With us you can free up plenty of time to solve priority tasks for the development of your company!"
        },
        paragraph4: {
            ukrainian: "Наші фахівці готові організувати перевезення будь-якого вантажу, на будь-яку відстань, будь-яким видом транспорту – авіа, морським, залізничним, автомобільним. Ми пропонуємо найоптимальніші логістичні схеми, які допомагають значно скоротити витрати на логістичні послуги.",
            american: "Our specialists are ready to organize the transportation of any cargo, at any distance and by any type of transport – air, sea, railway or road. We offer the most optimal logistics schemes, which help to significantly reduce the cost of logistics services."
        },
        paragraph5: {
            ukrainian: "Компанія AS-TRANS присутня на ринку з 2003 року, налічує штат з 20 співробітників, має власний автопарк автомобілів та надійні партнерські відносини з найбільшими міжнародними операторами.",
            american: "AS-TRANS has been working in Ukraine since 2003. It has a staff of 20 employees, has its own fleet of vehicles and reliable partnerships with major international operators."
        },
        paragraph6: {
            ukrainian: "Крім організації перевезення наша компанія надає весь спектр послуг, що дозволяють не сумніватися в успіху перевезення:",
            american: "In addition to organizing transportation, our company provides a full range of services that allow you to have no doubts about the success of transportation:"
        },
        keyPoints: {
            title: {
                ukrainian: "КЛЮЧОВІ МОМЕНТИ",
                american: "KEY POINTS"
            },
            point1: {
                ukrainian: "консалтингові послуги під час підготовки зовнішньоторговельних контрактів",
                american: "consulting services in the preparation of foreign trade contracts;"
            },
            point2: {
                ukrainian: "акредитація та митне оформлення товарів (електронне декларування)",
                american: "accreditation and customs clearance of goods (electronic declaration);"
            },
            point3: {
                ukrainian: "перевезення вантажів по всьому світу для доставки товару «від дверей до дверей»",
                american: "transportation of goods around the world for \"door to door\" delivery."
            }
        },
        advantages: {
            title: {
                ukrainian: "СЕРЕД НАШИХ ПЕРЕВАГ",
                american: "AMONG OUR ADVANTAGES ARE THE FOLLOWING"
            },
            expediency: {
                label: {
                    ukrainian: "ОПЕРАТИВНІСТЬ",
                    american: "EXPEDIENCY"
                },
                text: {
                    ukrainian: "Наші клієнти живуть у дуже насиченому ритмі, тому ми зобов'язані відповідати їхньому стилю життя. Швидка точна відповідь, готовність переглянути запропоновані рішення – це звичні щоденні завдання наших фахівців, які виконуються без затримок та зволікань",
                    american: "Our clients live in a very busy rhythm, so we have to match their lifestyle. Fast accurate response, readiness to review the proposed solutions – these are the usual daily tasks of our specialists, which are carried out at once and without delay"
                }
            },
            accuracy: {
                label: {
                    ukrainian: "ТОЧНІСТЬ",
                    american: "ACCURACY"
                },
                text: {
                    ukrainian: "Ми завжди в курсі останніх змін, тому що щодня тримаємо зв'язок із ключовими галузевими гравцями. Наші фахівці вміють точно оцінити ситуацію та запропонувати найкраще рішення!",
                    american: "We are always up to date with the latest developments, as we keep in touch with key industry players on a daily basis. Our specialists are able to accurately assess the situation and offer the best solution!"
                }
            },
            efficiency: {
                label: {
                    ukrainian: "ЕФЕКТИВНІСТЬ",
                    american: "EFFICIENCY"
                },
                text: {
                    ukrainian: "Вузька спеціалізація змушує нас протягом багатьох років вирішувати та розглядати схожі завдання з різних боків. Ми можемо спрогнозувати розвиток ситуації, тому віддаємо перевагу виключно діючим рішенням. Ми не переносимо виконання робіт на завтра, якщо завдання потрібно вирішити сьогодні!",
                    american: "Narrow specialization forces us to solve and consider similar tasks from different angles for many years. We can predict the development of the situation, so we prefer exclusively working solutions. We do not postpone work until tomorrow if the task needs to be solved today!"
                }
            }
        },
        history: {
            title: {
                ukrainian: "ІСТОРІЯ КОМПАНІЇ AS-TRANS",
                american: "THE HISTORY OF AS-TRANS"
            },
            year2003: {
                ukrainian: "2003 рік – Цей рік для нас став найважливішим, коли народилася компанія AS-TRANS. Перші кілька років ми займалися експедиційною діяльністю і досягли відчутного успіху, що дало нам поштовх до відкриття брокерського відділу в 2005 році.",
                american: "2003 – This year has become the most important for us, the year when AS-TRANS was born. For the first couple of years we were engaged in forwarding activities and did well. This gave us the impetus to open a brokerage department in 2005."
            },
            year2007: {
                ukrainian: "2007 рік – став новим етапом. Купівля власного транспорту дозволила розширити наші послуги та організовувати міжнародні вантажоперевезення та перевезення вантажів Україною від дверей до дверей.",
                american: "2007 – Became a new step. The purchase of our own transport allowed us to expand our services and organize international cargo transportation and door-to-door cargo transportation in Ukraine."
            },
            year2010: {
                ukrainian: "2010 рік – був переломним роком для компанії AS-TRANS. Ми пережили кризу, яка показала необхідність реорганізації компанії. Розуміючи, що наявність власного автопарку і, на той момент, вже досить великого досвіду у вантажоперевезеннях дозволяє нам вийти на новий рівень обслуговування наших клієнтів, ми зосередилися на підвищенні якості сервісу, що надається.",
                american: "2010 – It was a turning point for AS-TRANS. We survived the crisis, which showed the need to reorganize the company. We realized that having our own fleet of vehicles and, at that time, already quite a lot of experience in cargo transportation allows us to reach a new level of service for our customers. That's why we focused on improving the quality of the service provided."
            },
            year2012: {
                ukrainian: "2012 – Нами було прийнято рішення зайнятися оновленням власного автопарку. Також наша компанія вийшла на нові географічні напрямки – далека Скандинавія.",
                american: "2012 – We have decided to start updating our own fleet. Our company has also entered new geographical directions – far Scandinavia."
            },
            year2018: {
                ukrainian: "2018 рік – За підсумками змін, які відбулися в компанії з 2010 року, ми приймаємо рішення продовжити оновлення власного автопарку, а також виходимо на нові напрямки – Балкани та Туреччина.",
                american: "2018 – As a result of the changes that have taken place in the company since 2010, we decide to continue updating our own fleet, and also enter new directions – the Balkans and Turkey."
            },
            year2022: {
                ukrainian: "2022 рік – Навіть під час війни ми не опускаємо руки та продовжуємо працювати для нашої України.",
                american: "2022 – Even during the war, we do not give up and continue to work for Ukraine."
            },
            year2022part2: {
                ukrainian: "Частину прибутку ми передаємо на потреби ЗСУ.",
                american: "We transfer part of the profit to the needs of the Armed Forces of Ukraine."
            }
        }
    },

    // Страница "Україна-Естонія" (pages/ukraine-estonia.html)
    ukraineEstonia: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Естонії. Доставка з Естонії",
                american: "Cargo Transportation to Estonia. Delivery from Estonia"
            },
            description: {
                ukrainian: "Перевезення вантажів до Естонії ❇️ Доставка з Естонії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Estonia ❇️ Delivery from Estonia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Estonia, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Естонії. Доставка з Естонії",
                american: "Cargo Transportation to Estonia. Delivery from Estonia"
            },
            ogDescription: {
                ukrainian: "Перевезення вантажів до Естонії ❇️ Доставка з Естонії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Estonia ❇️ Delivery from Estonia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Естонії. Доставка з Естонії",
                american: "Cargo Transportation to Estonia. Delivery from Estonia"
            },
            twitterDescription: {
                ukrainian: "Перевезення вантажів до Естонії ❇️ Доставка з Естонії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Estonia ❇️ Delivery from Estonia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Естонія",
                american: "Ukraine-Estonia"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ УКРАЇНА-ЕСТОНІЯ",
            american: "CARGO TRANSPORTATION UKRAINE-ESTONIA"
        },
        intro: {
            paragraph1: {
                ukrainian: "Перевезення вантажів в Естонію та з неї в Україну є досить популярною послугою в наші дні. У мережі Інтернет можна знайти безліч компаній, які пропонують цей вид послуг. Деякі з них навіть можуть надавати послуги перевезення від дверей до дверей. Але далеко не кожен підрядник зможе задовольнити потреби клієнта і надати послугу вантажоперевезення на належному рівні.",
                american: "Transportation of goods from Ukraine to Estonia and vice versa is quite a popular service nowadays. On the Internet, you can find many companies offering this type of service. Some of them even provide door-to-door services. But not every contractor is able to meet the needs of the client and provide a cargo transportation service at the proper level."
            },
            paragraph2: {
                ukrainian: "Ми працюємо на ринку понад 20 років і за цей час здобули репутацію надійного партнера з доставки найрізноманітніших вантажів до країн Європи та інших точок світу. За роки присутності AS-TRANS в ніші вантажних перевезень, ми отримали величезний практичний досвід і знаємо про доставку вантажів буквально все. Готові задовольнити зростаючі потреби клієнтів на найвищому рівні.",
                american: "We have been working in the field of transportation for more than 20 years. During this time we have gained a reputation as a reliable partner for the delivery of a wide variety of goods to Europe and other parts of the world. Over the years of AS-TRANS presence in the cargo transportation niche, we have gained vast practical experience and know everything about the delivery of goods. Our employees are ready to meet the growing needs of customers at the highest level."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "ЗВЕРНУВШИСЬ ДО НАС,",
                american: "BY CONTACTING US,"
            },
            title: {
                ukrainian: "ВИ БЕЗУМОВНО УСВІДОМЛЮЄТЕ, ЩО AS-TRANS",
                american: "YOU WILL CERTAINLY REALIZE THAT AS-TRANS"
            },
            description: {
                ukrainian: "– це саме та компанія, яка виконує швидке, надійне та безпечне вантажоперевезення вантажу з України до Естонії або допоможе здійснити доставку товару до України з Естонії в максимально стислий термін.",
                american: "is exactly the company that will perform fast, reliable and safe cargo transportation from Ukraine to Estonia or help deliver any goods from Estonia to Ukraine as soon as possible."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            toEstonia: {
                title: {
                    ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ В ЕСТОНІЮ",
                    american: "TRANSPORTATION OF GOODS TO ESTONIA"
                },
                description: {
                    ukrainian: "Компанія AS-TRANS має достатню кількість надійних партнерів в Естонії, щоб забезпечити якісну доставку вантажу до цієї країни східної Європи. Способи доставки включають міжнародні перевезення за допомогою авіаційних, морських та автомобільних сполучень. Серед пунктів призначення в Естонії: Таллінн, Нарва, Тарту, Курессааре, Вільянді та інші.",
                    american: "AS-TRANS has a number of reliable partners in Estonia to ensure high-quality transportation of goods to this country in Eastern Europe. Delivery methods include international transportation through air, sea and road communications. Among the destinations in Estonia are the following: Tallinn, Narva, Tartu, Kuressaare, Viljandi and others."
                }
            },
            fromEstonia: {
                title: {
                    ukrainian: "ДОСТАВКА ВАНТАЖУ З ЕСТОНІЇ",
                    american: "DELIVERY OF GOODS FROM ESTONIA"
                },
                paragraph1: {
                    ukrainian: "Товарообіг між Естонією та Україною, як і з іншими країнами Євросоюзу, стрімко зростає. Водночас зростають потреби українського бізнесу в безпечній та надійній доставці вантажу з Естонії до нашої країни.",
                    american: "The trade turnover between Estonia and Ukraine, as well as with other EU countries, is growing rapidly. At the same time, the needs of Ukrainian business in the safe and reliable delivery of goods from Estonia to our country are growing."
                },
                paragraph2: {
                    ukrainian: "Компанія AS-TRANS може впоратися з усіма Вашими потребами у вантажоперевезеннях. Доставка вантажу з Естонії не складе жодних проблем для Нашої компанії і позбавить Вас від зайвого клопоту, заощадить час і оптимізує бюджет на вантажоперевезення.",
                    american: "AS-TRANS can handle all your transportation needs. Delivery of goods from Estonia will not be any difficulty for our company and will save you from unnecessary trouble, save time and optimize the budget for cargo transportation."
                }
            },
            features: {
                title: {
                    ukrainian: "ОСОБЛИВОСТІ ВАНТАЖОПЕРЕВЕЗЕНЬ ДО КРАЇН ЄВРОПИ",
                    american: "FEATURES OF CARGO TRANSPORTATION TO EUROPEAN COUNTRIES"
                },
                intro: {
                    ukrainian: "При виборі компанії для перевезення вантажів до країн Євросоюзу важливо враховувати такі фактори:",
                    american: "When choosing a company for the transportation of goods to the EU countries, it is important to consider the following factors:"
                },
                factors1: {
                    reputation: {
                        ukrainian: "репутація компанії",
                        american: "company reputation"
                    },
                    experience: {
                        ukrainian: "досвід роботи",
                        american: "work experience"
                    },
                    rates: {
                        ukrainian: "тарифи перевізника",
                        american: "carrier rates"
                    }
                },
                paragraph1: {
                    ukrainian: "Також важливо переконатись, що компанія здатна надати необхідні послуги. Наприклад, якщо вам потрібне перевезення вантажів, що швидко псуються, то вам слід вибрати компанію, яка спеціалізується на цьому виді перевезення.",
                    american: "It is also important to make sure that the company is able to provide the required services. For example, if you need to deliver perishable goods, then you should choose a company that specializes in this type of cargo transportation."
                },
                paragraph2: {
                    ukrainian: "Загалом вартість перевезення вантажів залежить від наступних факторів:",
                    american: "In general, the cost of transporting goods depends on the following factors:"
                },
                factors2: {
                    distance: {
                        ukrainian: "відстань, яку необхідно подолати",
                        american: "distance to be covered"
                    },
                    cargoType: {
                        ukrainian: "тип вантажу, що перевозиться",
                        american: "type of cargo being transported"
                    },
                    speed: {
                        ukrainian: "бажана швидкість перевезення",
                        american: "required transport speed"
                    }
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Україна-Латвія" (pages/ukraine-latvia.html)
    ukraineLatvia: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Латвії. Доставка з Латвії",
                american: "Cargo Transportation to Latvia. Delivery from Latvia"
            },
            description: {
                ukrainian: "Перевезення вантажів до Латвії ❇️ Доставка з Латвії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Latvia, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Латвії. Доставка з Латвії",
                american: "Cargo Transportation to Latvia. Delivery from Latvia"
            },
            ogDescription: {
                ukrainian: "Перевезення вантажів до Латвії ❇️ Доставка з Латвії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Латвії. Доставка з Латвії",
                american: "Cargo Transportation to Latvia. Delivery from Latvia"
            },
            twitterDescription: {
                ukrainian: "Перевезення вантажів до Латвії ❇️ Доставка з Латвії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Латвія",
                american: "Ukraine-Latvia"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ ЛАВІЯ-УКРАЇНА-ЛАТВІЯ",
            american: "CARGO TRANSPORTATION LATVIA-UKRAINE-LATVIA"
        },
        intro: {
            paragraph1: {
                ukrainian: "Перевезення між Україною та Латвією популярні вже багато років. Доступні різні варіанти транспортування, у тому числі авіа, залізничний, автомобільний та морський.",
                american: "Transportation of goods between Ukraine and Latvia has been popular for many years. Various shipment options are available, including air, rail, road and sea."
            },
            paragraph2: {
                ukrainian: "Кожен варіант має свої переваги та недоліки, однак, логістична компанія, яка давно займається вантажоперевезеннями за сполученням Латвія – Україна – Латвія завжди підбере найбільш вдалий маршрут та максимально економічний спосіб доставки вантажу. Саме такою компанією і є AS-TRANS.",
                american: "Each option has its pros and cons. However, a logistics company that has long been engaged in cargo transportation on the Latvia – Ukraine – Latvia route will always select the most suitable and the cheapest way of cargo delivery. This is exactly the kind of company AS-TRANS is."
            },
            paragraph3: {
                ukrainian: "Повітряний транспорт буде без сумніву найшвидшим варіантом, але він також може бути найдорожчим. Відправляють авіа перевезенням зазвичай ті типи вантажів, які мають короткий термін зберігання, або вимагають спеціальних температурних режимів.",
                american: "Air transport is without a doubt the fastest option, but it can also be the most expensive. Usually cargoes that have a short shelf life or require special temperature conditions are sent by air."
            },
            paragraph4: {
                ukrainian: "Залізничний транспорт є популярним вибором для тих перевезень вантажів, які не потребують швидкої доставки, оскільки він доступніший, ніж авіаперевезення, а також може бути досить зручним та економічним.",
                american: "Rail is a popular choice for leisurely delivery of goods. It is more affordable than air transportation and can also be quite convenient and economical."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "МОРСЬКИЙ ТРАНСПОРТ -",
                american: "FINALLY,"
            },
            title: {
                ukrainian: "- НАЙБЮДЖЕТНІШИЙ ВАРІАНТ",
                american: "SEA TRANSPORT IS THE CHEAPEST OPTION"
            },
            description1: {
                ukrainian: "але дорога до місця призначення може зайняти набагато більше часу, а перевозити збірні або малогабаритні вантажі може бути економічно невигідним. Також географічне розташування України та Латвії робить найоптимальнішими саме сухопутні перевезення, відповідно, сьогодні найпопулярнішим і затребуваним буде перевезення вантажів з України до Латвії саме автомобільним транспортом.",
                american: "but it can take much longer to get to your destination, and it can be uneconomical to transport groupage or small cargo.\n\nThe geographical position of Ukraine and Latvia makes land transportation preferable."
            },
            description2: {
                ukrainian: "Маючи власний автопарк, компанія AS-TRANS організує вантажні перевезення автомобільним транспортом за повідомленням Латвія – Україна – Латвія швидко, якісно, ​​безпечно та зможе запропонувати Вам найкращі ціни на ринку вантажоперевезень!",
                american: "That is why today the most popular and demanded delivery of goods from Ukraine to Latvia is by road."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            transportation: {
                title: {
                    ukrainian: "Транспортування вантажів між Україною та Латвією компанією AS-TRANS",
                    american: "Transportation of goods between Ukraine and Latvia by AS-TRANS"
                },
                intro: {
                    ukrainian: "Звернувшись до компанії AS-TRANS з питання перевезення вантажів з України до Латвії, або з Латвії до України, Ви без сумніву оціните всі переваги співпраці з нами.",
                    american: "Once you contact AS-TRANS regarding the transportation of goods from Ukraine to Latvia, or from Latvia to Ukraine, you will undoubtedly appreciate all the benefits of cooperation with us."
                },
                point1: {
                    ukrainian: "1. Займаючись вантажоперевезеннями більше 20 років, ми легко підберемо оптимальний маршрут враховуючи всі побажання та бюджет, на який розраховує клієнт.",
                    american: "1. Being engaged in cargo transportation for more than 20 years, we can easily select the best route, taking into account all the wishes and cost that the client expects."
                },
                point2: {
                    ukrainian: "2. Маючи у своєму розпорядженні власний автопарк, ми можемо організувати перевезення вантажів від дверей до дверей, при цьому всі наші клієнти оцінять наші дуже лояльні ціни та високий стандарт обслуговування.",
                    american: "2. With our own fleet of vehicles, we can organize door-to-door transportation of goods. At the same time all our customers will appreciate our very loyal prices and high standard of service."
                },
                point3: {
                    ukrainian: "3. Користуючись послугами компанії AS-TRANS, Ви можете не перейматися митним оформленням та довірити всю документацію професіоналам.",
                    american: "3. Using the services of AS-TRANS, you don't need to worry about customs clearance – you entrust all the documentation to professionals."
                },
                point4: {
                    ukrainian: "4. Співпраця з відомими українськими та міжнародними операторами дозволяє нам на високому рівні надавати також експедиційні послуги та організовувати мультимодальні вантажні перевезення на сполученні Україна-Латвія.",
                    american: "4. Cooperation with well-known Ukrainian and international operators allows us to provide high-level freight forwarding services and organize multimodal cargo transportation on the Ukraine-Latvia route."
                },
                paragraph1: {
                    ukrainian: "Компанія AS-TRANS – надійний перевізник, який працює не тільки з різними типами вантажів – збірні, небезпечні, з особливими умовами транспортування; але й організовує доставку вантажів під ключ швидко, професійно та з максимальною вигодою для своїх клієнтів!",
                    american: "AS-TRANS is a reliable carrier that not only works with different types of cargo – groupage, dangerous, with special transportation conditions. We also organize turnkey delivery of goods quickly, professionally and with maximum benefit for our customers!"
                },
                paragraph2: {
                    ukrainian: "Задати будь-які питання та уточнити вартість вантажоперевезень з України до Латвії або з Латвії до України можна зателефонувавши нам за номером, який Ви бачите на сайті, або заповнивши форму. Звертайтесь, ми будемо раді співпраці!",
                    american: "You can ask any questions and clarify the cost of cargo transportation from Ukraine to Latvia or from Latvia to Ukraine by calling us at the number you see on the website, or by filling out the form. Contact us, we will be glad to cooperate!"
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Україна-Литва" (pages/ukraine-lithuania.html)
    ukraineLithuania: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Литви. Доставка з Литви",
                american: "Cargo Transportation to Lithuania. Delivery from Lithuania"
            },
            description: {
                ukrainian: "Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Lithuania ❇️ Delivery from Lithuania ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Lithuania, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Литви. Доставка з Литви",
                american: "Cargo Transportation to Lithuania. Delivery from Lithuania"
            },
            ogDescription: {
                ukrainian: "Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Lithuania ❇️ Delivery from Lithuania ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Литви. Доставка з Литви",
                american: "Cargo Transportation to Lithuania. Delivery from Lithuania"
            },
            twitterDescription: {
                ukrainian: "Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Lithuania ❇️ Delivery from Lithuania ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Литва",
                american: "Ukraine-Lithuania"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ УКРАЇНА-ЛИТВА",
            american: "CARGO TRANSPORTATION UKRAINE-LITHUANIA"
        },
        intro: {
            paragraph1: {
                ukrainian: "Вантажоперевезення з України до Литви – послуга, що дозволяє швидко, якісно та вигідно перевезти різні види вантажів. Надаємо послуги з перевезення всіх видів вантажів авіаперевезеннями, вантажними автомобілями та морем.",
                american: "Cargo transportation from Ukraine to Lithuania is a service that allows you to quickly, efficiently and profitably transport various types of goods. We provide transportation services by air, trucks and sea."
            },
            paragraph2: {
                ukrainian: "Наша компанія працює на ринку багато років і завоювала довіру клієнтів. Ми пропонуємо оптимальні умови перевезення вантажу. AS-TRANS забезпечує повний супровід клієнтів, починаючи з моменту замовлення транспортних послуг та закінчуючи їх виконанням.",
                american: "Our company has been operating in this field for many years and has won the trust of clients. We offer the best conditions for the transportation of your cargo. AS-TRANS provides full support for our customers, from the moment of ordering transport services to their implementation."
            },
            paragraph3: {
                ukrainian: "Наша команда професіоналів допоможе підібрати найбільш оптимальний маршрут та транспорт для вашого вантажу. Ми врахуємо всі особливості вантажу та умови його перевезення.",
                american: "Our team of professionals will help you choose the optimal route and kind of transport for your cargo. We take into account all the features of the cargo and the conditions of its transportation."
            },
            paragraph4: {
                ukrainian: "Ми маємо широку мережу партнерів в Україні та Литві, що дозволяє нам запропонувати нашим клієнтам найвигідніші умови перевезення їх вантажів. Ми готові перевезти Ваш вантаж швидко, якісно та за розумною ціною.",
                american: "AS-TRANS has a wide partner's network in Ukraine and Lithuania. This allows us to offer our customers the most favourable conditions for the transportation of their goods. We are ready to transport your cargo quickly, efficiently and at a reasonable price."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "ЯКЩО ВАМ НЕОБХІДНО",
                american: "IF YOU NEED TO TRANSPORT CARGO"
            },
            title: {
                ukrainian: "ПЕРЕВЕЗТИ ВАНТАЖ З УКРАЇНИ В ЛИТВУ, ЗВЕРТАЙТЕСЬ ДО НАС, І МИ БУДЕМО РАДІ ДОПОМОГТИ ВАМ",
                american: "FROM UKRAINE TO LITHUANIA, PLEASE CONTACT US, AND WE WILL BE HAPPY TO HELP YOU."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            toLithuania: {
                title: {
                    ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ У ЛИТВУ",
                    american: "TRANSPORTATION OF GOODS TO LITHUANIA"
                },
                paragraph1: {
                    ukrainian: "Шукаєте надійну компанію з перевезення вантажів у Литву? AS-TRANS до Ваших послуг. Ми пропонуємо якісні та доступні послуги вантажоперевезень як для бізнесу, так і для приватних осіб.",
                    american: "Are you looking for a reliable company to deliver goods to Lithuania? AS-TRANS is at your service. We offer quality and affordable freight forwarding services for both businesses and individuals."
                },
                paragraph2: {
                    ukrainian: "Якщо вам потрібно перевезти комерційні товари або особисті речі, ми можемо допомогти вам доставити їх у цілості та безпеці вчасно. Зв'яжіться з нами сьогодні, щоб дізнатися більше про наші послуги або отримати безкоштовну пропозицію!",
                    american: "Whether you need to move commercial items or personal items, we can help you get them safely and on time. Contact us today to learn more about our services or get a free offer!"
                }
            },
            fromLithuania: {
                title: {
                    ukrainian: "ДОСТАВКА ВАНТАЖУ З ЛИТВИ",
                    american: "DELIVERY OF GOODS FROM LITHUANIA"
                },
                paragraph1: {
                    ukrainian: "Доставка вантажів з Литви буде максимально швидкою, доступною за вартістю та виконана точно в обумовлений термін. Ви зможете відстежити вантаж у будь-який момент по дорозі та будете приємно здивовані високим рівнем обслуговування.",
                    american: "Delivery of goods from Lithuania will be as fast as possible, affordable and carried out exactly on time. You will be able to track the cargo at any time along the way and will be pleasantly surprised by the high level of service."
                },
                paragraph2: {
                    ukrainian: "З нами Вам не доведеться турбуватися про митне оформлення вантажів, Ви можете спокійно довірити всі паперові питання професіоналам.",
                    american: "You do not have to worry about customs clearance of goods – you can safely entrust all paperwork to professionals."
                }
            },
            features: {
                title: {
                    ukrainian: "ОСОБЛИВОСТІ ВАНТАЖОПЕРЕВЕЗЕНЬ ДО КРАЇН ЄВРОПИ",
                    american: "FEATURES OF CARGO TRANSPORTATION TO EUROPEAN COUNTRIES"
                },
                intro: {
                    ukrainian: "Є багато речей, які слід враховувати під час транспортування вантажів до країн Європи. Ось деякі ключові особливості цього виду транспорту:",
                    american: "There are lots of things to consider when transporting goods to European countries. Here are some key features of this activity:"
                },
                factors: {
                    packaging: {
                        ukrainian: "Вантаж повинен бути належним чином упакований та промаркований.",
                        american: "The cargo must be properly packaged and labelled."
                    },
                    documentation: {
                        ukrainian: "Документація має бути гаразд, включаючи сертифікати якості та інші необхідні документи.",
                        american: "Documentation must be in order, including quality certificates and other required papers."
                    },
                    costs: {
                        ukrainian: "Транспортні витрати може бути високими, залежно від обраного виду транспорту.",
                        american: "Transportation costs can be high, depending on the mode of transport chosen."
                    },
                    planning: {
                        ukrainian: "Час у дорозі може бути тривалим, тому планування має важливе значення.",
                        american: "Travel times can be long, so planning is essential."
                    }
                },
                paragraph1: {
                    ukrainian: "Також важливо переконатись, що компанія здатна надати необхідні послуги. Наприклад, якщо вам потрібне перевезення вантажів, що швидко псуються, то вам слід вибрати компанію, яка спеціалізується на цьому виді перевезення.",
                    american: "It is also important to make sure that the company is able to provide the required services. For example, if you need to deliver perishable goods, then you should choose a company that specializes in this type of cargo transportation."
                },
                paragraph2: {
                    ukrainian: "Звернувшись до компанії AS TRANS Ваш вантаж опиниться у надійних руках. Ми маємо великий досвід доставки вантажів до країн Європи і Ви гарантовано залишитеся задоволені співпрацею з нами! Телефонуйте, або заповнюйте форму на сайті для того, щоб зв'язатися з нами, дізнатися вартість або домовитися про вантажоперевезення.",
                    american: "Turning to AS TRANS, your cargo will be in safe hands. We have extensive experience in delivering goods to European countries, and you will surely be satisfied with cooperation! Call us or fill out the form on the website to contact our manager, find out the cost or arrange transportation."
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Україна-Норвегія" (pages/ukraine-norway.html)
    ukraineNorway: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Норвегії. Доставка з Норвегії",
                american: "Cargo Transportation to Norway. Delivery from Norway"
            },
            description: {
                ukrainian: "Вантажоперевезення до Норвегії ❇️ Доставка з Норвегії ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокерства ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Norway ❇️ Delivery from Norway ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Norway, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Норвегії. Доставка з Норвегії",
                american: "Cargo Transportation to Norway. Delivery from Norway"
            },
            ogDescription: {
                ukrainian: "Вантажоперевезення до Норвегії ❇️ Доставка з Норвегії ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокерства ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Norway ❇️ Delivery from Norway ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Норвегії. Доставка з Норвегії",
                american: "Cargo Transportation to Norway. Delivery from Norway"
            },
            twitterDescription: {
                ukrainian: "Вантажоперевезення до Норвегії ❇️ Доставка з Норвегії ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокерства ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Norway ❇️ Delivery from Norway ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Норвегія",
                american: "Ukraine-Norway"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ УКРАЇНА-НОРВЕГІЯ",
            american: "CARGO TRANSPORTATION UKRAINE-NORWAY"
        },
        intro: {
            paragraph1: {
                ukrainian: "Вантажоперевезення з України до Норвегії здійснюються різними видами транспорту, зокрема морським, залізничним та автомобільним. Найбюджетніший вид транспорту для перевезення вантажів між двома країнами – морський. Вантажні судна, що перевозять товари з України до Норвегії, зазвичай вирушають із порту Одеса, розташованого на Чорному морі. Проте, перевезення вантажів морем займає приблизно три-чотири тижні.",
                american: "Cargo transportation from Ukraine to Norway is carried out by various modes of transport, including sea, rail and road. The most budgetary one for transportation of goods between the two countries is by sea. Cargo ships carrying goods from Ukraine to Norway usually depart from the port of Odessa, located on the Black Sea. Shipping by sea takes approximately one week."
            },
            paragraph2: {
                ukrainian: "Автомобільний транспорт найчастіше використовується для перевезення вантажів між Україною та Норвегією. Вантажні автомобілі курсують з будь-якого куточка України. Подорож автомобільним транспортом займає близько тижня.",
                american: "Rail transport is another popular way of transporting goods between Ukraine and Norway. Freight trains usually depart from Lviv, located in western Ukraine. The train journey takes about two days."
            },
            paragraph3: {
                ukrainian: "Найшвидшим, але й найдорожчим видом вантажоперевезень з України до Норвегії будуть авіаперевезення.",
                american: "Road transport is most often used to deliver goods from Ukraine to Norway and back. Trucks usually depart from the city of Kyiv, located in the central part of Ukraine. The journey by road takes about three days."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "AS-TRANS - КОМПАНІЯ,",
                american: "AS TRANS IS A COMPANY"
            },
            title: {
                ukrainian: "ЯКА ВЖЕ БАГАТО РОКІВ ЗАЙМАЄТЬСЯ ПЕРЕВЕЗЕННЯМ ВАНТАЖІВ",
                american: "THAT HAS BEEN ENGAGED IN THE TRANSPORTATION OF GOODS FOR MANY YEARS"
            },
            description: {
                ukrainian: "У нас є власний автопарк та великий досвід роботи у вантажоперевезеннях, що дозволяє підібрати оптимальний маршрут та запропонувати найкращі ціни на ринку.",
                american: "We have our own fleet of vehicles and extensive experience in cargo transportation. This allows us to choose the best route, type of transport, taking into account the characteristics of your cargo and offer you the best prices."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            toNorway: {
                title: {
                    ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ ДО НОРВЕГІЇ",
                    american: "TRANSPORTATION OF GOODS TO NORWAY"
                },
                description: {
                    ukrainian: "Перевезення вантажів до Норвегії автомобільним транспортом є основним видом перевезень, який організовує наша компанія. Це пов'язано з тим, як ефективним і надійним може бути наземний транспорт, а також безпечним для водіїв! Ми можемо доставити до Норвегії різні типи вантажів – збірні, небезпечні, які потребують особливих умов транспортування та зберігання.",
                    american: "Delivery of goods to Norway by road is the main type of transportation organized by our company. This is because of its efficiency and reliability, as well as being safe for drivers! We can deliver various types of cargo to Norway – groupage, dangerous, requiring special conditions of transportation and storage."
                }
            },
            fromNorway: {
                title: {
                    ukrainian: "ДОСТАВКА ВАНТАЖУ З НОРВЕГІЇ",
                    american: "DELIVERY OF GOODS FROM NORWAY"
                },
                description: {
                    ukrainian: "Доставка вантажів з Норвегії також пройде швидко і безпечно, якщо ви звернетесь до компанії AS-TRANS. Ми раді надати Вам всю необхідну інформацію про перевезення з Норвегії. Ціни на свій маршрут Ви можете дізнатися, заповнивши нашу спеціальну форму або зателефонувавши до транспортного відділу, і ми зробимо все можливе, щоб це було максимально зручно для обох сторін!",
                    american: "Delivery of goods from Norway will be fast and safe if you contact AS-TRANS. We will provide you with all the necessary information about cargo transportation from Norway. You can find out the prices for your route by filling out our special form or by calling our transport department. We will do our best to make it as convenient as possible for both parties!"
                }
            },
            features: {
                title: {
                    ukrainian: "ОСОБЛИВОСТІ ВАНТАЖОПЕРЕВЕЗЕНЬ ДО КРАЇН ЄВРОПИ",
                    american: "FEATURES OF CARGO TRANSPORTATION TO EUROPEAN COUNTRIES"
                },
                paragraph1: {
                    ukrainian: "При доставці ваших товарів до Європи дуже важливо вибрати надійну та досвідчену транспортну компанію. Є багато факторів, які слід враховувати при наймі перевізника: такі як репутація самого бізнесу або попередні результати роботи з іншими клієнтами за аналогічними поставками (якщо доступні), тарифи, що пропонуються різними перевізниками для одного і того ж маршруту/кількості тощо.",
                    american: "When shipping your goods to Europe, it is very important to choose a reliable and experienced shipping company. There are many factors to consider when hiring a carrier. They are the reputation of the business itself or past performance with other clients on similar deliveries (if available), rates offered by different carriers for the same itinerary/quantity, etc."
                },
                paragraph2: {
                    ukrainian: "Але, мабуть, найважливіше знати, на яких послугах спеціалізується кожен окремий провайдер — це забезпечить не лише своєчасну доставку, а й захист від збитків.",
                    american: "But perhaps the most important thing is to know what services each individual provider specializes in – this will ensure not only timely delivery, but also protection against losses."
                },
                paragraph3: {
                    ukrainian: "На перший погляд, процес прийняття рішення може здатися досить складним, однак після того, як всі аспекти будуть прийняті до уваги, у Вас не залишиться жодних сумнівів у перевагах від співпраці саме з компанією AS-TRANS!",
                    american: "The decision-making process may seem rather complicated at first, but after all aspects are taken into account, you will have no doubts about the benefits of cooperation with AS-TRANS!"
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Україна-Швеція" (pages/ukraine-sweden.html)
    ukraineSweden: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Швеції. Доставка зі Швеції",
                american: "Cargo Transportation to Sweden. Delivery from Sweden"
            },
            description: {
                ukrainian: "Вантажоперевезення в Швецію ❇️ Доставка зі Швеції ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Sweden ❇️ Delivery from Sweden ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Sweden, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Швеції. Доставка зі Швеції",
                american: "Cargo Transportation to Sweden. Delivery from Sweden"
            },
            ogDescription: {
                ukrainian: "Вантажоперевезення в Швецію ❇️ Доставка зі Швеції ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Sweden ❇️ Delivery from Sweden ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Швеції. Доставка зі Швеції",
                american: "Cargo Transportation to Sweden. Delivery from Sweden"
            },
            twitterDescription: {
                ukrainian: "Вантажоперевезення в Швецію ❇️ Доставка зі Швеції ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Sweden ❇️ Delivery from Sweden ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Швеція",
                american: "Ukraine-Sweden"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ УКРАЇНА-ШВЕЦІЯ",
            american: "CARGO TRANSPORTATION UKRAINE-SWEDEN"
        },
        intro: {
            paragraph1: {
                ukrainian: "Вантажоперевезення з України до Швеції здійснюються різними видами транспорту, зокрема морським. Основні порти для експорту українських вантажів до Швеції розташовані в Одесі, Миколаєві та Херсоні. Основні шведські порти для імпорту вантажів з України розташовані у Стокгольмі, Гетеборгу та Мальме.",
                american: "The delivery of goods from Ukraine to Sweden is carried out by various modes of transport, including sea. The main ports for the export of Ukrainian cargo to Sweden are located in Odessa, Nikolaev and Kherson. The main Swedish ports for the import of goods from Ukraine are located in Stockholm, Gothenburg and Malmö."
            },
            paragraph2: {
                ukrainian: "Вантажоперевезення з України до Швеції морем здійснюють різні судноплавні компанії, зокрема Maersk, Sea Cargo, Cargo Baltic.",
                american: "Cargo transportation from Ukraine to Sweden by sea is carried out by various shipping companies, including Maersk, Sea Cargo, Cargo Baltic."
            },
            paragraph3: {
                ukrainian: "Найбільш популярним видом вантажоперевезень з України до Швеції були і залишаються автомобільні вантажоперевезення. Незважаючи на трохи вищі витрати порівняно з доставкою морем, вантажні перевезення вантажним автомобілем вибирає більшість наших клієнтів через більш оперативну доставку, можливість перевозити різні типи вантажів та різні обсяги. А також здійснювати вантажні перевезення \"від дверей до дверей\".",
                american: "The most popular type of cargo transportation from Ukraine to Sweden has always been road cargo transportation. Despite slightly higher costs compared to shipping by sea, most customers choose cargo transportation by truck due to faster delivery, the ability to deliver different types of goods and different volumes. It is also possible to carry out cargo transportation \"door to door\"."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "УКРАЇНСЬКА КОМПАНІЯ AS TRANS",
                american: "AS TRANS"
            },
            title: {
                ukrainian: "Є НАДІЙНИМ ПАРТНЕРОМ",
                american: "IS A RELIABLE PARTNER"
            },
            description: {
                ukrainian: "найбільших логістичних компаній у всьому світі. Це сприяє максимально швидкій та надійній доставці вантажу у будь-які точки земної кулі.",
                american: "of the largest logistics companies around the world. This contributes to the fastest and most reliable delivery of cargo to any point on the globe."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            toSweden: {
                title: {
                    ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ ДО ШВЕЦІЇ",
                    american: "TRANSPORTATION OF GOODS TO SWEDEN"
                },
                paragraph1: {
                    ukrainian: "Будь то невеликий рефрижератор або вантажний поїзд, AS-TRANS може допомогти вам перевезти ваші товари до Швеції. Наша компанія готова до будь-яких видів разових поставок, а також до регулярних комерційних перевезень – з нами можна не турбуватися про те, чи вони вчасно прибудуть. Доставка буде здійснена точно у зазначені терміни.",
                    american: "Whether it's a small refrigerated truck or an entire freight train, AS-TRANS can help to transport your goods to Sweden. Our company is ready for any kind of one-time deliveries, as well as for regular commercial shipments. With us, you do not need to worry about whether they will arrive on time. They surely will."
                },
                paragraph2: {
                    ukrainian: "Наявність різного транспорту в нашому автопарку гарантує, що всі вантажі дістануться місця призначення в цілості та безпеці без пригод. Оскільки ми подбаємо про все, від завантаження до розвантаження, вам більше ніколи не доведеться турбуватися про безпечну доставку Ваших вантажів до країн Євросоюзу.",
                    american: "The presence of various vehicles in our fleet ensures that all cargo will reach its destination safe and sound without incident. Since we take care of everything from loading to unloading, you will never again have to worry about the safe delivery of your goods to the EU countries."
                }
            },
            fromSweden: {
                title: {
                    ukrainian: "ДОСТАВКА ВАНТАЖУ ЗІ ШВЕЦІЇ",
                    american: "DELIVERY OF GOODS FROM SWEDEN"
                },
                paragraph1: {
                    ukrainian: "AS-TRANS – надійна транспортна компанія, яка може доставити ваші товари зі Швеції до України або навпаки. Ми знаємо, як важливо для вас мати всю повноту інформації про те, коли і де ми забиратимемо і як доставлятимемо вантаж, тому Наша команда експертів подбає про те, щоб кожна поїздка пройшла без проблем і у Вас була можливість відстежити вантаж на шляху прямування!",
                    american: "AS-TRANS is a reliable transport company that can deliver your goods from Sweden to Ukraine or vice versa. We know how important it is for you to have complete information about when and where we will pick up and deliver the cargo. That is why our team of experts will make sure that every trip goes smoothly, and you have the opportunity to track the cargo along the way!"
                },
                paragraph2: {
                    ukrainian: "Ми працюємо з надійними партнерами в обох країнах – автомобільним транспортом (на вантажівках), повітряним транспортом у разі потреби, а також морським транспортом.",
                    american: "We work with reliable partners in both countries – road transport (trucks), air transport if necessary, and sea transport."
                },
                paragraph3: {
                    ukrainian: "Ми - перша компанія, в яку варто звернутися, коли йдеться про вантажоперевезення. Наші менеджери мають багаторічний досвід роботи та можуть запропонувати безліч варіантів переміщення ваших вантажів, незалежно від їхніх габаритів.",
                    american: "We are the first company to contact when it comes to cargo transportation. Our managers have many years of experience and can offer a number of options for moving your goods, regardless of their dimensions."
                }
            },
            features: {
                title: {
                    ukrainian: "ОСОБЛИВОСТІ ВАНТАЖОПЕРЕВЕЗЕНЬ ДО КРАЇН ЄВРОПИ",
                    american: "FEATURES OF CARGO TRANSPORTATION TO EUROPEAN COUNTRIES"
                },
                paragraph1: {
                    ukrainian: "Важливо вибрати правильну компанію для транспортних потреб. Ви повинні враховувати їхню репутацію та досвід роботи, перш ніж приймати виважене рішення.",
                    american: "It is important to choose a reliable company for your transportation needs. You should consider their reputation and experience before making a decision."
                },
                paragraph2: {
                    ukrainian: "Також варто перевірити, які послуги вони пропонують, тому що є особливі вимоги до доставками: такі як вантажі, що швидко псуються, що вимагають особливого температурного режиму, або терміновість перевезення, ця інформація має бути прийнята до уваги при виборі підрядника – не тільки низька ціна, але і висока якість обслуговування мають велике значення.",
                    american: "It is also worth checking what services they offer, as there are special requirements for deliveries: such as perishable goods that require special temperature conditions, or the urgency of transportation. This information could be taken into account when choosing a contractor – not only a low price, but also a high quality of service are of great importance."
                },
                paragraph3: {
                    ukrainian: "Компанія AS-TRANS готова задовольнити потреби Наших шановних клієнтів та пропонує послуги з кращого співвідношення ціна/якість на ринку вантажоперевезень!",
                    american: "AS-TRANS is ready to meet the needs of our customers and offer services at the best price / quality ratio in the cargo transportation market!"
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Україна-Фінляндія" (pages/ukraine-finland.html)
    ukraineFinland: {
        meta: {
            title: {
                ukrainian: "Перевезення вантажів до Фінляндії. Доставка з Фінляндії",
                american: "Cargo Transportation to Finland. Delivery from Finland"
            },
            description: {
                ukrainian: "Перевезення вантажів до Фінляндії ❇️ Доставка з Фінляндії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Finland ❇️ Delivery from Finland ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Finland, Ukraine"
            },
            ogTitle: {
                ukrainian: "Перевезення вантажів до Фінляндії. Доставка з Фінляндії",
                american: "Cargo Transportation to Finland. Delivery from Finland"
            },
            ogDescription: {
                ukrainian: "Перевезення вантажів до Фінляндії ❇️ Доставка з Фінляндії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Finland ❇️ Delivery from Finland ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення вантажів до Фінляндії. Доставка з Фінляндії",
                american: "Cargo Transportation to Finland. Delivery from Finland"
            },
            twitterDescription: {
                ukrainian: "Перевезення вантажів до Фінляндії ❇️ Доставка з Фінляндії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to Finland ❇️ Delivery from Finland ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Україна-Фінляндія",
                american: "Ukraine-Finland"
            }
        },
        title: {
            ukrainian: "ВАНТОЖОПЕРЕВЕЗЕННЯ УКРАЇНА-ФІНЛЯНДІЯ",
            american: "CARGO TRANSPORTATION UKRAINE-FINLAND"
        },
        intro: {
            paragraph1: {
                ukrainian: "Вантажоперевезення між Україною та Фінляндією є життєво важливою ланкою у ланцюгу поставок для багатьох підприємств. Дві країни мають давню історію торговельно-економічного співробітництва, а їхня безпосередня близькість робить вантажоперевезення між ними зручним та ефективним варіантом.",
                american: "Cargo transportation between Ukraine and Finland is a vital link in the supply chain for many businesses. The two countries have a long history of trade and economic cooperation. Their proximity makes cargo transportation between them a convenient and efficient option."
            },
            paragraph2: {
                ukrainian: "Існує низка компаній, що спеціалізуються на вантажоперевезеннях між Україною та Фінляндією, і вони пропонують різні послуги для задоволення потреб своїх клієнтів. Ці компанії мають досвід та знання для вирішення всіх аспектів вантажоперевезень, від митного оформлення та документації до страхування та відстеження.",
                american: "There are a number of companies that specialize in cargo transportation between Ukraine and Finland. They offer various services to meet the needs of their customers. These companies have the experience and expertise to handle all aspects of shipping, from customs clearance and documentation to insurance and tracking."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "КОМПАНІЯ AS TRANS",
                american: "AS TRANS"
            },
            title: {
                ukrainian: "ЗДІЙСНЮЄ БЕЗПЕЧНИЙ ТА НАДІЙНИЙ СПОСІБ ПЕРЕМІЩЕННЯ ТОВАРІВ МІЖ ДВОМА КРАЇНАМИ",
                american: "PROVIDES A SAFE AND RELIABLE WAY TO MOVE GOODS BETWEEN TWO COUNTRIES"
            },
            description: {
                ukrainian: "Ми спеціалізуємося на цьому виді перевезень, маємо багаторічну історію успішних перевезень, добре знайомі з митними правилами та вимогами обох країн.",
                american: "We specialize in this type of transportation. We have a long history of successful transportation, so our employees are well acquainted with the customs regulations and requirements of both countries."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            toFinland: {
                title: {
                    ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ ДО ФІНЛЯНДІЇ",
                    american: "TRANSPORTATION OF GOODS TO FINLAND"
                },
                paragraph1: {
                    ukrainian: "Фахівці з логістики компанії AS-TRANS знають, як доставити будь-який товар із будь-якої точки до Фінляндії. Допоможемо з перевезенням негабаритних, небезпечних та збірних вантажів!",
                    american: "AS-TRANS logistics specialists know how to deliver any goods from any place to Finland. We will help with the transportation of oversized, dangerous and groupage cargo!"
                },
                paragraph2: {
                    ukrainian: "Якщо ваш вантаж вимагає особливого відношення, тому що він занадто габаритний, тендітний або вимагає певного температурного режиму, не турбуйтеся – просто дозвольте нам подбати про все, що пов'язане з безпечною доставкою цих вантажів до пункту призначення, без зайвого клопоту з обох боків.",
                    american: "If your shipment requires special handling because it is too large, fragile, or requires a certain temperature, don't worry – just let us take care of everything related to the safe delivery of these shipments to their destination, without additional hassle from both sides."
                }
            },
            fromFinland: {
                title: {
                    ukrainian: "ДОСТАВКА ВАНТАЖУ З ФІНЛЯНДІЇ",
                    american: "DELIVERY OF GOODS FROM FINLAND"
                },
                paragraph1: {
                    ukrainian: "Перевезення збірних вантажів – кропіткий процес, що не дозволяє помилок у логістиці. Ця послуга вимагає високих професійних стандартів, і від транспортної компанії AS-TRANS очікується успішне виконання міжнародних перевезень вантажів або товарів, що відправляються разом з іншими упаковками по одній CMR (двостороння консолідація).",
                    american: "Groupage cargo transportation is a time-consuming process that does not forgive mistakes in logistics. This service requires high professional standards. The transport company AS-TRANS can successfully carry out the international transport of cargoes or goods sent together with other packages under one CMR (two-way consolidation)."
                },
                paragraph2: {
                    ukrainian: "Якщо ви хочете, щоб ваше транспортування пройшло успішно і без затримок – вибирайте нас!",
                    american: "If you want your transportation to go smoothly and without delay – choose us!"
                }
            },
            features: {
                title: {
                    ukrainian: "ОСОБЛИВОСТІ ВАНТАЖОПЕРЕВЕЗЕНЬ ДО КРАЇН ЄВРОПИ",
                    american: "FEATURES OF CARGO TRANSPORTATION TO EUROPEAN COUNTRIES"
                },
                paragraph1: {
                    ukrainian: "Для того щоб доставка вантажів в Європу пройшла вдало, точно, вчасно і Ви не турбувалися про збереження вантажу, варто звернути увагу на репутацію перевізника та додаткові послуги, що надаються компанією.",
                    american: "In order for the cargo transportation to Europe to be successful, safe and just in time, you should pay attention to the reputation of the carrier and additional services provided by the company."
                },
                paragraph2: {
                    ukrainian: "AS TRANS спеціалізується на міжнародних вантажоперевезеннях під ключ. А це говорить про те, що ми візьмемо на себе митне оформлення, забезпечимо необхідні умови для безпечного перевезення, а також підберемо оптимальний маршрут і надамо послуги за найкращими цінами на ринку вантажоперевезень.",
                    american: "AS TRANS specializes in turnkey international cargo transportation. We take care of customs clearance, provide the necessary conditions for safe transportation, as well as select the best route and provide services at the best prices on the freight market."
                },
                paragraph3: {
                    ukrainian: "З нами Ви зможете оцінити якість сервісу, можливість відслідковувати вантаж на шляху перевезення, та звичайно ж високий професіоналізм наших співробітників.",
                    american: "You will appreciate the quality of service, the ability to track the cargo along the way and, of course, the high professionalism of our employees."
                },
                paragraph4: {
                    ukrainian: "Звертайтесь до нас за номером, який Ви бачите на сайті або заповніть форму, щоб отримати розрахунок вартості доставки Вашого вантажу!",
                    american: "Contact us at the number you see on the site or fill out the form to get a calculation of the cost of shipping your cargo!"
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Доставка з Китаю" (pages/delivery-from-china.html)
    deliveryFromChina: {
        meta: {
            title: {
                ukrainian: "Доставка вантажів з Китаю в Україну",
                american: "Delivery of Goods from China to Ukraine"
            },
            description: {
                ukrainian: "Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to China ❇️ Delivery from China ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, China, Ukraine"
            },
            ogTitle: {
                ukrainian: "Доставка вантажів з Китаю в Україну",
                american: "Delivery of Goods from China to Ukraine"
            },
            ogDescription: {
                ukrainian: "Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to China ❇️ Delivery from China ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Доставка вантажів з Китаю в Україну",
                american: "Delivery of Goods from China to Ukraine"
            },
            twitterDescription: {
                ukrainian: "Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Cargo Transportation to China ❇️ Delivery from China ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Китай-Україна",
                american: "China-Ukraine"
            }
        },
        title: {
            ukrainian: "ДОСТАВКА ВАНТАЖІВ З КИТАЮ В УКРАЇНУ",
            american: "DELIVERY OF GOODS FROM CHINA TO UKRAINE"
        },
        intro: {
            paragraph1: {
                ukrainian: "Китай є одним із найбільших у світі виробником товарів та їх експортером. Нижчі витрати на виробництво, ніж в інших країнах, дозволяють встановлювати Китаю конкурентоспроможні ціни на свої товари, тим самим залучаючи все більше споживачів та підприємців.",
                american: "China is one of the world's largest producers and exporters of goods. Lower production costs than other countries allow China to price its goods competitively, attracting more consumers and entrepreneurs."
            },
            paragraph2: {
                ukrainian: "Доставка посилок із Китаю користується великою популярністю і в Україні. Швидко доставляються товари з Китаю найрізноманітнішого призначення, у тому числі електроніка, побутова техніка, текстиль, будматеріали та промислове обладнання.",
                american: "Delivery of parcels from China is viral in Ukraine. Goods from China for the most diverse purposes, including electronics, household appliances, textiles, building materials, and industrial equipment, are quickly delivered."
            },
            paragraph3: {
                ukrainian: "Крім того, країна має одну з найрозвиненіших логістичних інфраструктур у світі. Це дозволяє швидко та безпечно здійснювати відправку вантажу в Україну за допомогою авіаперевезень або морських перевезень.",
                american: "In addition, the country owns one of the most developed logistics infrastructures in the world. That allows you to quickly and safely send cargo to Ukraine using air or sea transportation."
            }
        },
        hero: {
            subtitle: {
                ukrainian: "ДОСТАВКА ПОСИЛОК З КИТАЮ ПІД КЛЮЧ",
                american: "TURNKEY DELIVERY OF PARCELS"
            },
            title: {
                ukrainian: "КОМПАНІЄЮ AS-TRANS",
                american: "FROM CHINA BY AS-TRANS"
            },
            description: {
                ukrainian: "Ми спеціалізуємося на цьому виді перевезень, маємо багаторічну історію успішних перевезень, добре знайомі з митними правилами та вимогами обох країн.",
                american: "We specialize in this type of transportation. We have a long history of successful transportation, so our employees are well acquainted with the customs regulations and requirements of both countries."
            },
            contactButton: {
                ukrainian: "КОНТАКТИ",
                american: "CONTACT"
            }
        },
        sections: {
            deliveryFromChina: {
                title: {
                    ukrainian: "ДОСТАВКА ТОВАРІВ З КИТАЮ",
                    american: "DELIVERY OF GOODS FROM CHINA"
                },
                paragraph1: {
                    ukrainian: "Вибір компанії для відправки товарів з Китаю є відповідальним завданням, яке може вплинути на термін доставки або збереження посилки. Тому краще довірити цю справу професіоналам, таким як компанія AS-Trans.",
                    american: "Choosing a company to send goods from China is a responsible task, which may affect the delivery time or the package's safety. Therefore, entrusting this matter to professionals like AS-Trans is better."
                },
                paragraph2: {
                    ukrainian: "AS-Trans на ринку логістики вже понад 20 років і за цей час виробила ефективну систему роботи з клієнтами для своєчасної та безпечної доставки посилок від дверей до дверей.",
                    american: "AS-Trans has been in the logistics market for more than 20 years and has developed an effective system of working with clients for the timely and safe delivery of parcels \"from door to door.\""
                },
                paragraph3: {
                    ukrainian: "Ми пропонуємо послугу доставки вантажу з Китаю індивідуально для кожного клієнта \"під ключ\", що включає наступні етапи:",
                    american: "We offer a turnkey cargo delivery service from China individually for each client, which includes the following steps:"
                },
                listItem1: {
                    ukrainian: "вибір оптимального маршруту та способу перевезення, залежно від типу вантажу та терміновості доставки;",
                    american: "selection of the optimal route and method of transportation, depending on the type of cargo and the urgency of delivery;"
                },
                listItem2: {
                    ukrainian: "узгодження вартості та оформлення необхідних документів;",
                    american: "coordination of cost and execution of necessary documents;"
                },
                listItem3: {
                    ukrainian: "підготовка вантажу до відправлення;",
                    american: "preparation of cargo for shipment;"
                },
                listItem4: {
                    ukrainian: "перевезення товару, контроль його збереження та термінів доставки.",
                    american: "transportation of goods, control of their safety, and delivery time."
                }
            },
            airDelivery: {
                title: {
                    ukrainian: "АВІА ДОСТАВКА",
                    american: "AIR DELIVERY"
                },
                paragraph1: {
                    ukrainian: "Доставка вантажів з Китаю в Україну літаком – це найкращий для вас варіант, якщо ви потребуєте швидкої доставки, наприклад, для товарів з коротким терміном придатності. Перевагою авіа доставки є мінімальні ризики, пов'язані з втратою, пошкодженням товару або запізненням у зв'язку з погодними умовами.",
                    american: "Delivery of goods from China to Ukraine by air is the most suitable option if you need fast delivery, for example, for goods with a short shelf life. The advantage of air delivery is the minimal risks associated with loss, damage to goods, or delay due to weather conditions."
                },
                paragraph2: {
                    ukrainian: "Але є й деякі обмеження, пов'язані з типом вантажу його розмірами чи вагою. Також вартість авіа доставки може бути вищою, ніж перевезення іншим транспортним засобом. Ціну доставки з Китаю ви можете дізнатися зателефонувавши, вказаному на сайті або написавши нам у зручному для вас месенджері.",
                    american: "But some restrictions are associated with the type of cargo, its size, or weight. Also, the cost of air delivery may be higher than transportation by another vehicle. You can find the delivery price from China by calling the phone number on the website or by writing to us in a convenient messenger."
                }
            },
            shipping: {
                title: {
                    ukrainian: "МОРСЬКІ ПЕРЕВЕЗЕННЯ",
                    american: "SHIPPING"
                },
                paragraph1: {
                    ukrainian: "Для перевезення вантажу великого обсягу краще вибрати морську доставку. Це економічніший, а також екологічний спосіб перевезень.",
                    american: "It is better to choose sea shipping for the transportation of large-volume cargo. That is a more economical and also environmentally friendly way of transportation."
                },
                paragraph2: {
                    ukrainian: "При цьому доставка вантажу з Китаю морем потребує більш детального планування та організації. З цим чудово впорається компанія AS-Trans, завдяки широкій мережі міжнародних партнерів.",
                    american: "At the same time, the delivery of cargo from China by sea requires more detailed planning and organization. Thanks to a vast network of international partners, AS-Trans can handle this perfectly."
                },
                paragraph3: {
                    ukrainian: "Крім того, ми гарантуємо безпечну доставку товару протягом 30-50 днів. Також ми візьмемо на себе оформлення необхідної документації та вирішення всіх формальностей під час проходження митного контролю.",
                    american: "In addition, we guarantee the safe delivery of goods within 30-50 days. We will also take care of the preparation of the necessary documentation and the solution of all formalities when passing through customs control."
                }
            },
            consolidatedCargo: {
                title: {
                    ukrainian: "ЗБІРНІ ГРУЗИ",
                    american: "CONSOLIDATED CARGO"
                },
                paragraph1: {
                    ukrainian: "Доставка збірних вантажів з Китаю передбачає об'єднання кількох посилок від різних відправників в одному контейнері. Це дозволяє суттєво знизити вартість доставки. Також такий варіант доставки чудово підходить для малого бізнесу або приватних осіб, які оперують великими обсягами перевезень.",
                    american: "Groupage cargo delivery from China involves combining parcels from different senders in one container. That allows you to reduce the cost of delivery significantly. Also, this delivery option is great for small businesses or individuals who operate large traffic volumes."
                },
                paragraph2: {
                    ukrainian: "Отримати більш детальну інформацію про доставку та ціну збірних вантажів з Китаю ви можете зв'язавшись з нами по телефону або у месенджері.",
                    american: "You can get more detailed information about the delivery and price of groupage cargo from China by contacting us by phone or by messenger."
                }
            },
            customsClearance: {
                title: {
                    ukrainian: "РОЗМИТНЕННЯ ТОВАРУ",
                    american: "CUSTOMS CLEARANCE OF GOODS"
                },
                paragraph1: {
                    ukrainian: "Розмитнення товарів з Китаю вимагає виконання певних правил — сплати мит та податків, перевірку вантажу на відповідність вимогам законодавства та заповнення документації.",
                    american: "Customs clearance of goods from China requires fulfilling specific rules – paying duties and taxes, checking the cargo for compliance with legal requirements, and filling out documentation."
                },
                paragraph2: {
                    ukrainian: "Якщо у вас виникне проблема чи питання щодо будь-якого з цих пунктів, наша компанія готова надати вам професійну допомогу. Ми є досвідченим митним брокером та надаємо такі послуги, як заповнення декларацій, збору даних контролю та сертифікатів, розрахунок мита та його оплата та ін.",
                    american: "Our company is ready to provide professional assistance if you have a problem or question about any of these items. We are an experienced customs broker and provide services such as filling out declarations, collecting control data and certificates, calculating duties and paying them, etc."
                }
            },
            logisticsMap: {
                title: {
                    ukrainian: "ЛОГІСТИЧНА КАРТА",
                    american: "LOGISTIC MAP"
                },
                step1: {
                    ukrainian: "ЗБИРАЄМО ІНФОРМАЦІЮ",
                    american: "WE COLLECT INFORMATION"
                },
                step2: {
                    ukrainian: "УЗГОДЖУЄМО ЦІНУ",
                    american: "WE AGREE ON A PRICE"
                },
                step3: {
                    ukrainian: "ПРОРАХОВУЄМО МАРШРУТ",
                    american: "WE CALCULATE THE ROUTE"
                },
                step4: {
                    ukrainian: "ГОТУЄМО ВАНТАЖ ДО ВІДПРАВЛЕННЯ",
                    american: "PREPARING CARGO FOR SHIPMENT"
                },
                step5: {
                    ukrainian: "ЗДІЙСНЮЄМО ПЕРЕВЕЗЕННЯ ВАНТАЖУ",
                    american: "WE CARRY OUT CARGO TRANSPORTATION"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Доставка з Фінляндії" (pages/delivery-from-finland.html)
    deliveryFromFinland: {
        meta: {
            title: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey"
            },
            description: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Finland, Moldova, Romania, Bulgaria, Turkey"
            },
            ogTitle: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey"
            },
            ogDescription: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey"
            },
            twitterDescription: {
                ukrainian: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ Transport company AS-Trans ❇️ Customs brokerage services ❇️ Learn more HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Фінляндія-ЄС",
                american: "Finland-EU"
            }
        },
        title: {
            ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ З ФІНЛЯНДІЇ ДО КРАЇН ЄВРОПИ",
            american: "TRANSPORTATION OF GOODS FROM FINLAND TO EUROPEAN COUNTRIES"
        },
        intro: {
            paragraph1: {
                ukrainian: "AS-Trans – транспортна компанія, що спеціалізується на перевезенні вантажів з Фінляндії до країн Європи. У нас є власний автопарк, професійні експедитори, а також необхідне обладнання, яке дозволяє нам перевозити ваші вантажі швидко, безпечно та ефективно.",
                american: "AS-Trans is a transportation company that specializes in transporting goods from Finland to European countries. We have a wide range of vehicles and equipment that allow us to transport your goods quickly, safely, and efficiently."
            },
            paragraph2: {
                ukrainian: "У нас також є команда досвідчених водіїв, які добре знають дороги та умови у Європі, тому ви можете бути впевнені, що ваш вантаж прибуде до пункту призначення вчасно. Зв'яжіться з нами сьогодні, щоб отримати персональну пропозицію для ваших потреб у перевезенні.",
                american: "We also have a team of experienced drivers who know the roads and conditions in Europe well, so you can rest assured that your goods will arrive at their destination on time. Contact us today to get a quote for your transportation needs."
            }
        },
        sections: {
            finlandMoldova: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ФІНЛЯНДІЯ-МОЛДОВА",
                    american: "CARGO TRANSPORTATION FINLAND-MOLDOVA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ШУКАЄТЕ НАДІЙНУ ТА НЕДОРОГУ",
                        american: "LOOKING FOR A RELIABLE AND AFFORDABLE"
                    },
                    title: {
                        ukrainian: "ТРАНСПОРТНУ КОМПАНІЮ ДЛЯ ДОСТАВКИ ВАШИХ ВАНТАЖІВ З ФІНЛЯНДІЇ ДО МОЛДОВИ?",
                        american: "CARGO TRANSPORTATION COMPANY TO SHIP YOUR GOODS FROM FINLAND TO MOLDOVA?"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "AS-TRANS до Ваших послуг. Ми є провідним постачальником вантажних перевезень між цими двома країнами, і наша досвідчена команда може впоратися з будь-яким типом вантажу, великим або дрібним.",
                    american: "Look no further than AS-Trans! We are a leading provider of freight services between these two countries, and our experienced team can handle any type of shipment, large or small."
                },
                paragraph2: {
                    ukrainian: "Ми розуміємо, що вибір правильної транспортної компанії є важливим рішенням і ми прагнемо надати нашим клієнтам найкращий сервіс. Ми пропонуємо конкурентоспроможні ціни та широкий вибір варіантів доставки відповідно до ваших потреб. Співробітники служби підтримки клієнтів завжди готові відповісти на будь-які запитання.",
                    american: "We understand that choosing the right transportation company is an important decision, and we are committed to providing our customers with the best possible service. We offer competitive rates and a wide range of shipping options to suit your needs. We also have a team of knowledgeable customer service representatives who are always available to answer any questions you may have. So if you're looking for a hassle-free shipping experience, contact AS-Trans today!"
                }
            },
            finlandBulgaria: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ФІНЛЯНДІЯ-БОЛГАРІЯ",
                    american: "CARGO TRANSPORTATION FINLAND-BULGARIA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "AS-TRANS - КОМПАНІЯ,",
                        american: "AS-TRANS IS A COMPANY"
                    },
                    title: {
                        ukrainian: "ЯКА ПРОПОНУЄ ПОСЛУГИ З ПЕРЕВЕЗЕННЯ ВАНТАЖІВ З ФІНЛЯНДІЇ ДО БОЛГАРІЇ.",
                        american: "THAT OFFERS CARGO TRANSPORTATION SERVICES FROM FINLAND TO BULGARIA."
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Ми пропонуємо різні послуги з перевезення вантажів, у тому числі:",
                    american: "The company has been in business for over 10 years and has a good reputation. We offer a variety of Cargo transportation services, including:"
                },
                listItem1: {
                    ukrainian: "експрес-перевезення вантажів",
                    american: "express Cargo transportation"
                },
                listItem2: {
                    ukrainian: "перевезення великогабаритних та збірних вантажів",
                    american: "general Cargo transportation"
                },
                listItem3: {
                    ukrainian: "перевезення вантажів, які потребують спеціальної умови зберігання та транспортування",
                    american: "special Cargo transportation"
                },
                paragraph2: {
                    ukrainian: "Перевезення вантажів з Фінляндії до Болгарії пройде легко, без зайвого клопоту в чітко окреслені терміни. Ми допоможемо в митному оформленні, а при необхідності можемо надати послуги експедитора.",
                    american: "AS-Trans is a reliable and trustworthy company that you can rely on for your Cargo transportation needs. Contact AS-Trans today to get started on your Cargo transportation from Finland to Bulgaria."
                }
            },
            finlandRomania: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ФІНЛЯНДІЯ-РУМУНІЯ",
                    american: "CARGO TRANSPORTATION FINLAND-ROMANIA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "AS-TRANS - КОМПАНІЯ, ЩО",
                        american: "AS-TRANS IS A COMPANY"
                    },
                    title: {
                        ukrainian: "СПЕЦІАЛІЗУЄТЬСЯ НА ВАНТАЖОПЕРЕВЕЗЕННЯХ ТАКОЖ МІЖ ФІНЛЯНДІЄЮ ТА РУМУНІЄЮ",
                        american: "SPECIALIZING IN CARGO TRANSPORTATION BETWEEN FINLAND AND ROMANIA"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Ми працюємо понад 10 років та маємо відмінну репутацію серед наших клієнтів.",
                    american: "We have been in business for over 10 years and have an excellent reputation among our clients."
                },
                paragraph2: {
                    ukrainian: "Ми пропонуємо конкурентоспроможні ціни та ефективне обслуговування, що робить нас ідеальним вибором для тих, хто шукає вантажні перевезення Фінляндія-Румунія. Ми також маємо досвід роботи з будь-якими видами вантажів, у тому числі з небезпечними вантажами.",
                    american: "We offer competitive prices and efficient service, making us the ideal choice for those looking for Cargo transportation Finland-Romania by AS-Trans company. We are also experienced in handling all types of Cargo, including dangerous goods."
                },
                paragraph3: {
                    ukrainian: "Якщо ви шукаєте надійну та досвідчену компанію для вирішення ваших завдань із вантажоперевезень, зверніть увагу на AS-TRANS. Зв'яжіться з нами сьогодні, щоб дізнатися більше.",
                    american: "If you are looking for a reliable and experienced company to handle your Cargo transportation needs, look no further than AS-Trans. Contact us today to get started. Thank you for choosing AS-Trans for your Cargo transportation Finland-Romania by AS-Trans company needs. We appreciate your business and look forward to serving you in the future."
                }
            },
            finlandTurkey: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ФІНЛЯНДІЯ-ТУРЕЧЧИНА",
                    american: "CARGO TRANSPORTATION FINLAND-TURKEY"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ДЛЯ КОМПАНІЇ AS-TRANS",
                        american: "AS-TRANS IS A COMPANY"
                    },
                    title: {
                        ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ЗА ПОВІДОМЛЕННЯМ ФІНЛЯНДІЯ – ТУРЕЧЧИНА Є ДОСТАТНЬО ЗАТРЕБУВАНОЮ ПОСЛУГОЮ",
                        american: "THAT OFFERS CARGO TRANSPORTATION SERVICES FROM FINLAND TO TURKEY"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "У нас є широкий вибір вантажних автомобілів для будь-яких потреб у доставці, а наші досвідчені водії подбають про те, щоб ваш вантаж прибув до пункту призначення в цілості та безпеці. Ми також пропонуємо конкурентоспроможні ціни та гнучкі варіанти співробітництва відповідно до вашого бюджету та графіку доставки.",
                    american: "Looking for a reliable cargo transportation company to ship your goods from Finland to Turkey? Look no further than AS-Trans! We are a leading provider of cargo transportation services between these two countries, and we can get your goods delivered safely and on time. We have a wide range of trucks and trailers to suit any shipping needs, and our experienced drivers will make sure your shipment arrives safely at its destination. We also offer competitive rates and flexible shipping options to suit your budget and shipping schedule."
                },
                paragraph2: {
                    ukrainian: "Тож якщо вам потрібні вантажоперевезення з Фінляндії до Туреччини, сміливо звертайтесь до AS-TRANS – ми спеціалісти!",
                    american: "So if you need cargo transportation from Finland to Turkey, don't hesitate to contact AS-Trans – we're the experts!"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Доставка зі Швеції" (pages/delivery-from-sweden.html)
    deliveryFromSweden: {
        meta: {
            title: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey"
            },
            description: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Sweden, Moldova, Romania, Bulgaria, Turkey"
            },
            ogTitle: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey"
            },
            ogDescription: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!"
            },
            twitterTitle: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey"
            },
            twitterDescription: {
                ukrainian: "Перевезення зі Швеції в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!",
                american: "Transportation from Sweden to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Швеція-ЄС",
                american: "Sweden-EU"
            }
        },
        title: {
            ukrainian: "ПЕРЕВЕЗЕННЯ ВАНТАЖІВ ЗІ ШВЕЦІЇ ДО КРАЇН ЄВРОПИ",
            american: "TRANSPORTATION OF GOODS FROM SWEDEN TO EUROPEAN COUNTRIES"
        },
        intro: {
            paragraph1: {
                ukrainian: "Існує безліч способів перевезення товарів зі Швеції до інших європейських країн. Найпоширеніший спосіб — автомобільний, але є також варіанти доставки залізницею, повітрям і морем.",
                american: "There are many ways to transport goods from Sweden to other European countries. The most common way is by truck, but there are also options for shipping by rail, air, and sea."
            },
            paragraph2: {
                ukrainian: "Автоперевезення – найпопулярніший варіант перевезення вантажів зі Швеції до інших країн Європи. Він відносно швидкий та недорогий. Середній час транзиту вантажівкою зі Швеції до інших європейських країн становить близько чотирьох днів.",
                american: "Trucking is the most popular option for transportation of goods from Sweden to other European countries. This is because it is relatively fast and inexpensive. The average transit time by truck from Sweden to other European countries is about four days."
            },
            paragraph3: {
                ukrainian: "Доставка залізницею – ще один варіант перевезення вантажів зі Швеції до інших країн Європи. Цей метод часто використовується для великих чи важких вантажів. Середній час транзиту залізницею зі Швеції до інших європейських країн становить близько семи днів.",
                american: "Shipping by rail is another option for transportation of goods from Sweden to other European countries. This method is often used for large or heavy shipments. The average transit time by rail from Sweden to other European countries is about seven days."
            },
            paragraph4: {
                ukrainian: "Авіаперевезення – найшвидший варіант перевезення вантажів зі Швеції в інші країни Європи. Однак він і найдорожчий. Середній час транзиту повітрям зі Швеції до інших європейських країн становить близько двох днів.",
                american: "Air transportation is the fastest option for transportation of goods from Sweden to other European countries. However, it is also the most expensive. The average transit time by air from Sweden to other European countries is about two days."
            },
            paragraph5: {
                ukrainian: "Морські перевезення – найповільніший варіант перевезення вантажів зі Швеції до інших країн Європи. Проте він часто є найбільш економічним. Середній час транзиту морем зі Швеції до інших європейських країн становить близько двох тижнів.",
                american: "Sea transportation is the slowest option for transportation of goods from Sweden to other European countries. However, it is often the most economical. The average transit time by sea from Sweden to other European countries is about two weeks."
            }
        },
        sections: {
            swedenMoldova: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-МОЛДОВА",
                    american: "CARGO TRANSPORTATION SWEDEN-MOLDOVA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ВАНТАЖНІ ПЕРЕВЕЗЕННЯ ШВЕЦІЯ-МОЛДОВА",
                        american: "CARGO TRANSPORTATION SWEDEN-MOLDOVA"
                    },
                    title: {
                        ukrainian: "Є ЖИТТЄВО ВАЖЛИВОЮ ЛАНКОЮ В ЛАНЦЮГУ ПОСТАВОК МІЖ ДВОМА КРАЇНАМИ",
                        american: "IS A VITAL LINK IN THE SUPPLY CHAIN BETWEEN THESE TWO COUNTRIES"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Молдова значною мірою залежить від імпорту зі Швеції для задоволення своїх потреб, а шведські підприємства покладаються на Молдову як на ключовий експортний ринок. Компанії з транспортування вантажів відіграють вирішальну роль у забезпеченні безперебійного руху товарів та матеріалів між двома країнами.",
                    american: "Moldova relies heavily on imports from Sweden to meet its needs, and Swedish businesses rely on Moldova as a key export market. Cargo transportation companies play a critical role in ensuring that goods and materials flow smoothly between the two countries."
                },
                paragraph2: {
                    ukrainian: "При виборі транспортної компанії необхідно враховувати низку факторів. Шведські підприємства повинні бути впевнені, що їх товари будуть доставлені до Молдови в цілості та безпеці вчасно, і що вони зможуть відстежувати свої поставки протягом усього шляху.",
                    american: "There are a number of factors to consider when choosing a cargo transportation company. Swedish businesses need to be sure that their goods will arrive safely and on time in Moldova, and that they will be able to track their shipments throughout the journey."
                },
                paragraph3: {
                    ukrainian: "Не менш важливо, щоб обрана ними компанія мала досвід доставки до Молдови і була знайома з митним процесом. Молдовські підприємства мають бути впевнені, що їхні вантажі прибудуть вчасно і що вони матимуть змогу відстежувати свої поставки.",
                    american: "They also need to be sure that the company they choose has experience with shipping to Moldova and is familiar with the customs process. Moldovan businesses need to be sure that their shipments will arrive on time and that they will be able to track their shipments."
                },
                paragraph4: {
                    ukrainian: "Вантажні транспортні компанії повинні відповідати суворим вимогам, щоб працювати між двома країнами. Вони повинні мати страхове покриття у разі непередбачених подій чи пошкодження товарів. Компанії з вантажоперевезень, що відповідають цим вимогам, можуть надати цінну послугу бізнесу як у Швеції, так і у Молдові.",
                    american: "Cargo transportation companies must meet strict requirements in order to operate between these two countries. They must have a valid license from the Swedish Transport Agency and be registered with the Moldovan Ministry of Transportation. They must also have insurance coverage in case of accidents or damage to goods. Cargo transportation companies that meet these requirements are able to provide a valuable service to businesses in both Sweden and Moldova."
                },
                paragraph5: {
                    ukrainian: "Вантажоперевезення Швеція-Молдова компанією AS-TRANS – це чудовий спосіб доставити ваш вантаж. Ми надійні, професійні та клієнтоорієнтовані. Зв'яжіться з нами і переконайтеся у високій якості послуг.",
                    american: "Cargo transportation Sweden-Moldova by AS-Trans company is a great way to get your goods from one place to another. We offer a variety of services that can help you get your cargo where it needs to go, and we're always here to help. Contact us today to learn more about our services and how we can help you get your cargo to its destination safely and on time."
                }
            },
            swedenBulgaria: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-БОЛГАРІЯ",
                    american: "CARGO TRANSPORTATION SWEDEN-BULGARIA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-БОЛГАРІЯ",
                        american: "CARGO TRANSPORTATION SWEDEN-BULGARIA"
                    },
                    title: {
                        ukrainian: "МОЖУТЬ ЗАВДАТИ ЧИМАЛО КЛОПОТУ",
                        american: "CAN BE A BIT OF A TRICKY BUSINESS"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Є багато нюансів, які слід враховувати під час перевезення вантажів між цими двома країнами.",
                    american: "There are many things to consider when transporting cargo between these two countries."
                },
                paragraph2: {
                    ukrainian: "Ось кілька порад, які допоможуть полегшити процес:",
                    american: "Here are some tips to help make the process go smoothly:"
                },
                tip1: {
                    ukrainian: "Переконайтеся, що всі необхідні документи в наявності та оформлені належним чином.",
                    american: "Make sure you have all the necessary paperwork in order. This includes things like bills of lading, insurance documents, and other required forms."
                },
                tip2: {
                    ukrainian: "Виберіть правильний транспорт. Є багато доступних варіантів, тому обов'язково розгляньте всі фактори, перш ніж приймати рішення.",
                    american: "Choose the right mode of transportation. There are many options available, so be sure to consider all the factors involved before making a decision."
                },
                tip3: {
                    ukrainian: "Працюйте з надійною компанією, яка має досвід вантажних перевезень Швеція-Болгарія. Це дасть впевненнысть, що ваш вантаж прибуде безпечно та вчасно.",
                    american: "Work with a reputable company that has experience with Cargo transportation Sweden-Bulgaria. This will help ensure that your shipment arrives safely and on time."
                },
                paragraph3: {
                    ukrainian: "Шукаєте надійну та недорогу транспортну компанію для доставки ваших вантажів із Швеції до Болгарії? AS-TRANS до Ваших послуг! Ми маємо багаторічний досвід перевезення всіх видів вантажів між цими двома країнами, і ми завжди доставляємо вчасно та в рамках бюджету. Зв'яжіться з нами сьогодні, щоб отримати пропозицію для вашого вантажу!",
                    american: "Looking for a reliable and affordable cargo transportation company to ship your goods from Sweden to Bulgaria? Look no further than AS-Trans! We have years of experience transporting all kinds of cargo between these two countries, and we always deliver on time and on budget. Contact us today to get a quote for your shipment!"
                },
                paragraph4: {
                    ukrainian: "",
                    american: "Following these tips, Cargo transportation Sweden-Bulgaria can be a breeze. Just be sure to do your research and plan ahead, and you'll be sure to have a smooth and successful shipment."
                }
            },
            swedenRomania: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-РУМУНІЯ",
                    american: "CARGO TRANSPORTATION SWEDEN-ROMANIA"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-РУМУНІЯ –",
                        american: "CARGO TRANSPORTATION SWEDEN-ROMANIA"
                    },
                    title: {
                        ukrainian: "ПОПУЛЯРНИЙ СПОСІБ ПЕРЕМІЩЕННЯ ВАНТАЖІВ МІЖ ДВОМА КРАЇНАМИ",
                        american: "IS A POPULAR WAY TO MOVE GOODS BETWEEN THE TWO COUNTRIES"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Компанії з вантажних перевезень пропонують різні послуги, в тому числі доставку «від дверей до дверей», яка може полегшити ваше життя.",
                    american: "Cargo transportation companies offer a variety of services, including door-to-door service, which can make your life easier."
                },
                paragraph2: {
                    ukrainian: "На що звернути увагу при виборі транспортної компанії:",
                    american: "Here are some things to keep in mind when choosing a cargo transportation company:"
                },
                tip1: {
                    ukrainian: "Переконайтеся, що компанія має досвід перевезення вантажів між Швецією та Румунією.",
                    american: "Make sure the company has experience transporting goods between Sweden and Romania."
                },
                tip2: {
                    ukrainian: "Запитайте про страхове покриття компанії. Важливо, щоб ваші товари були захищені у разі пошкодження чи втрати.",
                    american: "Ask about the company's insurance coverage. You want to make sure your goods are protected in case of damage or loss."
                },
                tip3: {
                    ukrainian: "Дізнайтесь, яку систему відстеження використовує компанія. Це допоможе вам стежити за своїм вантажем і бути впевненими, що він прибуде в цілості та безпеці.",
                    american: "Find out what kind of tracking system the company uses. This will help you keep tabs on your shipment and ensure it arrives safely."
                },
                tip4: {
                    ukrainian: "Отримайте пропозицію від компанії, щоб знати, скільки коштуватиме послуга. Вантажоперевезення можуть бути дорогими, тому важливо укласти вигідну угоду.",
                    american: "Get a quote from the company so you know how much the service will cost. Cargo transportation can be expensive, so it's important to get a good deal."
                },
                paragraph3: {
                    ukrainian: "Зважаючи на ці поради, ви обов'язково знайдете компанію з вантажоперевезень, яка зможе задовольнити ваші потреби. Однією з таких компаній буде AS-TRANS. Наша досвідчена команда подбає про те, щоб ваш вантаж прибув у цілості та вчасно. Зв'яжіться з нами для безкоштовної консультації!",
                    american: "Looking for a reliable and affordable cargo transportation company to ship your goods from Sweden to Romania? Look no further than AS-Trans! Our experienced team will take care of everything and make sure your shipment arrives safely and on time. Contact us today for a free quote!"
                },
                paragraph4: {
                    ukrainian: "",
                    american: "With these tips in mind, you're sure to find a cargo transportation company that can meet your needs."
                }
            },
            swedenTurkey: {
                title: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ ШВЕЦІЯ-ТУРЕЧЧИНА",
                    american: "CARGO TRANSPORTATION SWEDEN-TURKEY"
                },
                hero: {
                    subtitle: {
                        ukrainian: "ПРИ ПЕРЕВЕЗЕННІ ВАНТАЖУ ЗІ ШВЕЦІЇ ДО ТУРЕЧЧИНИ",
                        american: "CARGO TRANSPORTATION FROM SWEDEN TO TURKEY"
                    },
                    title: {
                        ukrainian: "ВАЖЛИВО ВРАХОВУВАТИ ТИП ВАНТАЖУ, ЩО ПЕРЕВОЗИТЬСЯ",
                        american: "CAN BE DONE VIA SHIP, AIRPLANE, OR TRAIN"
                    },
                    contactButton: {
                        ukrainian: "КОНТАКТИ",
                        american: "CONTACT"
                    }
                },
                paragraph1: {
                    ukrainian: "Деякі вантажі найкраще підходять для перевезення морським транспортом, у той час як інші краще перевозити літаком чи поїздом. Також важливо враховувати вартість перевезення та терміни, в які має прибути вантаж.",
                    american: "The most popular method is by ship, as it is the most cost-effective. Cargo transportation by airplane is faster but significantly more expensive. Train transport takes the longest but may be the best option for certain types of cargo."
                },
                paragraph2: {
                    ukrainian: "Перевезення вантажів морським транспортом є найпопулярнішим способом, оскільки є найбільш економічно вигідним. Вантажним судам зазвичай потрібно від двох до трьох тижнів, щоб прибути до Туреччини зі Швеції. Цей спосіб найкраще підходить для великих партій вантажів, без термінів, що горять.",
                    american: "When transporting cargo from Sweden to Turkey, it is important to consider the type of cargo being transported. Some cargoes are best suited for ship transport, while others may be better off transported by airplane or train. It is also important to factor in the cost of transportation, as well as the time frame in which the cargo needs to arrive. Cargo transportation by ship is the most popular method, as it is the most cost-effective. Cargo ships typically take between two and three weeks to arrive in Turkey from Sweden. This method is best suited for large shipments of cargo that are not time-sensitive."
                },
                paragraph3: {
                    ukrainian: "Компанія AS-TRANS пропонує Вам вантажоперевезення атомобільним транспортом та послуги експедитора на повідомленні Швеція – Туреччина. Ми пропонуємо конкурентоспроможні ціни та відмінний сервіс, тому ви можете бути впевнені, що ваш вантаж буде доставлений в цілості, безпеці та вчасно. Зв'яжіться з нами, щоб дізнатися вартість та обговорити подробиці!",
                    american: "Looking for a reliable and affordable cargo transportation company to ship your goods from Sweden to Turkey? Look no further than AS-Trans! We offer competitive rates and excellent service, so you can rest assured that your shipments will arrive safely and on time. Contact us today to get started!"
                }
            },
            benefits: {
                title: {
                    ukrainian: "ПЕРЕВАГИ РОБОТИ З НАМИ",
                    american: "BENEFITS OF WORKING WITH US"
                },
                subtitle: {
                    ukrainian: "КЛЮЧОВІ МОМЕНТИ РОБОТИ AS-TRANS:",
                    american: "THE KEY POINTS OF AS-TRANS WORK ARE:"
                },
                benefit1: {
                    ukrainian: "ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КЛІЄНТА",
                    american: "INDIVIDUAL APPROACH TO THE CLIENT"
                },
                benefit2: {
                    ukrainian: "ПРОЗОРА РОБОТА",
                    american: "CLEAR WORK"
                },
                benefit3: {
                    ukrainian: "ТРАНСПОРТУВАННЯ ГАБАРИТНИХ ТА НЕГАБАРИТНИХ ВАНТАЖІВ",
                    american: "TRANSPORTATION OF DIMENSIONAL AND OVERSIZED CARGO"
                },
                benefit4: {
                    ukrainian: "ВАНТАЖОПЕРЕВЕЗЕННЯ \"ПІД КЛЮЧ\"",
                    american: "TURNKEY CARGO TRANSPORTATION"
                },
                benefit5: {
                    ukrainian: "ОФОРМЛЕННЯ ТРАНСПОРТНОЇ ДОКУМЕНТАЦІЇ",
                    american: "PREPARATION OF TRANSPORT DOCUMENTATION"
                },
                benefit6: {
                    ukrainian: "РОБОТА З ЮРИДИЧНИМИ ТА ФІЗИЧНИМИ ОСОБАМИ",
                    american: "WORK WITH LEGAL ENTITIES AND INDIVIDUALS"
                },
                benefit7: {
                    ukrainian: "ОПТИМІЗАЦІЯ ВИТРАТ",
                    american: "COST OPTIMIZATION"
                },
                benefit8: {
                    ukrainian: "КОНСОЛІДАЦІЯ ЗБІРНИХ ВАНТАЖІВ У КРАЇНАХ ЄВРОПЕЙСЬКОГО СОЮЗУ",
                    american: "CONSOLIDATION OF GROUPAGE CARGOES IN THE COUNTRIES OF THE EUROPEAN UNION"
                }
            },
            howItWorks: {
                title: {
                    ukrainian: "ЯК ЦЕ ПРАЦЮЄ",
                    american: "HOW IT WORKS"
                },
                subtitle: {
                    ukrainian: "Ми тут. Отримайте безкоштовну консультацію",
                    american: "We are here. Get a free consultation"
                },
                form: {
                    name: {
                        ukrainian: "Ваше ім'я",
                        american: "Your name"
                    },
                    email: {
                        ukrainian: "Електронна адреса",
                        american: "Email"
                    },
                    phone: {
                        ukrainian: "Номер телефону",
                        american: "Phone number"
                    },
                    topic: {
                        ukrainian: "Тема",
                        american: "Topic"
                    },
                    message: {
                        ukrainian: "Повідомлення",
                        american: "Message"
                    },
                    submit: {
                        ukrainian: "Надіслати",
                        american: "Submit Message"
                    }
                }
            }
        }
    },

    // Страница "Митне оформлення" (pages/customs-clearance.html)
    customsClearance: {
        meta: {
            title: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві - з України, Китаю",
                american: "International customs clearance services Ukraine - agent, broker, fees"
            },
            description: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!",
                american: "International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Ukraine, China"
            },
            ogTitle: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві - з України, Китаю",
                american: "International customs clearance services Ukraine - agent, broker, fees"
            },
            ogDescription: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!",
                american: "International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            twitterTitle: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві - з України, Китаю",
                american: "International customs clearance services Ukraine - agent, broker, fees"
            },
            twitterDescription: {
                ukrainian: "Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!",
                american: "International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Митне оформлення",
                american: "Customs clearance"
            }
        },
        sidebar: {
            directions: {
                ukrainian: "Напрями",
                american: "Directions"
            },
            route1: {
                ukrainian: "УКРАЇНА - ЛАТВІЯ",
                american: "UKRAINE - LATVIA"
            },
            route2: {
                ukrainian: "УКРАЇНА - ЕСТОНІЯ",
                american: "UKRAINE - ESTONIA"
            },
            route3: {
                ukrainian: "УКРАЇНА - ФІНЛЯНДІЯ",
                american: "UKRAINE - FINLAND"
            },
            route4: {
                ukrainian: "УКРАЇНА - ШВЕЦІЯ",
                american: "UKRAINE - SWEDEN"
            },
            route5: {
                ukrainian: "УКРАЇНА - НОРВЕГІЯ",
                american: "UKRAINE - NORWAY"
            },
            route6: {
                ukrainian: "МИТНЕ ОФОРМЛЕННЯ ВАНТАЖІВ",
                american: "CUSTOMS CLEARANCE OF GOODS"
            },
            form: {
                title: {
                    ukrainian: "Залишити заявку",
                    american: "Submit your application"
                },
                name: {
                    ukrainian: "Ваше ім'я",
                    american: "Your name"
                },
                phone: {
                    ukrainian: "Ваш номер телефону:",
                    american: "Your phone number:"
                },
                email: {
                    ukrainian: "Ваш email:",
                    american: "Your email:"
                },
                submit: {
                    ukrainian: "Відправити повідомлення",
                    american: "Send message"
                }
            },
            contacts: {
                title: {
                    ukrainian: "Контакти",
                    american: "Contacts"
                },
                location: {
                    ukrainian: "Україна, Київ",
                    american: "Ukraine, Kyiv"
                },
                street: {
                    ukrainian: "вул. Радищева, 3",
                    american: "street Radishcheva, 3"
                },
                office: {
                    ukrainian: "офіс Б-306, а/с 25",
                    american: "office B-306, a / s 25"
                }
            }
        },
        content: {
            title: {
                ukrainian: "Про надану послугу",
                american: "About the service provided"
            },
            paragraph1: {
                ukrainian: "Митне оформлення вантажів в Україні та за кордоном найкраще довірити професіоналам, які візьмуть на себе всі турботи пов'язані з документацією, а процедура митного оформлення пройде швидко та без додаткових складнощів.",
                american: "It is always better to entrust customs clearance of goods in Ukraine and abroad to professionals. They will take care of all the hassle associated with documentation, and the customs clearance procedure will be quick and with no difficulties."
            },
            paragraph2: {
                ukrainian: "Одна з найкращих компаній на ринку України, яка надає митно-брокерські послуги – це безсумнівно AS-TRANS, місто Київ.",
                american: "One of the best companies in Ukraine, providing customs brokerage services is undoubtedly AS-TRANS, Kyiv."
            },
            paragraph3: {
                ukrainian: "AS – TRANS – досвідчений митний брокер, який дозволить перевести на аутсорсинг усі види діяльності, пов'язані із зовнішньоторговельними операціями. Ми готові розпочати роботу вже сьогодні та враховуємо всі нюанси специфіки бізнесу клієнта!",
                american: "AS-TRANS is an experienced customs broker. Our company will allow you to outsource all activities related to foreign trade operations. We are ready to start working at once and take into account all the nuances of the specifics of the client's business!"
            },
            advantages: {
                title: {
                    ukrainian: "МИТНІ ПОСЛУГИ ВІД КОМПАНІЇ AS-TRANS, ЩО НАДАЮТЬСЯ, ВІДРІЗНЯЮТЬСЯ ТАКИМИ ПЕРЕВАГАМИ:",
                    american: "THE CUSTOMS SERVICES PROVIDED BY AS-TRANS HAVE THE FOLLOWING ADVANTAGES:"
                },
                advantage1: {
                    ukrainian: "Широка номенклатура товарів, у тому числі транспортні засоби",
                    american: "A wide range of goods, including vehicles"
                },
                advantage2: {
                    ukrainian: "Розробка оптимальної схеми митного очищення та додаткові правові консультації",
                    american: "Development of an optimal customs clearance scheme and providing legal advice"
                },
                advantage3: {
                    ukrainian: "Оперативне заповнення митної декларації та обґрунтування розрахунку платежів",
                    american: "Prompt completion of the customs declaration and justification for the calculation of payments"
                },
                advantage4: {
                    ukrainian: "Оформлення всього переліку дозвільних, супровідних та митних документів",
                    american: "Registration of the entire list of permits, accompanying and customs documents"
                },
                advantage5: {
                    ukrainian: "Зберігання та обробка товарів на митному складі",
                    american: "Storage and processing of goods in a customs warehouse in Kyiv"
                },
                advantage6: {
                    ukrainian: "Надання детального звіту про проведення імпортної (експортної) операції",
                    american: "Providing a detailed report on the import (export) operation"
                }
            },
            aboutCompany: {
                title: {
                    ukrainian: "КОРОТКО ПРО КОМПАНІЮ AS-TRANS:",
                    american: "SOME FACTS ABOUT AS-TRANS"
                },
                fact1: {
                    ukrainian: "Одержання ліцензії – 2003 рік;",
                    american: "Obtaining a license – 2003;"
                },
                fact2: {
                    ukrainian: "14 досвідчених спеціалістів митної справи;",
                    american: "14 experienced customs specialists;"
                },
                fact3: {
                    ukrainian: "Митно-вантажний відділ Київ та Київська область, а також Львів та Луцьк;",
                    american: "Customs and cargo department in Kyiv and Kyiv region, as well as Lviv and Lutsk;"
                },
                fact4: {
                    ukrainian: "ЗЕД послуги «під ключ»;",
                    american: "FEA turnkey services;"
                },
                fact5: {
                    ukrainian: "Електронне декларування товарів.",
                    american: "Electronic declaration of goods."
                }
            },
            turnkey: {
                title: {
                    ukrainian: "МИТНЕ ОФОРМЛЕННЯ ІМПОРТУ ТА ЕКСПОРТУ ПІД КЛЮЧ",
                    american: "TURNKEY IMPORT AND EXPORT CUSTOMS CLEARANCE"
                },
                paragraph1: {
                    ukrainian: "Компанія AS-TRANS пропонує своїм клієнтам оформлення імпорту та експорту під ключ. Головний принцип роботи митного брокера AS-TRANS – це індивідуальний підхід до кожного клієнта, тому ви можете бути впевнені, що для вас будуть створені комфортні умови співпраці, які врахують всі інтереси підприємства.",
                    american: "AS-TRANS offers its customers turnkey import and export clearance. The main principle of work of the AS-TRANS customs broker is an individual approach to each client. You can be sure that you will be provided with comfortable conditions for cooperation, which will take into account all the interests of the enterprise."
                },
                paragraph2: {
                    ukrainian: "Акредитація на митниці – це перший крок, необхідний проведення зовнішньоекономічної діяльності (ЗЕД). Відсутність акредитації унеможливлює митне оформлення товарів.",
                    american: "Accreditation at customs is the first step required for conducting foreign economic activity (FEA). Lack of accreditation makes customs clearance of goods impossible."
                },
                paragraph3: {
                    ukrainian: "Акредитація виконується протягом 1-2 робочих днів з моменту передачі нашим фахівцям усіх необхідних документів.",
                    american: "Accreditation is carried out within 1-2 business days from the date of transfer of all necessary documents to our specialists."
                },
                paragraph4: {
                    ukrainian: "З нашою допомогою ви можете здійснити експорт або імпорт товарів, не вдаючись до процедури акредитації. На підставі договору комісії компанія AS-TRANS може здійснити угоду від свого імені.",
                    american: "With our help, you can also export or import goods without going through an accreditation procedure. On the basis of a commission agreement, AS-TRANS can make a transaction on its own behalf."
                }
            },
            types: {
                title: {
                    ukrainian: "ВИДИ МИТНОГО ОФОРМЛЕННЯ",
                    american: "TYPES OF CUSTOMS CLEARANCE"
                },
                import: {
                    title: {
                        ukrainian: "МИТНИЙ ІМПОРТ",
                        american: "CUSTOMS IMPORT"
                    },
                    paragraph1: {
                        ukrainian: "Уклали договір з іноземними партнерами та бажаєте оформити вантажі без зайвого клопоту? Ми виконуємо митне оформлення імпорту максимально оперативно та з мінімальними витратами!",
                        american: "Have you concluded an agreement with foreign partners and want to arrange cargo without any hassle? We carry out customs clearance of imports as quickly as possible and at minimal cost!"
                    },
                    paragraph2: {
                        ukrainian: "Послідовність кроків при ввезенні товарів в Україну:",
                        american: "Recommended sequence of steps when importing goods into Ukraine includes:"
                    },
                    step1: {
                        ukrainian: "Консультація щодо доцільності імпорту товару (дозвільні документи, розмір митних платежів тощо);",
                        american: "Consultations on the expediency of importing goods (permits, customs payments, etc.);"
                    },
                    step2: {
                        ukrainian: "Укладання договору із нашою компанією;",
                        american: "Conclusion of the contract with our company;"
                    },
                    step3: {
                        ukrainian: "Акредитація фірми як учасник ЗЕД (при необхідності);",
                        american: "Accreditation of the company as a participant in foreign economic activity (if necessary);"
                    },
                    step4: {
                        ukrainian: "Погодження переліку документів, що надаються, та суми митних платежів;",
                        american: "Coordination of the list of submitted documents and the amount of customs payments;"
                    },
                    step5: {
                        ukrainian: "Укладання зовнішньоекономічного договору, враховуючи вимоги митних органів;",
                        american: "Conclusion of a foreign economic contract, taking into account the requirements of the customs authorities;"
                    },
                    step6: {
                        ukrainian: "Укладання договору з нашою компанією щодо надання транспортно-експедиційних послуг (за бажанням клієнта);",
                        american: "Conclusion of an agreement on the provision of forwarding services (at the request of the client);"
                    },
                    step7: {
                        ukrainian: "Ввезення та митне очищення товару.",
                        american: "Import and customs clearance of goods."
                    },
                    important: {
                        ukrainian: "Важливо! AS-TRANS готові виконати митне оформлення вантажів, доставка яких здійснюється міжнародними перевізниками – TNT, DHL, FedEx, UPS тощо.",
                        american: "It's important! AS-TRANS is ready to carry out customs clearance of goods delivered by international carriers – TNT, DHL, FedEx, UPS, etc."
                    }
                },
                export: {
                    title: {
                        ukrainian: "МИТНИЙ ЕКСПОРТ",
                        american: "CUSTOMS EXPORT"
                    },
                    paragraph1: {
                        ukrainian: "Бажаєте продавати продукцію українських виробників за кордоном? Митний брокер AS-TRANS надає всі необхідні послуги для оформлення митного експорту:",
                        american: "Are you going to sell products of Ukrainian manufacturers abroad? AS-TRANS customs broker provides all the necessary services for customs export clearance:"
                    },
                    service1: {
                        ukrainian: "Консультації та допомога під час укладання договору купівлі-продажу;",
                        american: "Advice and assistance in concluding a sales contract;"
                    },
                    service2: {
                        ukrainian: "Підготовка до зовнішньоторговельної операції, супровід угоди \"під ключ\";",
                        american: "Preparation for a foreign trade operation, a turnkey support of transaction;"
                    },
                    service3: {
                        ukrainian: "Допомога у оформленні пакета товарно-супровідних документів;",
                        american: "Assistance in the preparation of a package of shipping documents;"
                    },
                    service4: {
                        ukrainian: "Митні процедури для експорту \"під ключ\";",
                        american: "Turnkey customs procedures for exports;"
                    },
                    service5: {
                        ukrainian: "Логістичні послуги для доставки товару клієнту (по всьому світу) (за бажанням клієнта).",
                        american: "Logistics services for delivery of goods to the client (worldwide) (at the request of the client)."
                    },
                    paragraph2: {
                        ukrainian: "Митне оформлення експорту «під ключ» – це повний супровід зовнішньоекономічної угоди, починаючи від укладання договору і доставкою вантажу складу покупця. Ми поруч щохвилини!",
                        american: "Customs clearance of exports on a turnkey basis is a full support of a foreign economic transaction, from the conclusion of a contract to the delivery of goods to the buyer's warehouse. We are there with you every step of the way!"
                    }
                },
                equipment: {
                    title: {
                        ukrainian: "ОФОРМЛЕННЯ ОБЛАДНАННЯ",
                        american: "CUSTOMS CLEARANCE OF EQUIPMENT"
                    },
                    paragraph1: {
                        ukrainian: "Митне оформлення обладнання пройде легко і просто, незважаючи на те, що обладнання одна з найскладніших категорій для митного оформлення. Імпорт обладнання в Україну становить значну частку загального обсягу імпортної продукції. Переважно це технологічне обладнання чи виробничі лінії, а також медичне обладнання.",
                        american: "Customs clearance of equipment will be easy and simple, despite the fact that equipment is one of the most difficult categories for customs clearance. Import of equipment to Ukraine is a significant share of the total volume of imported products. These are mainly technological equipment or production lines, as well as medical equipment."
                    },
                    paragraph2: {
                        ukrainian: "Компанія AS-TRANS проведе митне оформлення обладнання згідно з усіма вимогами та максимально короткі терміни. Маючи величезний досвід у митно-брокерській справі, ми можемо допомогти з оформленням нестандартного та б/в обладнання.",
                        american: "AS-TRANS will carry out customs clearance of the equipment in accordance with all requirements and in the shortest possible terms. Having vast experience in customs brokerage, we can help with registration of non-standard and used equipment."
                    }
                },
                china: {
                    title: {
                        ukrainian: "ОФОРМЛЕННЯ ВАНТАЖІВ З КИТАЮ",
                        american: "CARGO CLEARANCE FROM CHINA"
                    },
                    paragraph1: {
                        ukrainian: "Звернутися до нас у AS-TRANS Ви можете також при необхідності митного оформлення вантажів із Китаю. Як досвідчений митний брокер компанія AS-TRANS може підключитися на будь-якому етапі розмитнення товарів з Китаю, а також надати професійну консультацію з усіх питань.",
                        american: "You can also contact us at AS-TRANS if you need customs clearance of goods from China. As an experienced customs broker, AS-TRANS can join the process at any stage of customs clearance of goods from China, as well as provide professional advice on all issues that have arisen."
                    }
                }
            },
            prices: {
                title: {
                    ukrainian: "ЦІНИ МИТНОГО ОФОРМЛЕННЯ ВАНТАЖІВ",
                    american: "PRICES FOR CUSTOMS CLEARANCE OF GOODS"
                },
                paragraph1: {
                    ukrainian: "Ціни митного оформлення вантажів відрізнятимуться і розраховуються індивідуально залежно від потреб клієнта. Як вже раніше згадувалося, компанія AS-TRANS завжди дбатиме як про свою репутацію, так і про потреби клієнта, тому ціни наших послуг дуже лояльні і ми завжди намагаємося позбавити наших клієнтів додаткових витрат.",
                    american: "Prices for customs clearance of different goods can vary and are calculated individually depending on the needs of the client. As mentioned earlier, AS-TRANS always takes care of both its reputation and the needs of the client, therefore the prices of our services are very loyal and we always try to save our clients from additional costs."
                },
                paragraph2: {
                    ukrainian: "Митне оформлення вантажів в Україні Ви можете замовити зателефонувавши до нашої компанії за телефоном, який Ви бачите на сайті. Ми завжди відкриті до діалогу та готові надати індивідуальні знижки у разі оформлення довгострокового контракту.",
                    american: "You can order customs clearance of goods in Ukraine by calling our company at the phone number listed on the website. We are always ready to provide individual discounts in case of a long-term contract."
                }
            }
        }
    },

    // Страница "Митний брокер" (pages/customs-broker.html)
    customsBroker: {
        meta: {
            title: {
                ukrainian: "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія",
                american: "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria"
            },
            description: {
                ukrainian: "Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!",
                american: "Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Ukraine, Poland, Bulgaria"
            },
            ogTitle: {
                ukrainian: "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія",
                american: "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria"
            },
            ogDescription: {
                ukrainian: "Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!",
                american: "Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!"
            },
            twitterTitle: {
                ukrainian: "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія",
                american: "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria"
            },
            twitterDescription: {
                ukrainian: "Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!",
                american: "Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Митний брокер",
                american: "Customs broker"
            }
        },
        sidebar: {
            directions: {
                ukrainian: "Напрями",
                american: "Directions"
            },
            route1: {
                ukrainian: "УКРАЇНА - ЛАТВІЯ",
                american: "UKRAINE - LATVIA"
            },
            route2: {
                ukrainian: "УКРАЇНА - ЕСТОНІЯ",
                american: "UKRAINE - ESTONIA"
            },
            route3: {
                ukrainian: "УКРАЇНА - ФІНЛЯНДІЯ",
                american: "UKRAINE - FINLAND"
            },
            route4: {
                ukrainian: "УКРАЇНА - ШВЕЦІЯ",
                american: "UKRAINE - SWEDEN"
            },
            route5: {
                ukrainian: "УКРАЇНА - НОРВЕГІЯ",
                american: "UKRAINE - NORWAY"
            },
            route6: {
                ukrainian: "МИТНЕ ОФОРМЛЕННЯ ВАНТАЖІВ",
                american: "CUSTOMS CLEARANCE OF GOODS"
            },
            form: {
                title: {
                    ukrainian: "Залишити заявку",
                    american: "Submit your application"
                },
                name: {
                    ukrainian: "Ваше ім'я",
                    american: "Your name"
                },
                phone: {
                    ukrainian: "Ваш номер телефону:",
                    american: "Your phone number:"
                },
                email: {
                    ukrainian: "Ваш email:",
                    american: "Your email:"
                },
                submit: {
                    ukrainian: "Відправити повідомлення",
                    american: "Send message"
                }
            },
            contacts: {
                title: {
                    ukrainian: "Контакти",
                    american: "Contacts"
                },
                location: {
                    ukrainian: "Україна, Київ",
                    american: "Ukraine, Kyiv"
                },
                street: {
                    ukrainian: "вул. Радищева, 3",
                    american: "street Radishcheva, 3"
                },
                office: {
                    ukrainian: "офіс Б-306, а/с 25",
                    american: "office B-306, a / s 25"
                }
            }
        },
        content: {
            title: {
                ukrainian: "Про надану послугу",
                american: "About the service provided"
            },
            mainTitle: {
                ukrainian: "МИТНИЙ БРОКЕР ДЛЯ ЮРИДИЧНИХ ОСІБ У МІСТІ КИЇВ",
                american: "CUSTOMS BROKER FOR LEGAL ENTITIES IN KYIV"
            },
            subtitle: {
                ukrainian: "Митний брокер у місті Києві є законним представником клієнта в митниці, якому доручають різні посередницькі функції, пов'язані з імпортом та експортом товарів, такими як:",
                american: "A customs broker in the city of Kyiv is a legal representative of a client at customs, who is entrusted with various intermediary functions related to the import and export of goods, such as:"
            },
            functions: {
                function1: {
                    ukrainian: "Надання необхідної інформації та документів для митного оформлення",
                    american: "Providing the necessary information and documents for customs clearance"
                },
                function2: {
                    ukrainian: "Отримання необхідних дозволів",
                    american: "Obtaining the required permits"
                },
                function3: {
                    ukrainian: "Декларація продукції, транспортних засобів тощо",
                    american: "Declaration of products, vehicles, etc."
                },
                function4: {
                    ukrainian: "Сплата мита та інші платежі, пов'язані з вантажем",
                    american: "Payment of duties and other payments related to the cargo"
                },
                function5: {
                    ukrainian: "Організація зберігання та руху вантажів та інше",
                    american: "Organizing of storage and movement of goods, and others"
                }
            },
            paragraph1: {
                ukrainian: "Іноземна економічна діяльність має власні нюанси управління документами, тому звернення до компанії, що надає професійні послуги митного брокера для юридичних організацій, може значно заощадити час та фінанси, а також уникати помилок на будь -якому етапі оформлення.",
                american: "Foreign economic activity has its own nuances of document flow. Contacting a company that provides professional services of a customs broker for legal entities can save time and finances, as well as avoid mistakes at any stage of registration."
            },
            paragraph2: {
                ukrainian: "AS-Trans, місто Києв, пропонує весь комплекс послуг митного брокера – від консультацій до повної підтримки вантажу. Звертаючись до нас, ви, безумовно, оціните високий рівень професіоналізму працівників, індивідуальний підхід до кожного клієнта, чітке дотримання узгоджених умов та здатність знайти найкращий вихід із будь -якої, навіть найскладнішої ситуації.",
                american: "AS-Trans company, Kyiv, offers a wide range of customs broker services – from consultation to full cargo escort. Turning to us, you will appreciate the high level of professionalism of our employees, personal approach to each client, strict adherence to the agreed deadlines and the ability to find the best way out of even the most difficult situation."
            },
            services: {
                title: {
                    ukrainian: "ПОСЛУГИ МИТНОГО БРОКЕРА КОМПАНІЇ AS-TRANS",
                    american: "SERVICES OF THE CUSTOMS BROKER AS-TRANS, UKRAINE"
                },
                paragraph1: {
                    ukrainian: "Список послуг митного брокера AS-Trans, Україна, є досить широким. Отже, наші експерти можуть повністю представляти інтереси клієнта на митниці у відповідності законодавчим нормам – це допоможе врахувати всі нюанси, пов'язані з виконанням дозволів, сертифікатів та іншої юридичної підготовки товарів для легкого та безперешкодного проходження митниці .",
                    american: "The list of services provided by the customs broker AS-Trans, Ukraine, is wide. Our specialists can fully represent the interests of the client at customs in compliance with the law. This will help take into account all the nuances related with the execution of permits, certificates and other legal preparation of goods for easy and smooth customs clearance."
                },
                paragraph2: {
                    ukrainian: "Обов'язки митного брокера AS-Trans, залежно від узгоджених умов співпраці, можуть включати:",
                    american: "The duties of the AS-Trans customs broker depend on the agreed terms of cooperation. They may include:"
                },
                duty1: {
                    ukrainian: "Заповнення декларацій та іншої документації, детальна декларація товарів",
                    american: "Filling in declarations and other papers, detailed declaration of goods"
                },
                duty2: {
                    ukrainian: "Збір та підготовка необхідних документів, дані управління, сертифікати, а також перевірку та подальше коригування існуючої документації",
                    american: "Collection and preparation of necessary documents, control data, certificates, as well as verification and further adjustment of existing papers"
                },
                duty3: {
                    ukrainian: "Розрахунок суми оплати та її сплати",
                    american: "Calculation of the amount of duty and its payment"
                },
                duty4: {
                    ukrainian: "Введення всіх необхідних даних у відповідні бази даних",
                    american: "Entering all the necessary data into the relevant databases"
                },
                paragraph3: {
                    ukrainian: "Крім того, послуги митного брокера можуть включати контроль завантаження та вивантаження товарів, складаючи оптимальний маршрут доставки. Цей спеціаліст також може домовлятись з різними органами, послугами, представниками державних та комерційних структур.",
                    american: "In addition, the services of a customs broker may include control of the loading and unloading of goods, drawing up the optimal delivery route. This specialist can also negotiate with various authorities, services, reps of government and commercial structures."
                },
                paragraph4: {
                    ukrainian: "Таким чином, брокер займається не лише представленням інтересів клієнта у здійсненні іноземної економічної діяльності, а й, якщо необхідно, їх захисту.",
                    american: "Thus, the broker is engaged not only in representing the interests of the client in the implementation of foreign economic activity, but also, if necessary, in protecting them."
                },
                paragraph5: {
                    ukrainian: "Усі права та зобов'язання сторін, а також перелік послуг, що надаються митним брокером компанії AS-Trans, Україна реєструється в угоді, яка обов'язково підписується на початку співпраці.",
                    american: "All rights and obligations of the parties, as well as the list of services provided by the customs broker AS-Trans, Ukraine, are fixed in the contract, which must be concluded before starting cooperation."
                }
            },
            bulgaria: {
                title: {
                    ukrainian: "БРОКЕР У БОЛГАРІЇ",
                    american: "BROKER IN BULGARIA"
                },
                paragraph1: {
                    ukrainian: "Якщо вам потрібна допомога професійного брокера в Болгарії з експортом або імпортом товарів, зверніться до компанії AS-Trans. Наші експерти знайомі з особливостями та нюансами проектування документації цієї країни та забезпечують перетин кордону та проходження митниці.",
                    american: "If you need the help of a professional broker in Bulgaria when exporting or importing goods, please contact AS-Trans. Our experts are familiar with the peculiarities and nuances of paperwork in this country and will ensure a hassle-free border crossing and customs' clearance."
                }
            },
            poland: {
                title: {
                    ukrainian: "МИТНИЙ БРОКЕР ПОЛЬЩА",
                    american: "CUSTOMS BROKER IN POLAND"
                },
                paragraph1: {
                    ukrainian: "Співпрацюючи з AS-Trans, ви отримаєте висококваліфіковану допомогу та підтримку митного брокера під час імпорту або експорту товарів в/та з Польщі. Завдяки досвіду роботи з різними групами товарів, митними режимами країн та державними органами, наші працівники знайдуть найкраще вирішення проблеми будь -якої складності.",
                    american: "Cooperating with AS-Trans, you will receive highly qualified assistance and support from a customs broker when importing or exporting products, cargo, cars to/from Poland. Thanks to the experience of working with various groups of goods, customs regimes and government agencies, our employees will find the best solution to a problem of any complexity."
                }
            },
            cost: {
                title: {
                    ukrainian: "ВАРТІСТЬ КОНСУЛЬТАЦІЙ З МИТНОГО БРОКЕРА В УКРАЇНІ",
                    american: "THE COST OF CONSULTING A CUSTOMS BROKER IN UKRAINE"
                },
                paragraph1: {
                    ukrainian: "Вартість консультацій, а також інші послуги, що надаються митним брокером в Україні, розраховують індивідуально для кожного клієнта. Протягом багатьох років ми співпрацюємо з юридичними організаціями, і ми готові запропонувати вигідні умови для співпраці як разово, так і на постійній основі.",
                    american: "The cost of consultation, as well as other services provided by a customs broker in Ukraine, is discussed individually with each client. We have been cooperating with legal entities for years, and we are ready to offer favorable conditions for cooperation both on a one-time and on an ongoing basis."
                },
                paragraph2: {
                    ukrainian: "Остаточна ціна залежатиме від переліку обов'язків брокера, зареєстрованих в договорі, і буде оголошена нашим працівником після обговорення всіх деталей роботи.",
                    american: "The final price will depend on the list of broker's duties specified in the contract, and will be announced by our employee after discussing all the details of the work."
                },
                paragraph3: {
                    ukrainian: "Варто пам'ятати, що вартість митного брокера значно нижча, ніж сума можливих штрафів та інших фінансових втрат, які можуть виникати, при виявленні помилок в документах та інших неприємних нюансах.",
                    american: "It is worth remembering that the cost of a customs broker is much lower than the amount of possible fines and financial losses that may arise when errors in documents and other unpleasant nuances are found."
                },
                paragraph4: {
                    ukrainian: "Щоб уточнити приблизну ціну сервісу брокера у вашій конкретній ситуації, зателефонуйте нам за номером, зазначеним на сайті.",
                    american: "To clarify the approximate price of a broker's service in your situation, call us at the number listed on the site."
                }
            }
        }
    },

    // Страница "Експедиція" (pages/expeditions-page.html)
    expeditions: {
        meta: {
            title: {
                ukrainian: "Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна",
                american: "Freight forwarding services Kyiv, Ukraine - cargo global, sea, air"
            },
            description: {
                ukrainian: "Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Ukraine, forwarding"
            },
            ogTitle: {
                ukrainian: "Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна",
                american: "Freight forwarding services Kyiv, Ukraine - cargo global, sea, air"
            },
            ogDescription: {
                ukrainian: "Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            },
            twitterTitle: {
                ukrainian: "Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна",
                american: "Freight forwarding services Kyiv, Ukraine - cargo global, sea, air"
            },
            twitterDescription: {
                ukrainian: "Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Експедиція",
                american: "Forwarding Services"
            }
        },
        sidebar: {
            directions: {
                ukrainian: "Напрями",
                american: "Directions"
            },
            route1: {
                ukrainian: "УКРАЇНА - ЛАТВІЯ",
                american: "UKRAINE - LATVIA"
            },
            route2: {
                ukrainian: "УКРАЇНА - ЕСТОНІЯ",
                american: "UKRAINE - ESTONIA"
            },
            route3: {
                ukrainian: "УКРАЇНА - ФІНЛЯНДІЯ",
                american: "UKRAINE - FINLAND"
            },
            route4: {
                ukrainian: "УКРАЇНА - ШВЕЦІЯ",
                american: "UKRAINE - SWEDEN"
            },
            route5: {
                ukrainian: "УКРАЇНА - НОРВЕГІЯ",
                american: "UKRAINE - NORWAY"
            },
            route6: {
                ukrainian: "ТРАНСПОРТНО-ЕКСПЕДИТОРСЬКІ ПОСЛУГИ",
                american: "INTERNATIONAL FORWARDING SERVICES"
            },
            form: {
                title: {
                    ukrainian: "Залишити заявку",
                    american: "Submit your application"
                },
                name: {
                    ukrainian: "Ваше ім'я",
                    american: "Your name"
                },
                phone: {
                    ukrainian: "Ваш номер телефону:",
                    american: "Your phone number:"
                },
                email: {
                    ukrainian: "Ваш email:",
                    american: "Your email:"
                },
                submit: {
                    ukrainian: "Відправити повідомлення",
                    american: "Send message"
                }
            },
            contacts: {
                title: {
                    ukrainian: "Контакти",
                    american: "Contacts"
                },
                location: {
                    ukrainian: "Україна, Київ",
                    american: "Ukraine, Kyiv"
                },
                street: {
                    ukrainian: "вул. Радищева, 3",
                    american: "street Radishcheva, 3"
                },
                office: {
                    ukrainian: "офіс Б-306, а/с 25",
                    american: "office B-306, a / s 25"
                }
            }
        },
        content: {
            title: {
                ukrainian: "Про надану послугу",
                american: "About the service provided"
            },
            paragraph1: {
                ukrainian: "Міжнародні експедиторські послуги на високому професійному рівні надає компанія AS-TRANS, Київ. За 20 років роботи на ринку України ми розробили систему, за якої перевезення різних вантажів вимагає від наших клієнтів мінімум зусиль, при цьому дає максимальний результат.",
                american: "International freight-forwarding services at a high professional level are provided by AS-TRANS, Kyiv. For more than 20 years of work in Ukraine we have developed a system, in which the transportation of various goods requires a minimum of effort from our customers, while giving the maximum result."
            },
            paragraph2: {
                ukrainian: "Компанія AS-TRANS, Київ, пропонує своїм клієнтам повний комплекс робіт з оформлення, супроводу та доставки різних видів вантажів.",
                american: "AS-TRANS Company, Kyiv, offers the clients a full range of services for registration, delivery and transport escort of various types of cargo."
            },
            paragraph3: {
                ukrainian: "Транспортно-експедиторські послуги, як правило, включають такі етапи:",
                american: "Freight forwarding services, as a rule, include the following steps:"
            },
            services: {
                service1: {
                    ukrainian: "Розробку оптимального маршруту з урахуванням побажань клієнта та специфіки вантажу, що перевозиться, а також підбір транспорту",
                    american: "Deciding on the best route, taking into account the client's preferences and the specifics of the transported cargo, as well as the selection of transport"
                },
                service2: {
                    ukrainian: "Оформлення необхідних супровідних документів",
                    american: "Preparation of necessary accompanying documents"
                },
                service3: {
                    ukrainian: "Страхування вантажу",
                    american: "Cargo insurance"
                },
                service4: {
                    ukrainian: "При необхідності – упаковку та маркування, а також завантаження та розвантаження товарів",
                    american: "Packaging and labeling, as well as loading and unloading of goods"
                },
                service5: {
                    ukrainian: "Контроль за збереженням вантажу та його постійне відстеження по всьому шляху прямування",
                    american: "Storage and processing of goods in a customs warehouse in Kyiv"
                }
            },
            advantages: {
                paragraph1: {
                    ukrainian: "Серед переваг нашої компанії варто відзначити оперативність реагування на запити клієнтів, точну оцінку та прогнозування розвитку ситуації для вибору найкращого рішення. Крім того, за роки роботи ми налагодили співпрацю із найбільшими міжнародними операторами.",
                    american: "Among the advantages of our company, one can figure out the prompt response to customer requests, accurate assessment and forecast of the situation development in order to select the best solution. In addition, over the years of work, we have established cooperation with the largest world operators."
                },
                paragraph2: {
                    ukrainian: "Замовивши послуги міжнародного експедитора в AS-TRANS, Київ, Ви можете бути впевнені, що доставка вантажу буде здійснена точно в строк, з дотриманням усіх необхідних правил та норм.",
                    american: "By ordering the services of an international freight forwarder in AS-TRANS, Kyiv, you can be sure that the delivery of the goods will be carried out on time, in compliance with all necessary rules and regulations."
                },
                paragraph3: {
                    ukrainian: "Щоб отримати більш детальну консультацію, розрахувати вартість експедиторських послуг або поставити запитання, що цікавлять – зателефонуйте нам за номером, вказаним на сайті.",
                    american: "To get more detailed information, calculate the cost of forwarding services or ask any questions – call us at the number listed on the site."
                }
            },
            sea: {
                title: {
                    ukrainian: "МОРСЬКІ ТРАНСПОРТНО-ЕКСПЕДИТОРСЬКІ ПОСЛУГИ",
                    american: "SEA FREIGHT FORWARDING SERVICES"
                },
                paragraph1: {
                    ukrainian: "Морські транспортно-експедиторські послуги користуються популярністю. Вантажоперевезення водним транспортом є найбезпечнішими та економічними, дають можливість транспортувати великогабаритні, сипкі товари, а також контейнери на далекі відстані. У той же час через необхідність оформляти велику кількість документів і проходити різні види контролю багато клієнтів переважно звертаються за допомогою до професіоналів.",
                    american: "Sea freight forwarding services are popular among the customers. Cargo transportation by water transport is the safest and most economical. This makes it possible to transport bulky, bulk goods, as well as containers over long distances. At the same time, due to the need to draw up a number of documents and undergo various types of control, a lot of clients prefer to turn to professionals for help."
                },
                paragraph2: {
                    ukrainian: "В AS-TRANS Ви можете замовити морські експедиторські послуги під ключ та бути впевнені, що вантаж буде доставлений до пункту призначення своєчасно та з дотриманням усіх необхідних умов та правил.",
                    american: "In AS-TRANS, you can order turnkey sea freight forwarding services. By contacting us you can be sure that the cargo will be delivered to its destination on time and in compliance with all necessary conditions and rules."
                }
            },
            air: {
                title: {
                    ukrainian: "АВІАЦІЙНІ ЕКСПЕДИТОРСЬКІ ПОСЛУГИ",
                    american: "AIR FORWARDING SERVICES"
                },
                paragraph1: {
                    ukrainian: "Авіаційні експедиторські послуги також користуються попитом на сьогоднішній день. Доставка вантажів літаком має незаперечну перевагу в порівнянні з іншими – це швидкість та зручність. У той же час авіадоставка та експедиторські послуги мають свої особливості, пов'язані як безпосередньо з транспортуванням вантажів, так і упаковкою, маркуванням, заповненням необхідної документації.",
                    american: "Aviation forwarding services are also in demand today. Delivery of goods by air has an undeniable advantage over the rest – it's speed and convenience. At the same time, air delivery and forwarding services have their own peculiarities, related both directly to the transportation of goods, and packaging, labeling, filling out the necessary documentation."
                },
                paragraph2: {
                    ukrainian: "Звертаючись до професіоналів AS-TRANS, Ви можете бути впевнені як у збереженні вантажів і дотриманні умов доставки, так і всіх дозвільних та інших документів.",
                    american: "Turning to AS-TRANS professionals, you can be sure both in the safety of goods and compliance with the terms of delivery, as well as in the availability of all permits and other documents."
                }
            },
            cost: {
                title: {
                    ukrainian: "ЦІНА ЕКСПЕДИТОРСЬКИХ ПОСЛУГ",
                    american: "THE COST OF FORWARDING SERVICES"
                },
                paragraph1: {
                    ukrainian: "Ціна експедиторських послуг може відрізнятися залежно від особливостей вантажоперевезень. Вона залежить від використаного транспорту, специфіки вантажу та багатьох інших факторів. Вартість всього комплексу робіт розраховується індивідуально кожному за клієнта.",
                    american: "The price of forwarding services can vary greatly depending on the characteristics of cargo transportation. It depends on the transport used, the specifics of the cargo and many other factors. The cost of the entire complex of works is calculated individually for each client."
                },
                paragraph2: {
                    ukrainian: "Варто зазначити, що компанія AS-TRANS має штат висококваліфікованих співробітників, власний автопарк, а також тривалий час співпрацює з найбільшими міжнародними операторами автомобільних, авіа-, залізничних та морських перевезень. Таким чином, ми можемо запропонувати замовникам з України, Європи та Азії найвигідніші ціни на якісні транспортно-експедиторські послуги.",
                    american: "It should be noted that AS-TRANS has a staff of highly qualified employees, its own fleet of vehicles, and has been cooperating for a long time with the largest international operators of road, air, rail and sea transportation. Thus, we can offer customers from Ukraine, Europe and Asia the most favorable prices for high-quality freight-forwarding services."
                },
                paragraph3: {
                    ukrainian: "Якщо Ви хочете уточнити деталі процесу, скористатися послугами експедитора або поставити уточнюючі питання – зв'яжіться з нами та отримайте компетентні та докладні відповіді!",
                    american: "If you want to clarify the details of the process, order the services of a freight forwarder or ask any questions you are interested in – contact us and get competent and detailed answers!"
                }
            }
        }
    },

    // Страница "Контакти" (pages/contact-page.html)
    contact: {
        meta: {
            title: {
                ukrainian: "Контакти AS-Trans",
                american: "Contact AS-Trans"
            },
            description: {
                ukrainian: "Контакти AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!"
            },
            keywords: {
                ukrainian: "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания",
                american: "logistics, AS-Trans, transport, transportation, services, broker, customs clearance, transport company, Ukraine, contact"
            },
            ogTitle: {
                ukrainian: "Контакти AS-Trans",
                american: "Contact AS-Trans"
            },
            ogDescription: {
                ukrainian: "Контакти AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!"
            },
            twitterTitle: {
                ukrainian: "Контакти AS-Trans",
                american: "Contact AS-Trans"
            },
            twitterDescription: {
                ukrainian: "Контакти AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!",
                american: "AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!"
            }
        },
        breadcrumb: {
            home: {
                ukrainian: "Домашня",
                american: "Home"
            },
            route: {
                ukrainian: "Контакти",
                american: "Contact"
            }
        },
        content: {
            title: {
                ukrainian: "Контакти",
                american: "Contact"
            },
            subtitle: {
                ukrainian: "Ми чекаємо, щоб и зв'язалися з нами",
                american: "We are waiting you to get in touch with us"
            },
            form: {
                title: {
                    ukrainian: "Запити",
                    american: "INQUIRY NOW"
                },
                subtitle: {
                    ukrainian: "Потрібно зробити запит?",
                    american: "Need to make an enquiry?"
                },
                name: {
                    ukrainian: "Ваше ім'я",
                    american: "Your name"
                },
                email: {
                    ukrainian: "Електронна адреса",
                    american: "Email"
                },
                phone: {
                    ukrainian: "Номер телефону",
                    american: "Phone number"
                },
                website: {
                    ukrainian: "Вебсайт",
                    american: "Website"
                },
                topic: {
                    ukrainian: "Тема",
                    american: "Topic"
                },
                message: {
                    ukrainian: "Повідомлення",
                    american: "Message"
                },
                submit: {
                    ukrainian: "Надіслати",
                    american: "Submit Message"
                }
            },
            contactInfo: {
                title: {
                    ukrainian: "ЗВ'ЯЖІТЬСЯ З НАМИ",
                    american: "GET IN TOUCH WITH US"
                },
                subtitle: {
                    ukrainian: "МИ ПОДБАЄМО ПРО ТРАНСПОРТУВАННЯ ДЛЯ ВАШОГО БІЗНЕСУ",
                    american: "WE TAKE CARE ABOUT TRANSPORTATION FOR YOUR BUSINESS"
                },
                country: {
                    ukrainian: "УКРАЇНА",
                    american: "UKRAINE"
                },
                address: {
                    ukrainian: "Київ вул. Радищева, 3 офіс Б-306, а/с 25",
                    american: "Kyiv st. Radishcheva, 3 office B-306, PO box 25"
                }
            }
        }
    }
};

