export interface Recipe {
  id: string;
  title: string;
  picture: string;
  preptime: number;
  serving: number;
  ingredients: Ingredient[],
  instructions: string[]
}

interface Ingredient {
  name: string;
  amount?: string;
  units?: string
}

export const RECIPES: Recipe[] = [
    {
     "id": "baked-eggs-with–spicy–chorizo",
     "title": "baked eggs with spicy chorizo",
     "picture": "/images/baked_chorizo_eggs.jpeg",
     "preptime": 30,
      "serving": 2,
      "ingredients": [
        {
          "name": "small chorizo balls",
          "amount": "4",
          "units": ""
        },
        {
          "name": "spinach",
          "amount": "100",
          "units": "g"
        },
        {
          "name": "bird's eye chilli, roughly chopped",
          "amount": "1",
          "units": ""
        },
        {
          "name": "free range eggs",
          "amount": "3",
          "units": "g"
        },
        {
          "name": "crispy shallots",
          "amount": "5",
          "units": "g"
        },
        {
          "name": "ricotta cheese",
          "amount": "10",
          "units": "g"
        },
        {
          "name": "Vegetable Oil",
          "amount": "",
          "units": ""
        },
        {
          "name": "salt",
          "amount": "",
          "units": ""
        },
        {
          "name": "pepper",
          "amount": "",
          "units": ""
        }
      ],
      "instructions": [
        "Preheat oven to 200°C",
        "Remove the skin from the chorizo balls and cut each one in half",
        "In a small pan, add the vegetable oil, one chorizo ball and the roughly chopped bird's eye chilli",
        "Sweat gently over low heat until oil turns red and the chilli spice infuses the oil",
        "Take off the heat and leave to cool on the side",
        "Boil a pot of salted water and cook spinach for 20 seconds, then remove and place into ice water to chill",
        "Put spinach in a clean tea towel and squeeze out excess water",
        "In a small cast iron skillet, evenly spread the remaining chorizo and 30g wilted spinach",
        "Crack the eggs around the pan, without having them overlap too much",
        "Place pan in oven and cook for 2 to 3 minutes, or until the eggs appear cooked, the white is no longer translucent and the yolk is set to your preferred degree of firmness",
        "Carefully remove pan from oven, and drizzle the chilli and chorizo oil over the dish",
        "Sprinkle with crispy onions and finish by crumbling ricotta cheese over the top of the dish"
      ]
    },
    {
      "id": "green-beans-with-peanut-sauce",
      "title": "green beans with peanut sauce",
      "picture": 'https://reclaimnutritionpa.com/wp-content/uploads/2017/02/spicygreenbeans.jpg',
      "preptime": 20,
       "serving": 2,
       "ingredients": [
         {
           "name": "green beans",
           "amount": "",
           "units": ""
         },
         {
           "name": "crunchy peanut butter",
           "amount": "2",
           "units": "teaspoon"
         },
         {
           "name": "fish sauce",
           "amount": "1",
           "units": "tablespoon"
         },
         {
           "name": "soy sauce",
           "amount": "1",
           "units": "teaspoon"
         },
         {
           "name": "brown sugar",
           "amount": "",
           "units": ""
         },
         {
           "name": "white vinegar",
           "amount": "1",
           "units": "teaspoon"
         },
         {
           "name": "salt",
           "amount": "",
           "units": ""
         },
         {
           "name": "pepper",
           "amount": "",
           "units": ""
         },
         {
          "name": "garlic",
          "amount": "2",
          "units": "cloves"
        }
       ],
       "instructions": [
         "Prepare the sauce: mix peanut butter with fish sauce, soy sauce, add a splash of white vinegar and a pinch of brown sugar",
         "Boil the water, salt it and blanch green beans for 1-2 minutes",
         "Add chopped garlic to preheated frying pan with olive oil",
         "Add beans and fry for about 1-2 minutes",
         "Add the sauce. Fry for another 2-3 minutes"
       ]
     },
  ]