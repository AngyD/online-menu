import { Accordion, Card } from '.';
import { MenuItem } from '../interfaces';

interface MenuCategoryProps {
  name: string;
  dishes: MenuItem[];
}

export default function MenuCategory({ name, dishes }: MenuCategoryProps) {
  return (
    <>
      <div>
        <Accordion title={name}>
          {dishes.map((dish, index) => (
            <Card
              key={index}
              name={dish.name}
              price={dish.price}
              ingredients={dish.ingredients}
              allergens={dish.allergens}
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
