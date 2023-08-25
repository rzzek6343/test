export function getData() {
  return {
    response: [
      {
        type: "sale",
        id: 1,
        attributes: {
          tenderName: "Открытый аукцион",
          platform: 3,
          region: {
            city: "Москва",
            street: "Минская",
            house: "3a"
          }
        },
        responsible: {
          name: "Ivanov Ivan",
          jobPosition: "director"
        }
      },

      {
        type: "sale",
        id: 2,
        attributes: {
          tenderName: "Запрос предложений",
          platform: "Электронный магазин - РЖД-Медицина",
          region: {
            city: "Уфа",
            street: "Речная",
            house: "56"
          }
        },
        responsible: {
          name: "Ivanov Ivan",
          jobPosition: "Director"
        }
      },

      {
        type: "sale",
        id: 3,
        attributes: {
          tenderName: "Открытый тендер",
          platform: 'АО "Самрук-Қазына',
          region: {
            city: "Москва",
            street: "Минская",
            house: "3a"
          }
        },
        responsible: {
          name: "Ivanov Ivan",
          jobPosition: "Director"
        }
      },

      {
        type: "sale",
        id: 4,
        attributes: {
          tenderName: "Закупка малого объема",
          platform: "АИС ГЗ",
          region: {
            city: "Санкт-Петербург",
            street: "Минская",
            house: "3a"
          }
        },
        responsible: {
          name: "Ivanov Ivan",
          jobPosition: "Director"
        }
      },

      {
        type: "sale",
        id: 5,
        attributes: {
          tenderName: "Запрос цен",
          platform: "Малые закупки Курганской области",
          region: {
            city: "Курган",
            street: "Кирова",
            house: "31"
          }
        },
        responsible: {
          name: "Ivanov Ivan",
          jobPosition: "director"
        }
      }
    ]
  };
}
