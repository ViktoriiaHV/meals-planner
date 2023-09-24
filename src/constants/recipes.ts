interface Recipe {
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
     "id": '1',
     "title": "baked eggs with spicy chorizo",
      "picture": "https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-vb698322-Baked-eggs-spicy-chorizo-spinach-crispy-onions-ricotta-1-.jpg",
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
    }
  ]