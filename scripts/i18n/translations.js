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
        title: {
            ukrainian: "ПРО КОМПАНІЮ AS-TRANS",
            american: "ABOUT THE AS-TRANS COMPANY"
        },
        // Добавлю остальные переводы для about-us при рефакторинге этой страницы
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
    }
};

